var Markdown;Markdown="object"===typeof exports&&"function"===typeof require?exports:{};
(function(){function o(g){return g}function x(){return!1}function s(){}function l(){}s.prototype={chain:function(g,l){var p=this[g];if(!p)throw Error("unknown hook "+g);this[g]=p===o?l:function(g){return l(p(g))}},set:function(g,l){if(!this[g])throw Error("unknown hook "+g);this[g]=l},addNoop:function(g){this[g]=o},addFalse:function(g){this[g]=x}};Markdown.HookCollection=s;l.prototype={set:function(g,l){this["s_"+g]=l},get:function(g){return this["s_"+g]}};Markdown.Converter=function(){function g(a){return a=
a.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(?:\n+)/gm,function(a,q,b,d,f,y){q=q.toLowerCase();C.set(q,c(b));if(f)return d;y&&E.set(q,y.replace(/"/g,"&quot;"));return""})}function o(a){a=a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,p);a=a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm,
p);a=a.replace(/\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,p);a=a.replace(/\n\n[ ]{0,3}(<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>[ \t]*(?=\n{2,}))/g,p);return a=a.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,p)}function p(a,b){var c;c=b.replace(/^\n+/,"");c=c.replace(/\n+$/g,"");return c="\n\n~K"+(I.push(c)-1)+"K\n\n"}function x(a,c){a=r(a);a=a.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,"<hr />\n");a=a.replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm,"<hr />\n");a=
a.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,"<hr />\n");a=e(a);a=F(a);a=b(a);a=o(a);return a=d(a,c)}function z(a){a=h(a);a=G(a);a=a.replace(/\\(\\)/g,w);a=a.replace(/\\([`*_{}\[\]()>#+-.!])/g,w);a=a.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,t);a=a.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,t);a=a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,D);a=a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,
D);a=a.replace(/(\[([^\[\]]+)\])()()()()()/g,D);a=f(a);a=a.replace(/~P/g,"://");a=c(a);a=a.replace(/([\W_]|^)(\*\*|__)(?=\S)([^\r]*?\S[\*_]*)\2([\W_]|$)/g,"$1<strong>$3</strong>$4");a=a.replace(/([\W_]|^)(\*|_)(?=\S)([^\r\*_]*?\S)\2([\W_]|$)/g,"$1<em>$3</em>$4");return a=a.replace(/  +\n/g," <br>\n")}function G(a){return a=a.replace(/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>)/gi,function(a){var b=a.replace(/(.)<\/?code>(?=.)/g,"$1`");return b=j(b,"!"==a.charAt(1)?
"\\`*_/":"\\`*_")})}function D(a,b,c,d,f,i,y,n){void 0==n&&(n="");a=c.replace(/:\/\//g,"~P");d=d.toLowerCase();if(""==f)if(""==d&&(d=a.toLowerCase().replace(/ ?\n/g," ")),void 0!=C.get(d))f=C.get(d),void 0!=E.get(d)&&(n=E.get(d));else if(-1<b.search(/\(\s*\)$/m))f="";else return b;f=v(f);f=j(f,"*_");b='<a href="'+f+'"';""!=n&&(n=k(n),n=j(n,"*_"),b+=' title="'+n+'"');return b+(">"+a+"</a>")}function k(a){return a.replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}function t(a,b,c,d,f,
n,y,i){a=c;d=d.toLowerCase();i||(i="");if(""==f)if(""==d&&(d=a.toLowerCase().replace(/ ?\n/g," ")),void 0!=C.get(d))f=C.get(d),void 0!=E.get(d)&&(i=E.get(d));else return b;a=j(k(a),"*_[]()");f=j(f,"*_");b='<img src="'+f+'" alt="'+a+'"';i=k(i);i=j(i,"*_");return b+(' title="'+i+'"')+" />"}function r(a){a=a.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,function(a,b){return"<h1>"+z(b)+"</h1>\n\n"});a=a.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(a,b){return"<h2>"+z(b)+"</h2>\n\n"});return a=a.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,
function(a,b,c){a=b.length;return"<h"+a+">"+z(c)+"</h"+a+">\n\n"})}function e(a){var a=a+"~0",b=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;n?a=a.replace(b,function(a,b,c){a=-1<c.search(/[*+-]/g)?"ul":"ol";b=m(b,a);b=b.replace(/\s+$/,"");return"<"+a+">"+b+"</"+a+">\n"}):(b=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,a=a.replace(b,function(a,b,c,d){a=-1<d.search(/[*+-]/g)?"ul":"ol";c=m(c,a);
return b+"<"+a+">\n"+c+"</"+a+">\n"}));return a=a.replace(/~0/,"")}function m(a,b){n++;var a=a.replace(/\n{2,}$/,"\n"),c=N[b],d=!1,a=(a+"~0").replace(RegExp("(^[ \\t]*)("+c+")[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1("+c+")[ \\t]+))","gm"),function(a,b,c,f){a=f;(b=/\n\n$/.test(a))||-1<a.search(/\n{2,}/)||d?a=x(L(a),!0):(a=e(L(a)),a=a.replace(/\n$/,""),a=z(a));d=b;return"<li>"+a+"</li>\n"}),a=a.replace(/~0/g,"");n--;return a}function F(b){b=(b+"~0").replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,
function(b,c,d){b=a(L(c));b=B(b);b=b.replace(/^\n+/g,"");b=b.replace(/\n+$/g,"");return"\n\n"+("<pre><code>"+b+"\n</code></pre>")+"\n\n"+d});return b=b.replace(/~0/,"")}function M(a){a=a.replace(/(^\n+|\n+$)/g,"");return"\n\n~K"+(I.push(a)-1)+"K\n\n"}function h(b){return b=b.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(b,c,d,f){b=f.replace(/^([ \t]*)/g,"");b=b.replace(/[ \t]*$/g,"");b=a(b);b=b.replace(/:\/\//g,"~P");return c+"<code>"+b+"</code>"})}function a(a){a=a.replace(/&/g,"&amp;");
a=a.replace(/</g,"&lt;");a=a.replace(/>/g,"&gt;");return a=j(a,"*_{}[]\\",!1)}function b(a){return a=a.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(a,b){var c;c=b.replace(/^[ \t]*>[ \t]?/gm,"~0");c=c.replace(/~0/g,"");c=c.replace(/^[ \t]+$/gm,"");c=x(c);c=c.replace(/(^|\n)/g,"$1  ");c=c.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(a,b){var c;c=b.replace(/^  /mg,"~0");return c=c.replace(/~0/g,"")});return M("<blockquote>\n"+c+"\n</blockquote>")})}function d(a,b){for(var a=a.replace(/^\n+/g,
""),a=a.replace(/\n+$/g,""),c=a.split(/\n{2,}/g),d=[],f=/~K(\d+)K/,j=c.length,y=0;y<j;y++){var i=c[y];f.test(i)?d.push(i):/\S/.test(i)&&(i=z(i),i=i.replace(/^([ \t]*)/g,"<p>"),i+="</p>",d.push(i))}if(!b){j=d.length;for(y=0;y<j;y++)for(var n=!0;n;)n=!1,d[y]=d[y].replace(/~K(\d+)K/g,function(a,b){n=!0;return I[b]})}return d.join("\n\n")}function c(a){a=a.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;");return a=a.replace(/<(?![a-z\/?\$!])/gi,"&lt;")}function f(a){a=a.replace(/(^|\s)(https?|ftp)(:\/\/[-A-Z0-9+&@#\/%?=~_|\[\]\(\)!:,\.;]*[-A-Z0-9+&@#\/%=~_|\[\]])($|\W)/gi,
"$1<$2$3>$4");return a=a.replace(/<((https?|ftp):[^'">\s]+)>/gi,function(a,b){return'<a href="'+b+'">'+u.plainLinkText(b)+"</a>"})}function i(a){return a=a.replace(/~E(\d+)E/g,function(a,b){var c=parseInt(b);return String.fromCharCode(c)})}function L(a){a=a.replace(/^(\t|[ ]{1,4})/gm,"~0");return a=a.replace(/~0/g,"")}function B(a){if(!/\t/.test(a))return a;var b=["    ","   ","  "," "],c=0,d;return a.replace(/[\n\t]/g,function(a,f){if("\n"===a)return c=f+1,a;d=(f-c)%4;c=f+1;return b[d]})}function v(a){if(!a)return"";
var b=a.length;return a.replace(O,function(c,d){return"~D"==c?"%24":":"==c&&(d==b-1||/[0-9\/]/.test(a.charAt(d+1)))?":":"%"+c.charCodeAt(0).toString(16)})}function j(a,b,c){b="(["+b.replace(/([\[\]\\])/g,"\\$1")+"])";c&&(b="\\\\"+b);return a=a.replace(RegExp(b,"g"),w)}function w(a,b){return"~E"+b.charCodeAt(0)+"E"}var u=this.hooks=new s;u.addNoop("plainLinkText");u.addNoop("preConversion");u.addNoop("postConversion");var C,E,I,n;this.makeHtml=function(a){if(C)throw Error("Recursive call to converter.makeHtml");
C=new l;E=new l;I=[];n=0;a=u.preConversion(a);a=a.replace(/~/g,"~T");a=a.replace(/\$/g,"~D");a=a.replace(/\r\n/g,"\n");a=a.replace(/\r/g,"\n");a=B("\n\n"+a+"\n\n");a=a.replace(/^[ \t]+$/mg,"");a=o(a);a=g(a);a=x(a);a=i(a);a=a.replace(/~D/g,"$$");a=a.replace(/~T/g,"~");a=u.postConversion(a);I=E=C=null;return a};var N={ol:"\\d+[.]",ul:"[*+-]"},O=/(?:["'*()[\]:]|~D)/g}})();
(function(){function o(g){return g.replace(/<[^>]*>?/gi,x)}function x(g){return g.match(J)||g.match(p)||g.match(K)?g:""}function s(g){if(""==g)return"";var l=/<\/?\w+[^>]*(\s|$|>)/g,o=g.toLowerCase().match(l),k=(o||[]).length;if(0==k)return g;for(var p,r,e,m=[],x=[],s=!1,h=0;h<k;h++)if(p=o[h].replace(/<\/?(\w+).*/,"$1"),!(m[h]||-1<"<p><img><br><li><hr>".search("<"+p+">"))){r=o[h];e=-1;if(!/^<\//.test(r))for(r=h+1;r<k;r++)if(!m[r]&&o[r]=="</"+p+">"){e=r;break}-1==e?s=x[h]=!0:m[e]=!0}if(!s)return g;
h=0;return g=g.replace(l,function(a){a=x[h]?"":a;h++;return a})}var l,g;"object"===typeof exports&&"function"===typeof require?(l=exports,g=require("./Markdown.Converter").Converter):(l=window.Markdown,g=l.Converter);l.getSanitizingConverter=function(){var l=new g;l.hooks.chain("postConversion",o);l.hooks.chain("postConversion",s);return l};var J=/^(<\/?(b|blockquote|code|del|dd|dl|dt|em|h1|h2|h3|i|kbd|li|ol|p|pre|s|sup|sub|strong|strike|ul)>|<(br|hr)\s?\/?>)$/i,p=/^(<a\shref="((https?|ftp):\/\/|\/)[-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]+"(\stitle="[^"<>]+")?\s?>|<\/a>)$/i,
K=/^(<img\ssrc="(https?:\/\/|\/)[-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]+"(\swidth="\d{1,3}")?(\sheight="\d{1,3}")?(\salt="[^"<>]*")?(\stitle="[^"<>]*")?\s?\/?>)$/i})();
(function(){var o,x,s;function l(){}function g(a){this.buttonBar=e.getElementById("wmd-button-bar"+a);this.preview=e.getElementById("wmd-preview"+a);this.input=e.getElementById("editor"+a)}function J(a,b){var d=this,c=[],f=0,i="none",e,g,v,j=function(a,b){i!=a&&(i=a,b||u());!o||"moving"!=i?g=setTimeout(w,1):v=null},w=function(a){v=new p(b,a);g=void 0};this.setCommandMode=function(){i="command";u();g=setTimeout(w,0)};this.canUndo=function(){return 1<f};this.canRedo=function(){return c[f+1]?!0:!1};
this.undo=function(){d.canUndo()&&(e?(e.restore(),e=null):(c[f]=new p(b),c[--f].restore(),a&&a()));i="none";b.input.focus();w()};this.redo=function(){d.canRedo()&&(c[++f].restore(),a&&a());i="none";b.input.focus();w()};var u=function(){var d=v||new p(b);if(!d)return!1;"moving"==i?e||(e=d):(e&&(c[f-1].text!=e.text&&(c[f++]=e),e=null),c[f++]=d,c[f+1]=null,a&&a())},h=function(a){var b=!1;if(a.ctrlKey||a.metaKey)switch(String.fromCharCode(a.charCode||a.keyCode)){case "y":d.redo();b=!0;break;case "z":a.shiftKey?
d.redo():d.undo(),b=!0}b&&(a.preventDefault&&a.preventDefault(),window.event&&(window.event.returnValue=!1))},l=function(a){!a.ctrlKey&&!a.metaKey&&(a=a.keyCode,33<=a&&40>=a||63232<=a&&63235>=a?j("moving"):8==a||46==a||127==a?j("deleting"):13==a?j("newlines"):27==a?j("escape"):(16>a||20<a)&&91!=a&&j("typing"))};(function(){k.addEvent(b.input,"keypress",function(a){(a.ctrlKey||a.metaKey)&&(89==a.keyCode||90==a.keyCode)&&a.preventDefault()});var a=function(){if((o||v&&v.text!=b.input.value)&&void 0==
g)i="paste",u(),w()};k.addEvent(b.input,"keydown",h);k.addEvent(b.input,"keydown",l);k.addEvent(b.input,"mousedown",function(){j("moving")});b.input.onpaste=a;b.input.ondrop=a})();w(!0);u()}function p(a,b){var d=this,c=a.input;this.init=function(){if(k.isVisible(c)&&(b||!(e.activeElement&&e.activeElement!==c)))if(this.setInputAreaSelectionStartEnd(),this.scrollTop=c.scrollTop,!this.text&&c.selectionStart||0===c.selectionStart)this.text=c.value};this.setInputAreaSelection=function(){if(k.isVisible(c))if(void 0!==
c.selectionStart&&!x)c.focus(),c.selectionStart=d.start,c.selectionEnd=d.end,c.scrollTop=d.scrollTop;else if(e.selection&&!(e.activeElement&&e.activeElement!==c)){c.focus();var a=c.createTextRange();a.moveStart("character",-c.value.length);a.moveEnd("character",-c.value.length);a.moveEnd("character",d.end);a.moveStart("character",d.start);a.select()}};this.setInputAreaSelectionStartEnd=function(){if(!a.ieCachedRange&&(c.selectionStart||0===c.selectionStart))d.start=c.selectionStart,d.end=c.selectionEnd;
else if(e.selection){d.text=k.fixEolChars(c.value);var b=a.ieCachedRange||e.selection.createRange(),i=k.fixEolChars(b.text),g="\u0007"+i+"\u0007";b.text=g;var B=k.fixEolChars(c.value);b.moveStart("character",-g.length);b.text=i;d.start=B.indexOf("\u0007");d.end=B.lastIndexOf("\u0007")-1;if(g=d.text.length-k.fixEolChars(c.value).length){for(b.moveStart("character",-i.length);g--;)i+="\n",d.end+=1;b.text=i}a.ieCachedRange&&(d.scrollTop=a.ieCachedScrollTop);a.ieCachedRange=null;this.setInputAreaSelection()}};
this.restore=function(){void 0!=d.text&&d.text!=c.value&&(c.value=d.text);this.setInputAreaSelection();c.scrollTop=d.scrollTop};this.getChunks=function(){var a=new l;a.before=k.fixEolChars(d.text.substring(0,d.start));a.startTag="";a.selection=k.fixEolChars(d.text.substring(d.start,d.end));a.endTag="";a.after=k.fixEolChars(d.text.substring(d.end));a.scrollTop=d.scrollTop;return a};this.setChunks=function(a){a.before+=a.startTag;a.after=a.endTag+a.after;this.start=a.before.length;this.end=a.before.length+
a.selection.length;this.text=a.before+a.selection+a.after;this.scrollTop=a.scrollTop};this.init()}function K(a,b,d){var c,f,i,g=function(){var a=0;window.innerHeight?a=window.pageYOffset:e.documentElement&&e.documentElement.scrollTop?a=e.documentElement.scrollTop:e.body&&(a=e.body.scrollTop);return a},B=function(){if(b.preview){var c=b.input.value;if(!(c&&c==i)){i=c;var d=(new Date).getTime(),c=a.makeHtml(c);f=(new Date).getTime()-d;m(c)}}},v=function(){c&&(clearTimeout(c),c=void 0);var a=0,a=f;3E3<
a&&(a=3E3);c=setTimeout(B,a)};this.refresh=function(a){a?(i="",B()):v()};this.processingTime=function(){return f};var j=!0,w=function(a){var c=b.preview,d=c.parentNode,f=c.nextSibling;d.removeChild(c);c.innerHTML=a;f?d.insertBefore(c,f):d.appendChild(c)},u=function(a){b.preview.innerHTML=a},h,l=function(a){if(h)return h(a);try{u(a),h=u}catch(b){h=w,h(a)}},m=function(a){var c=t.getTop(b.input)-g();b.preview&&(l(a),d());b.preview&&(b.preview.scrollTop=(b.preview.scrollHeight-b.preview.clientHeight)*
(b.preview.scrollHeight<=b.preview.clientHeight?1:b.preview.scrollTop/(b.preview.scrollHeight-b.preview.clientHeight)));if(j)j=!1;else{var f=t.getTop(b.input)-g();o?setTimeout(function(){window.scrollBy(0,f-c)},0):window.scrollBy(0,f-c)}};(function(a,b){k.addEvent(a,"input",b);a.onpaste=b;a.ondrop=b;k.addEvent(a,"keypress",b);k.addEvent(a,"keydown",b)})(b.input,v);B();b.preview&&(b.preview.scrollTop=0)}function z(a,b,d,c,f,i){var g,h,v,j,w,u,l,m,r,n,t,s;function q(a){H.focus();if(a.textOp){d&&d.setCommandMode();
var f=new p(b);if(!f)return;var j=f.getChunks(),i=function(){H.focus();j&&f.setChunks(j);f.restore();c.refresh()};a.textOp(j,i)||i()}a.execute&&a.execute(d)}function z(a,c){var d=a.getElementsByTagName("span")[0];c?(d.style.backgroundPosition=a.XShift+" 0px",a.onmouseover=function(){d.style.backgroundPosition=this.XShift+" -40px"},a.onmouseout=function(){d.style.backgroundPosition=this.XShift+" 0px"},o&&(a.onmousedown=function(){e.activeElement&&e.activeElement!==b.input||(b.ieCachedRange=document.selection.createRange(),
b.ieCachedScrollTop=b.input.scrollTop)}),a.isHelp||(a.onclick=function(){if(this.onmouseout)this.onmouseout();q(this);return!1})):(d.style.backgroundPosition=a.XShift+" -20px",a.onmouseover=a.onmouseout=a.onclick=function(){})}function A(a){"string"===typeof a&&(a=f[a]);return function(){a.apply(f,arguments)}}function D(){d&&(z(t,d.canUndo()),z(s,d.canRedo()))}var H=b.input;g=void 0;h=void 0;v=void 0;j=void 0;w=void 0;u=void 0;l=void 0;m=void 0;r=void 0;n=void 0;t=void 0;s=void 0;(function(){var c=
b.buttonBar,d=document.createElement("ul");d.id="wmd-button-row"+a;d.className="wmd-button-row";var d=c.appendChild(d),f=0,c=function(b,c,j,i){var e=document.createElement("li");e.className="wmd-button";e.style.left=f+"px";f+=25;var g=document.createElement("span");e.id=b+a;e.appendChild(g);e.title=c;e.XShift=j;i&&(e.textOp=i);z(e,!0);d.appendChild(e);return e},e=function(b){var c=document.createElement("li");c.className="wmd-spacer wmd-spacer"+b;c.id="wmd-spacer"+b+a;d.appendChild(c);f+=25};g=c("wmd-bold-button",
"Strong <strong> Ctrl+B","0px",A("doBold"));h=c("wmd-italic-button","Emphasis <em> Ctrl+I","-20px",A("doItalic"));e(1);v=c("wmd-link-button","Hyperlink <a> Ctrl+L","-40px",A(function(a,b){return this.doLinkOrImage(a,b,!1)}));j=c("wmd-quote-button","Blockquote <blockquote> Ctrl+Q","-60px",A("doBlockquote"));w=c("wmd-code-button","Code Sample <pre><code> Ctrl+K","-80px",A("doCode"));u=c("wmd-image-button","Image <img> Ctrl+G","-100px",A(function(a,b){return this.doLinkOrImage(a,b,!0)}));e(2);l=c("wmd-olist-button",
"Numbered List <ol> Ctrl+O","-120px",A(function(a,b){this.doList(a,b,!0)}));m=c("wmd-ulist-button","Bulleted List <ul> Ctrl+U","-140px",A(function(a,b){this.doList(a,b,!1)}));r=c("wmd-heading-button","Heading <h1>/<h2> Ctrl+H","-160px",A("doHeading"));n=c("wmd-hr-button","Horizontal Rule <hr> Ctrl+R","-180px",A("doHorizontalRule"));e(3);t=c("wmd-undo-button","Undo - Ctrl+Z","-200px",null);t.execute=function(a){a&&a.undo()};e=/win/.test(F.platform.toLowerCase())?"Redo - Ctrl+Y":"Redo - Ctrl+Shift+Z";
s=c("wmd-redo-button",e,"-220px",null);s.execute=function(a){a&&a.redo()};i&&(c=document.createElement("li"),e=document.createElement("span"),c.appendChild(e),c.className="wmd-button wmd-help-button",c.id="wmd-help-button"+a,c.XShift="-240px",c.isHelp=!0,c.style.right="0px",c.title=i.title||M,c.onclick=i.handler,z(c,!0),d.appendChild(c));D()})();var G="keydown";x&&(G="keypress");k.addEvent(H,G,function(a){if((a.ctrlKey||a.metaKey)&&!a.altKey&&!a.shiftKey){switch(String.fromCharCode(a.charCode||a.keyCode).toLowerCase()){case "b":q(g);
break;case "i":q(h);break;case "l":q(v);break;case "q":q(j);break;case "k":q(w);break;case "g":q(u);break;case "o":q(l);break;case "u":q(m);break;case "h":q(r);break;case "r":q(n);break;case "y":q(s);break;case "z":a.shiftKey?q(s):q(t);break;default:return}a.preventDefault&&a.preventDefault();window.event&&(window.event.returnValue=!1)}});k.addEvent(H,"keyup",function(a){if(a.shiftKey&&!a.ctrlKey&&!a.metaKey&&13===(a.charCode||a.keyCode))a={},a.textOp=A("doAutoindent"),q(a)});o&&k.addEvent(H,"keydown",
function(a){if(27===a.keyCode)return!1});this.setUndoRedoButtonStates=D}function G(a){this.hooks=a}function D(a){return a.replace(/^\s*(.*?)(?:\s+"(.+)")?\s*$/,function(a,d,c){d=d.replace(/\?.*$/,function(a){return a.replace(/\+/g," ")});d=decodeURIComponent(d);d=encodeURI(d).replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29");d=d.replace(/\?.*$/,function(a){return a.replace(/\+/g,"%2b")});c&&(c=c.trim?c.trim():c.replace(/^\s*/,"").replace(/\s*$/,""),c=$.trim(c).replace(/"/g,"quot;").replace(/\(/g,
"&#40;").replace(/\)/g,"&#41;").replace(/</g,"&lt;").replace(/>/g,"&gt;"));return c?d+' "'+c+'"':d})}var k={},t={},r={},e=window.document,m=window.RegExp,F=window.navigator;o=/msie/.test(F.userAgent.toLowerCase());s=/msie 6/.test(F.userAgent.toLowerCase())||/msie 5/.test(F.userAgent.toLowerCase());x=/opera/.test(F.userAgent.toLowerCase());var M="Markdown Editing Help";Markdown.Editor=function(a,b,d){var b=b||"",c=this.hooks=new Markdown.HookCollection;c.addNoop("onPreviewRefresh");c.addNoop("postBlockquoteCreation");
c.addFalse("insertImageDialog");this.getConverter=function(){return a};var f=this,i;this.run=function(){if(!i){i=new g(b);var h=new G(c),k=new K(a,i,function(){c.onPreviewRefresh()}),v,j;/\?noundo/.test(e.location.href)||(v=new J(function(){k.refresh();j&&j.setUndoRedoButtonStates()},i));j=new z(b,i,v,k,h,d);j.setUndoRedoButtonStates();(f.refreshPreview=function(){k.refresh(!0)})()}}};l.prototype.findTags=function(a,b){var d=this,c;a&&(c=k.extendRegExp(a,"","$"),this.before=this.before.replace(c,
function(a){d.startTag+=a;return""}),c=k.extendRegExp(a,"^",""),this.selection=this.selection.replace(c,function(a){d.startTag+=a;return""}));b&&(c=k.extendRegExp(b,"","$"),this.selection=this.selection.replace(c,function(a){d.endTag=a+d.endTag;return""}),c=k.extendRegExp(b,"^",""),this.after=this.after.replace(c,function(a){d.endTag=a+d.endTag;return""}))};l.prototype.trimWhitespace=function(a){var b,d=this;a?a=b="":(a=function(a){d.before+=a;return""},b=function(a){d.after=a+d.after;return""});
this.selection=this.selection.replace(/^(\s*)/,a).replace(/(\s*)$/,b)};l.prototype.skipLines=function(a,b,d){void 0===a&&(a=1);void 0===b&&(b=1);a++;b++;var c,f;navigator.userAgent.match(/Chrome/)&&"X".match(/()./);this.selection=this.selection.replace(/(^\n*)/,"");this.startTag+=m.$1;this.selection=this.selection.replace(/(\n*$)/,"");this.endTag+=m.$1;this.startTag=this.startTag.replace(/(^\n*)/,"");this.before+=m.$1;this.endTag=this.endTag.replace(/(\n*$)/,"");this.after+=m.$1;if(this.before){for(c=
f="";a--;)c+="\\n?",f+="\n";d&&(c="\\n*");this.before=this.before.replace(new m(c+"$",""),f)}if(this.after){for(c=f="";b--;)c+="\\n?",f+="\n";d&&(c="\\n*");this.after=this.after.replace(new m(c,""),f)}};k.isVisible=function(a){if(window.getComputedStyle)return"none"!==window.getComputedStyle(a,null).getPropertyValue("display");if(a.currentStyle)return"none"!==a.currentStyle.display};k.addEvent=function(a,b,d){a.attachEvent?a.attachEvent("on"+b,d):a.addEventListener(b,d,!1)};k.removeEvent=function(a,
b,d){a.detachEvent?a.detachEvent("on"+b,d):a.removeEventListener(b,d,!1)};k.fixEolChars=function(a){a=a.replace(/\r\n/g,"\n");return a=a.replace(/\r/g,"\n")};k.extendRegExp=function(a,b,d){if(null===b||void 0===b)b="";if(null===d||void 0===d)d="";var a=a.toString(),c,a=a.replace(/\/([gim]*)$/,function(a,b){c=b;return""}),a=a.replace(/(^\/|\/$)/g,"");return new m(b+a+d,c)};t.getTop=function(a,b){var d=a.offsetTop;if(!b)for(;a=a.offsetParent;)d+=a.offsetTop;return d};t.getHeight=function(a){return a.offsetHeight||
a.scrollHeight};t.getWidth=function(a){return a.offsetWidth||a.scrollWidth};t.getPageSize=function(){var a,b,d,c;self.innerHeight&&self.scrollMaxY?(a=e.body.scrollWidth,b=self.innerHeight+self.scrollMaxY):e.body.scrollHeight>e.body.offsetHeight?(a=e.body.scrollWidth,b=e.body.scrollHeight):(a=e.body.offsetWidth,b=e.body.offsetHeight);self.innerHeight?(d=self.innerWidth,c=self.innerHeight):e.documentElement&&e.documentElement.clientHeight?(d=e.documentElement.clientWidth,c=e.documentElement.clientHeight):
e.body&&(d=e.body.clientWidth,c=e.body.clientHeight);a=Math.max(a,d);b=Math.max(b,c);return[a,b,d,c]};r.createBackground=function(){var a=e.createElement("div"),b=a.style;a.className="wmd-prompt-background";b.position="absolute";b.top="0";b.zIndex="1000";o?b.filter="alpha(opacity=50)":b.opacity="0.5";var d=t.getPageSize();b.height=d[1]+"px";o?(b.left=e.documentElement.scrollLeft,b.width=e.documentElement.clientWidth):(b.left="0",b.width="100%");e.body.appendChild(a);return a};r.prompt=function(a,
b,d){var c,f;void 0===b&&(b="");var i=function(a){27===(a.charCode||a.keyCode)&&g(!0)},g=function(a){k.removeEvent(e.body,"keydown",i);var b=f.value;a?b=null:(b=b.replace(/^http:\/\/(https?|ftp):\/\//,"$1://"),/^(?:https?|ftp):\/\//.test(b)||(b="http://"+b));c.parentNode.removeChild(c);d(b);return!1},h=function(){c=e.createElement("div");c.className="wmd-prompt-dialog";c.style.padding="10px;";c.style.position="fixed";c.style.width="400px";c.style.zIndex="1001";var d=e.createElement("div");d.innerHTML=
a;d.style.padding="5px";c.appendChild(d);var d=e.createElement("form"),j=d.style;d.onsubmit=function(){return g(!1)};j.padding="0";j.margin="0";j.cssFloat="left";j.width="100%";j.textAlign="center";j.position="relative";c.appendChild(d);f=e.createElement("input");f.type="text";f.value=b;j=f.style;j.display="block";j.width="80%";j.marginLeft=j.marginRight="auto";d.appendChild(f);var h=e.createElement("input");h.type="button";h.onclick=function(){return g(!1)};h.value="OK";j=h.style;j.margin="10px";
j.display="inline";j.width="7em";var l=e.createElement("input");l.type="button";l.onclick=function(){return g(!0)};l.value="Cancel";j=l.style;j.margin="10px";j.display="inline";j.width="7em";d.appendChild(h);d.appendChild(l);k.addEvent(e.body,"keydown",i);c.style.top="50%";c.style.left="50%";c.style.display="block";s&&(c.style.position="absolute",c.style.top=e.documentElement.scrollTop+200+"px",c.style.left="50%");e.body.appendChild(c);c.style.marginTop=-(t.getHeight(c)/2)+"px";c.style.marginLeft=
-(t.getWidth(c)/2)+"px"};setTimeout(function(){h();var a=b.length;if(void 0!==f.selectionStart)f.selectionStart=0,f.selectionEnd=a;else if(f.createTextRange){var c=f.createTextRange();c.collapse(!1);c.moveStart("character",-a);c.moveEnd("character",a);c.select()}f.focus()},0)};var h=G.prototype;h.prefixes="(?:\\s{4,}|\\s*>|\\s*-\\s+|\\s*\\d+\\.|=|\\+|-|_|\\*|#|\\s*\\[[^\n]]+\\]:)";h.unwrap=function(a){var b=new m("([^\\n])\\n(?!(\\n|"+this.prefixes+"))","g");a.selection=a.selection.replace(b,"$1 $2")};
h.wrap=function(a,b){this.unwrap(a);var d=new m("(.{1,"+b+"})( +|$\\n?)","gm"),c=this;a.selection=a.selection.replace(d,function(a,b){return(new m("^"+c.prefixes,"")).test(a)?a:b+"\n"});a.selection=a.selection.replace(/\s+$/,"")};h.doBold=function(a,b){return this.doBorI(a,b,2,"strong text")};h.doItalic=function(a,b){return this.doBorI(a,b,1,"emphasized text")};h.doBorI=function(a,b,d,c){a.trimWhitespace();a.selection=a.selection.replace(/\n{2,}/g,"\n");var f=/(\**$)/.exec(a.before)[0],b=/(^\**)/.exec(a.after)[0],
f=Math.min(f.length,b.length);f>=d&&(2!=f||1!=d)?(a.before=a.before.replace(m("[*]{"+d+"}$",""),""),a.after=a.after.replace(m("^[*]{"+d+"}",""),"")):!a.selection&&b?(a.after=a.after.replace(/^([*_]*)/,""),a.before=a.before.replace(/(\s?)$/,""),a.before=a.before+b+m.$1):(!a.selection&&!b&&(a.selection=c),d=1>=d?"*":"**",a.before+=d,a.after=d+a.after)};h.stripLinkDefs=function(a,b){return a=a.replace(/^[ ]{0,3}\[(\d+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|$)/gm,
function(a,c,f,e,g){b[c]=a.replace(/\s*$/,"");return e?(b[c]=a.replace(/["(](.+?)[")]$/,""),e+g):""})};h.addLinkDef=function(a,b){var d=0,c={};a.before=this.stripLinkDefs(a.before,c);a.selection=this.stripLinkDefs(a.selection,c);a.after=this.stripLinkDefs(a.after,c);var f="",e=/(\[)((?:\[[^\]]*\]|[^\[\]])*)(\][ ]?(?:\n[ ]*)?\[)(\d+)(\])/g,g=function(a){d++;a=a.replace(/^[ ]{0,3}\[(\d+)\]:/,"  ["+d+"]:");f+="\n"+a},h=function(a,b,f,k,l,m){f=f.replace(e,h);return c[l]?(g(c[l]),b+f+k+d+m):a};a.before=
a.before.replace(e,h);b?g(b):a.selection=a.selection.replace(e,h);var k=d;a.after=a.after.replace(e,h);a.after&&(a.after=a.after.replace(/\n*$/,""));a.after||(a.selection=a.selection.replace(/\n*$/,""));a.after+="\n\n"+f;return k};h.doLinkOrImage=function(a,b,d){a.trimWhitespace();a.findTags(/\s*!?\[/,/\][ ]?(?:\n[ ]*)?(\[.*?\])?/);var c;if(1<a.endTag.length&&0<a.startTag.length)a.startTag=a.startTag.replace(/!?\[/,""),a.endTag="",this.addLinkDef(a,null);else if(a.selection=a.startTag+a.selection+
a.endTag,a.startTag=a.endTag="",/\n\n/.test(a.selection))this.addLinkDef(a,null);else{var f=this,e=function(e){c.parentNode.removeChild(c);null!==e&&(a.selection=(" "+a.selection).replace(/([^\\](?:\\\\)*)(?=[[\]])/g,"$1\\").substr(1),e=" [999]: "+D(e),e=f.addLinkDef(a,e),a.startTag=d?"![":"[",a.endTag="]["+e+"]",a.selection||(a.selection=d?"enter image description here":"enter link description here"));b()};c=r.createBackground();d?this.hooks.insertImageDialog(e)||r.prompt("<p><b>Insert Image</b></p><p>http://example.com/images/diagram.jpg \"optional title\"<br><br>Need <a href='http://www.google.com/search?q=free+image+hosting' target='_blank'>free image hosting?</a></p>",
"http://",e):r.prompt('<p><b>Insert Hyperlink</b></p><p>http://example.com/ "optional title"</p>',"http://",e);return!0}};h.doAutoindent=function(a){a.before=a.before.replace(/(\n|^)[ ]{0,3}([*+-]|\d+[.])[ \t]*\n$/,"\n\n");a.before=a.before.replace(/(\n|^)[ ]{0,3}>[ \t]*\n$/,"\n\n");a.before=a.before.replace(/(\n|^)[ \t]+\n$/,"\n\n");/(\n|^)[ ]{0,3}([*+-]|\d+[.])[ \t]+.*\n$/.test(a.before)&&this.doList&&this.doList(a);/(\n|^)[ ]{0,3}>[ \t]+.*\n$/.test(a.before)&&this.doBlockquote&&this.doBlockquote(a);
/(\n|^)(\t|[ ]{4,}).*\n$/.test(a.before)&&this.doCode&&this.doCode(a)};h.doBlockquote=function(a){a.selection=a.selection.replace(/^(\n*)([^\r]+?)(\n*)$/,function(b,c,d,e){a.before+=c;a.after=e+a.after;return d});a.before=a.before.replace(/(>[ \t]*)$/,function(b,c){a.selection=c+a.selection;return""});a.selection=a.selection.replace(/^(\s|>)+$/,"");a.selection=a.selection||"Blockquote";var b="",d="",c;if(a.before){for(var f=a.before.replace(/\n$/,"").split("\n"),e=!1,g=0;g<f.length;g++){var h=!1;
c=f[g];e=e&&0<c.length;/^>/.test(c)?(h=!0,!e&&1<c.length&&(e=!0)):h=/^[ \t]*$/.test(c)?!0:e;h?b+=c+"\n":(d+=b+c,b="\n")}/(^|\n)>/.test(b)||(d+=b,b="")}a.startTag=b;a.before=d;a.after&&(a.after=a.after.replace(/^\n?/,"\n"));a.after=a.after.replace(/^(((\n|^)(\n[ \t]*)*>(.+\n)*.*)+(\n[ \t]*)*)/,function(b){a.endTag=b;return""});b=function(b){var c=b?"> ":"";a.startTag&&(a.startTag=a.startTag.replace(/\n((>|\s)*)\n$/,function(a,b){return"\n"+b.replace(/^[ ]{0,3}>?[ \t]*$/gm,c)+"\n"}));a.endTag&&(a.endTag=
a.endTag.replace(/^\n((>|\s)*)\n/,function(a,b){return"\n"+b.replace(/^[ ]{0,3}>?[ \t]*$/gm,c)+"\n"}))};/^(?![ ]{0,3}>)/m.test(a.selection)?(this.wrap(a,70),a.selection=a.selection.replace(/^/gm,"> "),b(!0),a.skipLines()):(a.selection=a.selection.replace(/^[ ]{0,3}> ?/gm,""),this.unwrap(a),b(!1),!/^(\n|^)[ ]{0,3}>/.test(a.selection)&&a.startTag&&(a.startTag=a.startTag.replace(/\n{0,2}$/,"\n\n")),!/(\n|^)[ ]{0,3}>.*$/.test(a.selection)&&a.endTag&&(a.endTag=a.endTag.replace(/^\n{0,2}/,"\n\n")));a.selection=
this.hooks.postBlockquoteCreation(a.selection);/\n/.test(a.selection)||(a.selection=a.selection.replace(/^(> *)/,function(b,c){a.startTag+=c;return""}))};h.doCode=function(a){var b=/\S[ ]*$/.test(a.before);if(!/^[ ]*\S/.test(a.after)&&!b||/\n/.test(a.selection)){a.before=a.before.replace(/[ ]{4}$/,function(b){a.selection=b+a.selection;return""});var d=b=1;/\n(\t|[ ]{4,}).*\n$/.test(a.before)&&(b=0);/^\n(\t|[ ]{4,})/.test(a.after)&&(d=0);a.skipLines(b,d);a.selection?a.selection=/^[ ]{0,3}\S/m.test(a.selection)?
a.selection.replace(/^/gm,"    "):a.selection.replace(/^[ ]{4}/gm,""):(a.startTag="    ",a.selection="enter code here")}else a.trimWhitespace(),a.findTags(/`/,/`/),!a.startTag&&!a.endTag?(a.startTag=a.endTag="`",a.selection||(a.selection="enter code here")):a.endTag&&!a.startTag?(a.before+=a.endTag,a.endTag=""):a.startTag=a.endTag=""};h.doList=function(a,b,d){var b=/^\n*(([ ]{0,3}([*+-]|\d+[.])[ \t]+.*)(\n.+|\n{2,}([*+-].*|\d+[.])[ \t]+.*|\n{2,}[ \t]+\S.*)*)\n*/,c="-",e=1,g=function(){var a;d?(a=
" "+e+". ",e++):a=" "+c+" ";return a},h=function(a){void 0===d&&(d=/^\s*\d/.test(a));return a=a.replace(/^[ ]{0,3}([*+-]|\d+[.])\s/gm,function(){return g()})};a.findTags(/(\n|^)*[ ]{0,3}([*+-]|\d+[.])\s+/,null);a.before&&!/\n$/.test(a.before)&&!/^\n/.test(a.startTag)&&(a.before+=a.startTag,a.startTag="");if(a.startTag){var k=/\d+[.]/.test(a.startTag);a.startTag="";a.selection=a.selection.replace(/\n[ ]{4}/g,"\n");this.unwrap(a);a.skipLines();k&&(a.after=a.after.replace(b,h));if(d==k)return}var l=
1;a.before=a.before.replace(/(\n|^)(([ ]{0,3}([*+-]|\d+[.])[ \t]+.*)(\n.+|\n{2,}([*+-].*|\d+[.])[ \t]+.*|\n{2,}[ \t]+\S.*)*)\n*$/,function(a){/^\s*([*+-])/.test(a)&&(c=m.$1);l=/[^\n]\n\n[^\n]/.test(a)?1:0;return h(a)});a.selection||(a.selection="List item");var k=g(),j=1;a.after=a.after.replace(b,function(a){j=/[^\n]\n\n[^\n]/.test(a)?1:0;return h(a)});a.trimWhitespace(!0);a.skipLines(l,j,!0);a.startTag=k;b=k.replace(/./g," ");this.wrap(a,72-b.length);a.selection=a.selection.replace(/\n/g,"\n"+b)};
h.doHeading=function(a){a.selection=a.selection.replace(/\s+/g," ");a.selection=a.selection.replace(/(^\s+|\s+$)/g,"");if(a.selection){var b=0;a.findTags(/#+[ ]*/,/[ ]*#+/);/#+/.test(a.startTag)&&(b=m.lastMatch.length);a.startTag=a.endTag="";a.findTags(null,/\s?(-+|=+)/);/=+/.test(a.endTag)&&(b=1);/-+/.test(a.endTag)&&(b=2);a.startTag=a.endTag="";a.skipLines(1,1);b=0==b?2:b-1;if(0<b){var b=2<=b?"-":"=",d=a.selection.length;72<d&&(d=72);for(a.endTag="\n";d--;)a.endTag+=b}}else a.startTag="## ",a.selection=
"Heading",a.endTag=" ##"};h.doHorizontalRule=function(a){a.startTag="----------\n";a.selection="";a.skipLines(2,1,!0)}})();
//@ sourceMappingURL=Markdown-combo.js.map