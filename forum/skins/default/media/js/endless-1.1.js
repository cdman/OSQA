(function(a){a(document).ready(function(){a("a.endless_more").live("click",function(){var b=a(this).closest(".endless_container"),c=b.find(".endless_loading");a(this).hide();c.show();c="querystring_key="+a(this).attr("rel").split(" ")[0];a.get(a(this).attr("href"),c,function(a){b.before(a);b.remove()});return!1});a("a.endless_page_link").live("click",function(){var b=a(this).closest(".endless_page_template");if(!b.hasClass("endless_page_skip")){var c="querystring_key="+a(this).attr("rel").split(" ")[0];
b.load(a(this).attr("href"),c);return!1}})})})(jQuery);
//@ sourceMappingURL=js/endless-1.1.js.map