Hilite={elementid:"content",exact:!0,max_nodes:1E3,onload:!0,style_name:"hilite",style_name_suffix:!0,debug_referrer:"",search_engines:[["google\\.","q"],["search\\.yahoo\\.","p"],["search\\.msn\\.","q"],["search\\.live\\.","query"],["search\\.aol\\.","userQuery"],["ask\\.com","q"],["altavista\\.","q"],["feedster\\.","q"],["search\\.lycos\\.","q"],["alltheweb\\.","q"],["technorati\\.com/search/([^\\?/]+)",1],["dogpile\\.com/info\\.dogpl/search/web/([^\\?/]+)",1,!0]]};
Hilite.decodeReferrer=function(a){for(var c=RegExp(""),d=0;d<Hilite.search_engines.length;d++){var b=Hilite.search_engines[d];c.compile("^http://(www\\.)?"+b[0],"i");var e=a.match(c);if(e){if(a=isNaN(b[1])?Hilite.decodeReferrerQS(a,b[1]):e[b[1]+1])return a=decodeURIComponent(a),2<b.length&&b[2]&&(a=decodeURIComponent(a)),a=a.replace(/\'|"/g,""),a=a.split(/[\s,\+\.]+/);break}}return null};
Hilite.decodeReferrerQS=function(a,c){var d=a.indexOf("?"),b;if(0<=d){var e=new String(a.substring(d+1));for(b=d=0;0<=d&&0<=(b=e.indexOf("=",d));){var g;g=e.substring(d,b);d=e.indexOf("&",b)+1;if(g==c)return 0>=d?e.substring(b+1):e.substring(b+1,d-1);if(0>=d)break}}return null};
Hilite.hiliteElement=function(a,c){if(c&&0!=a.childNodes.length){for(var d=[],b=0;b<c.length;b++)c[b]=c[b].toLowerCase(),Hilite.exact?d.push("\\b"+c[b]+"\\b"):d.push(c[b]);for(var d=RegExp(d.join("|"),"i"),e={},b=0;b<c.length;b++)e[c[b]]=Hilite.style_name_suffix?Hilite.style_name+(b+1):Hilite.style_name;Hilite.walkElements(a.childNodes[0],1,function(a){var b=d.exec(a.data);if(b){var c=b[0],b=a.splitText(b.index);b.splitText(c.length);var f=a.ownerDocument.createElement("SPAN");a.parentNode.replaceChild(f,
b);f.className=e[c.toLowerCase()];f.appendChild(b);return f}return a})}};Hilite.hilite=function(){var a=Hilite.debug_referrer?Hilite.debug_referrer:document.referrer,c=null;(a=Hilite.decodeReferrer(a))&&(Hilite.elementid&&(c=document.getElementById(Hilite.elementid))||(c=document.body))&&Hilite.hiliteElement(c,a)};
Hilite.walkElements=function(a,c,d){for(var b=/^(script|style|textarea)/i,e=0;a&&0<c;){e++;if(e>=Hilite.max_nodes){setTimeout(function(){Hilite.walkElements(a,c,d)},50);break}if(1==a.nodeType){if(!b.test(a.tagName)&&0<a.childNodes.length){a=a.childNodes[0];c++;continue}}else 3==a.nodeType&&(a=d(a));if(a.nextSibling)a=a.nextSibling;else for(;0<c;)if(a=a.parentNode,c--,a.nextSibling){a=a.nextSibling;break}}};
if(Hilite.onload)if(window.attachEvent)window.attachEvent("onload",Hilite.hilite);else if(window.addEventListener)window.addEventListener("load",Hilite.hilite,!1);else{var __onload=window.onload;window.onload=function(){Hilite.hilite();__onload()}};
//@ sourceMappingURL=se_hilite_src.js.map