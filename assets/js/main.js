function thisindex(e){for(var t,n=e.parentNode.childNodes,o=0,a=o;(t=n.item(o++))&&t!=e;)1==t.nodeType&&a++;return a}function closeAll(e){for(var t=document.getElementsByTagName("details").length,n=0;n<t;n++)n!=e&&document.getElementsByTagName("details")[n].removeAttribute("open")}