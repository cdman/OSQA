(function(){var v,D,x;function t(){}function E(a){this.buttonBar=e.getElementById("wmd-button-bar"+a);this.preview=e.getElementById("wmd-preview"+a);this.input=e.getElementById("editor"+a)}function F(a,c){var d=this,b=[],f=0,g="none",i,e,o,h=function(a,c){g!=a&&(g=a,c||r());!v||"moving"!=g?e=setTimeout(n,1):o=null},n=function(a){o=new C(c,a);e=void 0};this.setCommandMode=function(){g="command";r();e=setTimeout(n,0)};this.canUndo=function(){return 1<f};this.canRedo=function(){return b[f+1]?!0:!1};
this.undo=function(){d.canUndo()&&(i?(i.restore(),i=null):(b[f]=new C(c),b[--f].restore(),a&&a()));g="none";c.input.focus();n()};this.redo=function(){d.canRedo()&&(b[++f].restore(),a&&a());g="none";c.input.focus();n()};var r=function(){var d=o||new C(c);if(!d)return!1;"moving"==g?i||(i=d):(i&&(b[f-1].text!=i.text&&(b[f++]=i),i=null),b[f++]=d,b[f+1]=null,a&&a())},l=function(a){var c=!1;if(a.ctrlKey||a.metaKey)switch(String.fromCharCode(a.charCode||a.keyCode)){case "y":d.redo();c=!0;break;case "z":a.shiftKey?
d.redo():d.undo(),c=!0}c&&(a.preventDefault&&a.preventDefault(),window.event&&(window.event.returnValue=!1))},m=function(a){!a.ctrlKey&&!a.metaKey&&(a=a.keyCode,33<=a&&40>=a||63232<=a&&63235>=a?h("moving"):8==a||46==a||127==a?h("deleting"):13==a?h("newlines"):27==a?h("escape"):(16>a||20<a)&&91!=a&&h("typing"))};(function(){k.addEvent(c.input,"keypress",function(a){(a.ctrlKey||a.metaKey)&&(89==a.keyCode||90==a.keyCode)&&a.preventDefault()});var a=function(){if((v||o&&o.text!=c.input.value)&&void 0==
e)g="paste",r(),n()};k.addEvent(c.input,"keydown",l);k.addEvent(c.input,"keydown",m);k.addEvent(c.input,"mousedown",function(){h("moving")});c.input.onpaste=a;c.input.ondrop=a})();n(!0);r()}function C(a,c){var d=this,b=a.input;this.init=function(){if(k.isVisible(b)&&(c||!(e.activeElement&&e.activeElement!==b)))if(this.setInputAreaSelectionStartEnd(),this.scrollTop=b.scrollTop,!this.text&&b.selectionStart||0===b.selectionStart)this.text=b.value};this.setInputAreaSelection=function(){if(k.isVisible(b))if(void 0!==
b.selectionStart&&!D)b.focus(),b.selectionStart=d.start,b.selectionEnd=d.end,b.scrollTop=d.scrollTop;else if(e.selection&&!(e.activeElement&&e.activeElement!==b)){b.focus();var a=b.createTextRange();a.moveStart("character",-b.value.length);a.moveEnd("character",-b.value.length);a.moveEnd("character",d.end);a.moveStart("character",d.start);a.select()}};this.setInputAreaSelectionStartEnd=function(){if(!a.ieCachedRange&&(b.selectionStart||0===b.selectionStart))d.start=b.selectionStart,d.end=b.selectionEnd;
else if(e.selection){d.text=k.fixEolChars(b.value);var c=a.ieCachedRange||e.selection.createRange(),g=k.fixEolChars(c.text),i="\u0007"+g+"\u0007";c.text=i;var j=k.fixEolChars(b.value);c.moveStart("character",-i.length);c.text=g;d.start=j.indexOf("\u0007");d.end=j.lastIndexOf("\u0007")-1;if(i=d.text.length-k.fixEolChars(b.value).length){for(c.moveStart("character",-g.length);i--;)g+="\n",d.end+=1;c.text=g}a.ieCachedRange&&(d.scrollTop=a.ieCachedScrollTop);a.ieCachedRange=null;this.setInputAreaSelection()}};
this.restore=function(){void 0!=d.text&&d.text!=b.value&&(b.value=d.text);this.setInputAreaSelection();b.scrollTop=d.scrollTop};this.getChunks=function(){var a=new t;a.before=k.fixEolChars(d.text.substring(0,d.start));a.startTag="";a.selection=k.fixEolChars(d.text.substring(d.start,d.end));a.endTag="";a.after=k.fixEolChars(d.text.substring(d.end));a.scrollTop=d.scrollTop;return a};this.setChunks=function(a){a.before+=a.startTag;a.after=a.endTag+a.after;this.start=a.before.length;this.end=a.before.length+
a.selection.length;this.text=a.before+a.selection+a.after;this.scrollTop=a.scrollTop};this.init()}function H(a,c,d){var b,f,g,i=function(){var a=0;window.innerHeight?a=window.pageYOffset:e.documentElement&&e.documentElement.scrollTop?a=e.documentElement.scrollTop:e.body&&(a=e.body.scrollTop);return a},j=function(){if(c.preview){var b=c.input.value;if(!(b&&b==g)){g=b;var d=(new Date).getTime(),b=a.makeHtml(b);f=(new Date).getTime()-d;G(b)}}},o=function(){b&&(clearTimeout(b),b=void 0);var a=0,a=f;3E3<
a&&(a=3E3);b=setTimeout(j,a)};this.refresh=function(a){a?(g="",j()):o()};this.processingTime=function(){return f};var h=!0,n=function(a){var b=c.preview,d=b.parentNode,f=b.nextSibling;d.removeChild(b);b.innerHTML=a;f?d.insertBefore(b,f):d.appendChild(b)},r=function(a){c.preview.innerHTML=a},l,m=function(a){if(l)return l(a);try{r(a),l=r}catch(c){l=n,l(a)}},G=function(a){var b=q.getTop(c.input)-i();c.preview&&(m(a),d());c.preview&&(c.preview.scrollTop=(c.preview.scrollHeight-c.preview.clientHeight)*
(c.preview.scrollHeight<=c.preview.clientHeight?1:c.preview.scrollTop/(c.preview.scrollHeight-c.preview.clientHeight)));if(h)h=!1;else{var f=q.getTop(c.input)-i();v?setTimeout(function(){window.scrollBy(0,f-b)},0):window.scrollBy(0,f-b)}};(function(a,c){k.addEvent(a,"input",c);a.onpaste=c;a.ondrop=c;k.addEvent(a,"keypress",c);k.addEvent(a,"keydown",c)})(c.input,o);j();c.preview&&(c.preview.scrollTop=0)}function I(a,c,d,b,f,g){var i,j,o,h,n,r,l,m,q,u,y,w;function p(a){z.focus();if(a.textOp){d&&d.setCommandMode();
var f=new C(c);if(!f)return;var h=f.getChunks(),g=function(){z.focus();h&&f.setChunks(h);f.restore();b.refresh()};a.textOp(h,g)||g()}a.execute&&a.execute(d)}function t(a,b){var d=a.getElementsByTagName("span")[0];b?(d.style.backgroundPosition=a.XShift+" 0px",a.onmouseover=function(){d.style.backgroundPosition=this.XShift+" -40px"},a.onmouseout=function(){d.style.backgroundPosition=this.XShift+" 0px"},v&&(a.onmousedown=function(){e.activeElement&&e.activeElement!==c.input||(c.ieCachedRange=document.selection.createRange(),
c.ieCachedScrollTop=c.input.scrollTop)}),a.isHelp||(a.onclick=function(){if(this.onmouseout)this.onmouseout();p(this);return!1})):(d.style.backgroundPosition=a.XShift+" -20px",a.onmouseover=a.onmouseout=a.onclick=function(){})}function s(a){"string"===typeof a&&(a=f[a]);return function(){a.apply(f,arguments)}}function x(){d&&(t(y,d.canUndo()),t(w,d.canRedo()))}var z=c.input;i=void 0;j=void 0;o=void 0;h=void 0;n=void 0;r=void 0;l=void 0;m=void 0;q=void 0;u=void 0;y=void 0;w=void 0;(function(){var b=
c.buttonBar,d=document.createElement("ul");d.id="wmd-button-row"+a;d.className="wmd-button-row";var d=b.appendChild(d),f=0,b=function(b,c,h,g){var e=document.createElement("li");e.className="wmd-button";e.style.left=f+"px";f+=25;var i=document.createElement("span");e.id=b+a;e.appendChild(i);e.title=c;e.XShift=h;g&&(e.textOp=g);t(e,!0);d.appendChild(e);return e},e=function(b){var c=document.createElement("li");c.className="wmd-spacer wmd-spacer"+b;c.id="wmd-spacer"+b+a;d.appendChild(c);f+=25};i=b("wmd-bold-button",
"Strong <strong> Ctrl+B","0px",s("doBold"));j=b("wmd-italic-button","Emphasis <em> Ctrl+I","-20px",s("doItalic"));e(1);o=b("wmd-link-button","Hyperlink <a> Ctrl+L","-40px",s(function(a,b){return this.doLinkOrImage(a,b,!1)}));h=b("wmd-quote-button","Blockquote <blockquote> Ctrl+Q","-60px",s("doBlockquote"));n=b("wmd-code-button","Code Sample <pre><code> Ctrl+K","-80px",s("doCode"));r=b("wmd-image-button","Image <img> Ctrl+G","-100px",s(function(a,b){return this.doLinkOrImage(a,b,!0)}));e(2);l=b("wmd-olist-button",
"Numbered List <ol> Ctrl+O","-120px",s(function(a,b){this.doList(a,b,!0)}));m=b("wmd-ulist-button","Bulleted List <ul> Ctrl+U","-140px",s(function(a,b){this.doList(a,b,!1)}));q=b("wmd-heading-button","Heading <h1>/<h2> Ctrl+H","-160px",s("doHeading"));u=b("wmd-hr-button","Horizontal Rule <hr> Ctrl+R","-180px",s("doHorizontalRule"));e(3);y=b("wmd-undo-button","Undo - Ctrl+Z","-200px",null);y.execute=function(a){a&&a.undo()};e=/win/.test(A.platform.toLowerCase())?"Redo - Ctrl+Y":"Redo - Ctrl+Shift+Z";
w=b("wmd-redo-button",e,"-220px",null);w.execute=function(a){a&&a.redo()};g&&(b=document.createElement("li"),e=document.createElement("span"),b.appendChild(e),b.className="wmd-button wmd-help-button",b.id="wmd-help-button"+a,b.XShift="-240px",b.isHelp=!0,b.style.right="0px",b.title=g.title||J,b.onclick=g.handler,t(b,!0),d.appendChild(b));x()})();var B="keydown";D&&(B="keypress");k.addEvent(z,B,function(a){if((a.ctrlKey||a.metaKey)&&!a.altKey&&!a.shiftKey){switch(String.fromCharCode(a.charCode||a.keyCode).toLowerCase()){case "b":p(i);
break;case "i":p(j);break;case "l":p(o);break;case "q":p(h);break;case "k":p(n);break;case "g":p(r);break;case "o":p(l);break;case "u":p(m);break;case "h":p(q);break;case "r":p(u);break;case "y":p(w);break;case "z":a.shiftKey?p(w):p(y);break;default:return}a.preventDefault&&a.preventDefault();window.event&&(window.event.returnValue=!1)}});k.addEvent(z,"keyup",function(a){if(a.shiftKey&&!a.ctrlKey&&!a.metaKey&&13===(a.charCode||a.keyCode))a={},a.textOp=s("doAutoindent"),p(a)});v&&k.addEvent(z,"keydown",
function(a){if(27===a.keyCode)return!1});this.setUndoRedoButtonStates=x}function B(a){this.hooks=a}function K(a){return a.replace(/^\s*(.*?)(?:\s+"(.+)")?\s*$/,function(a,d,b){d=d.replace(/\?.*$/,function(a){return a.replace(/\+/g," ")});d=decodeURIComponent(d);d=encodeURI(d).replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29");d=d.replace(/\?.*$/,function(a){return a.replace(/\+/g,"%2b")});b&&(b=b.trim?b.trim():b.replace(/^\s*/,"").replace(/\s*$/,""),b=$.trim(b).replace(/"/g,"quot;").replace(/\(/g,
"&#40;").replace(/\)/g,"&#41;").replace(/</g,"&lt;").replace(/>/g,"&gt;"));return b?d+' "'+b+'"':d})}var k={},q={},u={},e=window.document,l=window.RegExp,A=window.navigator;v=/msie/.test(A.userAgent.toLowerCase());x=/msie 6/.test(A.userAgent.toLowerCase())||/msie 5/.test(A.userAgent.toLowerCase());D=/opera/.test(A.userAgent.toLowerCase());var J="Markdown Editing Help";Markdown.Editor=function(a,c,d){var c=c||"",b=this.hooks=new Markdown.HookCollection;b.addNoop("onPreviewRefresh");b.addNoop("postBlockquoteCreation");
b.addFalse("insertImageDialog");this.getConverter=function(){return a};var f=this,g;this.run=function(){if(!g){g=new E(c);var i=new B(b),j=new H(a,g,function(){b.onPreviewRefresh()}),o,h;/\?noundo/.test(e.location.href)||(o=new F(function(){j.refresh();h&&h.setUndoRedoButtonStates()},g));h=new I(c,g,o,j,i,d);h.setUndoRedoButtonStates();(f.refreshPreview=function(){j.refresh(!0)})()}}};t.prototype.findTags=function(a,c){var d=this,b;a&&(b=k.extendRegExp(a,"","$"),this.before=this.before.replace(b,
function(a){d.startTag+=a;return""}),b=k.extendRegExp(a,"^",""),this.selection=this.selection.replace(b,function(a){d.startTag+=a;return""}));c&&(b=k.extendRegExp(c,"","$"),this.selection=this.selection.replace(b,function(a){d.endTag=a+d.endTag;return""}),b=k.extendRegExp(c,"^",""),this.after=this.after.replace(b,function(a){d.endTag=a+d.endTag;return""}))};t.prototype.trimWhitespace=function(a){var c,d=this;a?a=c="":(a=function(a){d.before+=a;return""},c=function(a){d.after=a+d.after;return""});
this.selection=this.selection.replace(/^(\s*)/,a).replace(/(\s*)$/,c)};t.prototype.skipLines=function(a,c,d){void 0===a&&(a=1);void 0===c&&(c=1);a++;c++;var b,f;navigator.userAgent.match(/Chrome/)&&"X".match(/()./);this.selection=this.selection.replace(/(^\n*)/,"");this.startTag+=l.$1;this.selection=this.selection.replace(/(\n*$)/,"");this.endTag+=l.$1;this.startTag=this.startTag.replace(/(^\n*)/,"");this.before+=l.$1;this.endTag=this.endTag.replace(/(\n*$)/,"");this.after+=l.$1;if(this.before){for(b=
f="";a--;)b+="\\n?",f+="\n";d&&(b="\\n*");this.before=this.before.replace(new l(b+"$",""),f)}if(this.after){for(b=f="";c--;)b+="\\n?",f+="\n";d&&(b="\\n*");this.after=this.after.replace(new l(b,""),f)}};k.isVisible=function(a){if(window.getComputedStyle)return"none"!==window.getComputedStyle(a,null).getPropertyValue("display");if(a.currentStyle)return"none"!==a.currentStyle.display};k.addEvent=function(a,c,d){a.attachEvent?a.attachEvent("on"+c,d):a.addEventListener(c,d,!1)};k.removeEvent=function(a,
c,d){a.detachEvent?a.detachEvent("on"+c,d):a.removeEventListener(c,d,!1)};k.fixEolChars=function(a){a=a.replace(/\r\n/g,"\n");return a=a.replace(/\r/g,"\n")};k.extendRegExp=function(a,c,d){if(null===c||void 0===c)c="";if(null===d||void 0===d)d="";var a=a.toString(),b,a=a.replace(/\/([gim]*)$/,function(a,c){b=c;return""}),a=a.replace(/(^\/|\/$)/g,"");return new l(c+a+d,b)};q.getTop=function(a,c){var d=a.offsetTop;if(!c)for(;a=a.offsetParent;)d+=a.offsetTop;return d};q.getHeight=function(a){return a.offsetHeight||
a.scrollHeight};q.getWidth=function(a){return a.offsetWidth||a.scrollWidth};q.getPageSize=function(){var a,c,d,b;self.innerHeight&&self.scrollMaxY?(a=e.body.scrollWidth,c=self.innerHeight+self.scrollMaxY):e.body.scrollHeight>e.body.offsetHeight?(a=e.body.scrollWidth,c=e.body.scrollHeight):(a=e.body.offsetWidth,c=e.body.offsetHeight);self.innerHeight?(d=self.innerWidth,b=self.innerHeight):e.documentElement&&e.documentElement.clientHeight?(d=e.documentElement.clientWidth,b=e.documentElement.clientHeight):
e.body&&(d=e.body.clientWidth,b=e.body.clientHeight);a=Math.max(a,d);c=Math.max(c,b);return[a,c,d,b]};u.createBackground=function(){var a=e.createElement("div"),c=a.style;a.className="wmd-prompt-background";c.position="absolute";c.top="0";c.zIndex="1000";v?c.filter="alpha(opacity=50)":c.opacity="0.5";var d=q.getPageSize();c.height=d[1]+"px";v?(c.left=e.documentElement.scrollLeft,c.width=e.documentElement.clientWidth):(c.left="0",c.width="100%");e.body.appendChild(a);return a};u.prompt=function(a,
c,d){var b,f;void 0===c&&(c="");var g=function(a){27===(a.charCode||a.keyCode)&&i(!0)},i=function(a){k.removeEvent(e.body,"keydown",g);var c=f.value;a?c=null:(c=c.replace(/^http:\/\/(https?|ftp):\/\//,"$1://"),/^(?:https?|ftp):\/\//.test(c)||(c="http://"+c));b.parentNode.removeChild(b);d(c);return!1},j=function(){b=e.createElement("div");b.className="wmd-prompt-dialog";b.style.padding="10px;";b.style.position="fixed";b.style.width="400px";b.style.zIndex="1001";var d=e.createElement("div");d.innerHTML=
a;d.style.padding="5px";b.appendChild(d);var d=e.createElement("form"),h=d.style;d.onsubmit=function(){return i(!1)};h.padding="0";h.margin="0";h.cssFloat="left";h.width="100%";h.textAlign="center";h.position="relative";b.appendChild(d);f=e.createElement("input");f.type="text";f.value=c;h=f.style;h.display="block";h.width="80%";h.marginLeft=h.marginRight="auto";d.appendChild(f);var n=e.createElement("input");n.type="button";n.onclick=function(){return i(!1)};n.value="OK";h=n.style;h.margin="10px";
h.display="inline";h.width="7em";var j=e.createElement("input");j.type="button";j.onclick=function(){return i(!0)};j.value="Cancel";h=j.style;h.margin="10px";h.display="inline";h.width="7em";d.appendChild(n);d.appendChild(j);k.addEvent(e.body,"keydown",g);b.style.top="50%";b.style.left="50%";b.style.display="block";x&&(b.style.position="absolute",b.style.top=e.documentElement.scrollTop+200+"px",b.style.left="50%");e.body.appendChild(b);b.style.marginTop=-(q.getHeight(b)/2)+"px";b.style.marginLeft=
-(q.getWidth(b)/2)+"px"};setTimeout(function(){j();var a=c.length;if(void 0!==f.selectionStart)f.selectionStart=0,f.selectionEnd=a;else if(f.createTextRange){var b=f.createTextRange();b.collapse(!1);b.moveStart("character",-a);b.moveEnd("character",a);b.select()}f.focus()},0)};var m=B.prototype;m.prefixes="(?:\\s{4,}|\\s*>|\\s*-\\s+|\\s*\\d+\\.|=|\\+|-|_|\\*|#|\\s*\\[[^\n]]+\\]:)";m.unwrap=function(a){var c=new l("([^\\n])\\n(?!(\\n|"+this.prefixes+"))","g");a.selection=a.selection.replace(c,"$1 $2")};
m.wrap=function(a,c){this.unwrap(a);var d=new l("(.{1,"+c+"})( +|$\\n?)","gm"),b=this;a.selection=a.selection.replace(d,function(a,c){return(new l("^"+b.prefixes,"")).test(a)?a:c+"\n"});a.selection=a.selection.replace(/\s+$/,"")};m.doBold=function(a,c){return this.doBorI(a,c,2,"strong text")};m.doItalic=function(a,c){return this.doBorI(a,c,1,"emphasized text")};m.doBorI=function(a,c,d,b){a.trimWhitespace();a.selection=a.selection.replace(/\n{2,}/g,"\n");var f=/(\**$)/.exec(a.before)[0],c=/(^\**)/.exec(a.after)[0],
f=Math.min(f.length,c.length);f>=d&&(2!=f||1!=d)?(a.before=a.before.replace(l("[*]{"+d+"}$",""),""),a.after=a.after.replace(l("^[*]{"+d+"}",""),"")):!a.selection&&c?(a.after=a.after.replace(/^([*_]*)/,""),a.before=a.before.replace(/(\s?)$/,""),a.before=a.before+c+l.$1):(!a.selection&&!c&&(a.selection=b),d=1>=d?"*":"**",a.before+=d,a.after=d+a.after)};m.stripLinkDefs=function(a,c){return a=a.replace(/^[ ]{0,3}\[(\d+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|$)/gm,
function(a,b,f,e,i){c[b]=a.replace(/\s*$/,"");return e?(c[b]=a.replace(/["(](.+?)[")]$/,""),e+i):""})};m.addLinkDef=function(a,c){var d=0,b={};a.before=this.stripLinkDefs(a.before,b);a.selection=this.stripLinkDefs(a.selection,b);a.after=this.stripLinkDefs(a.after,b);var f="",e=/(\[)((?:\[[^\]]*\]|[^\[\]])*)(\][ ]?(?:\n[ ]*)?\[)(\d+)(\])/g,i=function(a){d++;a=a.replace(/^[ ]{0,3}\[(\d+)\]:/,"  ["+d+"]:");f+="\n"+a},j=function(a,c,f,k,l,o){f=f.replace(e,j);return b[l]?(i(b[l]),c+f+k+d+o):a};a.before=
a.before.replace(e,j);c?i(c):a.selection=a.selection.replace(e,j);var k=d;a.after=a.after.replace(e,j);a.after&&(a.after=a.after.replace(/\n*$/,""));a.after||(a.selection=a.selection.replace(/\n*$/,""));a.after+="\n\n"+f;return k};m.doLinkOrImage=function(a,c,d){a.trimWhitespace();a.findTags(/\s*!?\[/,/\][ ]?(?:\n[ ]*)?(\[.*?\])?/);var b;if(1<a.endTag.length&&0<a.startTag.length)a.startTag=a.startTag.replace(/!?\[/,""),a.endTag="",this.addLinkDef(a,null);else if(a.selection=a.startTag+a.selection+
a.endTag,a.startTag=a.endTag="",/\n\n/.test(a.selection))this.addLinkDef(a,null);else{var f=this,e=function(e){b.parentNode.removeChild(b);null!==e&&(a.selection=(" "+a.selection).replace(/([^\\](?:\\\\)*)(?=[[\]])/g,"$1\\").substr(1),e=" [999]: "+K(e),e=f.addLinkDef(a,e),a.startTag=d?"![":"[",a.endTag="]["+e+"]",a.selection||(a.selection=d?"enter image description here":"enter link description here"));c()};b=u.createBackground();d?this.hooks.insertImageDialog(e)||u.prompt("<p><b>Insert Image</b></p><p>http://example.com/images/diagram.jpg \"optional title\"<br><br>Need <a href='http://www.google.com/search?q=free+image+hosting' target='_blank'>free image hosting?</a></p>",
"http://",e):u.prompt('<p><b>Insert Hyperlink</b></p><p>http://example.com/ "optional title"</p>',"http://",e);return!0}};m.doAutoindent=function(a){a.before=a.before.replace(/(\n|^)[ ]{0,3}([*+-]|\d+[.])[ \t]*\n$/,"\n\n");a.before=a.before.replace(/(\n|^)[ ]{0,3}>[ \t]*\n$/,"\n\n");a.before=a.before.replace(/(\n|^)[ \t]+\n$/,"\n\n");/(\n|^)[ ]{0,3}([*+-]|\d+[.])[ \t]+.*\n$/.test(a.before)&&this.doList&&this.doList(a);/(\n|^)[ ]{0,3}>[ \t]+.*\n$/.test(a.before)&&this.doBlockquote&&this.doBlockquote(a);
/(\n|^)(\t|[ ]{4,}).*\n$/.test(a.before)&&this.doCode&&this.doCode(a)};m.doBlockquote=function(a){a.selection=a.selection.replace(/^(\n*)([^\r]+?)(\n*)$/,function(b,c,d,e){a.before+=c;a.after=e+a.after;return d});a.before=a.before.replace(/(>[ \t]*)$/,function(b,c){a.selection=c+a.selection;return""});a.selection=a.selection.replace(/^(\s|>)+$/,"");a.selection=a.selection||"Blockquote";var c="",d="",b;if(a.before){for(var e=a.before.replace(/\n$/,"").split("\n"),g=!1,i=0;i<e.length;i++){var j=!1;
b=e[i];g=g&&0<b.length;/^>/.test(b)?(j=!0,!g&&1<b.length&&(g=!0)):j=/^[ \t]*$/.test(b)?!0:g;j?c+=b+"\n":(d+=c+b,c="\n")}/(^|\n)>/.test(c)||(d+=c,c="")}a.startTag=c;a.before=d;a.after&&(a.after=a.after.replace(/^\n?/,"\n"));a.after=a.after.replace(/^(((\n|^)(\n[ \t]*)*>(.+\n)*.*)+(\n[ \t]*)*)/,function(b){a.endTag=b;return""});c=function(b){var c=b?"> ":"";a.startTag&&(a.startTag=a.startTag.replace(/\n((>|\s)*)\n$/,function(a,b){return"\n"+b.replace(/^[ ]{0,3}>?[ \t]*$/gm,c)+"\n"}));a.endTag&&(a.endTag=
a.endTag.replace(/^\n((>|\s)*)\n/,function(a,b){return"\n"+b.replace(/^[ ]{0,3}>?[ \t]*$/gm,c)+"\n"}))};/^(?![ ]{0,3}>)/m.test(a.selection)?(this.wrap(a,70),a.selection=a.selection.replace(/^/gm,"> "),c(!0),a.skipLines()):(a.selection=a.selection.replace(/^[ ]{0,3}> ?/gm,""),this.unwrap(a),c(!1),!/^(\n|^)[ ]{0,3}>/.test(a.selection)&&a.startTag&&(a.startTag=a.startTag.replace(/\n{0,2}$/,"\n\n")),!/(\n|^)[ ]{0,3}>.*$/.test(a.selection)&&a.endTag&&(a.endTag=a.endTag.replace(/^\n{0,2}/,"\n\n")));a.selection=
this.hooks.postBlockquoteCreation(a.selection);/\n/.test(a.selection)||(a.selection=a.selection.replace(/^(> *)/,function(b,c){a.startTag+=c;return""}))};m.doCode=function(a){var c=/\S[ ]*$/.test(a.before);if(!/^[ ]*\S/.test(a.after)&&!c||/\n/.test(a.selection)){a.before=a.before.replace(/[ ]{4}$/,function(b){a.selection=b+a.selection;return""});var d=c=1;/\n(\t|[ ]{4,}).*\n$/.test(a.before)&&(c=0);/^\n(\t|[ ]{4,})/.test(a.after)&&(d=0);a.skipLines(c,d);a.selection?a.selection=/^[ ]{0,3}\S/m.test(a.selection)?
a.selection.replace(/^/gm,"    "):a.selection.replace(/^[ ]{4}/gm,""):(a.startTag="    ",a.selection="enter code here")}else a.trimWhitespace(),a.findTags(/`/,/`/),!a.startTag&&!a.endTag?(a.startTag=a.endTag="`",a.selection||(a.selection="enter code here")):a.endTag&&!a.startTag?(a.before+=a.endTag,a.endTag=""):a.startTag=a.endTag=""};m.doList=function(a,c,d){var c=/^\n*(([ ]{0,3}([*+-]|\d+[.])[ \t]+.*)(\n.+|\n{2,}([*+-].*|\d+[.])[ \t]+.*|\n{2,}[ \t]+\S.*)*)\n*/,b="-",e=1,g=function(){var a;d?(a=
" "+e+". ",e++):a=" "+b+" ";return a},i=function(a){void 0===d&&(d=/^\s*\d/.test(a));return a=a.replace(/^[ ]{0,3}([*+-]|\d+[.])\s/gm,function(){return g()})};a.findTags(/(\n|^)*[ ]{0,3}([*+-]|\d+[.])\s+/,null);a.before&&!/\n$/.test(a.before)&&!/^\n/.test(a.startTag)&&(a.before+=a.startTag,a.startTag="");if(a.startTag){var j=/\d+[.]/.test(a.startTag);a.startTag="";a.selection=a.selection.replace(/\n[ ]{4}/g,"\n");this.unwrap(a);a.skipLines();j&&(a.after=a.after.replace(c,i));if(d==j)return}var k=
1;a.before=a.before.replace(/(\n|^)(([ ]{0,3}([*+-]|\d+[.])[ \t]+.*)(\n.+|\n{2,}([*+-].*|\d+[.])[ \t]+.*|\n{2,}[ \t]+\S.*)*)\n*$/,function(a){/^\s*([*+-])/.test(a)&&(b=l.$1);k=/[^\n]\n\n[^\n]/.test(a)?1:0;return i(a)});a.selection||(a.selection="List item");var j=g(),h=1;a.after=a.after.replace(c,function(a){h=/[^\n]\n\n[^\n]/.test(a)?1:0;return i(a)});a.trimWhitespace(!0);a.skipLines(k,h,!0);a.startTag=j;c=j.replace(/./g," ");this.wrap(a,72-c.length);a.selection=a.selection.replace(/\n/g,"\n"+c)};
m.doHeading=function(a){a.selection=a.selection.replace(/\s+/g," ");a.selection=a.selection.replace(/(^\s+|\s+$)/g,"");if(a.selection){var c=0;a.findTags(/#+[ ]*/,/[ ]*#+/);/#+/.test(a.startTag)&&(c=l.lastMatch.length);a.startTag=a.endTag="";a.findTags(null,/\s?(-+|=+)/);/=+/.test(a.endTag)&&(c=1);/-+/.test(a.endTag)&&(c=2);a.startTag=a.endTag="";a.skipLines(1,1);c=0==c?2:c-1;if(0<c){var c=2<=c?"-":"=",d=a.selection.length;72<d&&(d=72);for(a.endTag="\n";d--;)a.endTag+=c}}else a.startTag="## ",a.selection=
"Heading",a.endTag=" ##"};m.doHorizontalRule=function(a){a.startTag="----------\n";a.selection="";a.skipLines(2,1,!0)}})();
//@ sourceMappingURL=Markdown.Editor.js.map