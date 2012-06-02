import os
from itertools import groupby

from django.http import HttpResponseRedirect, HttpResponse
from django.views.static import serve
from django.views.decorators.cache import cache_page
from django.utils.translation import ugettext as _
from django.utils.safestring import mark_safe

from forum import settings
from forum.views.decorators import login_required
from forum.views.render import render_response
from forum.forms import FeedbackForm
from forum.modules import decorate
from forum.forms import get_next_url
from forum.models import Badge, Award, User, Page
from forum.badges.base import BadgesMeta
from forum.http_responses import HttpResponseNotFound, HttpResponseIntServerError
from forum.utils.mail import send_template_email
from forum.templatetags.extra_filters import or_preview

import decorators
import logging, traceback

def favicon(request):
    return HttpResponseRedirect(str(settings.APP_FAVICON))

def custom_css(request):
    return HttpResponse(or_preview(settings.CUSTOM_CSS, request), mimetype="text/css")

def redirect_or_static(request, target, title, content):
    target = target.strip()
    if target:
        return HttpResponseRedirect(str(target))
    return static(request, title, content)

def static(request, title, content):
    return render_response('static.html', {'content' : content, 'title': title},
                              request)

def media(request, skin, path):
    response = serve(request, "%s/media/%s" % (skin, path),
                 document_root=os.path.join(os.path.dirname(os.path.dirname(__file__)), 'skins').replace('\\', '/'))
    content_type = response['Content-Type']
    if ('charset=' not in content_type):
        if (content_type.startswith('text') or content_type=='application/x-javascript'):
            content_type += '; charset=utf-8'
            response['Content-Type'] = content_type
    return response


def markdown_help(request):
    return render_response('markdown_help.html', request)

@cache_page(60 * 60 * 24 * 30) #30 days
def opensearch(request):
    return render_response('opensearch.html', {'settings' : settings}, request)


def feedback(request):
    if request.method == "POST":
        form = FeedbackForm(request.user, data=request.POST)
        if form.is_valid():
            context = {
                 'user': request.user,
                 'email': request.user.is_authenticated() and request.user.email or form.cleaned_data.get('email', None),
                 'message': form.cleaned_data['message'],
                 'name': request.user.is_authenticated() and request.user.username or form.cleaned_data.get('name', None),
                 'ip': request.META['REMOTE_ADDR'],
            }

            recipients = User.objects.filter(is_superuser=True)
            send_template_email(recipients, "notifications/feedback.html", context)

            msg = _('Thanks for the feedback!')
            request.user.message_set.create(message=msg)
            return HttpResponseRedirect(get_next_url(request))
    else:
        form = FeedbackForm(request.user, initial={'next':get_next_url(request)})

    return render_response('feedback.html', {'form': form}, request)

feedback.CANCEL_MESSAGE=_('We look forward to hearing your feedback! Please, give it next time :)')

def privacy(request):
    return render_response('privacy.html', request)

@decorate.withfn(login_required)
def logout(request):
    return render_response('logout.html', {
    'next' : get_next_url(request),
    }, request)

@decorators.render('badges.html', 'badges', _('badges'), weight=300)
def badges(request):
    badges = sorted([Badge.objects.get(id=id) for id in BadgesMeta.by_id.keys()], lambda b1, b2: cmp(b1.name, b2.name))

    if request.user.is_authenticated():
        my_badges = Award.objects.filter(user=request.user).values_list('badge_id', flat=True).distinct()
    else:
        my_badges = []

    return {
        'badges' : badges,
        'mybadges' : my_badges,
    }

def badge(request, id, slug):
    badge = Badge.objects.get(id=id)
    awards = list(Award.objects.filter(badge=badge).order_by('user', 'awarded_at'))
    award_count = len(awards)

    awards = sorted([dict(count=len(list(g)), user=k) for k, g in groupby(awards, lambda a: a.user)],
                    lambda c1, c2: c2['count'] - c1['count'])

    return render_response('badge.html', {
    'award_count': award_count,
    'awards' : awards,
    'badge' : badge,
    }, request)

def page(request):
    path = request.path[1:]

    if path in settings.STATIC_PAGE_REGISTRY:
        try:
            page = Page.objects.get(id=settings.STATIC_PAGE_REGISTRY[path])

            if (not page.published) and (not request.user.is_superuser):
                return HttpResponseNotFound(request)
        except:
            return HttpResponseNotFound(request)
    else:
        return HttpResponseNotFound(request)

    template = page.extra.get('template', 'default')
    sidebar = page.extra.get('sidebar', '')

    if template == 'default':
        base = 'base_content.html'
    elif template == 'sidebar':
        base = 'base.html'

        sidebar_render = page.extra.get('render', 'markdown')

        if sidebar_render == 'markdown':
            sidebar = page._as_markdown(sidebar)
        elif sidebar_render == 'html':
            sidebar = mark_safe(sidebar)

    else:
        return HttpResponse(page.body, mimetype=page.extra.get('mimetype', 'text/html'))

    render = page.extra.get('render', 'markdown')

    if render == 'markdown':
        body = page.as_markdown()
    elif render == 'html':
        body = mark_safe(page.body)
    else:
        body = page.body

    return render_response('page.html', {
    'page' : page,
    'body' : body,
    'sidebar': sidebar,
    'base': base,
    }, request)


def error_handler(request):

    stacktrace = "".join(["\t\t%s\n" % l for l in traceback.format_exc().split("\n")])

    try:
        log_msg = """
        error executing request:
        PATH: %(path)s
        USER: %(user)s
        METHOD: %(method)s
        POST PARAMETERS:
        %(post)s
        GET PARAMETERS:
        %(get)s
        HTTP HEADERS:
        %(headers)s
        COOKIES:
        %(cookies)s
        EXCEPTION INFO:
        %(stacktrace)s
        """ % {
            'path': request.path,
            'user': request.user.is_authenticated() and ("%s (%s)" % (request.user.username, request.user.id)) or "<anonymous>",
            'method': request.method,
            'post': request.POST and "".join(["\t\t%s: %s\n" % (k, v) for k, v in request.POST.items()]) or "None",
            'get': request.GET and "".join(["\t\t%s: %s\n" % (k, v) for k, v in request.GET.items()]) or "None",
            'cookies': request.COOKIES and "".join(["\t\t%s: %s\n" % (k, v) for k, v in request.COOKIES.items()]) or "None",
            'headers': request.META and "".join(["\t\t%s: %s\n" % (k, v) for k, v in request.META.items()]) or "None",
            'stacktrace': stacktrace
        }
    except:
        log_msg = "error executing request:\n%s" % stacktrace


    logging.error(log_msg)
    return HttpResponseIntServerError(request)
