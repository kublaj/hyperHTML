var hyperHTML=function(e){"use strict";function t(e){return arguments.length<2?null==e?W("html"):"string"==typeof e?r(null,e):"raw"in e?W("html")(e):"nodeType"in e?n(e):G(e,"html"):("raw"in e?W("html"):r).apply(null,arguments)}function n(e){return f.bind(e)}function r(e,t){return arguments.length<1?W("html"):null==e?W(t||"html"):G(e,t||"html")}function i(){}function a(e,t,n){return pe(e,n,{value:W(t)})[n]}function o(e,t){for(var n=0,r=e.length,i=t.length;n<r;){if(!(n<i&&e[n]===t[n]))return n;n++}return n===i?-1:n}function l(e,t){switch(t.nodeType){case J:var n=e.childNodes;if(n[0]===t){c(n,1);break}u(e,t);break;case X:-1!==o(e.childNodes,t.childNodes)&&u(e,t);break;case Q:e.textContent=t.textContent}}function c(e,t){for(var n,r=e.length;t<r--;)n=e[r],n.parentNode.removeChild(n)}function u(e,t){e.textContent="",e.appendChild(t)}function s(e,t,n){var r=k(e);0!==n?(c(e.childNodes,n),ge(r,t.slice(n)),e.appendChild(r)):(ge(r,t),u(e,r))}function f(e){var t=Se.get(this);return t&&t.template===(ae?I(e):e)||(t=q.apply(this,arguments),Se.set(this,t)),R.apply(t.updates,arguments),this}function h(e,t,n){var r,i=e.ownerElement,a=/^on/.test(n),o="data"===n||n in i&&!(Y in i||ee.test(n)),l=a?n.slice(2):"",c=a||o;return a&&n.toLowerCase()in i&&(l=l.toLowerCase()),c&&t.push(i,n),a?function(e){r!==e&&(r&&i.removeEventListener(l,r,!1),r=e,e&&i.addEventListener(l,e,!1))}:o?function(e){r!==e&&(r=e,i[n]!==e&&(null==e?(i[n]=null,i.removeAttribute(n)):i[n]=e))}:function(t){r!==t&&(r=t,e.value!==t&&(null==t?c||(c=!0,i.removeAttributeNode(e)):(e.value=t,c&&(c=!1,i.setAttributeNode(e)))))}}function d(e,t){var n,r=!t;return function a(u){switch(typeof u){case"string":case"number":case"boolean":r?n!==u&&(n=u,e.textContent=u):1===t.length&&t[0].nodeType===Q?n!==u&&(n=u,t[0].textContent=u):(n=u,c(t,0),t=[C(e,u)],e.parentNode.insertBefore(t[0],e));break;case"function":a(r?u(e,me(e),0):u(e.parentNode,t,0));break;case"object":case"undefined":if(null==u){n=u,a("");break}u instanceof i&&(u=u.render());default:if(n=u,he(u)){var f=u.length;if(0!==f||r)switch(typeof u[0]){case"string":case"number":case"boolean":a({html:u});break;case"function":for(var h=r?e:e.parentNode,d=r?ce.call(me(e)):t,p=0;p<f;p++)u[p]=u[p](h,d,p);r&&c(d,p),a(u.concat.apply([],u));break;case"object":if(he(u[0])&&(u=u.concat.apply([],u)),D(u[0])){Promise.all(u).then(a);break}for(var p=0,f=u.length;p<f;p++)u[p]instanceof i&&(u[p]=u[p].render());default:if(r){var p=o(e.childNodes,u);-1!==p&&s(e,u,p)}else j(e,t,u)}else c(t,0),t=[]}else if(M(u))r?l(e,u):j(e,t,u.nodeType===X?ce.call(u.childNodes):[u]);else if(D(u))u.then(a);else if("placeholder"in u)E(a,u);else if("text"in u)a(String(u.text));else if("any"in u)a(u.any);else if("html"in u){var v=[].concat(u.html).join("");if(r)e.innerHTML=v;else{c(t,0);var g=N(e,v);t=ce.call(g.childNodes),e.parentNode.insertBefore(g,e)}}else a("length"in u?ce.call(u):L(u))}}}function p(e,t,n){for(var r,i,a=ne,o=e.attributes,l=0,c=o.length;l<c;l++)i=o[l],i.value===a&&(r=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1"),t.push(P("attr",e.attributes[r.toLowerCase()],r)))}function v(e,t,n){for(var r,i=e.childNodes,a=i.length,o=0;o<a;o++)switch(r=i[o],r.nodeType){case J:p(r,t,n),v(r,t,n);break;case U:r.textContent===ne&&(n.shift(),1===a||O(r,"previous")&&O(r,"next")?(t.push(P("any",e)),o=a):t.push(P("virtual",r)));break;case Q:ee.test(e.nodeName)&&de.call(r.textContent)===re&&(n.shift(),t.push(P("any",e)))}}function g(e){return ue[e]}function m(e){return{html:e}}function y(e){for(var t,n=[],r=e.childNodes,i=0,a=r.length;i<a;i++)t=r[i],t.nodeType!==J&&0===de.call(t.textContent).length||n.push(t);return 1===n.length?n[0]:n}function b(e){return e.createDocumentFragment()}function N(e,t){return(Y in e?x:w)(e,t.replace(be,we))}function w(e,t){var n,r=e.ownerDocument,i=r.createElement("template"),a="content"in i,o=!1;if(a||(n=b(r),o=/^[^\S]*?<(t(?:head|body|foot|r|d|h))/i.test(t)),o){var l=RegExp.$1;i.innerHTML="<table>"+t+"</table>",ge(n,ce.call(i.querySelectorAll(l)))}else i.innerHTML=t,a?n=i.content:ge(n,ce.call(i.childNodes));return n}function x(e,t){var n=e.ownerDocument,r=b(n);if(oe||le){var i=n.createElement("div");i.innerHTML='<svg xmlns="'+Z+'">'+t+"</svg>",ge(r,ce.call(i.firstChild.childNodes))}else{var i=n.createElementNS(Z,"svg");i.innerHTML=t,ge(r,ce.call(i.childNodes))}return r}function C(e,t){return e.ownerDocument.createTextNode(t)}function T(e,t,n,r){for(var i=e,a=e.ownerDocument,o=n.path,l=ye(t,o),c=0,u=o.length;c<u;c++)switch(o[c++]){case"attributes":var s=l.name;e.hasAttribute(s)||e.setAttribute(s,""),i=e.attributes[s];break;case"childNodes":var f=me(e),h=me(l.parentNode);i=Te(l);var d=i?o.indexOf.call(h,i)+1:-1;i=Ce(l);var p=i?o.indexOf.call(h,i):-1;switch(i=a.createComment(ne),!0){case p<0:p=f.length;break;case d<0:d=0;default:p=-(h.length-p)}r.push.apply(r,ce.call(f,d,p)),r.length?S(e,i,Ce(r[r.length-1])):S(e,i,ce.call(f,p)[0]),0===r.length&&A(e,i);break;default:i=me(e)[o[c]]||e.appendChild(e.ownerDocument.createElement(ye(t,o.slice(0,c+1)).nodeName)),e=i}return i}function S(e,t,n){n?e.insertBefore(t,n):e.appendChild(t)}function k(e){return b(e.ownerDocument)}function E(e,t){e(t.placeholder),"text"in t?Promise.resolve(t.text).then(String).then(e):"any"in t?Promise.resolve(t.any).then(e):"html"in t?Promise.resolve(t.html).then(m).then(e):Promise.resolve(L(t)).then(e)}function L(e){for(var t in ve)if(e.hasOwnProperty(t))return ve[t](e[t])}function M(e){return"ELEMENT_NODE"in e}function D(e){return null!=e&&"then"in e}function O(e,t){for(;null!=(e=e[t+"Sibling"])&&e.nodeType===Q&&de.call(e.textContent).length<1;);return null==e}function _(e){for(var t=0,n=e.length;t<n;t++)e[t++].removeAttribute(e[t])}function A(e,t){var n=t.previousSibling;n&&n.nodeType===Q&&(e.removeChild(n),A(e,t))}function $(e,t,n,r){var i;switch(e.type){case"any":i=d(t,null);break;case"attr":i=h(t,n,e.name);break;case"virtual":i=d(t,r)}return i}function j(e,t,n){var r=o(t,n);if(-1!==r){var i=k(e);c(t,r),t.splice(r),n=n.slice(r),ge(i,n),e.parentNode.insertBefore(i,e),t.push.apply(t,n)}}function P(e,t,n){return{type:e,path:z(t),name:n}}function H(e){var t=[],n=N(this,e.join(re)),r={fragment:n,paths:t};return v(n,t,e.slice()),Ee.set(e,r),r}function z(e){var t,n=[];switch(e.nodeType){case J:case X:t=e;break;case U:t=e.parentNode,n.unshift("childNodes",n.indexOf.call(t.childNodes,e));break;case K:default:t=e.ownerElement,n.unshift("attributes",e.name)}for(e=t;t=t.parentNode;e=t)n.unshift("children",n.indexOf.call(me(t),e));return n}function B(e,t){for(var n,r,i=[],a=[],o=0,l=t.length;o<l;o++)n=t[o],r=ye(e,n.path),r.nodeType===X&&(c(r.childNodes,0),r=this),i[o]=$(n,r,a,[]);return _(a),i}function F(e,t){for(var n,r,i=[],a=[],o=0,l=t.length;o<l;o++)r=[],n=t[o],i[o]=$(n,T(this,e,n,r),a,r);return _(a),i}function R(){for(var e=1,t=arguments.length;e<t;e++)this[e-1](arguments[e])}function q(e){ae&&(e=I(e));var t,n=Ee.get(e)||H.call(this,e);if(Le){var r=Me(n.fragment);t=B.call(this,r,n.paths),u(this,r)}else t=F.call(this,n.fragment,n.paths);return{template:e,updates:t}}function W(e){function r(t){c=b(t),l="svg"===e?t.createElementNS(Z,"svg"):c,u=n(l)}function i(){return s&&(s=!1,"svg"===e&&ge(c,ce.call(l.childNodes)),o=y(c)),o}var a,o,l,c,u,s,f;return"adopt"===e?function(n){var o=arguments;return ae&&(n=I(n)),f!==n&&(s=!0,f=n,a=function(n,a,f){return s&&(f<a.length?(l=a[f],c={ownerDocument:l.ownerDocument,childNodes:[l],children:[l]},u=t.adopt(c)):(Y in n&&(e="svg"),r(n.ownerDocument))),u.apply(null,o),i()}),a}:function(e){return ae&&(e=I(e)),f!==e&&(s=!0,f=e,r(t.document)),u.apply(null,arguments),i()}}function G(e,t){var n=ke.get(e),r=t.indexOf(":"),i=t;return-1<r&&(i=t.slice(r+1),t=t.slice(0,r)||"html"),n||(n={},ke.set(e,n)),n[i]||(n[i]=W(t))}/*! (c) 2017 Andrea Giammarchi @WebReflection, (ISC) */
t.document=e,t.hyper=t,t.adopt=function(e){return function(){return Le=!1,f.apply(e,arguments),Le=!0,e}},t.bind=n,t.define=function(e,t){ve[e]=t},t.escape=function(e){return e.replace(/[&<>'"]/g,g)},t.wire=r,t.Component=i,Object.defineProperties(i.prototype,{defaultState:{get:function(){return{}}},html:{get:function(){return this._html$||a(this,"html","_html$")}},svg:{get:function(){return this._svg$||a(this,"svg","_svg$")}},handleEvent:{value:function(e){this[(e.currentTarget.dataset||{}).call||"on"+e.type](e)}},setState:{value:function(e){var t=this.state||this.defaultState,n="function"==typeof e?e.call(this,t):e;for(var r in n)t[r]=n[r];this.state=t,this.render()}}});var V,I,J=1,K=2,Q=3,U=8,X=11,Y="ownerSVGElement",Z="http://www.w3.org/2000/svg",ee=/^style$/i,te="_hyper_html: ",ne=te+(Math.random()*new Date|0)+";",re="\x3c!--"+ne+"--\x3e",ie=b(e),ae="object"==typeof navigator&&/Firefox\/(\d+)/.test(navigator.userAgent)&&parseFloat(RegExp.$1)<55,oe=function(){var t=e.createElement("p");return t.innerHTML='<i data-i="" class=""></i>',/class/i.test(t.firstChild.attributes[0].name)}(),le=!("children"in ie),ce=[].slice,ue={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},se=typeof WeakMap==typeof se?function(){return{get:function(e){return e[te]},set:function(e,t){Object.defineProperty(e,te,{configurable:!0,value:t})}}}:WeakMap,fe=typeof Map==typeof fe?function(){var e=[],t=[];return{get:function(n){return t[e.indexOf(n)]},set:function(n,r){t[e.push(n)-1]=r}}}:Map,he=Array.isArray||function(){var e={}.toString,t=e.call([]);return function(n){return e.call(n)===t}}(),de=te.trim||function(){return this.replace(/^\s+|\s+$/g,"")},pe=Object.defineProperty,ve={};ae&&(V={},I=function(e){var t="_"+e.join(re);return V[t]||(V[t]=e)});var ge="append"in ie?function(e,t){e.append.apply(e,t)}:function(e,t){for(var n=0,r=t.length;n<r;n++)e.appendChild(t[n])},me=le||oe?function(e){for(var t,n=[],r=e.childNodes,i=0,a=0,o=r.length;a<o;a++)t=r[a],t.nodeType===J&&(n[i++]=t);return n}:function(e){return e.children},ye=oe||le?function(e,t){for(var n,r=0,i=t.length;r<i;r++)switch(n=t[r++]){case"children":e=me(e)[t[r]];break;default:e=e[n][t[r]]}return e}:function(e,t){for(var n=0,r=t.length;n<r;n++)e=e[t[n++]][t[n]];return e},be=/(<[a-z]+[a-z0-9:_-]*)((?:[^\S]+[a-z0-9:_-]+(?:=(?:'.*?'|".*?"|<.+?>|\S+))?)+)([^\S]*\/?>)/gi,Ne=new RegExp("([^\\S][a-z]+[a-z0-9:_-]*=)(['\"]?)"+re+"\\2","gi"),we=function(e,t,n,r){return t+n.replace(Ne,xe)+r},xe=function(e,t,n){return t+(n||'"')+ne+(n||'"')},Ce=oe?function(e){for(;e=e.nextSibling;)if(e.nodeType===J)return e}:function(e){return e.nextElementSibling},Te=oe?function(e){for(;e=e.previousSibling;)if(e.nodeType===J)return e}:function(e){return e.previousElementSibling},Se=new se,ke=new se,Ee=new fe,Le=!0,Me=function(){return ie.appendChild(C(ie,"g")),ie.appendChild(C(ie,"")),1===ie.cloneNode(!0).childNodes.length?function(e){for(var t=e.cloneNode(),n=e.childNodes||[],r=0,i=n.length;r<i;r++)t.appendChild(Me(n[r]));return t}:function(e){return e.cloneNode(!0)}}();return t}(document);try{module.exports=hyperHTML}catch(e){}