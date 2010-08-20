/*
 * jQuery JavaScript Library v1.4.3pre
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu Mar 11 10:49:19 2010 -0500
 */
(function(aS,F){var a=function(a4,a5){return new a.fn.init(a4,a5)},p=aS.jQuery,U=aS.$,af=aS.document,ab,S=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w\-]+)$/,a2=/^.[^:#\[\.,]*$/,aB=/\S/,N=/^\s+/,Z=/\s+$/,f=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,b=navigator.userAgent,x,O=false,ah=[],aK,ax=Object.prototype.toString,an=Object.prototype.hasOwnProperty,h=Array.prototype.push,I=Array.prototype.slice,aN=String.prototype.trim,v=Array.prototype.indexOf;a.fn=a.prototype={init:function(a4,a7){var a6,a8,a5,a9;if(!a4){return this}if(a4.nodeType){this.context=this[0]=a4;this.length=1;return this}if(a4==="body"&&!a7){this.context=af;this[0]=af.body;this.selector="body";this.length=1;return this}if(typeof a4==="string"){a6=S.exec(a4);if(a6&&(a6[1]||!a7)){if(a6[1]){a9=(a7?a7.ownerDocument||a7:af);a5=f.exec(a4);if(a5){if(a.isPlainObject(a7)){a4=[af.createElement(a5[1])];a.fn.attr.call(a4,a7,true)}else{a4=[a9.createElement(a5[1])]}}else{a5=L([a6[1]],[a9]);a4=(a5.cacheable?a5.fragment.cloneNode(true):a5.fragment).childNodes}return a.merge(this,a4)}else{a8=af.getElementById(a6[2]);if(a8){if(a8.id!==a6[2]){return ab.find(a4)}this.length=1;this[0]=a8}this.context=af;this.selector=a4;return this}}else{if(!a7&&/^\w+$/.test(a4)){this.selector=a4;this.context=af;a4=af.getElementsByTagName(a4);return a.merge(this,a4)}else{if(!a7||a7.jquery){return(a7||ab).find(a4)}else{return a(a7).find(a4)}}}}else{if(a.isFunction(a4)){return ab.ready(a4)}}if(a4.selector!==F){this.selector=a4.selector;this.context=a4.context}return a.makeArray(a4,this)},selector:"",jquery:"1.4.3pre",length:0,size:function(){return this.length},toArray:function(){return I.call(this,0)},get:function(a4){return a4==null?this.toArray():(a4<0?this.slice(a4)[0]:this[a4])},pushStack:function(a5,a7,a4){var a6=a();if(a.isArray(a5)){h.apply(a6,a5)}else{a.merge(a6,a5)}a6.prevObject=this;a6.context=this.context;if(a7==="find"){a6.selector=this.selector+(this.selector?" ":"")+a4}else{if(a7){a6.selector=this.selector+"."+a7+"("+a4+")"}}return a6},each:function(a5,a4){return a.each(this,a5,a4)},ready:function(a4){a.bindReady();if(a.isReady){a4.call(af,a)}else{if(ah){ah.push(a4)}}return this},eq:function(a4){return a4===-1?this.slice(a4):this.slice(a4,+a4+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(I.apply(this,arguments),"slice",I.call(arguments).join(","))},map:function(a4){return this.pushStack(a.map(this,function(a6,a5){return a4.call(a6,a5,a6)}))},end:function(){return this.prevObject||a(null)},push:h,sort:[].sort,splice:[].splice};a.fn.init.prototype=a.fn;a.extend=a.fn.extend=function(){var a9=arguments[0]||{},a8=1,a7=arguments.length,bb=false,bc,a6,a4,a5;if(typeof a9==="boolean"){bb=a9;a9=arguments[1]||{};a8=2}if(typeof a9!=="object"&&!a.isFunction(a9)){a9={}}if(a7===a8){a9=this;--a8}for(;a8<a7;a8++){if((bc=arguments[a8])!=null){for(a6 in bc){a4=a9[a6];a5=bc[a6];if(a9===a5){continue}if(bb&&a5&&(a.isPlainObject(a5)||a.isArray(a5))){var ba=a4&&(a.isPlainObject(a4)||a.isArray(a4))?a4:a.isArray(a5)?[]:{};a9[a6]=a.extend(bb,ba,a5)}else{if(a5!==F){a9[a6]=a5}}}}}return a9};a.extend({noConflict:function(a4){aS.$=U;if(a4){aS.jQuery=p}return a},isReady:false,ready:function(){if(!a.isReady){if(!af.body){return setTimeout(a.ready,13)}a.isReady=true;if(ah){var a5,a4=0;while((a5=ah[a4++])){a5.call(af,a)}ah=null}if(a.fn.triggerHandler){a(af).triggerHandler("ready")}}},bindReady:function(){if(O){return}O=true;if(af.readyState==="complete"){return a.ready()}if(af.addEventListener){af.addEventListener("DOMContentLoaded",aK,false);aS.addEventListener("load",a.ready,false)}else{if(af.attachEvent){af.attachEvent("onreadystatechange",aK);aS.attachEvent("onload",a.ready);var a4=false;try{a4=aS.frameElement==null}catch(a5){}if(af.documentElement.doScroll&&a4){A()}}}},isFunction:function(a4){return ax.call(a4)==="[object Function]"},isArray:function(a4){return ax.call(a4)==="[object Array]"},isPlainObject:function(a5){if(!a5||ax.call(a5)!=="[object Object]"||a5.nodeType||a5.setInterval){return false}if(a5.constructor&&!an.call(a5,"constructor")&&!an.call(a5.constructor.prototype,"isPrototypeOf")){return false}var a4;for(a4 in a5){}return a4===F||an.call(a5,a4)},isEmptyObject:function(a5){for(var a4 in a5){return false}return true},error:function(a4){throw a4},parseJSON:function(a4){if(typeof a4!=="string"||!a4){return null}a4=a.trim(a4);if(/^[\],:{}\s]*$/.test(a4.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return aS.JSON&&aS.JSON.parse?aS.JSON.parse(a4):(new Function("return "+a4))()}else{a.error("Invalid JSON: "+a4)}},noop:function(){},globalEval:function(a6){if(a6&&aB.test(a6)){var a5=af.getElementsByTagName("head")[0]||af.documentElement,a4=af.createElement("script");a4.type="text/javascript";if(a.support.scriptEval){a4.appendChild(af.createTextNode(a6))}else{a4.text=a6}a5.insertBefore(a4,a5.firstChild);a5.removeChild(a4)}},nodeName:function(a5,a4){return a5.nodeName&&a5.nodeName.toUpperCase()===a4.toUpperCase()},each:function(a7,bb,a6){var a5,a8=0,a9=a7.length,a4=a9===F||a.isFunction(a7);if(a6){if(a4){for(a5 in a7){if(bb.apply(a7[a5],a6)===false){break}}}else{for(;a8<a9;){if(bb.apply(a7[a8++],a6)===false){break}}}}else{if(a4){for(a5 in a7){if(bb.call(a7[a5],a5,a7[a5])===false){break}}}else{for(var ba=a7[0];a8<a9&&bb.call(ba,a8,ba)!==false;ba=a7[++a8]){}}}return a7},trim:aN?function(a4){return a4==null?"":aN.call(a4)}:function(a4){return a4==null?"":a4.toString().replace(N,"").replace(Z,"")},makeArray:function(a6,a5){var a4=a5||[];if(a6!=null){if(a6.length==null||typeof a6==="string"||a.isFunction(a6)||(typeof a6!=="function"&&a6.setInterval)){h.call(a4,a6)}else{a.merge(a4,a6)}}return a4},inArray:function(a6,a7){if(a7.indexOf){return a7.indexOf(a6)}for(var a4=0,a5=a7.length;a4<a5;a4++){if(a7[a4]===a6){return a4}}return -1},merge:function(a8,a6){var a7=a8.length,a5=0;if(typeof a6.length==="number"){for(var a4=a6.length;a5<a4;a5++){a8[a7++]=a6[a5]}}else{while(a6[a5]!==F){a8[a7++]=a6[a5++]}}a8.length=a7;return a8},grep:function(a5,ba,a4){var a6=[],a9;a4=!!a4;for(var a7=0,a8=a5.length;a7<a8;a7++){a9=!!ba(a5[a7],a7);if(a4!==a9){a6.push(a5[a7])}}return a6},map:function(a5,ba,a4){var a6=[],a9;for(var a7=0,a8=a5.length;a7<a8;a7++){a9=ba(a5[a7],a7,a4);if(a9!=null){a6[a6.length]=a9}}return a6.concat.apply([],a6)},guid:1,proxy:function(a6,a5,a4){if(arguments.length===2){if(typeof a5==="string"){a4=a6;a6=a4[a5];a5=F}else{if(a5&&!a.isFunction(a5)){a4=a5;a5=F}}}if(!a5&&a6){a5=function(){return a6.apply(a4||this,arguments)}}if(a6){a5.guid=a6.guid=a6.guid||a5.guid||a.guid++}return a5},uaMatch:function(a5){a5=a5.toLowerCase();var a4=/(webkit)[ \/]([\w.]+)/.exec(a5)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a5)||/(msie) ([\w.]+)/.exec(a5)||!/compatible/.test(a5)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a5)||[];return{browser:a4[1]||"",version:a4[2]||"0"}},browser:{}});x=a.uaMatch(b);if(x.browser){a.browser[x.browser]=true;a.browser.version=x.version}if(a.browser.webkit){a.browser.safari=true}if(v){a.inArray=function(a4,a5){return v.call(a5,a4)}}if(!/\s/.test("\xA0")){N=/^[\s\xA0]+/;Z=/[\s\xA0]+$/}ab=a(af);if(af.addEventListener){aK=function(){af.removeEventListener("DOMContentLoaded",aK,false);a.ready()}}else{if(af.attachEvent){aK=function(){if(af.readyState==="complete"){af.detachEvent("onreadystatechange",aK);a.ready()}}}}function A(){if(a.isReady){return}try{af.documentElement.doScroll("left")}catch(a4){setTimeout(A,1);return}a.ready()}function a1(a4,a5){if(a5.src){a.ajax({url:a5.src,async:false,dataType:"script"})}else{a.globalEval(a5.text||a5.textContent||a5.innerHTML||"")}if(a5.parentNode){a5.parentNode.removeChild(a5)}}function at(a4,bc,ba,a6,a9,bb){var a5=a4.length;if(typeof bc==="object"){for(var a7 in bc){at(a4,a7,bc[a7],a6,a9,ba)}return a4}if(ba!==F){a6=!bb&&a6&&a.isFunction(ba);for(var a8=0;a8<a5;a8++){a9(a4[a8],bc,a6?ba.call(a4[a8],a8,a9(a4[a8],bc)):ba,bb)}return a4}return a5?a9(a4[0],bc):F}function aV(){return(new Date()).getTime()}(function(){a.support={};var ba=af.documentElement,a9=af.createElement("script"),a4=af.createElement("div"),a5="script"+aV();a4.style.display="none";a4.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var bc=a4.getElementsByTagName("*"),bb=a4.getElementsByTagName("a")[0];if(!bc||!bc.length||!bb){return}a.support={leadingWhitespace:a4.firstChild.nodeType===3,tbody:!a4.getElementsByTagName("tbody").length,htmlSerialize:!!a4.getElementsByTagName("link").length,style:/red/.test(bb.getAttribute("style")),hrefNormalized:bb.getAttribute("href")==="/a",opacity:/^0.55$/.test(bb.style.opacity),cssFloat:!!bb.style.cssFloat,checkOn:a4.getElementsByTagName("input")[0].value==="on",optSelected:af.createElement("select").appendChild(af.createElement("option")).selected,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};a9.type="text/javascript";try{a9.appendChild(af.createTextNode("window."+a5+"=1;"))}catch(a7){}ba.insertBefore(a9,ba.firstChild);if(aS[a5]){a.support.scriptEval=true;delete aS[a5]}ba.removeChild(a9);if(a4.attachEvent&&a4.fireEvent){a4.attachEvent("onclick",function bd(){a.support.noCloneEvent=false;a4.detachEvent("onclick",bd)});a4.cloneNode(true).fireEvent("onclick")}a4=af.createElement("div");a4.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";var a6=af.createDocumentFragment();a6.appendChild(a4.firstChild);a.support.checkClone=a6.cloneNode(true).cloneNode(true).lastChild.checked;a(function(){var be=af.createElement("div");be.style.width=be.style.paddingLeft="1px";af.body.appendChild(be);a.boxModel=a.support.boxModel=be.offsetWidth===2;af.body.removeChild(be).style.display="none";be=null});var a8=function(be){var bg=af.createElement("div");be="on"+be;var bf=(be in bg);if(!bf){bg.setAttribute(be,"return;");bf=typeof bg[be]==="function"}bg=null;return bf};a.support.submitBubbles=a8("submit");a.support.changeBubbles=a8("change");ba=a9=a4=bc=bb=null})();a.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var aM="jQuery"+aV(),aL=0,aZ={};a.extend({cache:{},expando:aM,noData:{embed:true,object:true,applet:true},data:function(a6,a5,a9){if(a6.nodeName&&a.noData[a6.nodeName.toLowerCase()]){return}a6=a6==aS?aZ:a6;var ba=a6[a.expando],a4=a.cache,a8,a7=a6.nodeType;if(!ba&&typeof a5==="string"&&a9===F){return}if(!a7){a4=a6;ba=a.expando}else{if(!ba){a6[a.expando]=ba=++aL}}if(typeof a5==="object"){a4[ba]=a.extend(true,{},a5)}else{if(!a4[ba]){a4[ba]={}}}a8=a4[ba];if(a9!==F){a8[a5]=a9}return typeof a5==="string"?a8[a5]:a8},removeData:function(a6,a5){if(a6.nodeName&&a.noData[a6.nodeName.toLowerCase()]){return}a6=a6==aS?aZ:a6;var a9=a6[a.expando],a4=a.cache,a8=a6.nodeType,a7=a8?a4[a9]:a9;if(a5){if(a7){delete a7[a5];if(a.isEmptyObject(a7)){a.removeData(a6)}}}else{if(a.support.deleteExpando||!a8){delete a6[a.expando]}else{if(a6.removeAttribute){a6.removeAttribute(a.expando)}}if(a8){delete a4[a9]}}}});a.fn.extend({data:function(a4,a6){if(typeof a4==="undefined"&&this.length){return a.data(this[0])}else{if(typeof a4==="object"){return this.each(function(){a.data(this,a4)})}}var a7=a4.split(".");a7[1]=a7[1]?"."+a7[1]:"";if(a6===F){var a5=this.triggerHandler("getData"+a7[1]+"!",[a7[0]]);if(a5===F&&this.length){a5=a.data(this[0],a4)}return a5===F&&a7[1]?this.data(a7[0]):a5}else{return this.trigger("setData"+a7[1]+"!",[a7[0],a6]).each(function(){a.data(this,a4,a6)})}},removeData:function(a4){return this.each(function(){a.removeData(this,a4)})}});a.extend({queue:function(a5,a4,a7){if(!a5){return}a4=(a4||"fx")+"queue";var a6=a.data(a5,a4);if(!a7){return a6||[]}if(!a6||a.isArray(a7)){a6=a.data(a5,a4,a.makeArray(a7))}else{a6.push(a7)}return a6},dequeue:function(a7,a6){a6=a6||"fx";var a4=a.queue(a7,a6),a5=a4.shift();if(a5==="inprogress"){a5=a4.shift()}if(a5){if(a6==="fx"){a4.unshift("inprogress")}a5.call(a7,function(){a.dequeue(a7,a6)})}}});a.fn.extend({queue:function(a4,a5){if(typeof a4!=="string"){a5=a4;a4="fx"}if(a5===F){return a.queue(this[0],a4)}return this.each(function(a7,a8){var a6=a.queue(this,a4,a5);if(a4==="fx"&&a6[0]!=="inprogress"){a.dequeue(this,a4)}})},dequeue:function(a4){return this.each(function(){a.dequeue(this,a4)})},delay:function(a5,a4){a5=a.fx?a.fx.speeds[a5]||a5:a5;a4=a4||"fx";return this.queue(a4,function(){var a6=this;setTimeout(function(){a.dequeue(a6,a4)},a5)})},clearQueue:function(a4){return this.queue(a4||"fx",[])}});var aG=/\.(.*)$/,D=function(a4){return a4.replace(/[^\w\s\.\|`]/g,function(a5){return"\\"+a5})};a.event={add:function(a7,bb,bg,a9){if(a7.nodeType===3||a7.nodeType===8){return}if(a7.setInterval&&(a7!==aS&&!a7.frameElement)){a7=aS}if(bg===false){bg=aX}var a5,bf;if(bg.handler){a5=bg;bg=a5.handler}if(!bg.guid){bg.guid=a.guid++}var bc=a.data(a7);if(!bc){return}var bh=bc.events=bc.events||{},ba=bc.handle;if(!ba){bc.handle=ba=function(){return typeof a!=="undefined"&&!a.event.triggered?a.event.handle.apply(ba.elem,arguments):F}}ba.elem=a7;bb=bb.split(" ");var be,a8=0,a4;while((be=bb[a8++])){bf=a5?a.extend({},a5):{handler:bg,data:a9};if(be.indexOf(".")>-1){a4=be.split(".");be=a4.shift();bf.namespace=a4.slice(0).sort().join(".")}else{a4=[];bf.namespace=""}bf.type=be;if(!bf.guid){bf.guid=bg.guid}var a6=bh[be],bd=a.event.special[be]||{};if(!a6){a6=bh[be]=[];if(!bd.setup||bd.setup.call(a7,a9,a4,ba)===false){if(a7.addEventListener){a7.addEventListener(be,ba,false)}else{if(a7.attachEvent){a7.attachEvent("on"+be,ba)}}}}if(bd.add){bd.add.call(a7,bf);if(!bf.handler.guid){bf.handler.guid=bg.guid}}a6.push(bf);a.event.global[be]=true}a7=null},global:{},remove:function(bj,be,a6,ba){if(bj.nodeType===3||bj.nodeType===8){return}if(a6===false){a6=aX}var bm,a9,bb,bg,bh=0,a7,bc,bf,a8,bd,a4,bl,bi=a.data(bj),a5=bi&&bi.events;if(!bi||!a5){return}if(be&&be.type){a6=be.handler;be=be.type}if(!be||typeof be==="string"&&be.charAt(0)==="."){be=be||"";for(a9 in a5){a.event.remove(bj,a9+be)}return}be=be.split(" ");while((a9=be[bh++])){bl=a9;a4=null;a7=a9.indexOf(".")<0;bc=[];if(!a7){bc=a9.split(".");a9=bc.shift();bf=new RegExp("(^|\\.)"+a.map(bc.slice(0).sort(),D).join("\\.(?:.*\\.)?")+"(\\.|$)")}bd=a5[a9];if(!bd){continue}if(!a6){for(bg=0;bg<bd.length;bg++){a4=bd[bg];if(a7||bf.test(a4.namespace)){a.event.remove(bj,bl,a4.handler,bg);bd.splice(bg--,1)}}continue}a8=a.event.special[a9]||{};for(bg=ba||0;bg<bd.length;bg++){a4=bd[bg];if(a6.guid===a4.guid){if(a7||bf.test(a4.namespace)){if(ba==null){bd.splice(bg--,1)}if(a8.remove){a8.remove.call(bj,a4)}}if(ba!=null){break}}}if(bd.length===0||ba!=null&&bd.length===1){if(!a8.teardown||a8.teardown.call(bj,bc)===false){ak(bj,a9,bi.handle)}bm=null;delete a5[a9]}}if(a.isEmptyObject(a5)){var bk=bi.handle;if(bk){bk.elem=null}delete bi.events;delete bi.handle;if(a.isEmptyObject(bi)){a.removeData(bj)}}},trigger:function(a5,ba,a7){var be=a5.type||a5,a9=arguments[3];if(!a9){a5=typeof a5==="object"?a5[aM]?a5:a.extend(a.Event(be),a5):a.Event(be);if(be.indexOf("!")>=0){a5.type=be=be.slice(0,-1);a5.exclusive=true}if(!a7){a5.stopPropagation();if(a.event.global[be]){a.each(a.cache,function(){if(this.events&&this.events[be]){a.event.trigger(a5,ba,this.handle.elem)}})}}if(!a7||a7.nodeType===3||a7.nodeType===8){return F}a5.result=F;a5.target=a7;ba=a.makeArray(ba);ba.unshift(a5)}a5.currentTarget=a7;var bb=a.data(a7,"handle");if(bb){bb.apply(a7,ba)}var bg=a7.parentNode||a7.ownerDocument;try{if(!(a7&&a7.nodeName&&a.noData[a7.nodeName.toLowerCase()])){if(a7["on"+be]&&a7["on"+be].apply(a7,ba)===false){a5.result=false}}}catch(bf){}if(!a5.isPropagationStopped()&&bg){a.event.trigger(a5,ba,bg,true)}else{if(!a5.isDefaultPrevented()){var bc=a5.target,a6,a4=be.replace(/\..*$/,""),bh=a.nodeName(bc,"a")&&a4==="click",bd=a.event.special[a4]||{};if((!bd._default||bd._default.call(a7,a5)===false)&&!bh&&!(bc&&bc.nodeName&&a.noData[bc.nodeName.toLowerCase()])){try{if(bc[a4]){a6=bc["on"+a4];if(a6){bc["on"+a4]=null}a.event.triggered=true;bc[a4]()}}catch(a8){}if(a6){bc["on"+a4]=a6}a.event.triggered=false}}}},handle:function(a4){var bd,a6,a5,a9=[],bf,be,bb=a.makeArray(arguments);a4=bb[0]=a.event.fix(a4||aS.event);a4.currentTarget=this;bd=a4.type.indexOf(".")<0&&!a4.exclusive;if(!bd){a5=a4.type.split(".");a4.type=a5.shift();a9=a5.slice(0).sort();bf=new RegExp("(^|\\.)"+a9.join("\\.(?:.*\\.)?")+"(\\.|$)")}a4.namespace=a4.namespace||a9.join(".");be=a.data(this,"events");a6=(be||{})[a4.type];if(be&&a6){a6=a6.slice(0);for(var a8=0,a7=a6.length;a8<a7;a8++){var bc=a6[a8];if(bd||bf.test(bc.namespace)){a4.handler=bc.handler;a4.data=bc.data;a4.handleObj=bc;var ba=bc.handler.apply(this,bb);if(ba!==F){a4.result=ba;if(ba===false){a4.preventDefault();a4.stopPropagation()}}if(a4.isImmediatePropagationStopped()){break}}}}return a4.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a7){if(a7[aM]){return a7}var a5=a7;a7=a.Event(a5);for(var a6=this.props.length,a9;a6;){a9=this.props[--a6];a7[a9]=a5[a9]}if(!a7.target){a7.target=a7.srcElement||af}if(a7.target.nodeType===3){a7.target=a7.target.parentNode}if(!a7.relatedTarget&&a7.fromElement){a7.relatedTarget=a7.fromElement===a7.target?a7.toElement:a7.fromElement}if(a7.pageX==null&&a7.clientX!=null){var a8=af.documentElement,a4=af.body;a7.pageX=a7.clientX+(a8&&a8.scrollLeft||a4&&a4.scrollLeft||0)-(a8&&a8.clientLeft||a4&&a4.clientLeft||0);a7.pageY=a7.clientY+(a8&&a8.scrollTop||a4&&a4.scrollTop||0)-(a8&&a8.clientTop||a4&&a4.clientTop||0)}if(!a7.which&&((a7.charCode||a7.charCode===0)?a7.charCode:a7.keyCode)){a7.which=a7.charCode||a7.keyCode}if(!a7.metaKey&&a7.ctrlKey){a7.metaKey=a7.ctrlKey}if(!a7.which&&a7.button!==F){a7.which=(a7.button&1?1:(a7.button&2?3:(a7.button&4?2:0)))}return a7},guid:100000000,proxy:a.proxy,special:{ready:{setup:a.bindReady,teardown:a.noop},live:{add:function(a4){a.event.add(this,o(a4.origType,a4.selector),a.extend({},a4,{handler:Y,guid:a4.handler.guid}))},remove:function(a4){a.event.remove(this,o(a4.origType,a4.selector),a4)}},beforeunload:{setup:function(a6,a5,a4){if(this.setInterval){this.onbeforeunload=a4}},teardown:function(a5,a4){if(this.onbeforeunload===a4){this.onbeforeunload=null}}}}};var ak=af.removeEventListener?function(a5,a4,a6){if(a5.removeEventListener){a5.removeEventListener(a4,a6,false)}}:function(a5,a4,a6){if(a5.detachEvent){a5.detachEvent("on"+a4,a6)}};a.Event=function(a4){if(!this.preventDefault){return new a.Event(a4)}if(a4&&a4.type){this.originalEvent=a4;this.type=a4.type}else{this.type=a4}this.timeStamp=aV();this[aM]=true};function aX(){return false}function g(){return true}a.Event.prototype={preventDefault:function(){this.isDefaultPrevented=g;var a4=this.originalEvent;if(!a4){return}if(a4.preventDefault){a4.preventDefault()}a4.returnValue=false},stopPropagation:function(){this.isPropagationStopped=g;var a4=this.originalEvent;if(!a4){return}if(a4.stopPropagation){a4.stopPropagation()}a4.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=g;this.stopPropagation()},isDefaultPrevented:aX,isPropagationStopped:aX,isImmediatePropagationStopped:aX};var T=function(a5){var a4=a5.relatedTarget;try{while(a4&&a4!==this){a4=a4.parentNode}if(a4!==this){a5.type=a5.data;a.event.handle.apply(this,arguments)}}catch(a6){}},aC=function(a4){a4.type=a4.data;a.event.handle.apply(this,arguments)};a.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a5,a4){a.event.special[a5]={setup:function(a6){a.event.add(this,a4,a6&&a6.selector?aC:T,a5)},teardown:function(a6){a.event.remove(this,a4,a6&&a6.selector?aC:T)}}});if(!a.support.submitBubbles){a.event.special.submit={setup:function(a5,a4){if(this.nodeName.toLowerCase()!=="form"){a.event.add(this,"click.specialSubmit",function(a8){var a7=a8.target,a6=a7.type;if((a6==="submit"||a6==="image")&&a(a7).closest("form").length){return aE("submit",this,arguments)}});a.event.add(this,"keypress.specialSubmit",function(a8){var a7=a8.target,a6=a7.type;if((a6==="text"||a6==="password")&&a(a7).closest("form").length&&a8.keyCode===13){return aE("submit",this,arguments)}})}else{return false}},teardown:function(a4){a.event.remove(this,".specialSubmit")}}}if(!a.support.changeBubbles){var av=/textarea|input|select/i,aY,j=function(a5){var a4=a5.type,a6=a5.value;if(a4==="radio"||a4==="checkbox"){a6=a5.checked}else{if(a4==="select-multiple"){a6=a5.selectedIndex>-1?a.map(a5.options,function(a7){return a7.selected}).join("-"):""}else{if(a5.nodeName.toLowerCase()==="select"){a6=a5.selectedIndex}}}return a6},R=function R(a6){var a4=a6.target,a5,a7;if(!av.test(a4.nodeName)||a4.readOnly){return}a5=a.data(a4,"_change_data");a7=j(a4);if(a6.type!=="focusout"||a4.type!=="radio"){a.data(a4,"_change_data",a7)}if(a5===F||a7===a5){return}if(a5!=null||a7){a6.type="change";return a.event.trigger(a6,arguments[1],a4)}};a.event.special.change={filters:{focusout:R,click:function(a6){var a5=a6.target,a4=a5.type;if(a4==="radio"||a4==="checkbox"||a5.nodeName.toLowerCase()==="select"){return R.call(this,a6)}},keydown:function(a6){var a5=a6.target,a4=a5.type;if((a6.keyCode===13&&a5.nodeName.toLowerCase()!=="textarea")||(a6.keyCode===32&&(a4==="checkbox"||a4==="radio"))||a4==="select-multiple"){return R.call(this,a6)}},beforeactivate:function(a5){var a4=a5.target;a.data(a4,"_change_data",j(a4))}},setup:function(a6,a5){if(this.type==="file"){return false}for(var a4 in aY){a.event.add(this,a4+".specialChange",aY[a4])}return av.test(this.nodeName)},teardown:function(a4){a.event.remove(this,".specialChange");return av.test(this.nodeName)}};aY=a.event.special.change.filters}function aE(a5,a6,a4){a4[0].type=a5;return a.event.handle.apply(a6,a4)}if(af.addEventListener){a.each({focus:"focusin",blur:"focusout"},function(a6,a4){a.event.special[a4]={setup:function(){this.addEventListener(a6,a5,true)},teardown:function(){this.removeEventListener(a6,a5,true)}};function a5(a7){a7=a.event.fix(a7);a7.type=a4;return a.event.handle.call(this,a7)}})}a.each(["bind","one"],function(a5,a4){a.fn[a4]=function(bb,bc,ba){if(typeof bb==="object"){for(var a8 in bb){this[a4](a8,bc,bb[a8],ba)}return this}if(a.isFunction(bc)||bc===false){ba=bc;bc=F}var a9=a4==="one"?a.proxy(ba,function(bd){a(this).unbind(bd,a9);return ba.apply(this,arguments)}):ba;if(bb==="unload"&&a4!=="one"){this.one(bb,bc,ba)}else{for(var a7=0,a6=this.length;a7<a6;a7++){a.event.add(this[a7],bb,a9,bc)}}return this}});a.fn.extend({unbind:function(a8,a7){if(typeof a8==="object"&&!a8.preventDefault){for(var a6 in a8){this.unbind(a6,a8[a6])}}else{for(var a5=0,a4=this.length;a5<a4;a5++){a.event.remove(this[a5],a8,a7)}}return this},delegate:function(a4,a5,a7,a6){return this.live(a5,a7,a6,a4)},undelegate:function(a4,a5,a6){if(arguments.length===0){return this.unbind("live")}else{return this.die(a5,null,a6,a4)}},trigger:function(a4,a5){return this.each(function(){a.event.trigger(a4,a5,this)})},triggerHandler:function(a4,a6){if(this[0]){var a5=a.Event(a4);a5.preventDefault();a5.stopPropagation();a.event.trigger(a5,a6,this[0]);return a5.result}},toggle:function(a6){var a4=arguments,a5=1;while(a5<a4.length){a.proxy(a6,a4[a5++])}return this.click(a.proxy(a6,function(a7){var a8=(a.data(this,"lastToggle"+a6.guid)||0)%a5;a.data(this,"lastToggle"+a6.guid,a8+1);a7.preventDefault();return a4[a8].apply(this,arguments)||false}))},hover:function(a4,a5){return this.mouseenter(a4).mouseleave(a5||a4)}});var aA={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};a.each(["live","die"],function(a5,a4){a.fn[a4]=function(bf,bc,bh,a8){var bg,bd=0,be,a7,bi,ba=a8||this.selector,a6=a8?this:a(this.context);if(a.isFunction(bc)){bh=bc;bc=F}bf=(bf||"").split(" ");while((bg=bf[bd++])!=null){be=aG.exec(bg);a7="";if(be){a7=be[0];bg=bg.replace(aG,"")}if(bg==="hover"){bf.push("mouseenter"+a7,"mouseleave"+a7);continue}bi=bg;if(bg==="focus"||bg==="blur"){bf.push(aA[bg]+a7);bg=bg+a7}else{bg=(aA[bg]||bg)+a7}if(a4==="live"){for(var bb=0,a9=a6.length;bb<a9;bb++){a.event.add(a6[bb],"live."+o(bg,ba),{data:bc,selector:ba,handler:bh,origType:bg,origHandler:bh,preType:bi})}}else{a6.unbind("live."+o(bg,ba),bh)}}return this}});function Y(a4){var be,bg,a5=[],bi=[],bh,bd,bf,a7,ba,bc,a9,bb,bk,a8,bj=a.data(this,"events");if(a4.liveFired===this||!bj||!bj.live||a4.button&&a4.type==="click"){return}if(a4.namespace){a8=new RegExp("(^|\\.)"+a4.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")}a4.liveFired=this;var a6=bj.live.slice(0);for(ba=0;ba<a6.length;ba++){bf=a6[ba];if(bf.origType.replace(aG,"")===a4.type){bi.push(bf.selector)}else{a6.splice(ba--,1)}}bd=a(a4.target).closest(bi,a4.currentTarget);for(bc=0,a9=bd.length;bc<a9;bc++){bk=bd[bc];for(ba=0;ba<a6.length;ba++){bf=a6[ba];if(bk.selector===bf.selector&&(!a8||a8.test(bf.namespace))){a7=bk.elem;bh=null;if(bf.preType==="mouseenter"||bf.preType==="mouseleave"){a4.type=bf.preType;bh=a(a4.relatedTarget).closest(bf.selector)[0]}if(!bh||bh!==a7){a5.push({elem:a7,handleObj:bf,level:bk.level})}}}}for(bc=0,a9=a5.length;bc<a9;bc++){bd=a5[bc];if(bg&&bd.level>bg){break}a4.currentTarget=bd.elem;a4.data=bd.handleObj.data;a4.handleObj=bd.handleObj;ret=bd.handleObj.origHandler.apply(bd.elem,arguments);if(ret===false||a4.isPropagationStopped()){bg=bd.level;if(ret===false){be=false}}}return be}function o(a5,a4){return(a5&&a5!=="*"?a5+".":"")+a4.replace(/\./g,"`").replace(/ /g,"&")}a.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error").split(" "),function(a5,a4){a.fn[a4]=function(a7,a6){if(a6==null){a6=a7;a7=null}return arguments.length>0?this.bind(a4,a7,a6):this.trigger(a4)};if(a.attrFn){a.attrFn[a4]=true}});if(aS.attachEvent&&!aS.addEventListener){aS.attachEvent("onunload",function(){for(var a5 in a.cache){if(a.cache[a5].handle){try{a.event.remove(a.cache[a5].handle.elem)}catch(a4){}}}});
/*
 * Sizzle CSS Selector Engine - v1.0
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
}(function(){var bg=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,bh=0,bj=Object.prototype.toString,bb=false,ba=true;[0,0].sort(function(){ba=false;return 0});var a7=function(bs,bn,bv,bw){bv=bv||[];bn=bn||af;var by=bn;if(bn.nodeType!==1&&bn.nodeType!==9){return[]}if(!bs||typeof bs!=="string"){return bv}var bt=[],bp,bA,bD,bo,br=true,bq=a8(bn),bx=bs,bz,bC,bB,bu;do{bg.exec("");bp=bg.exec(bx);if(bp){bx=bp[3];bt.push(bp[1]);if(bp[2]){bo=bp[3];break}}}while(bp);if(bt.length>1&&bc.exec(bs)){if(bt.length===2&&bd.relative[bt[0]]){bA=bk(bt[0]+bt[1],bn)}else{bA=bd.relative[bt[0]]?[bn]:a7(bt.shift(),bn);while(bt.length){bs=bt.shift();if(bd.relative[bs]){bs+=bt.shift()}bA=bk(bs,bA)}}}else{if(!bw&&bt.length>1&&bn.nodeType===9&&!bq&&bd.match.ID.test(bt[0])&&!bd.match.ID.test(bt[bt.length-1])){bz=a7.find(bt.shift(),bn,bq);bn=bz.expr?a7.filter(bz.expr,bz.set)[0]:bz.set[0]}if(bn){bz=bw?{expr:bt.pop(),set:bf(bw)}:a7.find(bt.pop(),bt.length===1&&(bt[0]==="~"||bt[0]==="+")&&bn.parentNode?bn.parentNode:bn,bq);bA=bz.expr?a7.filter(bz.expr,bz.set):bz.set;if(bt.length>0){bD=bf(bA)}else{br=false}while(bt.length){bC=bt.pop();bB=bC;if(!bd.relative[bC]){bC=""}else{bB=bt.pop()}if(bB==null){bB=bn}bd.relative[bC](bD,bB,bq)}}else{bD=bt=[]}}if(!bD){bD=bA}if(!bD){a7.error(bC||bs)}if(bj.call(bD)==="[object Array]"){if(!br){bv.push.apply(bv,bD)}else{if(bn&&bn.nodeType===1){for(bu=0;bD[bu]!=null;bu++){if(bD[bu]&&(bD[bu]===true||bD[bu].nodeType===1&&be(bn,bD[bu]))){bv.push(bA[bu])}}}else{for(bu=0;bD[bu]!=null;bu++){if(bD[bu]&&bD[bu].nodeType===1){bv.push(bA[bu])}}}}}else{bf(bD,bv)}if(bo){a7(bo,by,bv,bw);a7.uniqueSort(bv)}return bv};a7.uniqueSort=function(bo){if(bi){bb=ba;bo.sort(bi);if(bb){for(var bn=1;bn<bo.length;bn++){if(bo[bn]===bo[bn-1]){bo.splice(bn--,1)}}}}return bo};a7.matches=function(bn,bo){return a7(bn,null,null,bo)};a7.find=function(bu,bn,bv){var bt;if(!bu){return[]}for(var bq=0,bp=bd.order.length;bq<bp;bq++){var bs=bd.order[bq],br;if((br=bd.leftMatch[bs].exec(bu))){var bo=br[1];br.splice(1,1);if(bo.substr(bo.length-1)!=="\\"){br[1]=(br[1]||"").replace(/\\/g,"");bt=bd.find[bs](br,bn,bv);if(bt!=null){bu=bu.replace(bd.match[bs],"");break}}}}if(!bt){bt=bn.getElementsByTagName("*")}return{set:bt,expr:bu}};a7.filter=function(by,bx,bB,br){var bp=by,bD=[],bv=bx,bt,bn,bu=bx&&bx[0]&&a8(bx[0]);while(by&&bx.length){for(var bw in bd.filter){if((bt=bd.leftMatch[bw].exec(by))!=null&&bt[2]){var bo=bd.filter[bw],bC,bA,bq=bt[1];bn=false;bt.splice(1,1);if(bq.substr(bq.length-1)==="\\"){continue}if(bv===bD){bD=[]}if(bd.preFilter[bw]){bt=bd.preFilter[bw](bt,bv,bB,bD,br,bu);if(!bt){bn=bC=true}else{if(bt===true){continue}}}if(bt){for(var bs=0;(bA=bv[bs])!=null;bs++){if(bA){bC=bo(bA,bt,bs,bv);var bz=br^!!bC;if(bB&&bC!=null){if(bz){bn=true}else{bv[bs]=false}}else{if(bz){bD.push(bA);bn=true}}}}}if(bC!==F){if(!bB){bv=bD}by=by.replace(bd.match[bw],"");if(!bn){return[]}break}}}if(by===bp){if(bn==null){a7.error(by)}else{break}}bp=by}return bv};a7.error=function(bn){throw"Syntax error, unrecognized expression: "+bn};var bd=a7.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(bn){return bn.getAttribute("href")}},relative:{"+":function(bt,bo){var bq=typeof bo==="string",bs=bq&&!/\W/.test(bo),bu=bq&&!bs;if(bs){bo=bo.toLowerCase()}for(var bp=0,bn=bt.length,br;bp<bn;bp++){if((br=bt[bp])){while((br=br.previousSibling)&&br.nodeType!==1){}bt[bp]=bu||br&&br.nodeName.toLowerCase()===bo?br||false:br===bo}}if(bu){a7.filter(bo,bt,true)}},">":function(bt,bo){var br=typeof bo==="string",bs,bp=0,bn=bt.length;if(br&&!/\W/.test(bo)){bo=bo.toLowerCase();for(;bp<bn;bp++){bs=bt[bp];if(bs){var bq=bs.parentNode;bt[bp]=bq.nodeName.toLowerCase()===bo?bq:false}}}else{for(;bp<bn;bp++){bs=bt[bp];if(bs){bt[bp]=br?bs.parentNode:bs.parentNode===bo}}if(br){a7.filter(bo,bt,true)}}},"":function(bq,bo,bs){var bp=bh++,bn=bl,br;if(typeof bo==="string"&&!/\W/.test(bo)){bo=bo.toLowerCase();br=bo;bn=a4}bn("parentNode",bo,bp,bq,br,bs)},"~":function(bq,bo,bs){var bp=bh++,bn=bl,br;if(typeof bo==="string"&&!/\W/.test(bo)){bo=bo.toLowerCase();br=bo;bn=a4}bn("previousSibling",bo,bp,bq,br,bs)}},find:{ID:function(bo,bp,bq){if(typeof bp.getElementById!=="undefined"&&!bq){var bn=bp.getElementById(bo[1]);return bn?[bn]:[]}},NAME:function(bp,bs){if(typeof bs.getElementsByName!=="undefined"){var bo=[],br=bs.getElementsByName(bp[1]);for(var bq=0,bn=br.length;bq<bn;bq++){if(br[bq].getAttribute("name")===bp[1]){bo.push(br[bq])}}return bo.length===0?null:bo}},TAG:function(bn,bo){return bo.getElementsByTagName(bn[1])}},preFilter:{CLASS:function(bq,bo,bp,bn,bt,bu){bq=" "+bq[1].replace(/\\/g,"")+" ";if(bu){return bq}for(var br=0,bs;(bs=bo[br])!=null;br++){if(bs){if(bt^(bs.className&&(" "+bs.className+" ").replace(/[\t\n]/g," ").indexOf(bq)>=0)){if(!bp){bn.push(bs)}}else{if(bp){bo[br]=false}}}}return false},ID:function(bn){return bn[1].replace(/\\/g,"")},TAG:function(bo,bn){return bo[1].toLowerCase()},CHILD:function(bn){if(bn[1]==="nth"){var bo=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(bn[2]==="even"&&"2n"||bn[2]==="odd"&&"2n+1"||!/\D/.test(bn[2])&&"0n+"+bn[2]||bn[2]);bn[2]=(bo[1]+(bo[2]||1))-0;bn[3]=bo[3]-0}bn[0]=bh++;return bn},ATTR:function(br,bo,bp,bn,bs,bt){var bq=br[1].replace(/\\/g,"");if(!bt&&bd.attrMap[bq]){br[1]=bd.attrMap[bq]}if(br[2]==="~="){br[4]=" "+br[4]+" "}return br},PSEUDO:function(br,bo,bp,bn,bs){if(br[1]==="not"){if((bg.exec(br[3])||"").length>1||/^\w/.test(br[3])){br[3]=a7(br[3],null,null,bo)}else{var bq=a7.filter(br[3],bo,bp,true^bs);if(!bp){bn.push.apply(bn,bq)}return false}}else{if(bd.match.POS.test(br[0])||bd.match.CHILD.test(br[0])){return true}}return br},POS:function(bn){bn.unshift(true);return bn}},filters:{enabled:function(bn){return bn.disabled===false&&bn.type!=="hidden"},disabled:function(bn){return bn.disabled===true},checked:function(bn){return bn.checked===true},selected:function(bn){bn.parentNode.selectedIndex;return bn.selected===true},parent:function(bn){return !!bn.firstChild},empty:function(bn){return !bn.firstChild},has:function(bp,bo,bn){return !!a7(bn[3],bp).length},header:function(bn){return(/h\d/i).test(bn.nodeName)},text:function(bn){return"text"===bn.type},radio:function(bn){return"radio"===bn.type},checkbox:function(bn){return"checkbox"===bn.type},file:function(bn){return"file"===bn.type},password:function(bn){return"password"===bn.type},submit:function(bn){return"submit"===bn.type},image:function(bn){return"image"===bn.type},reset:function(bn){return"reset"===bn.type},button:function(bn){return"button"===bn.type||bn.nodeName.toLowerCase()==="button"},input:function(bn){return(/input|select|textarea|button/i).test(bn.nodeName)}},setFilters:{first:function(bo,bn){return bn===0},last:function(bp,bo,bn,bq){return bo===bq.length-1},even:function(bo,bn){return bn%2===0},odd:function(bo,bn){return bn%2===1},lt:function(bp,bo,bn){return bo<bn[3]-0},gt:function(bp,bo,bn){return bo>bn[3]-0},nth:function(bp,bo,bn){return bn[3]-0===bo},eq:function(bp,bo,bn){return bn[3]-0===bo}},filter:{PSEUDO:function(bp,bu,bt,bv){var bn=bu[1],bo=bd.filters[bn];if(bo){return bo(bp,bt,bu,bv)}else{if(bn==="contains"){return(bp.textContent||bp.innerText||a5([bp])||"").indexOf(bu[3])>=0}else{if(bn==="not"){var bq=bu[3];for(var bs=0,br=bq.length;bs<br;bs++){if(bq[bs]===bp){return false}}return true}else{a7.error("Syntax error, unrecognized expression: "+bn)}}}},CHILD:function(bn,bq){var bt=bq[1],bo=bn;switch(bt){case"only":case"first":while((bo=bo.previousSibling)){if(bo.nodeType===1){return false}}if(bt==="first"){return true}bo=bn;case"last":while((bo=bo.nextSibling)){if(bo.nodeType===1){return false}}return true;case"nth":var bp=bq[2],bw=bq[3];if(bp===1&&bw===0){return true}var bs=bq[0],bv=bn.parentNode;if(bv&&(bv.sizcache!==bs||!bn.nodeIndex)){var br=0;for(bo=bv.firstChild;bo;bo=bo.nextSibling){if(bo.nodeType===1){bo.nodeIndex=++br}}bv.sizcache=bs}var bu=bn.nodeIndex-bw;if(bp===0){return bu===0}else{return(bu%bp===0&&bu/bp>=0)}}},ID:function(bo,bn){return bo.nodeType===1&&bo.getAttribute("id")===bn},TAG:function(bo,bn){return(bn==="*"&&bo.nodeType===1)||bo.nodeName.toLowerCase()===bn},CLASS:function(bo,bn){return(" "+(bo.className||bo.getAttribute("class"))+" ").indexOf(bn)>-1},ATTR:function(bs,bq){var bp=bq[1],bn=bd.attrHandle[bp]?bd.attrHandle[bp](bs):bs[bp]!=null?bs[bp]:bs.getAttribute(bp),bt=bn+"",br=bq[2],bo=bq[4];return bn==null?br==="!=":br==="="?bt===bo:br==="*="?bt.indexOf(bo)>=0:br==="~="?(" "+bt+" ").indexOf(bo)>=0:!bo?bt&&bn!==false:br==="!="?bt!==bo:br==="^="?bt.indexOf(bo)===0:br==="$="?bt.substr(bt.length-bo.length)===bo:br==="|="?bt===bo||bt.substr(0,bo.length+1)===bo+"-":false},POS:function(br,bo,bp,bs){var bn=bo[2],bq=bd.setFilters[bn];if(bq){return bq(br,bp,bo,bs)}}}};var bc=bd.match.POS,a6=function(bo,bn){return"\\"+(bn-0+1)};for(var a9 in bd.match){bd.match[a9]=new RegExp(bd.match[a9].source+(/(?![^\[]*\])(?![^\(]*\))/.source));bd.leftMatch[a9]=new RegExp(/(^(?:.|\r|\n)*?)/.source+bd.match[a9].source.replace(/\\(\d+)/g,a6))}var bf=function(bo,bn){bo=Array.prototype.slice.call(bo,0);if(bn){bn.push.apply(bn,bo);return bn}return bo};try{Array.prototype.slice.call(af.documentElement.childNodes,0)[0].nodeType}catch(bm){bf=function(br,bq){var bo=bq||[],bp=0;if(bj.call(br)==="[object Array]"){Array.prototype.push.apply(bo,br)}else{if(typeof br.length==="number"){for(var bn=br.length;bp<bn;bp++){bo.push(br[bp])}}else{for(;br[bp];bp++){bo.push(br[bp])}}}return bo}}var bi;if(af.documentElement.compareDocumentPosition){bi=function(bo,bn){if(!bo.compareDocumentPosition||!bn.compareDocumentPosition){if(bo==bn){bb=true}return bo.compareDocumentPosition?-1:1}var bp=bo.compareDocumentPosition(bn)&4?-1:bo===bn?0:1;if(bp===0){bb=true}return bp}}else{if("sourceIndex" in af.documentElement){bi=function(bo,bn){if(!bo.sourceIndex||!bn.sourceIndex){if(bo==bn){bb=true}return bo.sourceIndex?-1:1}var bp=bo.sourceIndex-bn.sourceIndex;if(bp===0){bb=true}return bp}}else{if(af.createRange){bi=function(bq,bo){if(!bq.ownerDocument||!bo.ownerDocument){if(bq==bo){bb=true}return bq.ownerDocument?-1:1}var bp=bq.ownerDocument.createRange(),bn=bo.ownerDocument.createRange();bp.setStart(bq,0);bp.setEnd(bq,0);bn.setStart(bo,0);bn.setEnd(bo,0);var br=bp.compareBoundaryPoints(Range.START_TO_END,bn);if(br===0){bb=true}return br}}}}function a5(bn){var bo="",bq;for(var bp=0;bn[bp];bp++){bq=bn[bp];if(bq.nodeType===3||bq.nodeType===4){bo+=bq.nodeValue}else{if(bq.nodeType!==8){bo+=a5(bq.childNodes)}}}return bo}(function(){var bo=af.createElement("div"),bp="script"+(new Date()).getTime();bo.innerHTML="<a name='"+bp+"'/>";var bn=af.documentElement;bn.insertBefore(bo,bn.firstChild);if(af.getElementById(bp)){bd.find.ID=function(br,bs,bt){if(typeof bs.getElementById!=="undefined"&&!bt){var bq=bs.getElementById(br[1]);return bq?bq.id===br[1]||typeof bq.getAttributeNode!=="undefined"&&bq.getAttributeNode("id").nodeValue===br[1]?[bq]:F:[]}};bd.filter.ID=function(bs,bq){var br=typeof bs.getAttributeNode!=="undefined"&&bs.getAttributeNode("id");return bs.nodeType===1&&br&&br.nodeValue===bq}}bn.removeChild(bo);bn=bo=null})();(function(){var bn=af.createElement("div");bn.appendChild(af.createComment(""));if(bn.getElementsByTagName("*").length>0){bd.find.TAG=function(bo,bs){var br=bs.getElementsByTagName(bo[1]);if(bo[1]==="*"){var bq=[];for(var bp=0;br[bp];bp++){if(br[bp].nodeType===1){bq.push(br[bp])}}br=bq}return br}}bn.innerHTML="<a href='#'></a>";if(bn.firstChild&&typeof bn.firstChild.getAttribute!=="undefined"&&bn.firstChild.getAttribute("href")!=="#"){bd.attrHandle.href=function(bo){return bo.getAttribute("href",2)}}bn=null})();if(af.querySelectorAll){(function(){var bn=a7,bp=af.createElement("div");bp.innerHTML="<p class='TEST'></p>";if(bp.querySelectorAll&&bp.querySelectorAll(".TEST").length===0){return}a7=function(bt,bs,bq,br){bs=bs||af;if(!br&&bs.nodeType===9&&!a8(bs)){try{return bf(bs.querySelectorAll(bt),bq)}catch(bu){}}return bn(bt,bs,bq,br)};for(var bo in bn){a7[bo]=bn[bo]}bp=null})()}(function(){var bn=af.createElement("div");bn.innerHTML="<div class='test e'></div><div class='test'></div>";if(!bn.getElementsByClassName||bn.getElementsByClassName("e").length===0){return}bn.lastChild.className="e";if(bn.getElementsByClassName("e").length===1){return}bd.order.splice(1,0,"CLASS");bd.find.CLASS=function(bo,bp,bq){if(typeof bp.getElementsByClassName!=="undefined"&&!bq){return bp.getElementsByClassName(bo[1])}};bn=null})();function a4(bo,bt,bs,bw,bu,bv){for(var bq=0,bp=bw.length;bq<bp;bq++){var bn=bw[bq];if(bn){bn=bn[bo];var br=false;while(bn){if(bn.sizcache===bs){br=bw[bn.sizset];break}if(bn.nodeType===1&&!bv){bn.sizcache=bs;bn.sizset=bq}if(bn.nodeName.toLowerCase()===bt){br=bn;break}bn=bn[bo]}bw[bq]=br}}}function bl(bo,bt,bs,bw,bu,bv){for(var bq=0,bp=bw.length;bq<bp;bq++){var bn=bw[bq];if(bn){bn=bn[bo];var br=false;while(bn){if(bn.sizcache===bs){br=bw[bn.sizset];break}if(bn.nodeType===1){if(!bv){bn.sizcache=bs;bn.sizset=bq}if(typeof bt!=="string"){if(bn===bt){br=true;break}}else{if(a7.filter(bt,[bn]).length>0){br=bn;break}}}bn=bn[bo]}bw[bq]=br}}}var be=af.compareDocumentPosition?function(bo,bn){return !!(bo.compareDocumentPosition(bn)&16)}:function(bo,bn){return bo!==bn&&(bo.contains?bo.contains(bn):true)};var a8=function(bn){var bo=(bn?bn.ownerDocument||bn:0).documentElement;return bo?bo.nodeName!=="HTML":false};var bk=function(bn,bu){var bq=[],br="",bs,bp=bu.nodeType?[bu]:bu;while((bs=bd.match.PSEUDO.exec(bn))){br+=bs[0];bn=bn.replace(bd.match.PSEUDO,"")}bn=bd.relative[bn]?bn+"*":bn;for(var bt=0,bo=bp.length;bt<bo;bt++){a7(bn,bp[bt],bq)}return a7.filter(br,bq)};a.find=a7;a.expr=a7.selectors;a.expr[":"]=a.expr.filters;a.unique=a7.uniqueSort;a.text=a5;a.isXMLDoc=a8;a.contains=be;aS.Sizzle=a7})();var Q=/Until$/,ac=/^(?:parents|prevUntil|prevAll)/,aQ=/,/;var am=function(a7,a6,a4){if(a.isFunction(a6)){return a.grep(a7,function(a9,a8){var ba=!!a6.call(a9,a8,a9);return ba===a4})}else{if(a6.nodeType){return a.grep(a7,function(a9,a8){return(a9===a6)===a4})}else{if(typeof a6==="string"){var a5=a.grep(a7,function(a8){return a8.nodeType===1});if(a2.test(a6)){return a.filter(a6,a5,!a4)}else{a6=a.filter(a6,a5)}}}}return a.grep(a7,function(a9,a8){return(a.inArray(a9,a6)>=0)===a4})};a.fn.extend({find:function(a4){var a6=this.pushStack("","find",a4),a9=0;for(var a7=0,a5=this.length;a7<a5;a7++){a9=a6.length;a.find(a4,this[a7],a6);if(a7>0){for(var ba=a9;ba<a6.length;ba++){for(var a8=0;a8<a9;a8++){if(a6[a8]===a6[ba]){a6.splice(ba--,1);break}}}}}return a6},has:function(a5){var a4=a(a5);return this.filter(function(){for(var a7=0,a6=a4.length;a7<a6;a7++){if(a.contains(this,a4[a7])){return true}}})},not:function(a4){return this.pushStack(am(this,a4,false),"not",a4)},filter:function(a4){return this.pushStack(am(this,a4,true),"filter",a4)},is:function(a4){return !!a4&&a.filter(a4,this).length>0},closest:function(be,a5){if(a.isArray(be)){var bb=[],bd=this[0],ba,a9={},a7,a4=1;if(bd&&be.length){for(var a8=0,a6=be.length;a8<a6;a8++){a7=be[a8];if(!a9[a7]){a9[a7]=a.expr.match.POS.test(a7)?a(a7,a5||this.context):a7}}while(bd&&bd.ownerDocument&&bd!==a5){for(a7 in a9){ba=a9[a7];if(ba.jquery?ba.index(bd)>-1:a(bd).is(ba)){bb.push({selector:a7,elem:bd,level:a4})}}bd=bd.parentNode;a4++}}return bb}var bc=a.expr.match.POS.test(be)?a(be,a5||this.context):null;return this.map(function(bf,bg){while(bg&&bg.ownerDocument&&bg!==a5){if(bc?bc.index(bg)>-1:a(bg).is(be)){return bg}bg=bg.parentNode}return null})},index:function(a4){if(!a4||typeof a4==="string"){return a.inArray(this[0],a4?a(a4):this.parent().children())}return a.inArray(a4.jquery?a4[0]:a4,this)},add:function(a4,a5){var a7=typeof a4==="string"?a(a4,a5||this.context):a.makeArray(a4),a6=a.merge(this.get(),a7);return this.pushStack(B(a7[0])||B(a6[0])?a6:a.unique(a6))},andSelf:function(){return this.add(this.prevObject)}});function B(a4){return !a4||!a4.parentNode||a4.parentNode.nodeType===11}a.each({parent:function(a5){var a4=a5.parentNode;return a4&&a4.nodeType!==11?a4:null},parents:function(a4){return a.dir(a4,"parentNode")},parentsUntil:function(a5,a4,a6){return a.dir(a5,"parentNode",a6)},next:function(a4){return a.nth(a4,2,"nextSibling")},prev:function(a4){return a.nth(a4,2,"previousSibling")},nextAll:function(a4){return a.dir(a4,"nextSibling")},prevAll:function(a4){return a.dir(a4,"previousSibling")},nextUntil:function(a5,a4,a6){return a.dir(a5,"nextSibling",a6)},prevUntil:function(a5,a4,a6){return a.dir(a5,"previousSibling",a6)},siblings:function(a4){return a.sibling(a4.parentNode.firstChild,a4)},children:function(a4){return a.sibling(a4.firstChild)},contents:function(a4){return a.nodeName(a4,"iframe")?a4.contentDocument||a4.contentWindow.document:a.makeArray(a4.childNodes)}},function(a4,a5){a.fn[a4]=function(a8,a6){var a7=a.map(this,a5,a8);if(!Q.test(a4)){a6=a8}if(a6&&typeof a6==="string"){a7=a.filter(a6,a7)}a7=this.length>1?a.unique(a7):a7;if((this.length>1||aQ.test(a6))&&ac.test(a4)){a7=a7.reverse()}return this.pushStack(a7,a4,I.call(arguments).join(","))}});a.extend({filter:function(a6,a4,a5){if(a5){a6=":not("+a6+")"}return a.find.matches(a6,a4)},dir:function(a6,a5,a8){var a4=[],a7=a6[a5];while(a7&&a7.nodeType!==9&&(a8===F||a7.nodeType!==1||!a(a7).is(a8))){if(a7.nodeType===1){a4.push(a7)}a7=a7[a5]}return a4},nth:function(a8,a4,a6,a7){a4=a4||1;var a5=0;for(;a8;a8=a8[a6]){if(a8.nodeType===1&&++a5===a4){break}}return a8},sibling:function(a6,a5){var a4=[];for(;a6;a6=a6.nextSibling){if(a6.nodeType===1&&a6!==a5){a4.push(a6)}}return a4}});var au=/[\n\t]/g,V=/\s+/,az=/\r/g,aW=/href|src|style/,d=/(button|input)/i,C=/(button|input|object|select|textarea)/i,k=/^(a|area)$/i,M=/radio|checkbox/;a.fn.extend({attr:function(a4,a5){return at(this,a4,a5,true,a.attr)},removeAttr:function(a4,a5){return this.each(function(){a.attr(this,a4,"");if(this.nodeType===1){this.removeAttribute(a4)}})},addClass:function(bb){if(a.isFunction(bb)){return this.each(function(be){var bd=a(this);bd.addClass(bb.call(this,be,bd.attr("class")))})}if(bb&&typeof bb==="string"){var a4=(bb||"").split(V);for(var a7=0,a6=this.length;a7<a6;a7++){var a5=this[a7];if(a5.nodeType===1){if(!a5.className){a5.className=bb}else{var a8=" "+a5.className+" ",ba=a5.className;for(var a9=0,bc=a4.length;a9<bc;a9++){if(a8.indexOf(" "+a4[a9]+" ")<0){ba+=" "+a4[a9]}}a5.className=a.trim(ba)}}}}return this},removeClass:function(a9){if(a.isFunction(a9)){return this.each(function(bd){var bc=a(this);bc.removeClass(a9.call(this,bd,bc.attr("class")))})}if((a9&&typeof a9==="string")||a9===F){var ba=(a9||"").split(V);for(var a6=0,a5=this.length;a6<a5;a6++){var a8=this[a6];if(a8.nodeType===1&&a8.className){if(a9){var a7=(" "+a8.className+" ").replace(au," ");for(var bb=0,a4=ba.length;bb<a4;bb++){a7=a7.replace(" "+ba[bb]+" "," ")}a8.className=a.trim(a7)}else{a8.className=""}}}}return this},toggleClass:function(a7,a5){var a6=typeof a7,a4=typeof a5==="boolean";if(a.isFunction(a7)){return this.each(function(a9){var a8=a(this);a8.toggleClass(a7.call(this,a9,a8.attr("class"),a5),a5)})}return this.each(function(){if(a6==="string"){var ba,a9=0,a8=a(this),bb=a5,bc=a7.split(V);while((ba=bc[a9++])){bb=a4?bb:!a8.hasClass(ba);a8[bb?"addClass":"removeClass"](ba)}}else{if(a6==="undefined"||a6==="boolean"){if(this.className){a.data(this,"__className__",this.className)}this.className=this.className||a7===false?"":a.data(this,"__className__")||""}}})},hasClass:function(a4){var a7=" "+a4+" ";for(var a6=0,a5=this.length;a6<a5;a6++){if((" "+this[a6].className+" ").replace(au," ").indexOf(a7)>-1){return true}}return false},val:function(bb){if(bb===F){var a5=this[0];if(a5){if(a.nodeName(a5,"option")){return(a5.attributes.value||{}).specified?a5.value:a5.text}if(a.nodeName(a5,"select")){var a9=a5.selectedIndex,bc=[],bd=a5.options,a8=a5.type==="select-one";if(a9<0){return null}for(var a6=a8?a9:0,ba=a8?a9+1:bd.length;a6<ba;a6++){var a7=bd[a6];if(a7.selected){bb=a(a7).val();if(a8){return bb}bc.push(bb)}}return bc}if(M.test(a5.type)&&!a.support.checkOn){return a5.getAttribute("value")===null?"on":a5.value}return(a5.value||"").replace(az,"")}return F}var a4=a.isFunction(bb);return this.each(function(bg){var bf=a(this),bh=bb;if(this.nodeType!==1){return}if(a4){bh=bb.call(this,bg,bf.val())}if(typeof bh==="number"){bh+=""}if(a.isArray(bh)&&M.test(this.type)){this.checked=a.inArray(bf.val(),bh)>=0}else{if(a.nodeName(this,"select")){var be=a.makeArray(bh);a("option",this).each(function(){this.selected=a.inArray(a(this).val(),be)>=0});if(!be.length){this.selectedIndex=-1}}else{this.value=bh}}})}});a.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a5,a4,ba,bd){if(!a5||a5.nodeType===3||a5.nodeType===8){return F}if(bd&&a4 in a.attrFn){return a(a5)[a4](ba)}var a6=a5.nodeType!==1||!a.isXMLDoc(a5),a9=ba!==F;a4=a6&&a.props[a4]||a4;if(a5.nodeType===1){var a8=aW.test(a4);if(a4==="selected"&&!a.support.optSelected){var bb=a5.parentNode;if(bb){bb.selectedIndex;if(bb.parentNode){bb.parentNode.selectedIndex}}}if(a4 in a5&&a6&&!a8){if(a9){if(a4==="type"&&d.test(a5.nodeName)&&a5.parentNode){a.error("type property can't be changed")}a5[a4]=ba}if(a.nodeName(a5,"form")&&a5.getAttributeNode(a4)){return a5.getAttributeNode(a4).nodeValue}if(a4==="tabIndex"){var bc=a5.getAttributeNode("tabIndex");return bc&&bc.specified?bc.value:C.test(a5.nodeName)||k.test(a5.nodeName)&&a5.href?0:F}return a5[a4]}if(!a.support.style&&a6&&a4==="style"){if(a9){a5.style.cssText=""+ba}return a5.style.cssText}if(a9){a5.setAttribute(a4,""+ba)}var a7=!a.support.hrefNormalized&&a6&&a8?a5.getAttribute(a4,2):a5.getAttribute(a4);return a7===null?F:a7}return a.style(a5,a4,ba)}});var W=/ jQuery\d+="(?:\d+|null)"/g,ad=/^\s+/,K=/(<([\w:]+)[^>]*?)\/>/g,aq=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,c=/<([\w:]+)/,w=/<tbody/i,P=/<|&#?\w+;/,H=/<script|<object|<embed|<option|<style/i,m=/checked\s*(?:[^=]|=\s*.checked.)/i,r=function(a5,a6,a4){return aq.test(a4)?a5:a6+"></"+a4+">"},ag={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};ag.optgroup=ag.option;ag.tbody=ag.tfoot=ag.colgroup=ag.caption=ag.thead;ag.th=ag.td;if(!a.support.htmlSerialize){ag._default=[1,"div<div>","</div>"]}a.fn.extend({text:function(a4){if(a.isFunction(a4)){return this.each(function(a6){var a5=a(this);a5.text(a4.call(this,a6,a5.text()))})}if(typeof a4!=="object"&&a4!==F){return this.empty().append((this[0]&&this[0].ownerDocument||af).createTextNode(a4))}return a.text(this)},wrapAll:function(a4){if(a.isFunction(a4)){return this.each(function(a6){a(this).wrapAll(a4.call(this,a6))})}if(this[0]){var a5=a(a4,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){a5.insertBefore(this[0])}a5.map(function(){var a6=this;while(a6.firstChild&&a6.firstChild.nodeType===1){a6=a6.firstChild}return a6}).append(this)}return this},wrapInner:function(a4){if(a.isFunction(a4)){return this.each(function(a5){a(this).wrapInner(a4.call(this,a5))})}return this.each(function(){var a5=a(this),a6=a5.contents();if(a6.length){a6.wrapAll(a4)}else{a5.append(a4)}})},wrap:function(a4){return this.each(function(){a(this).wrapAll(a4)})},unwrap:function(){return this.parent().each(function(){if(!a.nodeName(this,"body")){a(this).replaceWith(this.childNodes)}}).end()},append:function(){return this.domManip(arguments,true,function(a4){if(this.nodeType===1){this.appendChild(a4)}})},prepend:function(){return this.domManip(arguments,true,function(a4){if(this.nodeType===1){this.insertBefore(a4,this.firstChild)}})},before:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(a5){this.parentNode.insertBefore(a5,this)})}else{if(arguments.length){var a4=a(arguments[0]);a4.push.apply(a4,this.toArray());return this.pushStack(a4,"before",arguments)}}},after:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(a5){this.parentNode.insertBefore(a5,this.nextSibling)})}else{if(arguments.length){var a4=this.pushStack(this,"after",arguments);a4.push.apply(a4,a(arguments[0]).toArray());return a4}}},remove:function(a4,a7){for(var a5=0,a6;(a6=this[a5])!=null;a5++){if(!a4||a.filter(a4,[a6]).length){if(!a7&&a6.nodeType===1){a.cleanData(a6.getElementsByTagName("*"));a.cleanData([a6])}if(a6.parentNode){a6.parentNode.removeChild(a6)}}}return this},empty:function(){for(var a4=0,a5;(a5=this[a4])!=null;a4++){if(a5.nodeType===1){a.cleanData(a5.getElementsByTagName("*"))}while(a5.firstChild){a5.removeChild(a5.firstChild)}}return this},clone:function(a5){var a4=this.map(function(){if(!a.support.noCloneEvent&&!a.isXMLDoc(this)){var a7=this.outerHTML,a6=this.ownerDocument;if(!a7){var a8=a6.createElement("div");a8.appendChild(this.cloneNode(true));a7=a8.innerHTML}return a.clean([a7.replace(W,"").replace(/\=([^="'>\s]+\/)>/g,'="$1">').replace(ad,"")],a6)[0]}else{return this.cloneNode(true)}});if(a5===true){s(this,a4);s(this.find("*"),a4.find("*"))}return a4},html:function(a6){if(a6===F){return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null}else{if(typeof a6==="string"&&!H.test(a6)&&(a.support.leadingWhitespace||!ad.test(a6))&&!ag[(c.exec(a6)||["",""])[1].toLowerCase()]){a6=a6.replace(K,r);try{for(var a5=0,a4=this.length;a5<a4;a5++){if(this[a5].nodeType===1){a.cleanData(this[a5].getElementsByTagName("*"));this[a5].innerHTML=a6}}}catch(a7){this.empty().append(a6)}}else{if(a.isFunction(a6)){this.each(function(ba){var a9=a(this),a8=a9.html();a9.empty().append(function(){return a6.call(this,ba,a8)})})}else{this.empty().append(a6)}}}return this},replaceWith:function(a4){if(this[0]&&this[0].parentNode){if(a.isFunction(a4)){return this.each(function(a7){var a6=a(this),a5=a6.html();a6.replaceWith(a4.call(this,a7,a5))})}if(typeof a4!=="string"){a4=a(a4).detach()}return this.each(function(){var a6=this.nextSibling,a5=this.parentNode;a(this).remove();if(a6){a(a6).before(a4)}else{a(a5).append(a4)}})}else{return this.pushStack(a(a.isFunction(a4)?a4():a4),"replaceWith",a4)}},detach:function(a4){return this.remove(a4,true)},domManip:function(ba,be,bd){var a7,a8,bc=ba[0],a5=[],a9,bb;if(!a.support.checkClone&&arguments.length===3&&typeof bc==="string"&&m.test(bc)){return this.each(function(){a(this).domManip(ba,be,bd,true)})}if(a.isFunction(bc)){return this.each(function(bg){var bf=a(this);ba[0]=bc.call(this,bg,be?bf.html():F);bf.domManip(ba,be,bd)})}if(this[0]){bb=bc&&bc.parentNode;if(a.support.parentNode&&bb&&bb.nodeType===11&&bb.childNodes.length===this.length){a7={fragment:bb}}else{a7=L(ba,this,a5)}a9=a7.fragment;if(a9.childNodes.length===1){a8=a9=a9.firstChild}else{a8=a9.firstChild}if(a8){be=be&&a.nodeName(a8,"tr");for(var a6=0,a4=this.length;a6<a4;a6++){bd.call(be?aR(this[a6],a8):this[a6],a6>0||a7.cacheable||this.length>1?a9.cloneNode(true):a9)}}if(a5.length){a.each(a5,a1)}}return this}});function aR(a4,a5){return a.nodeName(a4,"table")?(a4.getElementsByTagName("tbody")[0]||a4.appendChild(a4.ownerDocument.createElement("tbody"))):a4}function s(a6,a4){var a5=0;a4.each(function(){if(this.nodeName!==(a6[a5]&&a6[a5].nodeName)){return}var bb=a.data(a6[a5++]),ba=a.data(this,bb),a7=bb&&bb.events;if(a7){delete ba.handle;ba.events={};for(var a9 in a7){for(var a8 in a7[a9]){a.event.add(this,a9,a7[a9][a8],a7[a9][a8].data)}}}})}function L(a9,a7,a5){var a8,a4,a6,ba=(a7&&a7[0]?a7[0].ownerDocument||a7[0]:af);if(a9.length===1&&typeof a9[0]==="string"&&a9[0].length<512&&ba===af&&!H.test(a9[0])&&(a.support.checkClone||!m.test(a9[0]))){a4=true;a6=a.fragments[a9[0]];if(a6){if(a6!==1){a8=a6}}}if(!a8){a8=ba.createDocumentFragment();a.clean(a9,ba,a8,a5)}if(a4){a.fragments[a9[0]]=a6?a8:1}return{fragment:a8,cacheable:a4}}a.fragments={};a.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a4,a5){a.fn[a4]=function(a6){var a9=[],bc=a(a6),bb=this.length===1&&this[0].parentNode;if(bb&&bb.nodeType===11&&bb.childNodes.length===1&&bc.length===1){bc[a5](this[0]);return this}else{for(var ba=0,a7=bc.length;ba<a7;ba++){var a8=(ba>0?this.clone(true):this).get();a(bc[ba])[a5](a8);a9=a9.concat(a8)}return this.pushStack(a9,a4,bc.selector)}}});a.extend({clean:function(a6,a8,bf,ba){a8=a8||af;if(typeof a8.createElement==="undefined"){a8=a8.ownerDocument||a8[0]&&a8[0].ownerDocument||af}var bg=[];for(var be=0,a9;(a9=a6[be])!=null;be++){if(typeof a9==="number"){a9+=""}if(!a9){continue}if(typeof a9==="string"&&!P.test(a9)){a9=a8.createTextNode(a9)}else{if(typeof a9==="string"){a9=a9.replace(K,r);var bh=(c.exec(a9)||["",""])[1].toLowerCase(),a7=ag[bh]||ag._default,bd=a7[0],a5=a8.createElement("div");a5.innerHTML=a7[1]+a9+a7[2];while(bd--){a5=a5.lastChild}if(!a.support.tbody){var a4=w.test(a9),bc=bh==="table"&&!a4?a5.firstChild&&a5.firstChild.childNodes:a7[1]==="<table>"&&!a4?a5.childNodes:[];for(var bb=bc.length-1;bb>=0;--bb){if(a.nodeName(bc[bb],"tbody")&&!bc[bb].childNodes.length){bc[bb].parentNode.removeChild(bc[bb])}}}if(!a.support.leadingWhitespace&&ad.test(a9)){a5.insertBefore(a8.createTextNode(ad.exec(a9)[0]),a5.firstChild)}a9=a5.childNodes}}if(a9.nodeType){bg.push(a9)}else{bg=a.merge(bg,a9)}}if(bf){for(be=0;bg[be];be++){if(ba&&a.nodeName(bg[be],"script")&&(!bg[be].type||bg[be].type.toLowerCase()==="text/javascript")){ba.push(bg[be].parentNode?bg[be].parentNode.removeChild(bg[be]):bg[be])}else{if(bg[be].nodeType===1){bg.splice.apply(bg,[be+1,0].concat(a.makeArray(bg[be].getElementsByTagName("script"))))}bf.appendChild(bg[be])}}}return bg},cleanData:function(a5){var a8,a6,a4=a.cache,bb=a.event.special,ba=a.support.deleteExpando;for(var a9=0,a7;(a7=a5[a9])!=null;a9++){if(a7.nodeName&&a.noData[a7.nodeName.toLowerCase()]){continue}a6=a7[a.expando];if(a6){a8=a4[a6];if(a8&&a8.events){for(var bc in a8.events){if(bb[bc]){a.event.remove(a7,bc)}else{ak(a7,bc,a8.handle)}}}if(ba){delete a7[a.expando]}else{if(a7.removeAttribute){a7.removeAttribute(a.expando)}}delete a4[a6]}}}});var aw=/z-?index|font-?weight|opacity|zoom|line-?height/i,X=/alpha\([^)]*\)/,ae=/opacity=([^)]*)/,al=/float/i,aD=/-([a-z])/ig,y=/([A-Z])/g,aU=/^-?\d+(?:px)?$/i,a0=/^-?\d/,aP={position:"absolute",visibility:"hidden",display:"block"},aa=["Left","Right"],aI=["Top","Bottom"],ap=af.defaultView&&af.defaultView.getComputedStyle,aT=a.support.cssFloat?"cssFloat":"styleFloat",l=function(a4,a5){return a5.toUpperCase()};a.fn.css=function(a4,a5){return at(this,a4,a5,true,function(a7,a6,a8){if(a8===F){return a.curCSS(a7,a6)}if(typeof a8==="number"&&!aw.test(a6)){a8+="px"}a.style(a7,a6,a8)})};a.extend({style:function(a8,a5,a9){if(!a8||a8.nodeType===3||a8.nodeType===8){return F}if((a5==="width"||a5==="height")&&parseFloat(a9)<0){a9=F}var a7=a8.style||a8,ba=a9!==F;if(!a.support.opacity&&a5==="opacity"){if(ba){a7.zoom=1;var a4=parseInt(a9,10)+""==="NaN"?"":"alpha(opacity="+a9*100+")";var a6=a7.filter||a.curCSS(a8,"filter")||"";a7.filter=X.test(a6)?a6.replace(X,a4):a4}return a7.filter&&a7.filter.indexOf("opacity=")>=0?(parseFloat(ae.exec(a7.filter)[1])/100)+"":""}if(al.test(a5)){a5=aT}a5=a5.replace(aD,l);if(ba){a7[a5]=a9}return a7[a5]},css:function(a6,a5,a7,a4){if(a5==="width"||a5==="height"){if(a6.offsetWidth!==0){val=n(a6,a5,a4)}else{a.swap(a6,aP,function(){val=n(a6,a5,a4)})}return Math.max(0,Math.round(val))}return a.curCSS(a6,a5,a7)},curCSS:function(ba,a5,a6){var bd,a4=ba.style,a7;if(!a.support.opacity&&a5==="opacity"&&ba.currentStyle){bd=ae.test(ba.currentStyle.filter||"")?(parseFloat(RegExp.$1)/100)+"":"";return bd===""?"1":bd}if(al.test(a5)){a5=aT}if(!a6&&a4&&a4[a5]){bd=a4[a5]}else{if(ap){if(al.test(a5)){a5="float"}a5=a5.replace(y,"-$1").toLowerCase();var bc=ba.ownerDocument.defaultView;if(!bc){return null}var be=bc.getComputedStyle(ba,null);if(be){bd=be.getPropertyValue(a5)}if(a5==="opacity"&&bd===""){bd="1"}}else{if(ba.currentStyle){var a9=a5.replace(aD,l);bd=ba.currentStyle[a5]||ba.currentStyle[a9];if(!aU.test(bd)&&a0.test(bd)){var a8=a4.left,bb=ba.runtimeStyle.left;ba.runtimeStyle.left=ba.currentStyle.left;a4.left=a9==="fontSize"?"1em":(bd||0);bd=a4.pixelLeft+"px";a4.left=a8;ba.runtimeStyle.left=bb}}}}return bd},swap:function(a7,a6,a8){var a4={};for(var a5 in a6){a4[a5]=a7.style[a5];a7.style[a5]=a6[a5]}a8.call(a7);for(a5 in a6){a7.style[a5]=a4[a5]}}});function n(a6,a5,a4){var a8=a5==="width"?aa:aI,a7=a5==="width"?a6.offsetWidth:a6.offsetHeight;if(a4==="border"){return a7}a.each(a8,function(){if(!a4){a7-=parseFloat(a.curCSS(a6,"padding"+this,true))||0}if(a4==="margin"){a7+=parseFloat(a.curCSS(a6,"margin"+this,true))||0}else{a7-=parseFloat(a.curCSS(a6,"border"+this+"Width",true))||0}});return a7}if(a.expr&&a.expr.filters){a.expr.filters.hidden=function(a7){var a5=a7.offsetWidth,a4=a7.offsetHeight,a6=a7.nodeName.toLowerCase()==="tr";return a5===0&&a4===0&&!a6?true:a5>0&&a4>0&&!a6?false:a.curCSS(a7,"display")==="none"};a.expr.filters.visible=function(a4){return !a.expr.filters.hidden(a4)}}var aj=aV(),aO=/<script(.|\s)*?\/script>/gi,q=/select|textarea/i,aF=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,t=/\=\?(&|$)/,G=/\?/,a3=/(\?|&)_=.*?(&|$)/,E=/^(\w+:)?\/\/([^\/?#]+)/,i=/%20/g,z=a.fn.load;a.fn.extend({load:function(a6,a9,ba){if(typeof a6!=="string"&&z){return z.apply(this,arguments)}else{if(!this.length){return this}}var a8=a6.indexOf(" ");if(a8>=0){var a4=a6.slice(a8,a6.length);a6=a6.slice(0,a8)}var a7="GET";if(a9){if(a.isFunction(a9)){ba=a9;a9=null}else{if(typeof a9==="object"){a9=a.param(a9,a.ajaxSettings.traditional);a7="POST"}}}var a5=this;a.ajax({url:a6,type:a7,dataType:"html",data:a9,complete:function(bc,bb){if(bb==="success"||bb==="notmodified"){a5.html(a4?a("<div />").append(bc.responseText.replace(aO,"")).find(a4):bc.responseText)}if(ba){a5.each(ba,[bc.responseText,bb,bc])}}});return this},serialize:function(){return a.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?a.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||q.test(this.nodeName)||aF.test(this.type))}).map(function(a4,a5){var a6=a(this).val();return a6==null?null:a.isArray(a6)?a.map(a6,function(a8,a7){return{name:a5.name,value:a8}}):{name:a5.name,value:a6}}).get()}});a.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a4,a5){a.fn[a5]=function(a6){return this.bind(a5,a6)}});a.extend({get:function(a4,a6,a7,a5){if(a.isFunction(a6)){a5=a5||a7;a7=a6;a6=null}return a.ajax({type:"GET",url:a4,data:a6,success:a7,dataType:a5})},getScript:function(a4,a5){return a.get(a4,null,a5,"script")},getJSON:function(a4,a5,a6){return a.get(a4,a5,a6,"json")},post:function(a4,a6,a7,a5){if(a.isFunction(a6)){a5=a5||a7;a7=a6;a6={}}return a.ajax({type:"POST",url:a4,data:a6,success:a7,dataType:a5})},ajaxSetup:function(a4){a.extend(a.ajaxSettings,a4)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:aS.XMLHttpRequest&&(aS.location.protocol!=="file:"||!aS.ActiveXObject)?function(){return new aS.XMLHttpRequest()}:function(){try{return new aS.ActiveXObject("Microsoft.XMLHTTP")}catch(a4){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},ajax:function(bj){var bd=a.extend(true,{},a.ajaxSettings,bj),bn,bi,bm,a6=bd.type.toUpperCase();bd.context=bj&&bj.context||bd;if(bd.data&&bd.processData&&typeof bd.data!=="string"){bd.data=a.param(bd.data,bd.traditional)}if(bd.dataType==="jsonp"){if(a6==="GET"){if(!t.test(bd.url)){bd.url+=(G.test(bd.url)?"&":"?")+(bd.jsonp||"callback")+"=?"}}else{if(!bd.data||!t.test(bd.data)){bd.data=(bd.data?bd.data+"&":"")+(bd.jsonp||"callback")+"=?"}}bd.dataType="json"}if(bd.dataType==="json"&&(bd.data&&t.test(bd.data)||t.test(bd.url))){bn=bd.jsonpCallback||("jsonp"+aj++);if(bd.data){bd.data=(bd.data+"").replace(t,"="+bn+"$1")}bd.url=bd.url.replace(t,"="+bn+"$1");bd.dataType="script";aS[bn]=aS[bn]||function(bp){bm=bp;a.ajax.handleSuccess(bd,ba,bi,bm);a.ajax.handleComplete(bd,ba,bi,bm);aS[bn]=F;try{delete aS[bn]}catch(bo){}if(a7){a7.removeChild(bk)}}}if(bd.dataType==="script"&&bd.cache===null){bd.cache=false}if(bd.cache===false&&a6==="GET"){var a4=aV();var bl=bd.url.replace(a3,"$1_="+a4+"$2");bd.url=bl+((bl===bd.url)?(G.test(bd.url)?"&":"?")+"_="+a4:"")}if(bd.data&&a6==="GET"){bd.url+=(G.test(bd.url)?"&":"?")+bd.data}if(bd.global&&a.ajax.active++===0){a.event.trigger("ajaxStart")}var bh=E.exec(bd.url),a8=bh&&(bh[1]&&bh[1]!==location.protocol||bh[2]!==location.host);if(bd.dataType==="script"&&a6==="GET"&&a8){var a7=af.getElementsByTagName("head")[0]||af.documentElement;var bk=af.createElement("script");bk.src=bd.url;if(bd.scriptCharset){bk.charset=bd.scriptCharset}if(!bn){var bf=false;bk.onload=bk.onreadystatechange=function(){if(!bf&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){bf=true;a.ajax.handleSuccess(bd,ba,bi,bm);a.ajax.handleComplete(bd,ba,bi,bm);bk.onload=bk.onreadystatechange=null;if(a7&&bk.parentNode){a7.removeChild(bk)}}}}a7.insertBefore(bk,a7.firstChild);return F}var bc=false;var ba=bd.xhr();if(!ba){return}if(bd.username){ba.open(a6,bd.url,bd.async,bd.username,bd.password)}else{ba.open(a6,bd.url,bd.async)}try{if(bd.data||bj&&bj.contentType){ba.setRequestHeader("Content-Type",bd.contentType)}if(bd.ifModified){if(a.lastModified[bd.url]){ba.setRequestHeader("If-Modified-Since",a.lastModified[bd.url])}if(a.ajax.etag[bd.url]){ba.setRequestHeader("If-None-Match",a.ajax.etag[bd.url])}}if(!a8){ba.setRequestHeader("X-Requested-With","XMLHttpRequest")}ba.setRequestHeader("Accept",bd.dataType&&bd.accepts[bd.dataType]?bd.accepts[bd.dataType]+", */*":bd.accepts._default)}catch(bb){}if(bd.beforeSend&&bd.beforeSend.call(bd.context,ba,bd)===false){if(bd.global&&a.ajax.active--===1){a.event.trigger("ajaxStop")}ba.abort();return false}if(bd.global){a.ajax.triggerGlobal(bd,"ajaxSend",[ba,bd])}var be=ba.onreadystatechange=function(bo){if(!ba||ba.readyState===0||bo==="abort"){if(!bc){a.ajax.handleComplete(bd,ba,bi,bm)}bc=true;if(ba){ba.onreadystatechange=a.noop}}else{if(!bc&&ba&&(ba.readyState===4||bo==="timeout")){bc=true;ba.onreadystatechange=a.noop;bi=bo==="timeout"?"timeout":!a.ajax.httpSuccess(ba)?"error":bd.ifModified&&a.ajax.httpNotModified(ba,bd.url)?"notmodified":"success";var bp;if(bi==="success"){try{bm=a.ajax.httpData(ba,bd.dataType,bd)}catch(bq){bi="parsererror";bp=bq}}if(bi==="success"||bi==="notmodified"){if(!bn){a.ajax.handleSuccess(bd,ba,bi,bm)}}else{a.ajax.handleError(bd,ba,bi,bp)}a.ajax.handleComplete(bd,ba,bi,bm);if(bo==="timeout"){ba.abort()}if(bd.async){ba=null}}}};try{var a5=ba.abort;ba.abort=function(){if(ba){a5.call(ba)}be("abort")}}catch(bg){}if(bd.async&&bd.timeout>0){setTimeout(function(){if(ba&&!bc){be("timeout")}},bd.timeout)}try{ba.send(a6==="POST"||a6==="PUT"||a6==="DELETE"?bd.data:null)}catch(a9){a.ajax.handleError(bd,ba,null,e);a.ajax.handleComplete(bd,ba,bi,bm)}if(!bd.async){be()}return ba},param:function(a4,a6){var a5=[],a8=function(a9,ba){ba=a.isFunction(ba)?ba():ba;a5[a5.length]=encodeURIComponent(a9)+"="+encodeURIComponent(ba)};if(a6===F){a6=a.ajaxSettings.traditional}if(a.isArray(a4)||a4.jquery){a.each(a4,function(){a8(this.name,this.value)})}else{for(var a7 in a4){u(a7,a4[a7],a6,a8)}}return a5.join("&").replace(i,"+")}});function u(a5,a7,a4,a6){if(a.isArray(a7)){a.each(a7,function(a9,a8){if(a4||/\[\]$/.test(a5)){a6(a5,a8)}else{u(a5+"["+(typeof a8==="object"||a.isArray(a8)?a9:"")+"]",a8,a4,a6)}})}else{if(!a4&&a7!=null&&typeof a7==="object"){a.each(a7,function(a9,a8){u(a5+"["+a9+"]",a8,a4,a6)})}else{a6(a5,a7)}}}a.extend(a.ajax,{active:0,lastModified:{},etag:{},handleError:function(a5,a7,a4,a6){if(a5.error){a5.error.call(a5.context,a7,a4,a6)}if(a5.global){a.ajax.triggerGlobal(a5,"ajaxError",[a7,a5,a6])}},handleSuccess:function(a5,a7,a4,a6){if(a5.success){a5.success.call(a5.context,a6,a4,a7)}if(a5.global){a.ajax.triggerGlobal(a5,"ajaxSuccess",[a7,a5])}},handleComplete:function(a5,a6,a4){if(a5.complete){a5.complete.call(a5.context,a6,a4)}if(a5.global){a.ajax.triggerGlobal(a5,"ajaxComplete",[a6,a5])}if(a5.global&&a.ajax.active--===1){a.event.trigger("ajaxStop")}},triggerGlobal:function(a6,a5,a4){(a6.context&&a6.context.url==null?a(a6.context):a.event).trigger(a5,a4)},httpSuccess:function(a5){try{return !a5.status&&location.protocol==="file:"||(a5.status>=200&&a5.status<300)||a5.status===304||a5.status===1223||a5.status===0}catch(a4){}return false},httpNotModified:function(a7,a4){var a6=a7.getResponseHeader("Last-Modified"),a5=a7.getResponseHeader("Etag");if(a6){a.ajax.lastModified[a4]=a6}if(a5){a.ajax.etag[a4]=a5}return a7.status===304||a7.status===0},httpData:function(a9,a7,a6){var a5=a9.getResponseHeader("content-type")||"",a4=a7==="xml"||!a7&&a5.indexOf("xml")>=0,a8=a4?a9.responseXML:a9.responseText;if(a4&&a8.documentElement.nodeName==="parsererror"){a.error("parsererror")}if(a6&&a6.dataFilter){a8=a6.dataFilter(a8,a7)}if(typeof a8==="string"){if(a7==="json"||!a7&&a5.indexOf("json")>=0){a8=a.parseJSON(a8)}else{if(a7==="script"||!a7&&a5.indexOf("javascript")>=0){a.globalEval(a8)}}}return a8}});a.extend(a.ajax);var J={},ai=/toggle|show|hide/,ay=/^([+\-]=)?([\d+.\-]+)(.*)$/,aJ,ao=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];a.fn.extend({show:function(a5,bd){if(a5||a5===0){return this.animate(aH("show",3),a5,bd)}else{for(var ba=0,a7=this.length;ba<a7;ba++){var a4=a.data(this[ba],"olddisplay");this[ba].style.display=a4||"";if(a.css(this[ba],"display")==="none"){var bc=this[ba].nodeName,bb;if(J[bc]){bb=J[bc]}else{var a6=a("<"+bc+" />").appendTo("body");bb=a6.css("display");if(bb==="none"){bb="block"}a6.remove();J[bc]=bb}a.data(this[ba],"olddisplay",bb)}}for(var a9=0,a8=this.length;a9<a8;a9++){this[a9].style.display=a.data(this[a9],"olddisplay")||""}return this}},hide:function(a9,ba){if(a9||a9===0){return this.animate(aH("hide",3),a9,ba)}else{for(var a8=0,a5=this.length;a8<a5;a8++){var a4=a.data(this[a8],"olddisplay");if(!a4&&a4!=="none"){a.data(this[a8],"olddisplay",a.css(this[a8],"display"))}}for(var a7=0,a6=this.length;a7<a6;a7++){this[a7].style.display="none"}return this}},_toggle:a.fn.toggle,toggle:function(a6,a5){var a4=typeof a6==="boolean";if(a.isFunction(a6)&&a.isFunction(a5)){this._toggle.apply(this,arguments)}else{if(a6==null||a4){this.each(function(){var a7=a4?a6:a(this).is(":hidden");a(this)[a7?"show":"hide"]()})}else{this.animate(aH("toggle",3),a6,a5)}}return this},fadeTo:function(a4,a6,a5){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:a6},a4,a5)},animate:function(a8,a5,a7,a6){var a4=a.speed(a5,a7,a6);if(a.isEmptyObject(a8)){return this.each(a4.complete)}return this[a4.queue===false?"each":"queue"](function(){var bb=a.extend({},a4),bd,bc=this.nodeType===1&&a(this).is(":hidden"),a9=this;for(bd in a8){var ba=bd.replace(aD,l);if(bd!==ba){a8[ba]=a8[bd];delete a8[bd];bd=ba}if(a8[bd]==="hide"&&bc||a8[bd]==="show"&&!bc){return bb.complete.call(this)}if((bd==="height"||bd==="width")&&this.style){bb.display=a.css(this,"display");bb.overflow=this.style.overflow}if(a.isArray(a8[bd])){(bb.specialEasing=bb.specialEasing||{})[bd]=a8[bd][1];a8[bd]=a8[bd][0]}}if(bb.overflow!=null){this.style.overflow="hidden"}bb.curAnim=a.extend({},a8);a.each(a8,function(bf,bj){var bi=new a.fx(a9,bb,bf);if(ai.test(bj)){bi[bj==="toggle"?bc?"show":"hide":bj](a8)}else{var bh=ay.exec(bj),bk=bi.cur(true)||0;if(bh){var be=parseFloat(bh[2]),bg=bh[3]||"px";if(bg!=="px"){a9.style[bf]=(be||1)+bg;bk=((be||1)/bi.cur(true))*bk;a9.style[bf]=bk+bg}if(bh[1]){be=((bh[1]==="-="?-1:1)*be)+bk}bi.custom(bk,be,bg)}else{bi.custom(bk,bj,"")}}});return true})},stop:function(a5,a4){var a6=a.timers;if(a5){this.queue([])}this.each(function(){for(var a7=a6.length-1;a7>=0;a7--){if(a6[a7].elem===this){if(a4){a6[a7](true)}a6.splice(a7,1)}}});if(!a4){this.dequeue()}return this}});function aH(a5,a4){var a6={};a.each(ao.concat.apply([],ao.slice(0,a4)),function(){a6[this]=a5});return a6}a.each({slideDown:aH("show",1),slideUp:aH("hide",1),slideToggle:aH("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(a4,a5){a.fn[a4]=function(a6,a7){return this.animate(a5,a6,a7)}});a.extend({speed:function(a6,a7,a5){var a4=a6&&typeof a6==="object"?a6:{complete:a5||!a5&&a7||a.isFunction(a6)&&a6,duration:a6,easing:a5&&a7||a7&&!a.isFunction(a7)&&a7};a4.duration=a.fx.off?0:typeof a4.duration==="number"?a4.duration:a.fx.speeds[a4.duration]||a.fx.speeds._default;a4.old=a4.complete;a4.complete=function(){if(a4.queue!==false){a(this).dequeue()}if(a.isFunction(a4.old)){a4.old.call(this)}};return a4},easing:{linear:function(a6,a7,a4,a5){return a4+a5*a6},swing:function(a6,a7,a4,a5){return((-Math.cos(a6*Math.PI)/2)+0.5)*a5+a4}},timers:[],fx:function(a5,a4,a6){this.options=a4;this.elem=a5;this.prop=a6;if(!a4.orig){a4.orig={}}}});a.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(a.fx.step[this.prop]||a.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(a5){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var a4=parseFloat(a.css(this.elem,this.prop,a5));return a4&&a4>-10000?a4:parseFloat(a.curCSS(this.elem,this.prop))||0},custom:function(a8,a7,a6){this.startTime=aV();this.start=a8;this.end=a7;this.unit=a6||this.unit||"px";this.now=this.start;this.pos=this.state=0;var a4=this;function a5(a9){return a4.step(a9)}a5.elem=this.elem;if(a5()&&a.timers.push(a5)&&!aJ){aJ=setInterval(a.fx.tick,13)}},show:function(){this.options.orig[this.prop]=a.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());a(this.elem).show()},hide:function(){this.options.orig[this.prop]=a.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a7){var bc=aV(),a8=true;if(a7||bc>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var a9 in this.options.curAnim){if(this.options.curAnim[a9]!==true){a8=false}}if(a8){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;var a6=a.data(this.elem,"olddisplay");this.elem.style.display=a6?a6:this.options.display;if(a.css(this.elem,"display")==="none"){this.elem.style.display="block"}}if(this.options.hide){a(this.elem).hide()}if(this.options.hide||this.options.show){for(var a4 in this.options.curAnim){a.style(this.elem,a4,this.options.orig[a4])}}this.options.complete.call(this.elem)}return false}else{var a5=bc-this.startTime;this.state=a5/this.options.duration;var ba=this.options.specialEasing&&this.options.specialEasing[this.prop];var bb=this.options.easing||(a.easing.swing?"swing":"linear");this.pos=a.easing[ba||bb](this.state,a5,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};a.extend(a.fx,{tick:function(){var a5=a.timers;for(var a4=0;a4<a5.length;a4++){if(!a5[a4]()){a5.splice(a4--,1)}}if(!a5.length){a.fx.stop()}},stop:function(){clearInterval(aJ);aJ=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a4){a.style(a4.elem,"opacity",a4.now)},_default:function(a4){if(a4.elem.style&&a4.elem.style[a4.prop]!=null){a4.elem.style[a4.prop]=(a4.prop==="width"||a4.prop==="height"?Math.max(0,a4.now):a4.now)+a4.unit}else{a4.elem[a4.prop]=a4.now}}}});if(a.expr&&a.expr.filters){a.expr.filters.animated=function(a4){return a.grep(a.timers,function(a5){return a4===a5.elem}).length}}if("getBoundingClientRect" in af.documentElement){a.fn.offset=function(bg){var a7=this[0];if(bg){return this.each(function(bh){a.offset.setOffset(this,bg,bh)})}if(!a7||!a7.ownerDocument){return null}if(a7===a7.ownerDocument.body){return a.offset.bodyOffset(a7)}var ba=a7.getBoundingClientRect(),bf=a7.ownerDocument,bb=bf.body,a5=bf.documentElement,bc=ar(bf),a9=a5.clientTop||bb.clientTop||0,bd=a5.clientLeft||bb.clientLeft||0,a4=(bc.pageYOffset||a.support.boxModel&&a5.scrollTop||bb.scrollTop),a8=(bc.pageXOffset||a.support.boxModel&&a5.scrollLeft||bb.scrollLeft),be=ba.top+a4-a9,a6=ba.left+a8-bd;return{top:be,left:a6}}}else{a.fn.offset=function(bf){var a9=this[0];if(bf){return this.each(function(bg){a.offset.setOffset(this,bf,bg)})}if(!a9||!a9.ownerDocument){return null}if(a9===a9.ownerDocument.body){return a.offset.bodyOffset(a9)}a.offset.initialize();var a6=a9.offsetParent,a5=a9,be=a9.ownerDocument,bc,a7=be.documentElement,ba=be.body,bb=be.defaultView,a4=bb?bb.getComputedStyle(a9,null):a9.currentStyle,bd=a9.offsetTop,a8=a9.offsetLeft;while((a9=a9.parentNode)&&a9!==ba&&a9!==a7){if(a.offset.supportsFixedPosition&&a4.position==="fixed"){break}bc=bb?bb.getComputedStyle(a9,null):a9.currentStyle;bd-=a9.scrollTop;a8-=a9.scrollLeft;if(a9===a6){bd+=a9.offsetTop;a8+=a9.offsetLeft;if(a.offset.doesNotAddBorder&&!(a.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(a9.nodeName))){bd+=parseFloat(bc.borderTopWidth)||0;a8+=parseFloat(bc.borderLeftWidth)||0}a5=a6;a6=a9.offsetParent}if(a.offset.subtractsBorderForOverflowNotVisible&&bc.overflow!=="visible"){bd+=parseFloat(bc.borderTopWidth)||0;a8+=parseFloat(bc.borderLeftWidth)||0}a4=bc}if(a4.position==="relative"||a4.position==="static"){bd+=ba.offsetTop;a8+=ba.offsetLeft}if(a.offset.supportsFixedPosition&&a4.position==="fixed"){bd+=Math.max(a7.scrollTop,ba.scrollTop);a8+=Math.max(a7.scrollLeft,ba.scrollLeft)}return{top:bd,left:a8}}}a.offset={initialize:function(){var a4=af.body,a5=af.createElement("div"),a8,ba,a9,bb,a6=parseFloat(a.curCSS(a4,"marginTop",true))||0,a7="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";a.extend(a5.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});a5.innerHTML=a7;a4.insertBefore(a5,a4.firstChild);a8=a5.firstChild;ba=a8.firstChild;bb=a8.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(ba.offsetTop!==5);this.doesAddBorderForTableAndCells=(bb.offsetTop===5);ba.style.position="fixed";ba.style.top="20px";this.supportsFixedPosition=(ba.offsetTop===20||ba.offsetTop===15);ba.style.position=ba.style.top="";a8.style.overflow="hidden";a8.style.position="relative";this.subtractsBorderForOverflowNotVisible=(ba.offsetTop===-5);this.doesNotIncludeMarginInBodyOffset=(a4.offsetTop!==a6);a4.removeChild(a5);a4=a5=a8=ba=a9=bb=null;a.offset.initialize=a.noop},bodyOffset:function(a4){var a6=a4.offsetTop,a5=a4.offsetLeft;a.offset.initialize();if(a.offset.doesNotIncludeMarginInBodyOffset){a6+=parseFloat(a.curCSS(a4,"marginTop",true))||0;a5+=parseFloat(a.curCSS(a4,"marginLeft",true))||0}return{top:a6,left:a5}},setOffset:function(a9,a5,a6){if(/static/.test(a.curCSS(a9,"position"))){a9.style.position="relative"}var a8=a(a9),bb=a8.offset(),a4=parseInt(a.curCSS(a9,"top",true),10)||0,ba=parseInt(a.curCSS(a9,"left",true),10)||0;if(a.isFunction(a5)){a5=a5.call(a9,a6,bb)}var a7={top:(a5.top-bb.top)+a4,left:(a5.left-bb.left)+ba};if("using" in a5){a5.using.call(a9,a7)}else{a8.css(a7)}}};a.fn.extend({position:function(){if(!this[0]){return null}var a6=this[0],a5=this.offsetParent(),a7=this.offset(),a4=/^body|html$/i.test(a5[0].nodeName)?{top:0,left:0}:a5.offset();a7.top-=parseFloat(a.curCSS(a6,"marginTop",true))||0;a7.left-=parseFloat(a.curCSS(a6,"marginLeft",true))||0;a4.top+=parseFloat(a.curCSS(a5[0],"borderTopWidth",true))||0;a4.left+=parseFloat(a.curCSS(a5[0],"borderLeftWidth",true))||0;return{top:a7.top-a4.top,left:a7.left-a4.left}},offsetParent:function(){return this.map(function(){var a4=this.offsetParent||af.body;while(a4&&(!/^body|html$/i.test(a4.nodeName)&&a.css(a4,"position")==="static")){a4=a4.offsetParent}return a4})}});a.each(["Left","Top"],function(a5,a4){var a6="scroll"+a4;a.fn[a6]=function(a9){var a7=this[0],a8;if(!a7){return null}if(a9!==F){return this.each(function(){a8=ar(this);if(a8){a8.scrollTo(!a5?a9:a(a8).scrollLeft(),a5?a9:a(a8).scrollTop())}else{this[a6]=a9}})}else{a8=ar(a7);return a8?("pageXOffset" in a8)?a8[a5?"pageYOffset":"pageXOffset"]:a.support.boxModel&&a8.document.documentElement[a6]||a8.document.body[a6]:a7[a6]}}});function ar(a4){return("scrollTo" in a4&&a4.document)?a4:a4.nodeType===9?a4.defaultView||a4.parentWindow:false}a.each(["Height","Width"],function(a5,a4){var a6=a4.toLowerCase();a.fn["inner"+a4]=function(){return this[0]?a.css(this[0],a6,false,"padding"):null};a.fn["outer"+a4]=function(a7){return this[0]?a.css(this[0],a6,false,a7?"margin":"border"):null};a.fn[a6]=function(a7){var a8=this[0];if(!a8){return a7==null?null:this}if(a.isFunction(a7)){return this.each(function(ba){var a9=a(this);a9[a6](a7.call(this,ba,a9[a6]()))})}return("scrollTo" in a8&&a8.document)?a8.document.compatMode==="CSS1Compat"&&a8.document.documentElement["client"+a4]||a8.document.body["client"+a4]:(a8.nodeType===9)?Math.max(a8.documentElement["client"+a4],a8.body["scroll"+a4],a8.documentElement["scroll"+a4],a8.body["offset"+a4],a8.documentElement["offset"+a4]):a7===F?a.css(a8,a6):this.css(a6,typeof a7==="string"?a7:a7+"px")}});aS.jQuery=aS.$=a})(window);
(function(){var n=this,A=n._,r=typeof StopIteration!=="undefined"?StopIteration:"__break__",B=function(a){return a.replace(/([.*+?^${}()|[\]\/\\])/g,"\\$1")},j=Array.prototype,l=Object.prototype,o=j.slice,C=j.unshift,D=l.toString,p=l.hasOwnProperty,E=l.propertyIsEnumerable,s=j.forEach,t=j.map,u=j.reduce,v=j.reduceRight,w=j.filter,x=j.every,y=j.some,m=j.indexOf,z=j.lastIndexOf;l=Array.isArray;var F=Object.keys,b=function(a){return new k(a)};if(typeof exports!=="undefined")exports._=b;n._=b;b.VERSION=
"0.6.0";var i=b.forEach=function(a,c,d){try{if(s&&a.forEach===s)a.forEach(c,d);else if(b.isNumber(a.length))for(var e=0,f=a.length;e<f;e++)c.call(d,a[e],e,a);else for(e in a)p.call(a,e)&&c.call(d,a[e],e,a)}catch(g){if(g!=r)throw g;}return a};b.map=function(a,c,d){if(t&&a.map===t)return a.map(c,d);var e=[];i(a,function(f,g,h){e.push(c.call(d,f,g,h))});return e};b.reduce=function(a,c,d,e){if(u&&a.reduce===u)return a.reduce(b.bind(d,e),c);i(a,function(f,g,h){c=d.call(e,c,f,g,h)});return c};b.reduceRight=
function(a,c,d,e){if(v&&a.reduceRight===v)return a.reduceRight(b.bind(d,e),c);a=b.clone(b.toArray(a)).reverse();return b.reduce(a,c,d,e)};b.detect=function(a,c,d){var e;i(a,function(f,g,h){if(c.call(d,f,g,h)){e=f;b.breakLoop()}});return e};b.filter=function(a,c,d){if(w&&a.filter===w)return a.filter(c,d);var e=[];i(a,function(f,g,h){c.call(d,f,g,h)&&e.push(f)});return e};b.reject=function(a,c,d){var e=[];i(a,function(f,g,h){!c.call(d,f,g,h)&&e.push(f)});return e};b.every=function(a,c,d){c=c||b.identity;
if(x&&a.every===x)return a.every(c,d);var e=true;i(a,function(f,g,h){(e=e&&c.call(d,f,g,h))||b.breakLoop()});return e};b.some=function(a,c,d){c=c||b.identity;if(y&&a.some===y)return a.some(c,d);var e=false;i(a,function(f,g,h){if(e=c.call(d,f,g,h))b.breakLoop()});return e};b.include=function(a,c){if(m&&a.indexOf===m)return a.indexOf(c)!=-1;var d=false;i(a,function(e){if(d=e===c)b.breakLoop()});return d};b.invoke=function(a,c){var d=b.rest(arguments,2);return b.map(a,function(e){return(c?e[c]:e).apply(e,
d)})};b.pluck=function(a,c){return b.map(a,function(d){return d[c]})};b.max=function(a,c,d){if(!c&&b.isArray(a))return Math.max.apply(Math,a);var e={computed:-Infinity};i(a,function(f,g,h){g=c?c.call(d,f,g,h):f;g>=e.computed&&(e={value:f,computed:g})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a))return Math.min.apply(Math,a);var e={computed:Infinity};i(a,function(f,g,h){g=c?c.call(d,f,g,h):f;g<e.computed&&(e={value:f,computed:g})});return e.value};b.sortBy=function(a,c,d){return b.pluck(b.map(a,
function(e,f,g){return{value:e,criteria:c.call(d,e,f,g)}}).sort(function(e,f){e=e.criteria;f=f.criteria;return e<f?-1:e>f?1:0}),"value")};b.sortedIndex=function(a,c,d){d=d||b.identity;for(var e=0,f=a.length;e<f;){var g=e+f>>1;d(a[g])<d(c)?(e=g+1):(f=g)}return e};b.toArray=function(a){if(!a)return[];if(a.toArray)return a.toArray();if(b.isArray(a))return a;if(b.isArguments(a))return o.call(a);return b.values(a)};b.size=function(a){return b.toArray(a).length};b.first=function(a,c,d){return c&&!d?o.call(a,
0,c):a[0]};b.rest=function(a,c,d){return o.call(a,b.isUndefined(c)||d?1:c)};b.last=function(a){return a[a.length-1]};b.compact=function(a){return b.filter(a,function(c){return!!c})};b.flatten=function(a){return b.reduce(a,[],function(c,d){if(b.isArray(d))return c.concat(b.flatten(d));c.push(d);return c})};b.without=function(a){var c=b.rest(arguments);return b.filter(a,function(d){return!b.include(c,d)})};b.uniq=function(a,c){return b.reduce(a,[],function(d,e,f){if(0==f||(c===true?b.last(d)!=e:!b.include(d,
e)))d.push(e);return d})};b.intersect=function(a){var c=b.rest(arguments);return b.filter(b.uniq(a),function(d){return b.every(c,function(e){return b.indexOf(e,d)>=0})})};b.zip=function(){for(var a=b.toArray(arguments),c=b.max(b.pluck(a,"length")),d=new Array(c),e=0;e<c;e++)d[e]=b.pluck(a,String(e));return d};b.indexOf=function(a,c){if(m&&a.indexOf===m)return a.indexOf(c);for(var d=0,e=a.length;d<e;d++)if(a[d]===c)return d;return-1};b.lastIndexOf=function(a,c){if(z&&a.lastIndexOf===z)return a.lastIndexOf(c);
for(var d=a.length;d--;)if(a[d]===c)return d;return-1};b.range=function(a,c,d){var e=b.toArray(arguments),f=e.length<=1;a=f?0:e[0];c=f?e[0]:e[1];d=e[2]||1;e=Math.ceil((c-a)/d);if(e<=0)return[];e=new Array(e);f=a;for(var g=0;;f+=d){if((d>0?f-c:c-f)>=0)return e;e[g++]=f}};b.bind=function(a,c){var d=b.rest(arguments,2);return function(){return a.apply(c||{},d.concat(b.toArray(arguments)))}};b.bindAll=function(a){var c=b.rest(arguments);if(c.length==0)c=b.functions(a);i(c,function(d){a[d]=b.bind(a[d],
a)});return a};b.delay=function(a,c){var d=b.rest(arguments,2);return setTimeout(function(){return a.apply(a,d)},c)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(b.rest(arguments)))};b.wrap=function(a,c){return function(){var d=[a].concat(b.toArray(arguments));return c.apply(c,d)}};b.compose=function(){var a=b.toArray(arguments);return function(){for(var c=b.toArray(arguments),d=a.length-1;d>=0;d--)c=[a[d].apply(this,c)];return c[0]}};b.keys=F||function(a){if(b.isArray(a))return b.range(0,
a.length);var c=[];for(var d in a)p.call(a,d)&&c.push(d);return c};b.values=function(a){return b.map(a,b.identity)};b.functions=function(a){return b.filter(b.keys(a),function(c){return b.isFunction(a[c])}).sort()};b.extend=function(a,c){for(var d in c)a[d]=c[d];return a};b.clone=function(a){if(b.isArray(a))return a.slice(0);return b.extend({},a)};b.tap=function(a,c){c(a);return a};b.isEqual=function(a,c){if(a===c)return true;var d=typeof a;if(d!=typeof c)return false;if(a==c)return true;if(!a&&c||
a&&!c)return false;if(a.isEqual)return a.isEqual(c);if(b.isDate(a)&&b.isDate(c))return a.getTime()===c.getTime();if(b.isNaN(a)&&b.isNaN(c))return true;if(b.isRegExp(a)&&b.isRegExp(c))return a.source===c.source&&a.global===c.global&&a.ignoreCase===c.ignoreCase&&a.multiline===c.multiline;if(d!=="object")return false;if(a.length&&a.length!==c.length)return false;d=b.keys(a);var e=b.keys(c);if(d.length!=e.length)return false;for(var f in a)if(!b.isEqual(a[f],c[f]))return false;return true};b.isEmpty=
function(a){if(b.isArray(a))return a.length===0;for(var c in a)if(p.call(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=l||function(a){return!!(a&&a.concat&&a.unshift)};b.isArguments=function(a){return a&&b.isNumber(a.length)&&!a.concat&&!a.substr&&!a.apply&&!E.call(a,"length")};b.isFunction=function(a){return!!(a&&a.constructor&&a.call&&a.apply)};b.isString=function(a){return!!(a===""||a&&a.charCodeAt&&a.substr)};b.isNumber=function(a){return a===+a||
D.call(a)==="[object Number]"};b.isDate=function(a){return!!(a&&a.getTimezoneOffset&&a.setUTCFullYear)};b.isRegExp=function(a){return!!(a&&a.test&&a.exec&&(a.ignoreCase||a.ignoreCase===false))};b.isNaN=function(a){return b.isNumber(a)&&isNaN(a)};b.isNull=function(a){return a===null};b.isUndefined=function(a){return typeof a=="undefined"};b.noConflict=function(){n._=A;return this};b.identity=function(a){return a};b.times=function(a,c,d){for(var e=0;e<a;e++)c.call(d,e)};b.breakLoop=function(){throw r;
};b.mixin=function(a){i(b.functions(a),function(c){G(c,b[c]=a[c])})};var H=0;b.uniqueId=function(a){var c=H++;return a?a+c:c};b.templateSettings={start:"<%",end:"%>",interpolate:/<%=(.+?)%>/g};b.template=function(a,c){var d=b.templateSettings,e=new RegExp("'(?=[^"+d.end.substr(0,1)+"]*"+B(d.end)+")","g");a=new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+a.replace(/[\r\t\n]/g," ").replace(e,"\t").split("'").join("\\'").split("\t").join("'").replace(d.interpolate,
"',$1,'").split(d.start).join("');").split(d.end).join("p.push('")+"');}return p.join('');");return c?a(c):a};b.each=b.forEach;b.foldl=b.inject=b.reduce;b.foldr=b.reduceRight;b.select=b.filter;b.all=b.every;b.any=b.some;b.head=b.first;b.tail=b.rest;b.methods=b.functions;var k=function(a){this._wrapped=a},q=function(a,c){return c?b(a).chain():a},G=function(a,c){k.prototype[a]=function(){var d=b.toArray(arguments);C.call(d,this._wrapped);return q(c.apply(b,d),this._chain)}};b.mixin(b);i(["pop","push",
"reverse","shift","sort","splice","unshift"],function(a){var c=j[a];k.prototype[a]=function(){c.apply(this._wrapped,arguments);return q(this._wrapped,this._chain)}});i(["concat","join","slice"],function(a){var c=j[a];k.prototype[a]=function(){return q(c.apply(this._wrapped,arguments),this._chain)}});k.prototype.chain=function(){this._chain=true;return this};k.prototype.value=function(){return this._wrapped}})();

// Copyright 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
document.createElement("canvas").getContext||(function(){var s=Math,j=s.round,F=s.sin,G=s.cos,V=s.abs,W=s.sqrt,k=10,v=k/2;function X(){return this.context_||(this.context_=new H(this))}var L=Array.prototype.slice;function Y(b,a){var c=L.call(arguments,2);return function(){return b.apply(a,c.concat(L.call(arguments)))}}var M={init:function(b){if(/MSIE/.test(navigator.userAgent)&&!window.opera){var a=b||document;a.createElement("canvas");a.attachEvent("onreadystatechange",Y(this.init_,this,a))}},init_:function(b){b.namespaces.g_vml_||
b.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML");b.namespaces.g_o_||b.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML");if(!b.styleSheets.ex_canvas_){var a=b.createStyleSheet();a.owningElement.id="ex_canvas_";a.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}g_o_\\:*{behavior:url(#default#VML)}"}var c=b.getElementsByTagName("canvas"),d=0;for(;d<c.length;d++)this.initElement(c[d])},
initElement:function(b){if(!b.getContext){b.getContext=X;b.innerHTML="";b.attachEvent("onpropertychange",Z);b.attachEvent("onresize",$);var a=b.attributes;if(a.width&&a.width.specified)b.style.width=a.width.nodeValue+"px";else b.width=b.clientWidth;if(a.height&&a.height.specified)b.style.height=a.height.nodeValue+"px";else b.height=b.clientHeight}return b}};function Z(b){var a=b.srcElement;switch(b.propertyName){case "width":a.style.width=a.attributes.width.nodeValue+"px";a.getContext().clearRect();
break;case "height":a.style.height=a.attributes.height.nodeValue+"px";a.getContext().clearRect();break}}function $(b){var a=b.srcElement;if(a.firstChild){a.firstChild.style.width=a.clientWidth+"px";a.firstChild.style.height=a.clientHeight+"px"}}M.init();var N=[],B=0;for(;B<16;B++){var C=0;for(;C<16;C++)N[B*16+C]=B.toString(16)+C.toString(16)}function I(){return[[1,0,0],[0,1,0],[0,0,1]]}function y(b,a){var c=I(),d=0;for(;d<3;d++){var f=0;for(;f<3;f++){var h=0,g=0;for(;g<3;g++)h+=b[d][g]*a[g][f];c[d][f]=
h}}return c}function O(b,a){a.fillStyle=b.fillStyle;a.lineCap=b.lineCap;a.lineJoin=b.lineJoin;a.lineWidth=b.lineWidth;a.miterLimit=b.miterLimit;a.shadowBlur=b.shadowBlur;a.shadowColor=b.shadowColor;a.shadowOffsetX=b.shadowOffsetX;a.shadowOffsetY=b.shadowOffsetY;a.strokeStyle=b.strokeStyle;a.globalAlpha=b.globalAlpha;a.arcScaleX_=b.arcScaleX_;a.arcScaleY_=b.arcScaleY_;a.lineScale_=b.lineScale_}function P(b){var a,c=1;b=String(b);if(b.substring(0,3)=="rgb"){var d=b.indexOf("(",3),f=b.indexOf(")",d+
1),h=b.substring(d+1,f).split(",");a="#";var g=0;for(;g<3;g++)a+=N[Number(h[g])];if(h.length==4&&b.substr(3,1)=="a")c=h[3]}else a=b;return{color:a,alpha:c}}function aa(b){switch(b){case "butt":return"flat";case "round":return"round";case "square":default:return"square"}}function H(b){this.m_=I();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.fillStyle=this.strokeStyle="#000";this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=k*1;this.globalAlpha=1;this.canvas=b;
var a=b.ownerDocument.createElement("div");a.style.width=b.clientWidth+"px";a.style.height=b.clientHeight+"px";a.style.overflow="hidden";a.style.position="absolute";b.appendChild(a);this.element_=a;this.lineScale_=this.arcScaleY_=this.arcScaleX_=1}var i=H.prototype;i.clearRect=function(){this.element_.innerHTML=""};i.beginPath=function(){this.currentPath_=[]};i.moveTo=function(b,a){var c=this.getCoords_(b,a);this.currentPath_.push({type:"moveTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};
i.lineTo=function(b,a){var c=this.getCoords_(b,a);this.currentPath_.push({type:"lineTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};i.bezierCurveTo=function(b,a,c,d,f,h){var g=this.getCoords_(f,h),l=this.getCoords_(b,a),e=this.getCoords_(c,d);Q(this,l,e,g)};function Q(b,a,c,d){b.currentPath_.push({type:"bezierCurveTo",cp1x:a.x,cp1y:a.y,cp2x:c.x,cp2y:c.y,x:d.x,y:d.y});b.currentX_=d.x;b.currentY_=d.y}i.quadraticCurveTo=function(b,a,c,d){var f=this.getCoords_(b,a),h=this.getCoords_(c,d),g={x:this.currentX_+
0.6666666666666666*(f.x-this.currentX_),y:this.currentY_+0.6666666666666666*(f.y-this.currentY_)};Q(this,g,{x:g.x+(h.x-this.currentX_)/3,y:g.y+(h.y-this.currentY_)/3},h)};i.arc=function(b,a,c,d,f,h){c*=k;var g=h?"at":"wa",l=b+G(d)*c-v,e=a+F(d)*c-v,m=b+G(f)*c-v,r=a+F(f)*c-v;if(l==m&&!h)l+=0.125;var n=this.getCoords_(b,a),o=this.getCoords_(l,e),q=this.getCoords_(m,r);this.currentPath_.push({type:g,x:n.x,y:n.y,radius:c,xStart:o.x,yStart:o.y,xEnd:q.x,yEnd:q.y})};i.rect=function(b,a,c,d){this.moveTo(b,
a);this.lineTo(b+c,a);this.lineTo(b+c,a+d);this.lineTo(b,a+d);this.closePath()};i.strokeRect=function(b,a,c,d){var f=this.currentPath_;this.beginPath();this.moveTo(b,a);this.lineTo(b+c,a);this.lineTo(b+c,a+d);this.lineTo(b,a+d);this.closePath();this.stroke();this.currentPath_=f};i.fillRect=function(b,a,c,d){var f=this.currentPath_;this.beginPath();this.moveTo(b,a);this.lineTo(b+c,a);this.lineTo(b+c,a+d);this.lineTo(b,a+d);this.closePath();this.fill();this.currentPath_=f};i.createLinearGradient=function(b,
a,c,d){var f=new D("gradient");f.x0_=b;f.y0_=a;f.x1_=c;f.y1_=d;return f};i.createRadialGradient=function(b,a,c,d,f,h){var g=new D("gradientradial");g.x0_=b;g.y0_=a;g.r0_=c;g.x1_=d;g.y1_=f;g.r1_=h;return g};i.drawImage=function(b){var a,c,d,f,h,g,l,e,m=b.runtimeStyle.width,r=b.runtimeStyle.height;b.runtimeStyle.width="auto";b.runtimeStyle.height="auto";var n=b.width,o=b.height;b.runtimeStyle.width=m;b.runtimeStyle.height=r;if(arguments.length==3){a=arguments[1];c=arguments[2];h=g=0;l=d=n;e=f=o}else if(arguments.length==
5){a=arguments[1];c=arguments[2];d=arguments[3];f=arguments[4];h=g=0;l=n;e=o}else if(arguments.length==9){h=arguments[1];g=arguments[2];l=arguments[3];e=arguments[4];a=arguments[5];c=arguments[6];d=arguments[7];f=arguments[8]}else throw Error("Invalid number of arguments");var q=this.getCoords_(a,c),t=[];t.push(" <g_vml_:group",' coordsize="',k*10,",",k*10,'"',' coordorigin="0,0"',' style="width:',10,"px;height:",10,"px;position:absolute;");if(this.m_[0][0]!=1||this.m_[0][1]){var E=[];E.push("M11=",
this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",j(q.x/k),",","Dy=",j(q.y/k),"");var p=q,z=this.getCoords_(a+d,c),w=this.getCoords_(a,c+f),x=this.getCoords_(a+d,c+f);p.x=s.max(p.x,z.x,w.x,x.x);p.y=s.max(p.y,z.y,w.y,x.y);t.push("padding:0 ",j(p.x/k),"px ",j(p.y/k),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",E.join(""),", sizingmethod='clip');")}else t.push("top:",j(q.y/k),"px;left:",j(q.x/k),"px;");t.push(' ">','<g_vml_:image src="',b.src,
'"',' style="width:',k*d,"px;"," height:",k*f,'px;"',' cropleft="',h/n,'"',' croptop="',g/o,'"',' cropright="',(n-h-l)/n,'"',' cropbottom="',(o-g-e)/o,'"'," />","</g_vml_:group>");this.element_.insertAdjacentHTML("BeforeEnd",t.join(""))};i.stroke=function(b){var a=[],c=P(b?this.fillStyle:this.strokeStyle),d=c.color,f=c.alpha*this.globalAlpha;a.push("<g_vml_:shape",' filled="',!!b,'"',' style="position:absolute;width:',10,"px;height:",10,'px;"',' coordorigin="0 0" coordsize="',k*10," ",k*10,'"',' stroked="',
!b,'"',' path="');var h={x:null,y:null},g={x:null,y:null},l=0;for(;l<this.currentPath_.length;l++){var e=this.currentPath_[l];switch(e.type){case "moveTo":a.push(" m ",j(e.x),",",j(e.y));break;case "lineTo":a.push(" l ",j(e.x),",",j(e.y));break;case "close":a.push(" x ");e=null;break;case "bezierCurveTo":a.push(" c ",j(e.cp1x),",",j(e.cp1y),",",j(e.cp2x),",",j(e.cp2y),",",j(e.x),",",j(e.y));break;case "at":case "wa":a.push(" ",e.type," ",j(e.x-this.arcScaleX_*e.radius),",",j(e.y-this.arcScaleY_*e.radius),
" ",j(e.x+this.arcScaleX_*e.radius),",",j(e.y+this.arcScaleY_*e.radius)," ",j(e.xStart),",",j(e.yStart)," ",j(e.xEnd),",",j(e.yEnd));break}if(e){if(h.x==null||e.x<h.x)h.x=e.x;if(g.x==null||e.x>g.x)g.x=e.x;if(h.y==null||e.y<h.y)h.y=e.y;if(g.y==null||e.y>g.y)g.y=e.y}}a.push(' ">');if(b)if(typeof this.fillStyle=="object"){var m=this.fillStyle,r=0,n={x:0,y:0},o=0,q=1;if(m.type_=="gradient"){var t=m.x1_/this.arcScaleX_,E=m.y1_/this.arcScaleY_,p=this.getCoords_(m.x0_/this.arcScaleX_,m.y0_/this.arcScaleY_),
z=this.getCoords_(t,E);r=Math.atan2(z.x-p.x,z.y-p.y)*180/Math.PI;if(r<0)r+=360;if(r<1.0E-6)r=0}else{var p=this.getCoords_(m.x0_,m.y0_),w=g.x-h.x,x=g.y-h.y;n={x:(p.x-h.x)/w,y:(p.y-h.y)/x};w/=this.arcScaleX_*k;x/=this.arcScaleY_*k;var R=s.max(w,x);o=2*m.r0_/R;q=2*m.r1_/R-o}var u=m.colors_;u.sort(function(ba,ca){return ba.offset-ca.offset});var J=u.length,da=u[0].color,ea=u[J-1].color,fa=u[0].alpha*this.globalAlpha,ga=u[J-1].alpha*this.globalAlpha,S=[],l=0;for(;l<J;l++){var T=u[l];S.push(T.offset*q+
o+" "+T.color)}a.push('<g_vml_:fill type="',m.type_,'"',' method="none" focus="100%"',' color="',da,'"',' color2="',ea,'"',' colors="',S.join(","),'"',' opacity="',ga,'"',' g_o_:opacity2="',fa,'"',' angle="',r,'"',' focusposition="',n.x,",",n.y,'" />')}else a.push('<g_vml_:fill color="',d,'" opacity="',f,'" />');else{var K=this.lineScale_*this.lineWidth;if(K<1)f*=K;a.push("<g_vml_:stroke",' opacity="',f,'"',' joinstyle="',this.lineJoin,'"',' miterlimit="',this.miterLimit,'"',' endcap="',aa(this.lineCap),
'"',' weight="',K,'px"',' color="',d,'" />')}a.push("</g_vml_:shape>");this.element_.insertAdjacentHTML("beforeEnd",a.join(""))};i.fill=function(){this.stroke(true)};i.closePath=function(){this.currentPath_.push({type:"close"})};i.getCoords_=function(b,a){var c=this.m_;return{x:k*(b*c[0][0]+a*c[1][0]+c[2][0])-v,y:k*(b*c[0][1]+a*c[1][1]+c[2][1])-v}};i.save=function(){var b={};O(this,b);this.aStack_.push(b);this.mStack_.push(this.m_);this.m_=y(I(),this.m_)};i.restore=function(){O(this.aStack_.pop(),
this);this.m_=this.mStack_.pop()};function ha(b){var a=0;for(;a<3;a++){var c=0;for(;c<2;c++)if(!isFinite(b[a][c])||isNaN(b[a][c]))return false}return true}function A(b,a,c){if(!!ha(a)){b.m_=a;if(c)b.lineScale_=W(V(a[0][0]*a[1][1]-a[0][1]*a[1][0]))}}i.translate=function(b,a){A(this,y([[1,0,0],[0,1,0],[b,a,1]],this.m_),false)};i.rotate=function(b){var a=G(b),c=F(b);A(this,y([[a,c,0],[-c,a,0],[0,0,1]],this.m_),false)};i.scale=function(b,a){this.arcScaleX_*=b;this.arcScaleY_*=a;A(this,y([[b,0,0],[0,a,
0],[0,0,1]],this.m_),true)};i.transform=function(b,a,c,d,f,h){A(this,y([[b,a,0],[c,d,0],[f,h,1]],this.m_),true)};i.setTransform=function(b,a,c,d,f,h){A(this,[[b,a,0],[c,d,0],[f,h,1]],true)};i.clip=function(){};i.arcTo=function(){};i.createPattern=function(){return new U};function D(b){this.type_=b;this.r1_=this.y1_=this.x1_=this.r0_=this.y0_=this.x0_=0;this.colors_=[]}D.prototype.addColorStop=function(b,a){a=P(a);this.colors_.push({offset:b,color:a.color,alpha:a.alpha})};function U(){}G_vmlCanvasManager=
M;CanvasRenderingContext2D=H;CanvasGradient=D;CanvasPattern=U})();

/*!
 * jQuery UI 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 *//*
 * jQuery UI 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */
jQuery.ui||(function(b){var a=b.browser.mozilla&&(parseFloat(b.browser.version)<1.9);b.ui={version:"1.8rc3",plugin:{add:function(d,e,g){var f=b.ui[d].prototype;for(var c in g){f.plugins[c]=f.plugins[c]||[];f.plugins[c].push([e,g[c]])}},call:function(c,e,d){var g=c.plugins[e];if(!g||!c.element[0].parentNode){return}for(var f=0;f<g.length;f++){if(c.options[g[f][0]]){g[f][1].apply(c.element,d)}}}},contains:function(d,c){return document.compareDocumentPosition?d.compareDocumentPosition(c)&16:d!==c&&d.contains(c)},hasScroll:function(f,d){if(b(f).css("overflow")=="hidden"){return false}var c=(d&&d=="left")?"scrollLeft":"scrollTop",e=false;if(f[c]>0){return true}f[c]=1;e=(f[c]>0);f[c]=0;return e},isOverAxis:function(d,c,e){return(d>c)&&(d<(c+e))},isOver:function(h,d,g,f,c,e){return b.ui.isOverAxis(h,g,c)&&b.ui.isOverAxis(d,f,e)},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};b.fn.extend({_focus:b.fn.focus,focus:function(c,d){return typeof c==="number"?this.each(function(){var e=this;setTimeout(function(){b(e).focus();(d&&d.call(e))},c)}):this._focus.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","").unbind("selectstart.ui")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false})},scrollParent:function(){var c;if((b.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){c=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(b.curCSS(this,"position",1))&&(/(auto|scroll)/).test(b.curCSS(this,"overflow",1)+b.curCSS(this,"overflow-y",1)+b.curCSS(this,"overflow-x",1))}).eq(0)}else{c=this.parents().filter(function(){return(/(auto|scroll)/).test(b.curCSS(this,"overflow",1)+b.curCSS(this,"overflow-y",1)+b.curCSS(this,"overflow-x",1))}).eq(0)}return(/fixed/).test(this.css("position"))||!c.length?b(document):c},zIndex:function(f){if(f!==undefined){return this.css("zIndex",f)}if(this.length){var d=b(this[0]),c,e;while(d.length&&d[0]!==document){c=d.css("position");if(c=="absolute"||c=="relative"||c=="fixed"){e=parseInt(d.css("zIndex"));if(!isNaN(e)&&e!=0){return e}}d=d.parent()}}return 0}});b.extend(b.expr[":"],{data:function(e,d,c){return !!b.data(e,c[3])},focusable:function(d){var e=d.nodeName.toLowerCase(),c=b.attr(d,"tabindex");return(/input|select|textarea|button|object/.test(e)?!d.disabled:"a"==e||"area"==e?d.href||!isNaN(c):!isNaN(c))&&!b(d)["area"==e?"parents":"closest"](":hidden").length},tabbable:function(d){var c=b.attr(d,"tabindex");return(isNaN(c)||c>=0)&&b(d).is(":focusable")}})})(jQuery);;/*!
 * jQuery UI Widget 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Widget
 *//*
 * jQuery UI Widget 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b){var a=b.fn.remove;b.fn.remove=function(c,d){return this.each(function(){if(!d){if(!c||b.filter(c,[this]).length){b("*",this).add(this).each(function(){b(this).triggerHandler("remove")})}}return a.call(b(this),c,d)})};b.widget=function(d,f,c){var e=d.split(".")[0],h;d=d.split(".")[1];h=e+"-"+d;if(!c){c=f;f=b.Widget}b.expr[":"][h]=function(i){return !!b.data(i,d)};b[e]=b[e]||{};b[e][d]=function(i,j){if(arguments.length){this._createWidget(i,j)}};var g=new f();g.options=b.extend({},g.options);b[e][d].prototype=b.extend(true,g,{namespace:e,widgetName:d,widgetEventPrefix:b[e][d].prototype.widgetEventPrefix||d,widgetBaseClass:h},c);b.widget.bridge(d,b[e][d])};b.widget.bridge=function(d,c){b.fn[d]=function(g){var e=typeof g==="string",f=Array.prototype.slice.call(arguments,1),h=this;g=!e&&f.length?b.extend.apply(null,[true,g].concat(f)):g;if(e&&g.substring(0,1)==="_"){return h}if(e){this.each(function(){var i=b.data(this,d),j=i&&b.isFunction(i[g])?i[g].apply(i,f):i;if(j!==i&&j!==undefined){h=j;return false}})}else{this.each(function(){var i=b.data(this,d);if(i){if(g){i.option(g)}i._init()}else{b.data(this,d,new c(g,this))}})}return h}};b.Widget=function(c,d){if(arguments.length){this._createWidget(c,d)}};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(d,e){this.element=b(e).data(this.widgetName,this);this.options=b.extend(true,{},this.options,b.metadata&&b.metadata.get(e)[this.widgetName],d);var c=this;this.element.bind("remove."+this.widgetName,function(){c.destroy()});this._create();this._init()},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled")},widget:function(){return this.element},option:function(e,f){var d=e,c=this;if(arguments.length===0){return b.extend({},c.options)}if(typeof e==="string"){if(f===undefined){return this.options[e]}d={};d[e]=f}b.each(d,function(g,h){c._setOption(g,h)});return c},_setOption:function(c,d){this.options[c]=d;if(c==="disabled"){this.widget()[d?"addClass":"removeClass"](this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").attr("aria-disabled",d)}return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(d,e,f){var h=this.options[d];e=b.Event(e);e.type=(d===this.widgetEventPrefix?d:this.widgetEventPrefix+d).toLowerCase();f=f||{};if(e.originalEvent){for(var c=b.event.props.length,g;c;){g=b.event.props[--c];e[g]=e.originalEvent[g]}}this.element.trigger(e,f);return !(b.isFunction(h)&&h.call(this.element[0],e,f)===false||e.isDefaultPrevented())}}})(jQuery);;/*!
 * jQuery UI Mouse 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *  jquery.ui.widget.js
 *//*
 * jQuery UI Mouse 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *  jquery.ui.widget.js
 */
(function(a){a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(c){return b._mouseDown(c)}).bind("click."+this.widgetName,function(c){if(b._preventClickEvent){b._preventClickEvent=false;c.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(d){d.originalEvent=d.originalEvent||{};if(d.originalEvent.mouseHandled){return}(this._mouseStarted&&this._mouseUp(d));this._mouseDownEvent=d;var c=this,e=(d.which==1),b=(typeof this.options.cancel=="string"?a(d.target).parents().add(d.target).filter(this.options.cancel).length:false);if(!e||b||!this._mouseCapture(d)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){c.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(d)&&this._mouseDelayMet(d)){this._mouseStarted=(this._mouseStart(d)!==false);if(!this._mouseStarted){d.preventDefault();return true}}this._mouseMoveDelegate=function(f){return c._mouseMove(f)};this._mouseUpDelegate=function(f){return c._mouseUp(f)};a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);(a.browser.safari||d.preventDefault());d.originalEvent.mouseHandled=true;return true},_mouseMove:function(b){if(a.browser.msie&&!b.button){return this._mouseUp(b)}if(this._mouseStarted){this._mouseDrag(b);return b.preventDefault()}if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,b)!==false);(this._mouseStarted?this._mouseDrag(b):this._mouseUp(b))}return !this._mouseStarted},_mouseUp:function(b){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=(b.target==this._mouseDownEvent.target);this._mouseStop(b)}return false},_mouseDistanceMet:function(b){return(Math.max(Math.abs(this._mouseDownEvent.pageX-b.pageX),Math.abs(this._mouseDownEvent.pageY-b.pageY))>=this.options.distance)},_mouseDelayMet:function(b){return this.mouseDelayMet},_mouseStart:function(b){},_mouseDrag:function(b){},_mouseStop:function(b){},_mouseCapture:function(b){return true}})})(jQuery);;/*
 * jQuery UI Position 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Position
 */(function(f){f.ui=f.ui||{};var c=/left|center|right/,e="center",d=/top|center|bottom/,g="center",a=f.fn.position;f.fn.position=function(i){if(!i||!i.of){return a.apply(this,arguments)}i=f.extend({},i);var l=f(i.of),n=(i.collision||"flip").split(" "),m=i.offset?i.offset.split(" "):[0,0],k,h,j;if(i.of.nodeType===9){k=l.width();h=l.height();j={top:0,left:0}}else{if(i.of.scrollTo&&i.of.document){k=l.width();h=l.height();j={top:l.scrollTop(),left:l.scrollLeft()}}else{if(i.of.preventDefault){i.at="left top";k=h=0;j={top:i.of.pageY,left:i.of.pageX}}else{k=l.outerWidth();h=l.outerHeight();j=l.offset()}}}f.each(["my","at"],function(){var o=(i[this]||"").split(" ");if(o.length===1){o=c.test(o[0])?o.concat([g]):d.test(o[0])?[e].concat(o):[e,g]}o[0]=c.test(o[0])?o[0]:e;o[1]=d.test(o[1])?o[1]:g;i[this]=o});if(n.length===1){n[1]=n[0]}m[0]=parseInt(m[0],10)||0;if(m.length===1){m[1]=m[0]}m[1]=parseInt(m[1],10)||0;if(i.at[0]==="right"){j.left+=k}else{if(i.at[0]===e){j.left+=k/2}}if(i.at[1]==="bottom"){j.top+=h}else{if(i.at[1]===g){j.top+=h/2}}j.left+=m[0];j.top+=m[1];return this.each(function(){var t=f(this),s=t.outerWidth(),r=t.outerHeight(),p=f.extend({},j),u,o,q;if(i.my[0]==="right"){p.left-=s}else{if(i.my[0]===e){p.left-=s/2}}if(i.my[1]==="bottom"){p.top-=r}else{if(i.my[1]===g){p.top-=r/2}}f.each(["left","top"],function(w,v){if(f.ui.position[n[w]]){f.ui.position[n[w]][v](p,{targetWidth:k,targetHeight:h,elemWidth:s,elemHeight:r,offset:m,my:i.my,at:i.at})}});if(f.fn.bgiframe){t.bgiframe()}t.offset(f.extend(p,{using:i.using}))})};f.ui.position={fit:{left:function(h,i){var k=f(window),j=h.left+i.elemWidth-k.width()-k.scrollLeft();h.left=j>0?h.left-j:Math.max(0,h.left)},top:function(h,i){var k=f(window),j=h.top+i.elemHeight-k.height()-k.scrollTop();h.top=j>0?h.top-j:Math.max(0,h.top)}},flip:{left:function(i,j){if(j.at[0]==="center"){return}var l=f(window),k=i.left+j.elemWidth-l.width()-l.scrollLeft(),h=j.my[0]==="left"?-j.elemWidth:j.my[0]==="right"?j.elemWidth:0,m=-2*j.offset[0];i.left+=i.left<0?h+j.targetWidth+m:k>0?h-j.targetWidth+m:0},top:function(i,k){if(k.at[1]==="center"){return}var m=f(window),l=i.top+k.elemHeight-m.height()-m.scrollTop(),h=k.my[1]==="top"?-k.elemHeight:k.my[1]==="bottom"?k.elemHeight:0,j=k.at[1]==="top"?k.targetHeight:-k.targetHeight,n=-2*k.offset[1];i.top+=i.top<0?h+k.targetHeight+n:l>0?h+j+n:0}}};if(!f.offset.setOffset){f.offset.setOffset=function(l,i){if(/static/.test(jQuery.curCSS(l,"position"))){l.style.position="relative"}var k=jQuery(l),n=k.offset(),h=parseInt(jQuery.curCSS(l,"top",true),10)||0,m=parseInt(jQuery.curCSS(l,"left",true),10)||0,j={top:(i.top-n.top)+h,left:(i.left-n.left)+m};if("using" in i){i.using.call(l,j)}else{k.css(j)}};var b=f.fn.offset;f.fn.offset=function(h){var i=this[0];if(!i||!i.ownerDocument){return null}if(h){return this.each(function(){f.offset.setOffset(this,h)})}return b.call(this)}}})(jQuery);;/*
 * jQuery UI Draggable 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *  jquery.ui.core.js
 *  jquery.ui.mouse.js
 *  jquery.ui.widget.js
 */(function(a){a.widget("ui.draggable",a.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper=="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"}(this.options.addClasses&&this.element.addClass("ui-draggable"));(this.options.disabled&&this.element.addClass("ui-draggable-disabled"));this._mouseInit()},destroy:function(){if(!this.element.data("draggable")){return}this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this},_mouseCapture:function(b){var c=this.options;if(this.helper||c.disabled||a(b.target).is(".ui-resizable-handle")){return false}this.handle=this._getHandle(b);if(!this.handle){return false}return true},_mouseStart:function(b){var c=this.options;this.helper=this._createHelper(b);this._cacheHelperProportions();if(a.ui.ddmanager){a.ui.ddmanager.current=this}this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this.position=this._generatePosition(b);this.originalPageX=b.pageX;this.originalPageY=b.pageY;(c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt));if(c.containment){this._setContainment()}if(this._trigger("start",b)===false){this._clear();return false}this._cacheHelperProportions();if(a.ui.ddmanager&&!c.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,b)}this.helper.addClass("ui-draggable-dragging");this._mouseDrag(b,true);return true},_mouseDrag:function(b,d){this.position=this._generatePosition(b);this.positionAbs=this._convertPositionTo("absolute");if(!d){var c=this._uiHash();if(this._trigger("drag",b,c)===false){this._mouseUp({});return false}this.position=c.position}if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}if(a.ui.ddmanager){a.ui.ddmanager.drag(this,b)}return false},_mouseStop:function(c){var d=false;if(a.ui.ddmanager&&!this.options.dropBehaviour){d=a.ui.ddmanager.drop(this,c)}if(this.dropped){d=this.dropped;this.dropped=false}if(!this.element[0]||!this.element[0].parentNode){return false}if((this.options.revert=="invalid"&&!d)||(this.options.revert=="valid"&&d)||this.options.revert===true||(a.isFunction(this.options.revert)&&this.options.revert.call(this.element,d))){var b=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(b._trigger("stop",c)!==false){b._clear()}})}else{if(this._trigger("stop",c)!==false){this._clear()}}return false},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})}else{this._clear()}return this},_getHandle:function(b){var c=!this.options.handle||!a(this.options.handle,this.element).length?true:false;a(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==b.target){c=true}});return c},_createHelper:function(c){var d=this.options;var b=a.isFunction(d.helper)?a(d.helper.apply(this.element[0],[c])):(d.helper=="clone"?this.element.clone():this.element);if(!b.parents("body").length){b.appendTo((d.appendTo=="parent"?this.element[0].parentNode:d.appendTo))}if(b[0]!=this.element[0]&&!(/(fixed|absolute)/).test(b.css("position"))){b.css("position","absolute")}return b},_adjustOffsetFromHelper:function(b){if(typeof b=="string"){b=b.split(" ")}if(a.isArray(b)){b={left:+b[0],top:+b[1]||0}}if("left" in b){this.offset.click.left=b.left+this.margins.left}if("right" in b){this.offset.click.left=this.helperProportions.width-b.right+this.margins.left}if("top" in b){this.offset.click.top=b.top+this.margins.top}if("bottom" in b){this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){b.left+=this.scrollParent.scrollLeft();b.top+=this.scrollParent.scrollTop()}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)){b={top:0,left:0}}return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var b=this.element.position();return{top:b.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:b.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e=this.options;if(e.containment=="parent"){e.containment=this.helper[0].parentNode}if(e.containment=="document"||e.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(e.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(e.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!(/^(document|window|parent)$/).test(e.containment)&&e.containment.constructor!=Array){var c=a(e.containment)[0];if(!c){return}var d=a(e.containment).offset();var b=(a(c).css("overflow")!="hidden");this.containment=[d.left+(parseInt(a(c).css("borderLeftWidth"),10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(a(c).css("borderTopWidth"),10)||0)+(parseInt(a(c).css("paddingTop"),10)||0)-this.margins.top,d.left+(b?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(b?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}else{if(e.containment.constructor==Array){this.containment=e.containment}}},_convertPositionTo:function(f,h){if(!h){h=this.position}var c=f=="absolute"?1:-1;var e=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=(/(html|body)/i).test(b[0].tagName);return{top:(h.top+this.offset.relative.top*c+this.offset.parent.top*c-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(g?0:b.scrollTop()))*c)),left:(h.left+this.offset.relative.left*c+this.offset.parent.left*c-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:b.scrollLeft())*c))}},_generatePosition:function(e){var h=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,i=(/(html|body)/i).test(b[0].tagName);var d=e.pageX;var c=e.pageY;if(this.originalPosition){if(this.containment){if(e.pageX-this.offset.click.left<this.containment[0]){d=this.containment[0]+this.offset.click.left}if(e.pageY-this.offset.click.top<this.containment[1]){c=this.containment[1]+this.offset.click.top}if(e.pageX-this.offset.click.left>this.containment[2]){d=this.containment[2]+this.offset.click.left}if(e.pageY-this.offset.click.top>this.containment[3]){c=this.containment[3]+this.offset.click.top}}if(h.grid){var g=this.originalPageY+Math.round((c-this.originalPageY)/h.grid[1])*h.grid[1];c=this.containment?(!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:(!(g-this.offset.click.top<this.containment[1])?g-h.grid[1]:g+h.grid[1])):g;var f=this.originalPageX+Math.round((d-this.originalPageX)/h.grid[0])*h.grid[0];d=this.containment?(!(f-this.offset.click.left<this.containment[0]||f-this.offset.click.left>this.containment[2])?f:(!(f-this.offset.click.left<this.containment[0])?f-h.grid[0]:f+h.grid[0])):f}}return{top:(c-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(i?0:b.scrollTop())))),left:(d-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:b.scrollLeft())))}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");if(this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()}this.helper=null;this.cancelHelperRemoval=false},_trigger:function(b,c,d){d=d||this._uiHash();a.ui.plugin.call(this,b,[c,d]);if(b=="drag"){this.positionAbs=this._convertPositionTo("absolute")}return a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(b){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});a.extend(a.ui.draggable,{version:"1.8rc3"});a.ui.plugin.add("draggable","connectToSortable",{start:function(c,e){var d=a(this).data("draggable"),f=d.options,b=a.extend({},e,{item:d.element});d.sortables=[];a(f.connectToSortable).each(function(){var g=a.data(this,"sortable");if(g&&!g.options.disabled){d.sortables.push({instance:g,shouldRevert:g.options.revert});g._refreshItems();g._trigger("activate",c,b)}})},stop:function(c,e){var d=a(this).data("draggable"),b=a.extend({},e,{item:d.element});a.each(d.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;d.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert){this.instance.options.revert=true}this.instance._mouseStop(c);this.instance.options.helper=this.instance.options._helper;if(d.options.helper=="original"){this.instance.currentItem.css({top:"auto",left:"auto"})}}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",c,b)}})},drag:function(c,f){var e=a(this).data("draggable"),b=this;var d=function(i){var n=this.offset.click.top,m=this.offset.click.left;var g=this.positionAbs.top,k=this.positionAbs.left;var j=i.height,l=i.width;var p=i.top,h=i.left;return a.ui.isOver(g+n,k+m,p,h,j,l)};a.each(e.sortables,function(g){this.instance.positionAbs=e.positionAbs;this.instance.helperProportions=e.helperProportions;this.instance.offset.click=e.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=a(b).clone().appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return f.helper[0]};c.target=this.instance.currentItem[0];this.instance._mouseCapture(c,true);this.instance._mouseStart(c,true,true);this.instance.offset.click.top=e.offset.click.top;this.instance.offset.click.left=e.offset.click.left;this.instance.offset.parent.left-=e.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=e.offset.parent.top-this.instance.offset.parent.top;e._trigger("toSortable",c);e.dropped=this.instance.element;e.currentItem=e.element;this.instance.fromOutside=e}if(this.instance.currentItem){this.instance._mouseDrag(c)}}else{if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",c,this.instance._uiHash(this.instance));this.instance._mouseStop(c,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();if(this.instance.placeholder){this.instance.placeholder.remove()}e._trigger("fromSortable",c);e.dropped=false}}})}});a.ui.plugin.add("draggable","cursor",{start:function(c,d){var b=a("body"),e=a(this).data("draggable").options;if(b.css("cursor")){e._cursor=b.css("cursor")}b.css("cursor",e.cursor)},stop:function(b,c){var d=a(this).data("draggable").options;if(d._cursor){a("body").css("cursor",d._cursor)}}});a.ui.plugin.add("draggable","iframeFix",{start:function(b,c){var d=a(this).data("draggable").options;a(d.iframeFix===true?"iframe":d.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(a(this).offset()).appendTo("body")})},stop:function(b,c){a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})}});a.ui.plugin.add("draggable","opacity",{start:function(c,d){var b=a(d.helper),e=a(this).data("draggable").options;if(b.css("opacity")){e._opacity=b.css("opacity")}b.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("draggable").options;if(d._opacity){a(c.helper).css("opacity",d._opacity)}}});a.ui.plugin.add("draggable","scroll",{start:function(c,d){var b=a(this).data("draggable");if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!="HTML"){b.overflowOffset=b.scrollParent.offset()}},drag:function(d,e){var c=a(this).data("draggable"),f=c.options,b=false;if(c.scrollParent[0]!=document&&c.scrollParent[0].tagName!="HTML"){if(!f.axis||f.axis!="x"){if((c.overflowOffset.top+c.scrollParent[0].offsetHeight)-d.pageY<f.scrollSensitivity){c.scrollParent[0].scrollTop=b=c.scrollParent[0].scrollTop+f.scrollSpeed}else{if(d.pageY-c.overflowOffset.top<f.scrollSensitivity){c.scrollParent[0].scrollTop=b=c.scrollParent[0].scrollTop-f.scrollSpeed}}}if(!f.axis||f.axis!="y"){if((c.overflowOffset.left+c.scrollParent[0].offsetWidth)-d.pageX<f.scrollSensitivity){c.scrollParent[0].scrollLeft=b=c.scrollParent[0].scrollLeft+f.scrollSpeed}else{if(d.pageX-c.overflowOffset.left<f.scrollSensitivity){c.scrollParent[0].scrollLeft=b=c.scrollParent[0].scrollLeft-f.scrollSpeed}}}}else{if(!f.axis||f.axis!="x"){if(d.pageY-a(document).scrollTop()<f.scrollSensitivity){b=a(document).scrollTop(a(document).scrollTop()-f.scrollSpeed)}else{if(a(window).height()-(d.pageY-a(document).scrollTop())<f.scrollSensitivity){b=a(document).scrollTop(a(document).scrollTop()+f.scrollSpeed)}}}if(!f.axis||f.axis!="y"){if(d.pageX-a(document).scrollLeft()<f.scrollSensitivity){b=a(document).scrollLeft(a(document).scrollLeft()-f.scrollSpeed)}else{if(a(window).width()-(d.pageX-a(document).scrollLeft())<f.scrollSensitivity){b=a(document).scrollLeft(a(document).scrollLeft()+f.scrollSpeed)}}}}if(b!==false&&a.ui.ddmanager&&!f.dropBehaviour){a.ui.ddmanager.prepareOffsets(c,d)}}});a.ui.plugin.add("draggable","snap",{start:function(c,d){var b=a(this).data("draggable"),e=b.options;b.snapElements=[];a(e.snap.constructor!=String?(e.snap.items||":data(draggable)"):e.snap).each(function(){var g=a(this);var f=g.offset();if(this!=b.element[0]){b.snapElements.push({item:this,width:g.outerWidth(),height:g.outerHeight(),top:f.top,left:f.left})}})},drag:function(u,p){var g=a(this).data("draggable"),q=g.options;var y=q.snapTolerance;var x=p.offset.left,w=x+g.helperProportions.width,f=p.offset.top,e=f+g.helperProportions.height;for(var v=g.snapElements.length-1;v>=0;v--){var s=g.snapElements[v].left,n=s+g.snapElements[v].width,m=g.snapElements[v].top,A=m+g.snapElements[v].height;if(!((s-y<x&&x<n+y&&m-y<f&&f<A+y)||(s-y<x&&x<n+y&&m-y<e&&e<A+y)||(s-y<w&&w<n+y&&m-y<f&&f<A+y)||(s-y<w&&w<n+y&&m-y<e&&e<A+y))){if(g.snapElements[v].snapping){(g.options.snap.release&&g.options.snap.release.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})))}g.snapElements[v].snapping=false;continue}if(q.snapMode!="inner"){var c=Math.abs(m-e)<=y;var z=Math.abs(A-f)<=y;var j=Math.abs(s-w)<=y;var k=Math.abs(n-x)<=y;if(c){p.position.top=g._convertPositionTo("relative",{top:m-g.helperProportions.height,left:0}).top-g.margins.top}if(z){p.position.top=g._convertPositionTo("relative",{top:A,left:0}).top-g.margins.top}if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:s-g.helperProportions.width}).left-g.margins.left}if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n}).left-g.margins.left}}var h=(c||z||j||k);if(q.snapMode!="outer"){var c=Math.abs(m-f)<=y;var z=Math.abs(A-e)<=y;var j=Math.abs(s-x)<=y;var k=Math.abs(n-w)<=y;if(c){p.position.top=g._convertPositionTo("relative",{top:m,left:0}).top-g.margins.top}if(z){p.position.top=g._convertPositionTo("relative",{top:A-g.helperProportions.height,left:0}).top-g.margins.top}if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:s}).left-g.margins.left}if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n-g.helperProportions.width}).left-g.margins.left}}if(!g.snapElements[v].snapping&&(c||z||j||k||h)){(g.options.snap.snap&&g.options.snap.snap.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})))}g.snapElements[v].snapping=(c||z||j||k||h)}}});a.ui.plugin.add("draggable","stack",{start:function(c,d){var f=a(this).data("draggable").options;var e=a.makeArray(a(f.stack)).sort(function(h,g){return(parseInt(a(h).css("zIndex"),10)||0)-(parseInt(a(g).css("zIndex"),10)||0)});if(!e.length){return}var b=parseInt(e[0].style.zIndex)||0;a(e).each(function(g){this.style.zIndex=b+g});this[0].style.zIndex=b+e.length}});a.ui.plugin.add("draggable","zIndex",{start:function(c,d){var b=a(d.helper),e=a(this).data("draggable").options;if(b.css("zIndex")){e._zIndex=b.css("zIndex")}b.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("draggable").options;if(d._zIndex){a(c.helper).css("zIndex",d._zIndex)}}})})(jQuery);;/*
 * jQuery UI Droppable 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *  jquery.ui.core.js
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 *  jquery.ui.draggable.js
 */(function(a){a.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var c=this.options,b=c.accept;this.isover=0;this.isout=1;this.accept=a.isFunction(b)?b:function(e){return e.is(b)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};a.ui.ddmanager.droppables[c.scope]=a.ui.ddmanager.droppables[c.scope]||[];a.ui.ddmanager.droppables[c.scope].push(this);(c.addClasses&&this.element.addClass("ui-droppable"))},destroy:function(){var b=a.ui.ddmanager.droppables[this.options.scope];for(var c=0;c<b.length;c++){if(b[c]==this){b.splice(c,1)}}this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");return this},_setOption:function(b,c){if(b=="accept"){this.accept=a.isFunction(c)?c:function(e){return e.is(c)}}a.Widget.prototype._setOption.apply(this,arguments)},_activate:function(c){var b=a.ui.ddmanager.current;if(this.options.activeClass){this.element.addClass(this.options.activeClass)}(b&&this._trigger("activate",c,this.ui(b)))},_deactivate:function(c){var b=a.ui.ddmanager.current;if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}(b&&this._trigger("deactivate",c,this.ui(b)))},_over:function(c){var b=a.ui.ddmanager.current;if(!b||(b.currentItem||b.element)[0]==this.element[0]){return}if(this.accept.call(this.element[0],(b.currentItem||b.element))){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)}this._trigger("over",c,this.ui(b))}},_out:function(c){var b=a.ui.ddmanager.current;if(!b||(b.currentItem||b.element)[0]==this.element[0]){return}if(this.accept.call(this.element[0],(b.currentItem||b.element))){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("out",c,this.ui(b))}},_drop:function(c,d){var b=d||a.ui.ddmanager.current;if(!b||(b.currentItem||b.element)[0]==this.element[0]){return false}var e=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var f=a.data(this,"droppable");if(f.options.greedy&&!f.options.disabled&&f.options.scope==b.options.scope&&f.accept.call(f.element[0],(b.currentItem||b.element))&&a.ui.intersect(b,a.extend(f,{offset:f.element.offset()}),f.options.tolerance)){e=true;return false}});if(e){return false}if(this.accept.call(this.element[0],(b.currentItem||b.element))){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("drop",c,this.ui(b));return this.element}return false},ui:function(b){return{draggable:(b.currentItem||b.element),helper:b.helper,position:b.position,offset:b.positionAbs}}});a.extend(a.ui.droppable,{version:"1.8rc3"});a.ui.intersect=function(q,j,o){if(!j.offset){return false}var e=(q.positionAbs||q.position.absolute).left,d=e+q.helperProportions.width,n=(q.positionAbs||q.position.absolute).top,m=n+q.helperProportions.height;var g=j.offset.left,c=g+j.proportions.width,p=j.offset.top,k=p+j.proportions.height;switch(o){case"fit":return(g<e&&d<c&&p<n&&m<k);break;case"intersect":return(g<e+(q.helperProportions.width/2)&&d-(q.helperProportions.width/2)<c&&p<n+(q.helperProportions.height/2)&&m-(q.helperProportions.height/2)<k);break;case"pointer":var h=((q.positionAbs||q.position.absolute).left+(q.clickOffset||q.offset.click).left),i=((q.positionAbs||q.position.absolute).top+(q.clickOffset||q.offset.click).top),f=a.ui.isOver(i,h,p,g,j.proportions.height,j.proportions.width);return f;break;case"touch":return((n>=p&&n<=k)||(m>=p&&m<=k)||(n<p&&m>k))&&((e>=g&&e<=c)||(d>=g&&d<=c)||(e<g&&d>c));break;default:return false;break}};a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,g){var b=a.ui.ddmanager.droppables[e.options.scope]||[];var f=g?g.type:null;var h=(e.currentItem||e.element).find(":data(droppable)").andSelf();droppablesLoop:for(var d=0;d<b.length;d++){if(b[d].options.disabled||(e&&!b[d].accept.call(b[d].element[0],(e.currentItem||e.element)))){continue}for(var c=0;c<h.length;c++){if(h[c]==b[d].element[0]){b[d].proportions.height=0;continue droppablesLoop}}b[d].visible=b[d].element.css("display")!="none";if(!b[d].visible){continue}b[d].offset=b[d].element.offset();b[d].proportions={width:b[d].element[0].offsetWidth,height:b[d].element[0].offsetHeight};if(f=="mousedown"){b[d]._activate.call(b[d],g)}}},drop:function(b,c){var d=false;a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){if(!this.options){return}if(!this.options.disabled&&this.visible&&a.ui.intersect(b,this,this.options.tolerance)){d=d||this._drop.call(this,c)}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(b.currentItem||b.element))){this.isout=1;this.isover=0;this._deactivate.call(this,c)}});return d},drag:function(b,c){if(b.options.refreshPositions){a.ui.ddmanager.prepareOffsets(b,c)}a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return}var e=a.ui.intersect(b,this,this.options.tolerance);var g=!e&&this.isover==1?"isout":(e&&this.isover==0?"isover":null);if(!g){return}var f;if(this.options.greedy){var d=this.element.parents(":data(droppable):eq(0)");if(d.length){f=a.data(d[0],"droppable");f.greedyChild=(g=="isover"?1:0)}}if(f&&g=="isover"){f.isover=0;f.isout=1;f._out.call(f,c)}this[g]=1;this[g=="isout"?"isover":"isout"]=0;this[g=="isover"?"_over":"_out"].call(this,c);if(f&&g=="isout"){f.isout=0;f.isover=1;f._over.call(f,c)}})}}})(jQuery);;/*
 * jQuery UI Resizable 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *  jquery.ui.core.js
 *  jquery.ui.mouse.js
 *  jquery.ui.widget.js
 */(function(c){c.widget("ui.resizable",c.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1000},_create:function(){var e=this,j=this.options;this.element.addClass("ui-resizable");c.extend(this,{_aspectRatio:!!(j.aspectRatio),aspectRatio:j.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:j.helper||j.ghost||j.animate?j.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){if(/relative/.test(this.element.css("position"))&&c.browser.opera){this.element.css({position:"relative",top:"auto",left:"auto"})}this.element.wrap(c('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=j.handles||(!c(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all"){this.handles="n,e,s,w,se,sw,ne,nw"}var k=this.handles.split(",");this.handles={};for(var f=0;f<k.length;f++){var h=c.trim(k[f]),d="ui-resizable-"+h;var g=c('<div class="ui-resizable-handle '+d+'"></div>');if(/sw|se|ne|nw/.test(h)){g.css({zIndex:++j.zIndex})}if("se"==h){g.addClass("ui-icon ui-icon-gripsmall-diagonal-se")}this.handles[h]=".ui-resizable-"+h;this.element.append(g)}}this._renderAxis=function(p){p=p||this.element;for(var m in this.handles){if(this.handles[m].constructor==String){this.handles[m]=c(this.handles[m],this.element).show()}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var n=c(this.handles[m],this.element),o=0;o=/sw|ne|nw|se|n|s/.test(m)?n.outerHeight():n.outerWidth();var l=["padding",/ne|nw|n/.test(m)?"Top":/se|sw|s/.test(m)?"Bottom":/^e$/.test(m)?"Right":"Left"].join("");p.css(l,o);this._proportionallyResize()}if(!c(this.handles[m]).length){continue}}};this._renderAxis(this.element);this._handles=c(".ui-resizable-handle",this.element).disableSelection();this._handles.mouseover(function(){if(!e.resizing){if(this.className){var i=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)}e.axis=i&&i[1]?i[1]:"se"}});if(j.autoHide){this._handles.hide();c(this.element).addClass("ui-resizable-autohide").hover(function(){c(this).removeClass("ui-resizable-autohide");e._handles.show()},function(){if(!e.resizing){c(this).addClass("ui-resizable-autohide");e._handles.hide()}})}this._mouseInit()},destroy:function(){this._mouseDestroy();var d=function(f){c(f).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){d(this.element);var e=this.element;e.after(this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")})).remove()}this.originalElement.css("resize",this.originalResizeStyle);d(this.originalElement);return this},_mouseCapture:function(e){var f=false;for(var d in this.handles){if(c(this.handles[d])[0]==e.target){f=true}}return !this.options.disabled&&f},_mouseStart:function(f){var i=this.options,e=this.element.position(),d=this.element;this.resizing=true;this.documentScroll={top:c(document).scrollTop(),left:c(document).scrollLeft()};if(d.is(".ui-draggable")||(/absolute/).test(d.css("position"))){d.css({position:"absolute",top:e.top,left:e.left})}if(c.browser.opera&&(/relative/).test(d.css("position"))){d.css({position:"relative",top:"auto",left:"auto"})}this._renderProxy();var j=b(this.helper.css("left")),g=b(this.helper.css("top"));if(i.containment){j+=c(i.containment).scrollLeft()||0;g+=c(i.containment).scrollTop()||0}this.offset=this.helper.offset();this.position={left:j,top:g};this.size=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalSize=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalPosition={left:j,top:g};this.sizeDiff={width:d.outerWidth()-d.width(),height:d.outerHeight()-d.height()};this.originalMousePosition={left:f.pageX,top:f.pageY};this.aspectRatio=(typeof i.aspectRatio=="number")?i.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);var h=c(".ui-resizable-"+this.axis).css("cursor");c("body").css("cursor",h=="auto"?this.axis+"-resize":h);d.addClass("ui-resizable-resizing");this._propagate("start",f);return true},_mouseDrag:function(d){var g=this.helper,f=this.options,l={},p=this,i=this.originalMousePosition,m=this.axis;var q=(d.pageX-i.left)||0,n=(d.pageY-i.top)||0;var h=this._change[m];if(!h){return false}var k=h.apply(this,[d,q,n]),j=c.browser.msie&&c.browser.version<7,e=this.sizeDiff;if(this._aspectRatio||d.shiftKey){k=this._updateRatio(k,d)}k=this._respectSize(k,d);this._propagate("resize",d);g.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()}this._updateCache(k);this._trigger("resize",d,this.ui());return false},_mouseStop:function(g){this.resizing=false;var h=this.options,l=this;if(this._helper){var f=this._proportionallyResizeElements,d=f.length&&(/textarea/i).test(f[0].nodeName),e=d&&c.ui.hasScroll(f[0],"left")?0:l.sizeDiff.height,j=d?0:l.sizeDiff.width;var m={width:(l.size.width-j),height:(l.size.height-e)},i=(parseInt(l.element.css("left"),10)+(l.position.left-l.originalPosition.left))||null,k=(parseInt(l.element.css("top"),10)+(l.position.top-l.originalPosition.top))||null;if(!h.animate){this.element.css(c.extend(m,{top:k,left:i}))}l.helper.height(l.size.height);l.helper.width(l.size.width);if(this._helper&&!h.animate){this._proportionallyResize()}}c("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");this._propagate("stop",g);if(this._helper){this.helper.remove()}return false},_updateCache:function(d){var e=this.options;this.offset=this.helper.offset();if(a(d.left)){this.position.left=d.left}if(a(d.top)){this.position.top=d.top}if(a(d.height)){this.size.height=d.height}if(a(d.width)){this.size.width=d.width}},_updateRatio:function(g,f){var h=this.options,i=this.position,e=this.size,d=this.axis;if(g.height){g.width=(e.height*this.aspectRatio)}else{if(g.width){g.height=(e.width/this.aspectRatio)}}if(d=="sw"){g.left=i.left+(e.width-g.width);g.top=null}if(d=="nw"){g.top=i.top+(e.height-g.height);g.left=i.left+(e.width-g.width)}return g},_respectSize:function(k,f){var i=this.helper,h=this.options,q=this._aspectRatio||f.shiftKey,p=this.axis,s=a(k.width)&&h.maxWidth&&(h.maxWidth<k.width),l=a(k.height)&&h.maxHeight&&(h.maxHeight<k.height),g=a(k.width)&&h.minWidth&&(h.minWidth>k.width),r=a(k.height)&&h.minHeight&&(h.minHeight>k.height);if(g){k.width=h.minWidth}if(r){k.height=h.minHeight}if(s){k.width=h.maxWidth}if(l){k.height=h.maxHeight}var e=this.originalPosition.left+this.originalSize.width,n=this.position.top+this.size.height;var j=/sw|nw|w/.test(p),d=/nw|ne|n/.test(p);if(g&&j){k.left=e-h.minWidth}if(s&&j){k.left=e-h.maxWidth}if(r&&d){k.top=n-h.minHeight}if(l&&d){k.top=n-h.maxHeight}var m=!k.width&&!k.height;if(m&&!k.left&&k.top){k.top=null}else{if(m&&!k.top&&k.left){k.left=null}}return k},_proportionallyResize:function(){var j=this.options;if(!this._proportionallyResizeElements.length){return}var f=this.helper||this.element;for(var e=0;e<this._proportionallyResizeElements.length;e++){var g=this._proportionallyResizeElements[e];if(!this.borderDif){var d=[g.css("borderTopWidth"),g.css("borderRightWidth"),g.css("borderBottomWidth"),g.css("borderLeftWidth")],h=[g.css("paddingTop"),g.css("paddingRight"),g.css("paddingBottom"),g.css("paddingLeft")];this.borderDif=c.map(d,function(k,m){var l=parseInt(k,10)||0,n=parseInt(h[m],10)||0;return l+n})}if(c.browser.msie&&!(!(c(f).is(":hidden")||c(f).parents(":hidden").length))){continue}g.css({height:(f.height()-this.borderDif[0]-this.borderDif[2])||0,width:(f.width()-this.borderDif[1]-this.borderDif[3])||0})}},_renderProxy:function(){var e=this.element,h=this.options;this.elementOffset=e.offset();if(this._helper){this.helper=this.helper||c('<div style="overflow:hidden;"></div>');var d=c.browser.msie&&c.browser.version<7,f=(d?1:0),g=(d?2:-1);this.helper.addClass(this._helper).css({width:this.element.outerWidth()+g,height:this.element.outerHeight()+g,position:"absolute",left:this.elementOffset.left-f+"px",top:this.elementOffset.top-f+"px",zIndex:++h.zIndex});this.helper.appendTo("body").disableSelection()}else{this.helper=this.element}},_change:{e:function(f,e,d){return{width:this.originalSize.width+e}},w:function(g,e,d){var i=this.options,f=this.originalSize,h=this.originalPosition;return{left:h.left+e,width:f.width-e}},n:function(g,e,d){var i=this.options,f=this.originalSize,h=this.originalPosition;return{top:h.top+d,height:f.height-d}},s:function(f,e,d){return{height:this.originalSize.height+d}},se:function(f,e,d){return c.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[f,e,d]))},sw:function(f,e,d){return c.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[f,e,d]))},ne:function(f,e,d){return c.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[f,e,d]))},nw:function(f,e,d){return c.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[f,e,d]))}},_propagate:function(e,d){c.ui.plugin.call(this,e,[d,this.ui()]);(e!="resize"&&this._trigger(e,d,this.ui()))},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}});c.extend(c.ui.resizable,{version:"1.8rc3"});c.ui.plugin.add("resizable","alsoResize",{start:function(e,f){var d=c(this).data("resizable"),h=d.options;var g=function(i){c(i).each(function(){c(this).data("resizable-alsoresize",{width:parseInt(c(this).width(),10),height:parseInt(c(this).height(),10),left:parseInt(c(this).css("left"),10),top:parseInt(c(this).css("top"),10)})})};if(typeof(h.alsoResize)=="object"&&!h.alsoResize.parentNode){if(h.alsoResize.length){h.alsoResize=h.alsoResize[0];g(h.alsoResize)}else{c.each(h.alsoResize,function(i,j){g(i)})}}else{g(h.alsoResize)}},resize:function(f,h){var e=c(this).data("resizable"),i=e.options,g=e.originalSize,k=e.originalPosition;var j={height:(e.size.height-g.height)||0,width:(e.size.width-g.width)||0,top:(e.position.top-k.top)||0,left:(e.position.left-k.left)||0},d=function(l,m){c(l).each(function(){var p=c(this),q=c(this).data("resizable-alsoresize"),o={},n=m&&m.length?m:["width","height","top","left"];c.each(n||["width","height","top","left"],function(r,t){var s=(q[t]||0)+(j[t]||0);if(s&&s>=0){o[t]=s||null}});if(/relative/.test(p.css("position"))&&c.browser.opera){e._revertToRelativePosition=true;p.css({position:"absolute",top:"auto",left:"auto"})}p.css(o)})};if(typeof(i.alsoResize)=="object"&&!i.alsoResize.nodeType){c.each(i.alsoResize,function(l,m){d(l,m)})}else{d(i.alsoResize)}},stop:function(e,f){var d=c(this).data("resizable");if(d._revertToRelativePosition&&c.browser.opera){d._revertToRelativePosition=false;el.css({position:"relative"})}c(this).removeData("resizable-alsoresize-start")}});c.ui.plugin.add("resizable","animate",{stop:function(h,m){var n=c(this).data("resizable"),i=n.options;var g=n._proportionallyResizeElements,d=g.length&&(/textarea/i).test(g[0].nodeName),e=d&&c.ui.hasScroll(g[0],"left")?0:n.sizeDiff.height,k=d?0:n.sizeDiff.width;var f={width:(n.size.width-k),height:(n.size.height-e)},j=(parseInt(n.element.css("left"),10)+(n.position.left-n.originalPosition.left))||null,l=(parseInt(n.element.css("top"),10)+(n.position.top-n.originalPosition.top))||null;n.element.animate(c.extend(f,l&&j?{top:l,left:j}:{}),{duration:i.animateDuration,easing:i.animateEasing,step:function(){var o={width:parseInt(n.element.css("width"),10),height:parseInt(n.element.css("height"),10),top:parseInt(n.element.css("top"),10),left:parseInt(n.element.css("left"),10)};if(g&&g.length){c(g[0]).css({width:o.width,height:o.height})}n._updateCache(o);n._propagate("resize",h)}})}});c.ui.plugin.add("resizable","containment",{start:function(e,q){var s=c(this).data("resizable"),i=s.options,k=s.element;var f=i.containment,j=(f instanceof c)?f.get(0):(/parent/.test(f))?k.parent().get(0):f;if(!j){return}s.containerElement=c(j);if(/document/.test(f)||f==document){s.containerOffset={left:0,top:0};s.containerPosition={left:0,top:0};s.parentData={element:c(document),left:0,top:0,width:c(document).width(),height:c(document).height()||document.body.parentNode.scrollHeight}}else{var m=c(j),h=[];c(["Top","Right","Left","Bottom"]).each(function(p,o){h[p]=b(m.css("padding"+o))});s.containerOffset=m.offset();s.containerPosition=m.position();s.containerSize={height:(m.innerHeight()-h[3]),width:(m.innerWidth()-h[1])};var n=s.containerOffset,d=s.containerSize.height,l=s.containerSize.width,g=(c.ui.hasScroll(j,"left")?j.scrollWidth:l),r=(c.ui.hasScroll(j)?j.scrollHeight:d);s.parentData={element:j,left:n.left,top:n.top,width:g,height:r}}},resize:function(f,p){var s=c(this).data("resizable"),h=s.options,e=s.containerSize,n=s.containerOffset,l=s.size,m=s.position,q=s._aspectRatio||f.shiftKey,d={top:0,left:0},g=s.containerElement;if(g[0]!=document&&(/static/).test(g.css("position"))){d=n}if(m.left<(s._helper?n.left:0)){s.size.width=s.size.width+(s._helper?(s.position.left-n.left):(s.position.left-d.left));if(q){s.size.height=s.size.width/h.aspectRatio}s.position.left=h.helper?n.left:0}if(m.top<(s._helper?n.top:0)){s.size.height=s.size.height+(s._helper?(s.position.top-n.top):s.position.top);if(q){s.size.width=s.size.height*h.aspectRatio}s.position.top=s._helper?n.top:0}s.offset.left=s.parentData.left+s.position.left;s.offset.top=s.parentData.top+s.position.top;var k=Math.abs((s._helper?s.offset.left-d.left:(s.offset.left-d.left))+s.sizeDiff.width),r=Math.abs((s._helper?s.offset.top-d.top:(s.offset.top-n.top))+s.sizeDiff.height);var j=s.containerElement.get(0)==s.element.parent().get(0),i=/relative|absolute/.test(s.containerElement.css("position"));if(j&&i){k-=s.parentData.left}if(k+s.size.width>=s.parentData.width){s.size.width=s.parentData.width-k;if(q){s.size.height=s.size.width/s.aspectRatio}}if(r+s.size.height>=s.parentData.height){s.size.height=s.parentData.height-r;if(q){s.size.width=s.size.height*s.aspectRatio}}},stop:function(e,m){var p=c(this).data("resizable"),f=p.options,k=p.position,l=p.containerOffset,d=p.containerPosition,g=p.containerElement;var i=c(p.helper),q=i.offset(),n=i.outerWidth()-p.sizeDiff.width,j=i.outerHeight()-p.sizeDiff.height;if(p._helper&&!f.animate&&(/relative/).test(g.css("position"))){c(this).css({left:q.left-d.left-l.left,width:n,height:j})}if(p._helper&&!f.animate&&(/static/).test(g.css("position"))){c(this).css({left:q.left-d.left-l.left,width:n,height:j})}}});c.ui.plugin.add("resizable","ghost",{start:function(f,g){var d=c(this).data("resizable"),h=d.options,e=d.size;d.ghost=d.originalElement.clone();d.ghost.css({opacity:0.25,display:"block",position:"relative",height:e.height,width:e.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof h.ghost=="string"?h.ghost:"");d.ghost.appendTo(d.helper)},resize:function(e,f){var d=c(this).data("resizable"),g=d.options;if(d.ghost){d.ghost.css({position:"relative",height:d.size.height,width:d.size.width})}},stop:function(e,f){var d=c(this).data("resizable"),g=d.options;if(d.ghost&&d.helper){d.helper.get(0).removeChild(d.ghost.get(0))}}});c.ui.plugin.add("resizable","grid",{resize:function(d,l){var n=c(this).data("resizable"),g=n.options,j=n.size,h=n.originalSize,i=n.originalPosition,m=n.axis,k=g._aspectRatio||d.shiftKey;g.grid=typeof g.grid=="number"?[g.grid,g.grid]:g.grid;var f=Math.round((j.width-h.width)/(g.grid[0]||1))*(g.grid[0]||1),e=Math.round((j.height-h.height)/(g.grid[1]||1))*(g.grid[1]||1);if(/^(se|s|e)$/.test(m)){n.size.width=h.width+f;n.size.height=h.height+e}else{if(/^(ne)$/.test(m)){n.size.width=h.width+f;n.size.height=h.height+e;n.position.top=i.top-e}else{if(/^(sw)$/.test(m)){n.size.width=h.width+f;n.size.height=h.height+e;n.position.left=i.left-f}else{n.size.width=h.width+f;n.size.height=h.height+e;n.position.top=i.top-e;n.position.left=i.left-f}}}}});var b=function(d){return parseInt(d,10)||0};var a=function(d){return !isNaN(parseInt(d,10))}})(jQuery);;/*
 * jQuery UI Selectable 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Selectables
 *
 * Depends:
 *  jquery.ui.core.js
 *  jquery.ui.mouse.js
 *  jquery.ui.widget.js
 */(function(a){a.widget("ui.selectable",a.ui.mouse,{options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){var b=this;this.element.addClass("ui-selectable");this.dragged=false;var c;this.refresh=function(){c=a(b.options.filter,b.element[0]);c.each(function(){var d=a(this);var e=d.offset();a.data(this,"selectable-item",{element:this,$element:d,left:e.left,top:e.top,right:e.left+d.outerWidth(),bottom:e.top+d.outerHeight(),startselected:false,selected:d.hasClass("ui-selected"),selecting:d.hasClass("ui-selecting"),unselecting:d.hasClass("ui-unselecting")})})};this.refresh();this.selectees=c.addClass("ui-selectee");this._mouseInit();this.helper=a(document.createElement("div")).css({border:"1px dotted black"}).addClass("ui-selectable-helper")},destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");this._mouseDestroy();return this},_mouseStart:function(d){var b=this;this.opos=[d.pageX,d.pageY];if(this.options.disabled){return}var c=this.options;this.selectees=a(c.filter,this.element[0]);this._trigger("start",d);a(c.appendTo).append(this.helper);this.helper.css({"z-index":100,position:"absolute",left:d.clientX,top:d.clientY,width:0,height:0});if(c.autoRefresh){this.refresh()}this.selectees.filter(".ui-selected").each(function(){var e=a.data(this,"selectable-item");e.startselected=true;if(!d.metaKey){e.$element.removeClass("ui-selected");e.selected=false;e.$element.addClass("ui-unselecting");e.unselecting=true;b._trigger("unselecting",d,{unselecting:e.element})}});a(d.target).parents().andSelf().each(function(){var e=a.data(this,"selectable-item");if(e){e.$element.removeClass("ui-unselecting").addClass("ui-selecting");e.unselecting=false;e.selecting=true;e.selected=true;b._trigger("selecting",d,{selecting:e.element});return false}})},_mouseDrag:function(i){var c=this;this.dragged=true;if(this.options.disabled){return}var e=this.options;var d=this.opos[0],h=this.opos[1],b=i.pageX,g=i.pageY;if(d>b){var f=b;b=d;d=f}if(h>g){var f=g;g=h;h=f}this.helper.css({left:d,top:h,width:b-d,height:g-h});this.selectees.each(function(){var j=a.data(this,"selectable-item");if(!j||j.element==c.element[0]){return}var k=false;if(e.tolerance=="touch"){k=(!(j.left>b||j.right<d||j.top>g||j.bottom<h))}else{if(e.tolerance=="fit"){k=(j.left>d&&j.right<b&&j.top>h&&j.bottom<g)}}if(k){if(j.selected){j.$element.removeClass("ui-selected");j.selected=false}if(j.unselecting){j.$element.removeClass("ui-unselecting");j.unselecting=false}if(!j.selecting){j.$element.addClass("ui-selecting");j.selecting=true;c._trigger("selecting",i,{selecting:j.element})}}else{if(j.selecting){if(i.metaKey&&j.startselected){j.$element.removeClass("ui-selecting");j.selecting=false;j.$element.addClass("ui-selected");j.selected=true}else{j.$element.removeClass("ui-selecting");j.selecting=false;if(j.startselected){j.$element.addClass("ui-unselecting");j.unselecting=true}c._trigger("unselecting",i,{unselecting:j.element})}}if(j.selected){if(!i.metaKey&&!j.startselected){j.$element.removeClass("ui-selected");j.selected=false;j.$element.addClass("ui-unselecting");j.unselecting=true;c._trigger("unselecting",i,{unselecting:j.element})}}}});return false},_mouseStop:function(d){var b=this;this.dragged=false;var c=this.options;a(".ui-unselecting",this.element[0]).each(function(){var e=a.data(this,"selectable-item");e.$element.removeClass("ui-unselecting");e.unselecting=false;e.startselected=false;b._trigger("unselected",d,{unselected:e.element})});a(".ui-selecting",this.element[0]).each(function(){var e=a.data(this,"selectable-item");e.$element.removeClass("ui-selecting").addClass("ui-selected");e.selecting=false;e.selected=true;e.startselected=true;b._trigger("selected",d,{selected:e.element})});this._trigger("stop",d);this.helper.remove();return false}});a.extend(a.ui.selectable,{version:"1.8rc3"})})(jQuery);;/*
 * jQuery UI Sortable 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Sortables
 *
 * Depends:
 *  jquery.ui.core.js
 *  jquery.ui.mouse.js
 *  jquery.ui.widget.js
 */(function(a){a.widget("ui.sortable",a.ui.mouse,{widgetEventPrefix:"sort",options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000},_create:function(){var b=this.options;this.containerCache={};this.element.addClass("ui-sortable");this.refresh();this.floating=this.items.length?(/left|right/).test(this.items[0].item.css("float")):false;this.offset=this.element.offset();this._mouseInit()},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");this._mouseDestroy();for(var b=this.items.length-1;b>=0;b--){this.items[b].item.removeData("sortable-item")}return this},_mouseCapture:function(e,f){if(this.reverting){return false}if(this.options.disabled||this.options.type=="static"){return false}this._refreshItems(e);var d=null,c=this,b=a(e.target).parents().each(function(){if(a.data(this,"sortable-item")==c){d=a(this);return false}});if(a.data(e.target,"sortable-item")==c){d=a(e.target)}if(!d){return false}if(this.options.handle&&!f){var g=false;a(this.options.handle,d).find("*").andSelf().each(function(){if(this==e.target){g=true}});if(!g){return false}}this.currentItem=d;this._removeCurrentsFromItems();return true},_mouseStart:function(e,f,b){var g=this.options,c=this;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(e);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");a.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(e);this.originalPageX=e.pageX;this.originalPageY=e.pageY;(g.cursorAt&&this._adjustOffsetFromHelper(g.cursorAt));this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};if(this.helper[0]!=this.currentItem[0]){this.currentItem.hide()}this._createPlaceholder();if(g.containment){this._setContainment()}if(g.cursor){if(a("body").css("cursor")){this._storedCursor=a("body").css("cursor")}a("body").css("cursor",g.cursor)}if(g.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")}this.helper.css("opacity",g.opacity)}if(g.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")}this.helper.css("zIndex",g.zIndex)}if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){this.overflowOffset=this.scrollParent.offset()}this._trigger("start",e,this._uiHash());if(!this._preserveHelperProportions){this._cacheHelperProportions()}if(!b){for(var d=this.containers.length-1;d>=0;d--){this.containers[d]._trigger("activate",e,c._uiHash(this))}}if(a.ui.ddmanager){a.ui.ddmanager.current=this}if(a.ui.ddmanager&&!g.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,e)}this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(e);return true},_mouseDrag:function(f){this.position=this._generatePosition(f);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs}if(this.options.scroll){var g=this.options,b=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-f.pageY<g.scrollSensitivity){this.scrollParent[0].scrollTop=b=this.scrollParent[0].scrollTop+g.scrollSpeed}else{if(f.pageY-this.overflowOffset.top<g.scrollSensitivity){this.scrollParent[0].scrollTop=b=this.scrollParent[0].scrollTop-g.scrollSpeed}}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-f.pageX<g.scrollSensitivity){this.scrollParent[0].scrollLeft=b=this.scrollParent[0].scrollLeft+g.scrollSpeed}else{if(f.pageX-this.overflowOffset.left<g.scrollSensitivity){this.scrollParent[0].scrollLeft=b=this.scrollParent[0].scrollLeft-g.scrollSpeed}}}else{if(f.pageY-a(document).scrollTop()<g.scrollSensitivity){b=a(document).scrollTop(a(document).scrollTop()-g.scrollSpeed)}else{if(a(window).height()-(f.pageY-a(document).scrollTop())<g.scrollSensitivity){b=a(document).scrollTop(a(document).scrollTop()+g.scrollSpeed)}}if(f.pageX-a(document).scrollLeft()<g.scrollSensitivity){b=a(document).scrollLeft(a(document).scrollLeft()-g.scrollSpeed)}else{if(a(window).width()-(f.pageX-a(document).scrollLeft())<g.scrollSensitivity){b=a(document).scrollLeft(a(document).scrollLeft()+g.scrollSpeed)}}}if(b!==false&&a.ui.ddmanager&&!g.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,f)}}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}for(var d=this.items.length-1;d>=0;d--){var e=this.items[d],c=e.item[0],h=this._intersectsWithPointer(e);if(!h){continue}if(c!=this.currentItem[0]&&this.placeholder[h==1?"next":"prev"]()[0]!=c&&!a.ui.contains(this.placeholder[0],c)&&(this.options.type=="semi-dynamic"?!a.ui.contains(this.element[0],c):true)){this.direction=h==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(e)){this._rearrange(f,e)}else{break}this._trigger("change",f,this._uiHash());break}}this._contactContainers(f);if(a.ui.ddmanager){a.ui.ddmanager.drag(this,f)}this._trigger("sort",f,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(c,d){if(!c){return}if(a.ui.ddmanager&&!this.options.dropBehaviour){a.ui.ddmanager.drop(this,c)}if(this.options.revert){var b=this;var e=b.placeholder.offset();b.reverting=true;a(this.helper).animate({left:e.left-this.offset.parent.left-b.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:e.top-this.offset.parent.top-b.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){b._clear(c)})}else{this._clear(c,d)}return false},cancel:function(){var b=this;if(this.dragging){this._mouseUp();if(this.options.helper=="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}for(var c=this.containers.length-1;c>=0;c--){this.containers[c]._trigger("deactivate",null,b._uiHash(this));if(this.containers[c].containerCache.over){this.containers[c]._trigger("out",null,b._uiHash(this));this.containers[c].containerCache.over=0}}}if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])}if(this.options.helper!="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()}a.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});if(this.domPosition.prev){a(this.domPosition.prev).after(this.currentItem)}else{a(this.domPosition.parent).prepend(this.currentItem)}return this},serialize:function(d){var b=this._getItemsAsjQuery(d&&d.connected);var c=[];d=d||{};a(b).each(function(){var e=(a(d.item||this).attr(d.attribute||"id")||"").match(d.expression||(/(.+)[-=_](.+)/));if(e){c.push((d.key||e[1]+"[]")+"="+(d.key&&d.expression?e[1]:e[2]))}});return c.join("&")},toArray:function(d){var b=this._getItemsAsjQuery(d&&d.connected);var c=[];d=d||{};b.each(function(){c.push(a(d.item||this).attr(d.attribute||"id")||"")});return c},_intersectsWith:function(m){var e=this.positionAbs.left,d=e+this.helperProportions.width,k=this.positionAbs.top,j=k+this.helperProportions.height;var f=m.left,c=f+m.width,n=m.top,i=n+m.height;var o=this.offset.click.top,h=this.offset.click.left;var g=(k+o)>n&&(k+o)<i&&(e+h)>f&&(e+h)<c;if(this.options.tolerance=="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>m[this.floating?"width":"height"])){return g}else{return(f<e+(this.helperProportions.width/2)&&d-(this.helperProportions.width/2)<c&&n<k+(this.helperProportions.height/2)&&j-(this.helperProportions.height/2)<i)}},_intersectsWithPointer:function(d){var e=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,d.top,d.height),c=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,d.left,d.width),g=e&&c,b=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();if(!g){return false}return this.floating?(((f&&f=="right")||b=="down")?2:1):(b&&(b=="down"?2:1))},_intersectsWithSides:function(e){var c=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,e.top+(e.height/2),e.height),d=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,e.left+(e.width/2),e.width),b=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();if(this.floating&&f){return((f=="right"&&d)||(f=="left"&&!d))}else{return b&&((b=="down"&&c)||(b=="up"&&!c))}},_getDragVerticalDirection:function(){var b=this.positionAbs.top-this.lastPositionAbs.top;return b!=0&&(b>0?"down":"up")},_getDragHorizontalDirection:function(){var b=this.positionAbs.left-this.lastPositionAbs.left;return b!=0&&(b>0?"right":"left")},refresh:function(b){this._refreshItems(b);this.refreshPositions();return this},_connectWith:function(){var b=this.options;return b.connectWith.constructor==String?[b.connectWith]:b.connectWith},_getItemsAsjQuery:function(b){var l=this;var g=[];var e=[];var h=this._connectWith();if(h&&b){for(var d=h.length-1;d>=0;d--){var k=a(h[d]);for(var c=k.length-1;c>=0;c--){var f=a.data(k[c],"sortable");if(f&&f!=this&&!f.options.disabled){e.push([a.isFunction(f.options.items)?f.options.items.call(f.element):a(f.options.items,f.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),f])}}}}e.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(var d=e.length-1;d>=0;d--){e[d][0].each(function(){g.push(this)})}return a(g)},_removeCurrentsFromItems:function(){var d=this.currentItem.find(":data(sortable-item)");for(var c=0;c<this.items.length;c++){for(var b=0;b<d.length;b++){if(d[b]==this.items[c].item[0]){this.items.splice(c,1)}}}},_refreshItems:function(b){this.items=[];this.containers=[this];var h=this.items;var p=this;var f=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],b,{item:this.currentItem}):a(this.options.items,this.element),this]];var l=this._connectWith();if(l){for(var e=l.length-1;e>=0;e--){var m=a(l[e]);for(var d=m.length-1;d>=0;d--){var g=a.data(m[d],"sortable");if(g&&g!=this&&!g.options.disabled){f.push([a.isFunction(g.options.items)?g.options.items.call(g.element[0],b,{item:this.currentItem}):a(g.options.items,g.element),g]);this.containers.push(g)}}}}for(var e=f.length-1;e>=0;e--){var k=f[e][1];var c=f[e][0];for(var d=0,n=c.length;d<n;d++){var o=a(c[d]);o.data("sortable-item",k);h.push({item:o,instance:k,width:0,height:0,left:0,top:0})}}},refreshPositions:function(b){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()}for(var d=this.items.length-1;d>=0;d--){var e=this.items[d];var c=this.options.toleranceElement?a(this.options.toleranceElement,e.item):e.item;if(!b){e.width=c.outerWidth();e.height=c.outerHeight()}var f=c.offset();e.left=f.left;e.top=f.top}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)}else{for(var d=this.containers.length-1;d>=0;d--){var f=this.containers[d].element.offset();this.containers[d].containerCache.left=f.left;this.containers[d].containerCache.top=f.top;this.containers[d].containerCache.width=this.containers[d].element.outerWidth();this.containers[d].containerCache.height=this.containers[d].element.outerHeight()}}return this},_createPlaceholder:function(d){var b=d||this,e=b.options;if(!e.placeholder||e.placeholder.constructor==String){var c=e.placeholder;e.placeholder={element:function(){var f=a(document.createElement(b.currentItem[0].nodeName)).addClass(c||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];if(!c){f.style.visibility="hidden"}return f},update:function(f,g){if(c&&!e.forcePlaceholderSize){return}if(!g.height()){g.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10))}if(!g.width()){g.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10))}}}}b.placeholder=a(e.placeholder.element.call(b.element,b.currentItem));b.currentItem.after(b.placeholder);e.placeholder.update(b,b.placeholder)},_contactContainers:function(b){var d=null,k=null;for(var f=this.containers.length-1;f>=0;f--){if(a.ui.contains(this.currentItem[0],this.containers[f].element[0])){continue}if(this._intersectsWith(this.containers[f].containerCache)){if(d&&a.ui.contains(this.containers[f].element[0],d.element[0])){continue}d=this.containers[f];k=f}else{if(this.containers[f].containerCache.over){this.containers[f]._trigger("out",b,this._uiHash(this));this.containers[f].containerCache.over=0}}}if(!d){return}if(this.currentContainer!=this.containers[k]){var h=10000;var g=null;var c=this.positionAbs[this.containers[k].floating?"left":"top"];for(var e=this.items.length-1;e>=0;e--){if(!a.ui.contains(this.containers[k].element[0],this.items[e].item[0])){continue}var l=this.items[e][this.containers[k].floating?"left":"top"];if(Math.abs(l-c)<h){h=Math.abs(l-c);g=this.items[e]}}if(!g&&!this.options.dropOnEmpty){return}this.currentContainer=this.containers[k];g?this._rearrange(b,g,null,true):this._rearrange(b,null,this.containers[k].element,true);this._trigger("change",b,this._uiHash());this.containers[k]._trigger("change",b,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[k]._trigger("over",b,this._uiHash(this));this.containers[k].containerCache.over=1}},_createHelper:function(c){var d=this.options;var b=a.isFunction(d.helper)?a(d.helper.apply(this.element[0],[c,this.currentItem])):(d.helper=="clone"?this.currentItem.clone():this.currentItem);if(!b.parents("body").length){a(d.appendTo!="parent"?d.appendTo:this.currentItem[0].parentNode)[0].appendChild(b[0])}if(b[0]==this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}}if(b[0].style.width==""||d.forceHelperSize){b.width(this.currentItem.width())}if(b[0].style.height==""||d.forceHelperSize){b.height(this.currentItem.height())}return b},_adjustOffsetFromHelper:function(b){if(typeof b=="string"){b=b.split(" ")}if(a.isArray(b)){b={left:+b[0],top:+b[1]||0}}if("left" in b){this.offset.click.left=b.left+this.margins.left}if("right" in b){this.offset.click.left=this.helperProportions.width-b.right+this.margins.left}if("top" in b){this.offset.click.top=b.top+this.margins.top}if("bottom" in b){this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){b.left+=this.scrollParent.scrollLeft();b.top+=this.scrollParent.scrollTop()}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)){b={top:0,left:0}}return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var b=this.currentItem.position();return{top:b.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:b.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e=this.options;if(e.containment=="parent"){e.containment=this.helper[0].parentNode}if(e.containment=="document"||e.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(e.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(e.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!(/^(document|window|parent)$/).test(e.containment)){var c=a(e.containment)[0];var d=a(e.containment).offset();var b=(a(c).css("overflow")!="hidden");this.containment=[d.left+(parseInt(a(c).css("borderLeftWidth"),10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(a(c).css("borderTopWidth"),10)||0)+(parseInt(a(c).css("paddingTop"),10)||0)-this.margins.top,d.left+(b?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(b?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(f,h){if(!h){h=this.position}var c=f=="absolute"?1:-1;var e=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=(/(html|body)/i).test(b[0].tagName);return{top:(h.top+this.offset.relative.top*c+this.offset.parent.top*c-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(g?0:b.scrollTop()))*c)),left:(h.left+this.offset.relative.left*c+this.offset.parent.left*c-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:b.scrollLeft())*c))}},_generatePosition:function(e){var h=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,i=(/(html|body)/i).test(b[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()}var d=e.pageX;var c=e.pageY;if(this.originalPosition){if(this.containment){if(e.pageX-this.offset.click.left<this.containment[0]){d=this.containment[0]+this.offset.click.left}if(e.pageY-this.offset.click.top<this.containment[1]){c=this.containment[1]+this.offset.click.top}if(e.pageX-this.offset.click.left>this.containment[2]){d=this.containment[2]+this.offset.click.left}if(e.pageY-this.offset.click.top>this.containment[3]){c=this.containment[3]+this.offset.click.top}}if(h.grid){var g=this.originalPageY+Math.round((c-this.originalPageY)/h.grid[1])*h.grid[1];c=this.containment?(!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:(!(g-this.offset.click.top<this.containment[1])?g-h.grid[1]:g+h.grid[1])):g;var f=this.originalPageX+Math.round((d-this.originalPageX)/h.grid[0])*h.grid[0];d=this.containment?(!(f-this.offset.click.left<this.containment[0]||f-this.offset.click.left>this.containment[2])?f:(!(f-this.offset.click.left<this.containment[0])?f-h.grid[0]:f+h.grid[0])):f}}return{top:(c-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(i?0:b.scrollTop())))),left:(d-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:b.scrollLeft())))}},_rearrange:function(g,f,c,e){c?c[0].appendChild(this.placeholder[0]):f.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction=="down"?f.item[0]:f.item[0].nextSibling));this.counter=this.counter?++this.counter:1;var d=this,b=this.counter;window.setTimeout(function(){if(b==d.counter){d.refreshPositions(!e)}},0)},_clear:function(d,e){this.reverting=false;var f=[],b=this;if(!this._noFinalSort&&this.currentItem[0].parentNode){this.placeholder.before(this.currentItem)}this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var c in this._storedCSS){if(this._storedCSS[c]=="auto"||this._storedCSS[c]=="static"){this._storedCSS[c]=""}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}if(this.fromOutside&&!e){f.push(function(g){this._trigger("receive",g,this._uiHash(this.fromOutside))})}if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!e){f.push(function(g){this._trigger("update",g,this._uiHash())})}if(!a.ui.contains(this.element[0],this.currentItem[0])){if(!e){f.push(function(g){this._trigger("remove",g,this._uiHash())})}for(var c=this.containers.length-1;c>=0;c--){if(a.ui.contains(this.containers[c].element[0],this.currentItem[0])&&!e){f.push((function(g){return function(h){g._trigger("receive",h,this._uiHash(this))}}).call(this,this.containers[c]));f.push((function(g){return function(h){g._trigger("update",h,this._uiHash(this))}}).call(this,this.containers[c]))}}}for(var c=this.containers.length-1;c>=0;c--){if(!e){f.push((function(g){return function(h){g._trigger("deactivate",h,this._uiHash(this))}}).call(this,this.containers[c]))}if(this.containers[c].containerCache.over){f.push((function(g){return function(h){g._trigger("out",h,this._uiHash(this))}}).call(this,this.containers[c]));this.containers[c].containerCache.over=0}}if(this._storedCursor){a("body").css("cursor",this._storedCursor)}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex)}this.dragging=false;if(this.cancelHelperRemoval){if(!e){this._trigger("beforeStop",d,this._uiHash());for(var c=0;c<f.length;c++){f[c].call(this,d)}this._trigger("stop",d,this._uiHash())}return false}if(!e){this._trigger("beforeStop",d,this._uiHash())}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(this.helper[0]!=this.currentItem[0]){this.helper.remove()}this.helper=null;if(!e){for(var c=0;c<f.length;c++){f[c].call(this,d)}this._trigger("stop",d,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){if(a.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()}},_uiHash:function(c){var b=c||this;return{helper:b.helper,placeholder:b.placeholder||a([]),position:b.position,originalPosition:b.originalPosition,offset:b.positionAbs,item:b.currentItem,sender:c?c.element:null}}});a.extend(a.ui.sortable,{version:"1.8rc3"})})(jQuery);;/*
 * jQuery UI Accordion 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Accordion
 *
 * Depends:
 *  jquery.ui.core.js
 *  jquery.ui.widget.js
 */(function(a){a.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()==location.href.toLowerCase()}},_create:function(){var d=this.options,b=this;this.running=0;this.element.addClass("ui-accordion ui-widget ui-helper-reset");if(this.element[0].nodeName=="UL"){this.element.children("li").addClass("ui-accordion-li-fix")}this.headers=this.element.find(d.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){a(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){a(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){a(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){a(this).removeClass("ui-state-focus")});this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");if(d.navigation){var c=this.element.find("a").filter(d.navigationFilter);if(c.length){var e=c.closest(".ui-accordion-header");if(e.length){this.active=e}else{this.active=c.closest(".ui-accordion-content").prev()}}}this.active=this._findActive(this.active||d.active).toggleClass("ui-state-default").toggleClass("ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");this.active.next().addClass("ui-accordion-content-active");this._createIcons();if(a.browser.msie){this.element.find("a").css("zoom","1")}this.resize();this.element.attr("role","tablist");this.headers.attr("role","tab").bind("keydown",function(f){return b._keydown(f)}).next().attr("role","tabpanel");this.headers.not(this.active||"").attr("aria-expanded","false").attr("tabIndex","-1").next().hide();if(!this.active.length){this.headers.eq(0).attr("tabIndex","0")}else{this.active.attr("aria-expanded","true").attr("tabIndex","0")}if(!a.browser.safari){this.headers.find("a").attr("tabIndex","-1")}if(d.event){this.headers.bind((d.event)+".accordion",function(f){b._clickHandler.call(b,f,this);f.preventDefault()})}},_createIcons:function(){var b=this.options;if(b.icons){a("<span/>").addClass("ui-icon "+b.icons.header).prependTo(this.headers);this.active.find(".ui-icon").toggleClass(b.icons.header).toggleClass(b.icons.headerSelected);this.element.addClass("ui-accordion-icons")}},_destroyIcons:function(){this.headers.children(".ui-icon").remove();this.element.removeClass("ui-accordion-icons")},destroy:function(){var c=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role").unbind(".accordion").removeData("accordion");this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("tabindex");this.headers.find("a").removeAttr("tabindex");this._destroyIcons();var b=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active");if(c.autoHeight||c.fillHeight){b.css("height","")}return this},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments);if(b=="active"){this.activate(c)}if(b=="icons"){this._destroyIcons();if(c){this._createIcons()}}},_keydown:function(e){var g=this.options,f=a.ui.keyCode;if(g.disabled||e.altKey||e.ctrlKey){return}var d=this.headers.length;var b=this.headers.index(e.target);var c=false;switch(e.keyCode){case f.RIGHT:case f.DOWN:c=this.headers[(b+1)%d];break;case f.LEFT:case f.UP:c=this.headers[(b-1+d)%d];break;case f.SPACE:case f.ENTER:this._clickHandler({target:e.target},e.target);e.preventDefault()}if(c){a(e.target).attr("tabIndex","-1");a(c).attr("tabIndex","0");c.focus();return false}return true},resize:function(){var d=this.options,c;if(d.fillSpace){if(a.browser.msie){var b=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}c=this.element.parent().height();if(a.browser.msie){this.element.parent().css("overflow",b)}this.headers.each(function(){c-=a(this).outerHeight(true)});this.headers.next().each(function(){a(this).height(Math.max(0,c-a(this).innerHeight()+a(this).height()))}).css("overflow","auto")}else{if(d.autoHeight){c=0;this.headers.next().each(function(){c=Math.max(c,a(this).height())}).height(c)}}return this},activate:function(b){this.options.active=b;var c=this._findActive(b)[0];this._clickHandler({target:c},c);return this},_findActive:function(b){return b?typeof b=="number"?this.headers.filter(":eq("+b+")"):this.headers.not(this.headers.not(b)):b===false?a([]):this.headers.filter(":eq(0)")},_clickHandler:function(b,f){var d=this.options;if(d.disabled){return}if(!b.target){if(!d.collapsible){return}this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").find(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);this.active.next().addClass("ui-accordion-content-active");var h=this.active.next(),e={options:d,newHeader:a([]),oldHeader:d.active,newContent:a([]),oldContent:h},c=(this.active=a([]));this._toggle(c,h,e);return}var g=a(b.currentTarget||f);var i=g[0]==this.active[0];d.active=d.collapsible&&i?false:a(".ui-accordion-header",this.element).index(g);if(this.running||(!d.collapsible&&i)){return}this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").find(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);if(!i){g.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").find(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected);g.next().addClass("ui-accordion-content-active")}var c=g.next(),h=this.active.next(),e={options:d,newHeader:i&&d.collapsible?a([]):g,oldHeader:this.active,newContent:i&&d.collapsible?a([]):c,oldContent:h},j=this.headers.index(this.active[0])>this.headers.index(g[0]);this.active=i?a([]):g;this._toggle(c,h,e,i,j);return},_toggle:function(b,i,g,j,k){var d=this.options,m=this;this.toShow=b;this.toHide=i;this.data=g;var c=function(){if(!m){return}return m._completed.apply(m,arguments)};this._trigger("changestart",null,this.data);this.running=i.size()===0?b.size():i.size();if(d.animated){var f={};if(d.collapsible&&j){f={toShow:a([]),toHide:i,complete:c,down:k,autoHeight:d.autoHeight||d.fillSpace}}else{f={toShow:b,toHide:i,complete:c,down:k,autoHeight:d.autoHeight||d.fillSpace}}if(!d.proxied){d.proxied=d.animated}if(!d.proxiedDuration){d.proxiedDuration=d.duration}d.animated=a.isFunction(d.proxied)?d.proxied(f):d.proxied;d.duration=a.isFunction(d.proxiedDuration)?d.proxiedDuration(f):d.proxiedDuration;var l=a.ui.accordion.animations,e=d.duration,h=d.animated;if(h&&!l[h]&&!a.easing[h]){h="slide"}if(!l[h]){l[h]=function(n){this.slide(n,{easing:h,duration:e||700})}}l[h](f)}else{if(d.collapsible&&j){b.toggle()}else{i.hide();b.show()}c(true)}i.prev().attr("aria-expanded","false").attr("tabIndex","-1").blur();b.prev().attr("aria-expanded","true").attr("tabIndex","0").focus()},_completed:function(b){var c=this.options;this.running=b?0:--this.running;if(this.running){return}if(c.clearStyle){this.toShow.add(this.toHide).css({height:"",overflow:""})}this.toHide.removeClass("ui-accordion-content-active");this._trigger("change",null,this.data)}});a.extend(a.ui.accordion,{version:"1.8rc3",animations:{slide:function(j,h){j=a.extend({easing:"swing",duration:300},j,h);if(!j.toHide.size()){j.toShow.animate({height:"show"},j);return}if(!j.toShow.size()){j.toHide.animate({height:"hide"},j);return}var c=j.toShow.css("overflow"),g=0,d={},f={},e=["height","paddingTop","paddingBottom"],b;var i=j.toShow;b=i[0].style.width;i.width(parseInt(i.parent().width(),10)-parseInt(i.css("paddingLeft"),10)-parseInt(i.css("paddingRight"),10)-(parseInt(i.css("borderLeftWidth"),10)||0)-(parseInt(i.css("borderRightWidth"),10)||0));a.each(e,function(k,m){f[m]="hide";var l=(""+a.css(j.toShow[0],m)).match(/^([\d+-.]+)(.*)$/);d[m]={value:l[1],unit:l[2]||"px"}});j.toShow.css({height:0,overflow:"hidden"}).show();j.toHide.filter(":hidden").each(j.complete).end().filter(":visible").animate(f,{step:function(k,l){if(l.prop=="height"){g=(l.end-l.start===0)?0:(l.now-l.start)/(l.end-l.start)}j.toShow[0].style[l.prop]=(g*d[l.prop].value)+d[l.prop].unit},duration:j.duration,easing:j.easing,complete:function(){if(!j.autoHeight){j.toShow.css("height","")}j.toShow.css("width",b);j.toShow.css({overflow:c});j.complete()}})},bounceslide:function(b){this.slide(b,{easing:b.down?"easeOutBounce":"swing",duration:b.down?1000:200})}}})})(jQuery);;/*
 * jQuery UI Autocomplete 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Autocomplete
 *
 * Depends:
 *  jquery.ui.core.js
 *  jquery.ui.widget.js
 *  jquery.ui.position.js
 */(function(a){a.widget("ui.autocomplete",{options:{minLength:1,delay:300},_create:function(){var b=this;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(c){var d=a.ui.keyCode;switch(c.keyCode){case d.PAGE_UP:b._move("previousPage",c);break;case d.PAGE_DOWN:b._move("nextPage",c);break;case d.UP:b._move("previous",c);c.preventDefault();break;case d.DOWN:b._move("next",c);c.preventDefault();break;case d.ENTER:if(b.menu.active){c.preventDefault()}case d.TAB:if(!b.menu.active){return}b.menu.select();break;case d.ESCAPE:b.element.val(b.term);b.close(c);break;case 16:case 17:case 18:break;default:clearTimeout(b.searching);b.searching=setTimeout(function(){b.search(null,c)},b.options.delay);break}}).bind("focus.autocomplete",function(){b.previous=b.element.val()}).bind("blur.autocomplete",function(c){clearTimeout(b.searching);b.closing=setTimeout(function(){b.close(c)},150)});this._initSource();this.response=function(){return b._response.apply(b,arguments)};this.menu=a("<ul></ul>").addClass("ui-autocomplete").appendTo(this.element.parent()).menu({focus:function(d,e){var c=e.item.data("item.autocomplete");if(false!==b._trigger("focus",null,{item:c})){b.element.val(c.value)}},selected:function(d,e){var c=e.item.data("item.autocomplete");if(false!==b._trigger("select",d,{item:c})){b.element.val(c.value)}b.close(d);b.previous=b.element.val();if(b.element[0]!=document.activeElement){b.element.focus()}}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");if(a.fn.bgiframe){this.menu.element.bgiframe()}},destroy:function(){this.element.removeClass("ui-autocomplete-input ui-widget ui-widget-content").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");this.menu.element.remove();a.Widget.prototype.destroy.call(this)},_setOption:function(b){a.Widget.prototype._setOption.apply(this,arguments);if(b=="source"){this._initSource()}},_initSource:function(){if(a.isArray(this.options.source)){var c=this.options.source;this.source=function(e,d){var f=new RegExp(a.ui.autocomplete.escapeRegex(e.term),"i");d(a.grep(c,function(g){return f.test(g.value||g.label||g)}))}}else{if(typeof this.options.source=="string"){var b=this.options.source;this.source=function(e,d){a.getJSON(b,e,d)}}else{this.source=this.options.source}}},search:function(c,b){c=c!=null?c:this.element.val();if(c.length<this.options.minLength){return this.close(b)}clearTimeout(this.closing);if(this._trigger("search")===false){return}return this._search(c)},_search:function(b){this.term=this.element.addClass("ui-autocomplete-loading").val();this.source({term:b},this.response)},_response:function(b){if(b.length){b=this._normalize(b);this._trigger("open");this._suggest(b)}else{this.close()}this.element.removeClass("ui-autocomplete-loading")},close:function(b){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this._trigger("close",b);this.menu.element.hide();this.menu.deactivate()}if(this.previous!=this.element.val()){this._trigger("change",b)}},_normalize:function(b){if(b.length&&b[0].label&&b[0].value){return b}return a.map(b,function(c){if(typeof c=="string"){return{label:c,value:c}}return a.extend({label:c.label||c.value,value:c.value||c.label},c)})},_suggest:function(c){var b=this,d=this.menu.element.empty();this._renderMenu(d,c);this.menu.deactivate();this.menu.refresh();this.menu.element.show().position({my:"left top",at:"left bottom",of:this.element,collision:"none"});if(d.width()<=this.element.width()){d.width(this.element.width())}},_renderMenu:function(d,c){var b=this;a.each(c,function(e,f){b._renderItem(d,f)})},_renderItem:function(b,c){return a("<li></li>").data("item.autocomplete",c).append("<a>"+c.label+"</a>").appendTo(b)},_move:function(c,b){if(!this.menu.element.is(":visible")){this.search(null,b);return}if(this.menu.first()&&/^previous/.test(c)||this.menu.last()&&/^next/.test(c)){this.element.val(this.term);this.menu.deactivate();return}this.menu[c]()},widget:function(){return this.menu.element}});a.extend(a.ui.autocomplete,{escapeRegex:function(b){return b.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi,"\\$1")}})})(jQuery);(function(a){a.widget("ui.menu",{_create:function(){var b=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"menu","aria-activedescendant":"ui-active-menuitem"}).click(function(c){c.preventDefault();b.select()});this.refresh()},refresh:function(){var c=this;var b=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");b.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(){c.activate(a(this).parent())})},activate:function(d){this.deactivate();this.active=d.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",null,{item:d});if(this.hasScroll()){var e=d.offset().top-this.element.offset().top,b=this.element.attr("scrollTop"),c=this.element.height();if(e<0){this.element.attr("scrollTop",b+e)}else{if(e>c){this.element.attr("scrollTop",b+e-c+d.height())}}}},deactivate:function(){if(!this.active){return}this.active.children("a").removeClass("ui-state-hover").removeAttr("id");this.active=null},next:function(){this.move("next","li:first")},previous:function(){this.move("prev","li:last")},first:function(){return this.active&&!this.active.prev().length},last:function(){return this.active&&!this.active.next().length},move:function(d,c){if(!this.active){this.activate(this.element.children(c));return}var b=this.active[d]();if(b.length){this.activate(b)}else{this.activate(this.element.children(c))}},nextPage:function(){if(this.hasScroll()){if(!this.active||this.last()){this.activate(this.element.children(":first"));return}var d=this.active.offset().top,c=this.element.height(),b=this.element.children("li").filter(function(){var e=a(this).offset().top-d-c+a(this).height();return e<10&&e>-10});if(!b.length){b=this.element.children(":last")}this.activate(b)}else{this.activate(this.element.children(!this.active||this.last()?":first":":last"))}},previousPage:function(){if(this.hasScroll()){if(!this.active||this.first()){this.activate(this.element.children(":last"));return}var c=this.active.offset().top,b=this.element.height();result=this.element.children("li").filter(function(){var d=a(this).offset().top-c+b-a(this).height();return d<10&&d>-10});if(!result.length){result=this.element.children(":first")}this.activate(result)}else{this.activate(this.element.children(!this.active||this.first()?":last":":first"))}},hasScroll:function(){return this.element.height()<this.element.attr("scrollHeight")},select:function(){this._trigger("selected",null,{item:this.active})}})})(jQuery);;/*
 * jQuery UI Button 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Button
 *
 * Depends:
 *  jquery.ui.core.js
 *  jquery.ui.widget.js
 */(function(d){var c,b="ui-button ui-widget ui-state-default ui-corner-all",a="ui-state-hover ui-state-active ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon ui-button-text-only";d.widget("ui.button",{options:{text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var e=this,g=this.options,h=this.type==="checkbox"||this.type==="radio",i="ui-state-hover"+(!h?" ui-state-active":""),f="ui-state-focus";if(g.label===null){g.label=this.buttonElement.html()}this.buttonElement.addClass(b).attr("role","button").bind("mouseenter.button",function(){if(g.disabled){return}d(this).addClass("ui-state-hover");if(this===c){d(this).addClass("ui-state-active")}}).bind("mouseleave.button",function(){if(g.disabled){return}d(this).removeClass(i)}).bind("focus.button",function(){d(this).addClass(f)}).bind("blur.button",function(){d(this).removeClass(f)});if(this.type==="checkbox"){this.buttonElement.bind("click.button",function(){if(g.disabled){return}d(this).toggleClass("ui-state-active");e.buttonElement.attr("aria-pressed",e.element[0].checked)})}else{if(this.type==="radio"){this.buttonElement.bind("click.button",function(){if(g.disabled){return}d(this).addClass("ui-state-active");e.buttonElement.attr("aria-pressed",true);var k=e.element[0],j=k.name,l=k.form,m;if(j){if(l){m=d(l).find("[name="+j+"]")}else{m=d("[name="+j+"]",k.ownerDocument).filter(function(){return !this.form})}m.not(k).map(function(){return d(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed",false)}})}else{this.buttonElement.bind("mousedown.button",function(){if(g.disabled){return}d(this).addClass("ui-state-active");c=this;d(document).one("mouseup",function(){c=null})}).bind("mouseup.button",function(){if(g.disabled){return}d(this).removeClass("ui-state-active")}).bind("keydown.button",function(j){if(j.keyCode==d.ui.keyCode.SPACE||j.keyCode==d.ui.keyCode.ENTER){d(this).addClass("ui-state-active")}}).bind("keyup.button",function(){d(this).removeClass("ui-state-active")});if(this.buttonElement.is("a")){this.buttonElement.keyup(function(j){if(j.keyCode==d.ui.keyCode.SPACE){d(this).trigger("click")}})}}}this._resetButton()},_determineButtonType:function(){this.type=this.element.is(":checkbox")?"checkbox":this.element.is(":radio")?"radio":this.element.is("input")?"input":"button";if(this.type==="checkbox"||this.type==="radio"){this.buttonElement=d("[for="+this.element.attr("id")+"]");this.element.hide();var e=this.element.is(":checked");if(e){this.buttonElement.addClass("ui-state-active")}this.buttonElement.attr("aria-pressed",e)}else{this.buttonElement=this.element}},widget:function(){return this.buttonElement},destroy:function(){this.buttonElement.removeClass(b+" "+a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());if(!this.hasTitle){this.buttonElement.removeAttr("title")}if(this.type==="checkbox"||this.type==="radio"){this.element.show()}d.Widget.prototype.destroy.call(this)},_setOption:function(e,f){d.Widget.prototype._setOption.apply(this,arguments);this._resetButton()},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label)}return}var h=this.buttonElement,g=d("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(h.empty()).text();var f=this.options.icons,e=f.primary&&f.secondary;if(f.primary||f.secondary){h.addClass("ui-button-text-icon"+(e?"s":""));if(f.primary){h.prepend("<span class='ui-button-icon-primary ui-icon "+f.primary+"'></span>")}if(f.secondary){h.append("<span class='ui-button-icon-secondary ui-icon "+f.secondary+"'></span>")}if(!this.options.text){h.addClass(e?"ui-button-icons-only":"ui-button-icon-only").removeClass("ui-button-text-icons ui-button-text-icon");if(!this.hasTitle){h.attr("title",g)}}}else{h.addClass("ui-button-text-only")}}});d.widget("ui.buttonset",{_create:function(){this.element.addClass("ui-button-set");this.buttons=this.element.find(":button, :submit, :reset, :checkbox, :radio, a, .ui-button").button().map(function(){return d(this).button("widget")[0]}).removeClass("ui-corner-all").filter(":first").addClass("ui-corner-left").end().filter(":last").addClass("ui-corner-right").end().end()},_setOption:function(e,f){if(e==="disabled"){this.buttons.button("option",e,f)}d.Widget.prototype._setOption.apply(this,arguments)},destroy:function(){this.element.removeClass("ui-button-set");this.buttons.button("destroy").removeClass("ui-corner-left ui-corner-right");d.Widget.prototype.destroy.call(this)}})})(jQuery);;/*
 * jQuery UI Dialog 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Dialog
 *
 * Depends:
 *  jquery.ui.core.js
 *  jquery.ui.widget.js
 *  jquery.ui.button.js
 *  jquery.ui.draggable.js
 *  jquery.ui.mouse.js
 *  jquery.ui.position.js
 *  jquery.ui.resizable.js
 */(function(b){var a="ui-dialog ui-widget ui-widget-content ui-corner-all ";b.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:"center",resizable:true,show:null,stack:true,title:"",width:300,zIndex:1000},_create:function(){this.originalTitle=this.element.attr("title");var k=this,l=k.options,i=l.title||k.originalTitle||"&#160;",d=b.ui.dialog.getTitleId(k.element),j=(k.uiDialog=b("<div></div>")).appendTo(document.body).hide().addClass(a+l.dialogClass).css({zIndex:l.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(m){if(l.closeOnEscape&&m.keyCode&&m.keyCode==b.ui.keyCode.ESCAPE){k.close(m);m.preventDefault()}}).attr({role:"dialog","aria-labelledby":d}).mousedown(function(m){k.moveToTop(false,m)}),f=k.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(j),e=(k.uiDialogTitlebar=b("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(j),h=b('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){h.addClass("ui-state-hover")},function(){h.removeClass("ui-state-hover")}).focus(function(){h.addClass("ui-state-focus")}).blur(function(){h.removeClass("ui-state-focus")}).click(function(m){k.close(m);return false}).appendTo(e),g=(k.uiDialogTitlebarCloseText=b("<span></span>")).addClass("ui-icon ui-icon-closethick").text(l.closeText).appendTo(h),c=b("<span></span>").addClass("ui-dialog-title").attr("id",d).html(i).prependTo(e);if(b.isFunction(l.beforeclose)&&!b.isFunction(l.beforeClose)){l.beforeClose=l.beforeclose}e.find("*").add(e).disableSelection();(l.draggable&&b.fn.draggable&&k._makeDraggable());(l.resizable&&b.fn.resizable&&k._makeResizable());k._createButtons(l.buttons);k._isOpen=false;(b.fn.bgiframe&&j.bgiframe())},_init:function(){if(this.options.autoOpen){this.open()}},destroy:function(){var c=this;(c.overlay&&c.overlay.destroy());c.uiDialog.hide();c.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");c.uiDialog.remove();(c.originalTitle&&c.element.attr("title",c.originalTitle));return c},widget:function(){return this.uiDialog},close:function(e){var c=this;if(false===c._trigger("beforeClose",e)){return}(c.overlay&&c.overlay.destroy());c.uiDialog.unbind("keypress.ui-dialog");c._isOpen=false;(c.options.hide?c.uiDialog.hide(c.options.hide,function(){c._trigger("close",e)}):c.uiDialog.hide()&&c._trigger("close",e));b.ui.dialog.overlay.resize();if(c.options.modal){var d=0;b(".ui-dialog").each(function(){if(this!=c.uiDialog[0]){d=Math.max(d,b(this).css("z-index"))}});b.ui.dialog.maxZ=d}return c},isOpen:function(){return this._isOpen},moveToTop:function(g,f){var c=this,e=c.options;if((e.modal&&!g)||(!e.stack&&!e.modal)){return c._trigger("focus",f)}if(e.zIndex>b.ui.dialog.maxZ){b.ui.dialog.maxZ=e.zIndex}(c.overlay&&c.overlay.$el.css("z-index",b.ui.dialog.overlay.maxZ=++b.ui.dialog.maxZ));var d={scrollTop:c.element.attr("scrollTop"),scrollLeft:c.element.attr("scrollLeft")};c.uiDialog.css("z-index",++b.ui.dialog.maxZ);c.element.attr(d);c._trigger("focus",f);return c},open:function(){if(this._isOpen){return}var d=this,e=d.options,c=d.uiDialog;d.overlay=e.modal?new b.ui.dialog.overlay(d):null;(c.next().length&&c.appendTo("body"));d._size();d._position(e.position);c.show(e.show);d.moveToTop(true);(e.modal&&c.bind("keypress.ui-dialog",function(h){if(h.keyCode!=b.ui.keyCode.TAB){return}var g=b(":tabbable",this),i=g.filter(":first"),f=g.filter(":last");if(h.target==f[0]&&!h.shiftKey){i.focus(1);return false}else{if(h.target==i[0]&&h.shiftKey){f.focus(1);return false}}}));b([]).add(c.find(".ui-dialog-content :tabbable:first")).add(c.find(".ui-dialog-buttonpane :tabbable:first")).add(c).filter(":first").focus();d._trigger("open");d._isOpen=true;return d},_createButtons:function(f){var e=this,c=false,d=b("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");e.uiDialog.find(".ui-dialog-buttonpane").remove();(typeof f=="object"&&f!==null&&b.each(f,function(){return !(c=true)}));if(c){b.each(f,function(g,i){var h=b('<button type="button"></button>').text(g).click(function(){i.apply(e.element[0],arguments)}).appendTo(d);(b.fn.button&&h.button())});d.appendTo(e.uiDialog)}},_makeDraggable:function(){var c=this,e=c.options,f=b(document),d;c.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(g){d=e.height==="auto"?"auto":b(this).height();b(this).height(b(this).height()).addClass("ui-dialog-dragging");c._trigger("dragStart",g)},drag:function(g){c._trigger("drag",g)},stop:function(g,h){e.position=[h.position.left-f.scrollLeft(),h.position.top-f.scrollTop()];b(this).removeClass("ui-dialog-dragging").height(d);c._trigger("dragStop",g);b.ui.dialog.overlay.resize()}})},_makeResizable:function(g){g=(g===undefined?this.options.resizable:g);var d=this,f=d.options,c=d.uiDialog.css("position"),e=typeof g=="string"?g:"n,e,s,w,se,sw,ne,nw";d.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:d.element,maxWidth:f.maxWidth,maxHeight:f.maxHeight,minWidth:f.minWidth,minHeight:d._minHeight(),handles:e,start:function(h){b(this).addClass("ui-dialog-resizing");d._trigger("resizeStart",h)},resize:function(h){d._trigger("resize",h)},stop:function(h){b(this).removeClass("ui-dialog-resizing");f.height=b(this).height();f.width=b(this).width();d._trigger("resizeStop",h);b.ui.dialog.overlay.resize()}}).css("position",c).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var c=this.options;return(c.height=="auto"?c.minHeight:Math.min(c.minHeight,c.height))},_position:function(d){var e=[],f=[0,0];d=d||b.ui.dialog.prototype.options.position;if(typeof d=="string"||(typeof d=="object"&&"0" in d)){e=d.split?d.split(" "):[d[0],d[1]];if(e.length==1){e[1]=e[0]}b.each(["left","top"],function(h,g){if(+e[h]==e[h]){f[h]=e[h];e[h]=g}})}else{if(typeof d=="object"){if("left" in d){e[0]="left";f[0]=d.left}else{if("right" in d){e[0]="right";f[0]=-d.right}}if("top" in d){e[1]="top";f[1]=d.top}else{if("bottom" in d){e[1]="bottom";f[1]=-d.bottom}}}}var c=this.uiDialog.is(":visible");if(!c){this.uiDialog.show()}this.uiDialog.css({top:0,left:0}).position({my:e.join(" "),at:e.join(" "),offset:f.join(" "),of:window,collision:"fit",using:function(h){var g=b(this).css(h).offset().top;if(g<0){b(this).css("top",h.top-g)}}});if(!c){this.uiDialog.hide()}},_setOption:function(f,g){var d=this,c=d.uiDialog,h=c.is(":data(resizable)"),e=false;switch(f){case"beforeclose":f="beforeClose";break;case"buttons":d._createButtons(g);break;case"closeText":d.uiDialogTitlebarCloseText.text(""+g);break;case"dialogClass":c.removeClass(d.options.dialogClass).addClass(a+g);break;case"disabled":(g?c.addClass("ui-dialog-disabled"):c.removeClass("ui-dialog-disabled"));break;case"draggable":(g?d._makeDraggable():c.draggable("destroy"));break;case"height":e=true;break;case"maxHeight":(h&&c.resizable("option","maxHeight",g));e=true;break;case"maxWidth":(h&&c.resizable("option","maxWidth",g));e=true;break;case"minHeight":(h&&c.resizable("option","minHeight",g));e=true;break;case"minWidth":(h&&c.resizable("option","minWidth",g));e=true;break;case"position":d._position(g);break;case"resizable":(h&&!g&&c.resizable("destroy"));(h&&typeof g=="string"&&c.resizable("option","handles",g));(h||(g!==false&&d._makeResizable(g)));break;case"title":b(".ui-dialog-title",d.uiDialogTitlebar).html(""+(g||"&#160;"));break;case"width":e=true;break}b.Widget.prototype._setOption.apply(d,arguments);(e&&d._size())},_size:function(){var d=this.options;this.element.css("width","auto").hide();var c=this.uiDialog.css({height:"auto",width:d.width}).height();this.element.css(d.height=="auto"?{minHeight:Math.max(d.minHeight-c,0),height:"auto"}:{minHeight:0,height:Math.max(d.height-c,0)}).show();(this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight()))}});b.extend(b.ui.dialog,{version:"1.8rc3",uuid:0,maxZ:0,getTitleId:function(c){return"ui-dialog-title-"+(c.attr("id")||++this.uuid)},overlay:function(c){this.$el=b.ui.dialog.overlay.create(c)}});b.extend(b.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:b.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(c){return c+".dialog-overlay"}).join(" "),create:function(d){if(this.instances.length===0){setTimeout(function(){if(b.ui.dialog.overlay.instances.length){b(document).bind(b.ui.dialog.overlay.events,function(e){return(b(e.target).zIndex()>=b.ui.dialog.overlay.maxZ)})}},1);b(document).bind("keydown.dialog-overlay",function(e){if(d.options.closeOnEscape&&e.keyCode&&e.keyCode==b.ui.keyCode.ESCAPE){d.close(e);e.preventDefault()}});b(window).bind("resize.dialog-overlay",b.ui.dialog.overlay.resize)}var c=(this.oldInstances.length?this.oldInstances.splice(0,1)[0]:b("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),height:this.height()});(b.fn.bgiframe&&c.bgiframe());this.instances.push(c);return c},destroy:function(c){this.oldInstances.push(this.instances.splice(b.inArray(this.instances,c),1)[0]);if(this.instances.length===0){b([document,window]).unbind(".dialog-overlay")}c.remove();var d=0;b.each(this.instances,function(){d=Math.max(d,this.css("z-index"))});this.maxZ=d},height:function(){if(b.browser.msie&&b.browser.version<7){var d=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);var c=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);if(d<c){return b(window).height()+"px"}else{return d+"px"}}else{return b(document).height()+"px"}},width:function(){if(b.browser.msie&&b.browser.version<7){var c=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);var d=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);if(c<d){return b(window).width()+"px"}else{return c+"px"}}else{return b(document).width()+"px"}},resize:function(){var c=b([]);b.each(b.ui.dialog.overlay.instances,function(){c=c.add(this)});c.css({width:0,height:0}).css({width:b.ui.dialog.overlay.width(),height:b.ui.dialog.overlay.height()})}});b.extend(b.ui.dialog.overlay.prototype,{destroy:function(){b.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);;/*
 * jQuery UI Slider 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *  jquery.ui.core.js
 *  jquery.ui.mouse.js
 *  jquery.ui.widget.js
 */(function(b){var a=5;b.widget("ui.slider",b.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var c=this,d=this.options;this._keySliding=false;this._mouseSliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");if(d.disabled){this.element.addClass("ui-slider-disabled ui-disabled")}this.range=b([]);if(d.range){if(d.range===true){this.range=b("<div></div>");if(!d.values){d.values=[this._valueMin(),this._valueMin()]}if(d.values.length&&d.values.length!=2){d.values=[d.values[0],d.values[0]]}}else{this.range=b("<div></div>")}this.range.appendTo(this.element).addClass("ui-slider-range");if(d.range=="min"||d.range=="max"){this.range.addClass("ui-slider-range-"+d.range)}this.range.addClass("ui-widget-header")}if(b(".ui-slider-handle",this.element).length==0){b('<a href="#"></a>').appendTo(this.element).addClass("ui-slider-handle")}if(d.values&&d.values.length){while(b(".ui-slider-handle",this.element).length<d.values.length){b('<a href="#"></a>').appendTo(this.element).addClass("ui-slider-handle")}}this.handles=b(".ui-slider-handle",this.element).addClass("ui-state-default ui-corner-all");this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(e){e.preventDefault()}).hover(function(){if(!d.disabled){b(this).addClass("ui-state-hover")}},function(){b(this).removeClass("ui-state-hover")}).focus(function(){if(!d.disabled){b(".ui-slider .ui-state-focus").removeClass("ui-state-focus");b(this).addClass("ui-state-focus")}else{b(this).blur()}}).blur(function(){b(this).removeClass("ui-state-focus")});this.handles.each(function(e){b(this).data("index.ui-slider-handle",e)});this.handles.keydown(function(j){var g=true;var f=b(this).data("index.ui-slider-handle");if(c.options.disabled){return}switch(j.keyCode){case b.ui.keyCode.HOME:case b.ui.keyCode.END:case b.ui.keyCode.PAGE_UP:case b.ui.keyCode.PAGE_DOWN:case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:g=false;if(!c._keySliding){c._keySliding=true;b(this).addClass("ui-state-active");c._start(j,f)}break}var h,e,i=c._step();if(c.options.values&&c.options.values.length){h=e=c.values(f)}else{h=e=c.value()}switch(j.keyCode){case b.ui.keyCode.HOME:e=c._valueMin();break;case b.ui.keyCode.END:e=c._valueMax();break;case b.ui.keyCode.PAGE_UP:e=h+((c._valueMax()-c._valueMin())/a);break;case b.ui.keyCode.PAGE_DOWN:e=h-((c._valueMax()-c._valueMin())/a);break;case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:if(h==c._valueMax()){return}e=h+i;break;case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:if(h==c._valueMin()){return}e=h-i;break}c._slide(j,f,e);return g}).keyup(function(f){var e=b(this).data("index.ui-slider-handle");if(c._keySliding){c._stop(f,e);c._change(f,e);c._keySliding=false;b(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");this._mouseDestroy();return this},_mouseCapture:function(e){var f=this.options;if(f.disabled){return false}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();var i={x:e.pageX,y:e.pageY};var k=this._normValueFromMouse(i);var d=this._valueMax()-this._valueMin()+1,g;var l=this,j;this.handles.each(function(m){var n=Math.abs(k-l.values(m));if(d>n){d=n;g=b(this);j=m}});if(f.range==true&&this.values(1)==f.min){g=b(this.handles[++j])}this._start(e,j);this._mouseSliding=true;l._handleIndex=j;g.addClass("ui-state-active").focus();var h=g.offset();var c=!b(e.target).parents().andSelf().is(".ui-slider-handle");this._clickOffset=c?{left:0,top:0}:{left:e.pageX-h.left-(g.width()/2),top:e.pageY-h.top-(g.height()/2)-(parseInt(g.css("borderTopWidth"),10)||0)-(parseInt(g.css("borderBottomWidth"),10)||0)+(parseInt(g.css("marginTop"),10)||0)};k=this._normValueFromMouse(i);this._slide(e,j,k);this._animateOff=true;return true},_mouseStart:function(c){return true},_mouseDrag:function(e){var c={x:e.pageX,y:e.pageY};var d=this._normValueFromMouse(c);this._slide(e,this._handleIndex,d);return false},_mouseStop:function(c){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(c,this._handleIndex);this._change(c,this._handleIndex);this._handleIndex=null;this._clickOffset=null;this._animateOff=false;return false},_detectOrientation:function(){this.orientation=this.options.orientation=="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(e){var d,i;if("horizontal"==this.orientation){d=this.elementSize.width;i=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{d=this.elementSize.height;i=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}var g=(i/d);if(g>1){g=1}if(g<0){g=0}if("vertical"==this.orientation){g=1-g}var f=this._valueMax()-this._valueMin(),j=g*f,c=j%this.options.step,h=this._valueMin()+j-c;if(c>(this.options.step/2)){h+=this.options.step}return parseFloat(h.toFixed(5))},_start:function(e,d){var c={handle:this.handles[d],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(d);c.values=this.values()}this._trigger("start",e,c)},_slide:function(g,f,e){var h=this.handles[f];if(this.options.values&&this.options.values.length){var c=this.values(f?0:1);if((this.options.values.length==2&&this.options.range===true)&&((f==0&&e>c)||(f==1&&e<c))){e=c}if(e!=this.values(f)){var d=this.values();d[f]=e;var i=this._trigger("slide",g,{handle:this.handles[f],value:e,values:d});var c=this.values(f?0:1);if(i!==false){this.values(f,e,true)}}}else{if(e!=this.value()){var i=this._trigger("slide",g,{handle:this.handles[f],value:e});if(i!==false){this.value(e)}}}},_stop:function(e,d){var c={handle:this.handles[d],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(d);c.values=this.values()}this._trigger("stop",e,c)},_change:function(e,d){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[d],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(d);c.values=this.values()}this._trigger("change",e,c)}},value:function(c){if(arguments.length){this.options.value=this._trimValue(c);this._refreshValue();this._change(null,0)}return this._value()},values:function(e,h){if(arguments.length>1){this.options.values[e]=this._trimValue(h);this._refreshValue();this._change(null,e)}if(arguments.length){if(b.isArray(arguments[0])){var g=this.options.values,d=arguments[0];for(var f=0,c=g.length;f<c;f++){g[f]=this._trimValue(d[f]);this._change(null,f)}this._refreshValue()}else{if(this.options.values&&this.options.values.length){return this._values(e)}else{return this.value()}}}else{return this._values()}},_setOption:function(c,d){b.Widget.prototype._setOption.apply(this,arguments);switch(c){case"disabled":if(d){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.attr("disabled","disabled");this.element.addClass("ui-disabled")}else{this.handles.removeAttr("disabled");this.element.removeClass("ui-disabled")}case"orientation":this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case"value":this._animateOff=true;this._refreshValue();this._animateOff=false;break;case"values":this._animateOff=true;this._refreshValue();this._animateOff=false;break}},_step:function(){var c=this.options.step;return c},_value:function(){var c=this.options.value;c=this._trimValue(c);return c},_values:function(d){if(arguments.length){var g=this.options.values[d];g=this._trimValue(g);return g}else{var f=this.options.values.slice();for(var e=0,c=f.length;e<c;e++){f[e]=this._trimValue(f[e])}return f}},_trimValue:function(c){if(c<this._valueMin()){c=this._valueMin()}if(c>this._valueMax()){c=this._valueMax()}return c},_valueMin:function(){var c=this.options.min;return c},_valueMax:function(){var c=this.options.max;return c},_refreshValue:function(){var g=this.options.range,e=this.options,m=this;var d=(!this._animateOff)?e.animate:false;if(this.options.values&&this.options.values.length){var j,i;this.handles.each(function(q,o){var p=(m.values(q)-m._valueMin())/(m._valueMax()-m._valueMin())*100;var n={};n[m.orientation=="horizontal"?"left":"bottom"]=p+"%";b(this).stop(1,1)[d?"animate":"css"](n,e.animate);if(m.options.range===true){if(m.orientation=="horizontal"){(q==0)&&m.range.stop(1,1)[d?"animate":"css"]({left:p+"%"},e.animate);(q==1)&&m.range[d?"animate":"css"]({width:(p-lastValPercent)+"%"},{queue:false,duration:e.animate})}else{(q==0)&&m.range.stop(1,1)[d?"animate":"css"]({bottom:(p)+"%"},e.animate);(q==1)&&m.range[d?"animate":"css"]({height:(p-lastValPercent)+"%"},{queue:false,duration:e.animate})}}lastValPercent=p})}else{var k=this.value(),h=this._valueMin(),l=this._valueMax(),f=l!=h?(k-h)/(l-h)*100:0;var c={};c[m.orientation=="horizontal"?"left":"bottom"]=f+"%";this.handle.stop(1,1)[d?"animate":"css"](c,e.animate);(g=="min")&&(this.orientation=="horizontal")&&this.range.stop(1,1)[d?"animate":"css"]({width:f+"%"},e.animate);(g=="max")&&(this.orientation=="horizontal")&&this.range[d?"animate":"css"]({width:(100-f)+"%"},{queue:false,duration:e.animate});(g=="min")&&(this.orientation=="vertical")&&this.range.stop(1,1)[d?"animate":"css"]({height:f+"%"},e.animate);(g=="max")&&(this.orientation=="vertical")&&this.range[d?"animate":"css"]({height:(100-f)+"%"},{queue:false,duration:e.animate})}}});b.extend(b.ui.slider,{version:"1.8rc3"})})(jQuery);;/*
 * jQuery UI Tabs 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Tabs
 *
 * Depends:
 *  jquery.ui.core.js
 *  jquery.ui.widget.js
 */(function(b){var a=0;b.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:'<li><a href="#{href}"><span>#{label}</span></a></li>'},_create:function(){this._tabify(true)},_setOption:function(c,d){if(c=="selected"){if(this.options.collapsible&&d==this.options.selected){return}this.select(d)}else{this.options[c]=d;this._tabify()}},_tabId:function(c){return c.title&&c.title.replace(/\s/g,"_").replace(/[^A-Za-z0-9\-_:\.]/g,"")||this.options.idPrefix+(++a)},_sanitizeSelector:function(c){return c.replace(/:/g,"\\:")},_cookie:function(){var c=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+b.data(this.list[0]));return b.cookie.apply(null,[c].concat(b.makeArray(arguments)))},_ui:function(d,c){return{tab:d,panel:c,index:this.anchors.index(d)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var c=b(this);c.html(c.data("label.tabs")).removeData("label.tabs")})},_tabify:function(p){this.list=this.element.find("ol,ul").eq(0);this.lis=b("li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return b("a",this)[0]});this.panels=b([]);var q=this,e=this.options;var d=/^#.+/;this.anchors.each(function(s,o){var r=b(o).attr("href");var u=r.split("#")[0],v;if(u&&(u===location.toString().split("#")[0]||(v=b("base")[0])&&u===v.href)){r=o.hash;o.href=r}if(d.test(r)){q.panels=q.panels.add(q._sanitizeSelector(r))}else{if(r!="#"){b.data(o,"href.tabs",r);b.data(o,"load.tabs",r.replace(/#.*$/,""));var x=q._tabId(o);o.href="#"+x;var w=b("#"+x);if(!w.length){w=b(e.panelTemplate).attr("id",x).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(q.panels[s-1]||q.list);w.data("destroy.tabs",true)}q.panels=q.panels.add(w)}else{e.disabled.push(s)}}});if(p){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(e.selected===undefined){if(location.hash){this.anchors.each(function(r,o){if(o.hash==location.hash){e.selected=r;return false}})}if(typeof e.selected!="number"&&e.cookie){e.selected=parseInt(q._cookie(),10)}if(typeof e.selected!="number"&&this.lis.filter(".ui-tabs-selected").length){e.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))}e.selected=e.selected||(this.lis.length?0:-1)}else{if(e.selected===null){e.selected=-1}}e.selected=((e.selected>=0&&this.anchors[e.selected])||e.selected<0)?e.selected:0;e.disabled=b.unique(e.disabled.concat(b.map(this.lis.filter(".ui-state-disabled"),function(r,o){return q.lis.index(r)}))).sort();if(b.inArray(e.selected,e.disabled)!=-1){e.disabled.splice(b.inArray(e.selected,e.disabled),1)}this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");if(e.selected>=0&&this.anchors.length){this.panels.eq(e.selected).removeClass("ui-tabs-hide");this.lis.eq(e.selected).addClass("ui-tabs-selected ui-state-active");q.element.queue("tabs",function(){q._trigger("show",null,q._ui(q.anchors[e.selected],q.panels[e.selected]))});this.load(e.selected)}b(window).bind("unload",function(){q.lis.add(q.anchors).unbind(".tabs");q.lis=q.anchors=q.panels=null})}else{e.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))}this.element[e.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");if(e.cookie){this._cookie(e.selected,e.cookie)}for(var h=0,n;(n=this.lis[h]);h++){b(n)[b.inArray(h,e.disabled)!=-1&&!b(n).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled")}if(e.cache===false){this.anchors.removeData("cache.tabs")}this.lis.add(this.anchors).unbind(".tabs");if(e.event!="mouseover"){var g=function(o,i){if(i.is(":not(.ui-state-disabled)")){i.addClass("ui-state-"+o)}};var k=function(o,i){i.removeClass("ui-state-"+o)};this.lis.bind("mouseover.tabs",function(){g("hover",b(this))});this.lis.bind("mouseout.tabs",function(){k("hover",b(this))});this.anchors.bind("focus.tabs",function(){g("focus",b(this).closest("li"))});this.anchors.bind("blur.tabs",function(){k("focus",b(this).closest("li"))})}var c,j;if(e.fx){if(b.isArray(e.fx)){c=e.fx[0];j=e.fx[1]}else{c=j=e.fx}}function f(i,o){i.css({display:""});if(!b.support.opacity&&o.opacity){i[0].style.removeAttribute("filter")}}var l=j?function(i,o){b(i).closest("li").addClass("ui-tabs-selected ui-state-active");o.hide().removeClass("ui-tabs-hide").animate(j,j.duration||"normal",function(){f(o,j);q._trigger("show",null,q._ui(i,o[0]))})}:function(i,o){b(i).closest("li").addClass("ui-tabs-selected ui-state-active");o.removeClass("ui-tabs-hide");q._trigger("show",null,q._ui(i,o[0]))};var m=c?function(o,i){i.animate(c,c.duration||"normal",function(){q.lis.removeClass("ui-tabs-selected ui-state-active");i.addClass("ui-tabs-hide");f(i,c);q.element.dequeue("tabs")})}:function(o,i,r){q.lis.removeClass("ui-tabs-selected ui-state-active");i.addClass("ui-tabs-hide");q.element.dequeue("tabs")};this.anchors.bind(e.event+".tabs",function(){var o=this,s=b(this).closest("li"),i=q.panels.filter(":not(.ui-tabs-hide)"),r=b(q._sanitizeSelector(this.hash));if((s.hasClass("ui-tabs-selected")&&!e.collapsible)||s.hasClass("ui-state-disabled")||s.hasClass("ui-state-processing")||q._trigger("select",null,q._ui(this,r[0]))===false){this.blur();return false}e.selected=q.anchors.index(this);q.abort();if(e.collapsible){if(s.hasClass("ui-tabs-selected")){e.selected=-1;if(e.cookie){q._cookie(e.selected,e.cookie)}q.element.queue("tabs",function(){m(o,i)}).dequeue("tabs");this.blur();return false}else{if(!i.length){if(e.cookie){q._cookie(e.selected,e.cookie)}q.element.queue("tabs",function(){l(o,r)});q.load(q.anchors.index(this));this.blur();return false}}}if(e.cookie){q._cookie(e.selected,e.cookie)}if(r.length){if(i.length){q.element.queue("tabs",function(){m(o,i)})}q.element.queue("tabs",function(){l(o,r)});q.load(q.anchors.index(this))}else{throw"jQuery UI Tabs: Mismatching fragment identifier."}if(b.browser.msie){this.blur()}});this.anchors.bind("click.tabs",function(){return false})},destroy:function(){var c=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var d=b.data(this,"href.tabs");if(d){this.href=d}var e=b(this).unbind(".tabs");b.each(["href","load","cache"],function(f,g){e.removeData(g+".tabs")})});this.lis.unbind(".tabs").add(this.panels).each(function(){if(b.data(this,"destroy.tabs")){b(this).remove()}else{b(this).removeClass(["ui-state-default","ui-corner-top","ui-tabs-selected","ui-state-active","ui-state-hover","ui-state-focus","ui-state-disabled","ui-tabs-panel","ui-widget-content","ui-corner-bottom","ui-tabs-hide"].join(" "))}});if(c.cookie){this._cookie(null,c.cookie)}return this},add:function(f,e,d){if(d===undefined){d=this.anchors.length}var c=this,h=this.options,j=b(h.tabTemplate.replace(/#\{href\}/g,f).replace(/#\{label\}/g,e)),i=!f.indexOf("#")?f.replace("#",""):this._tabId(b("a",j)[0]);j.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var g=b("#"+i);if(!g.length){g=b(h.panelTemplate).attr("id",i).data("destroy.tabs",true)}g.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(d>=this.lis.length){j.appendTo(this.list);g.appendTo(this.list[0].parentNode)}else{j.insertBefore(this.lis[d]);g.insertBefore(this.panels[d])}h.disabled=b.map(h.disabled,function(l,k){return l>=d?++l:l});this._tabify();if(this.anchors.length==1){h.selected=0;j.addClass("ui-tabs-selected ui-state-active");g.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){c._trigger("show",null,c._ui(c.anchors[0],c.panels[0]))});this.load(0)}this._trigger("add",null,this._ui(this.anchors[d],this.panels[d]));return this},remove:function(c){var e=this.options,f=this.lis.eq(c).remove(),d=this.panels.eq(c).remove();if(f.hasClass("ui-tabs-selected")&&this.anchors.length>1){this.select(c+(c+1<this.anchors.length?1:-1))}e.disabled=b.map(b.grep(e.disabled,function(h,g){return h!=c}),function(h,g){return h>=c?--h:h});this._tabify();this._trigger("remove",null,this._ui(f.find("a")[0],d[0]));return this},enable:function(c){var d=this.options;if(b.inArray(c,d.disabled)==-1){return}this.lis.eq(c).removeClass("ui-state-disabled");d.disabled=b.grep(d.disabled,function(f,e){return f!=c});this._trigger("enable",null,this._ui(this.anchors[c],this.panels[c]));return this},disable:function(d){var c=this,e=this.options;if(d!=e.selected){this.lis.eq(d).addClass("ui-state-disabled");e.disabled.push(d);e.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[d],this.panels[d]))}return this},select:function(c){if(typeof c=="string"){c=this.anchors.index(this.anchors.filter("[href$="+c+"]"))}else{if(c===null){c=-1}}if(c==-1&&this.options.collapsible){c=this.options.selected}this.anchors.eq(c).trigger(this.options.event+".tabs");return this},load:function(f){var d=this,h=this.options,c=this.anchors.eq(f)[0],e=b.data(c,"load.tabs");this.abort();if(!e||this.element.queue("tabs").length!==0&&b.data(c,"cache.tabs")){this.element.dequeue("tabs");return}this.lis.eq(f).addClass("ui-state-processing");if(h.spinner){var g=b("span",c);g.data("label.tabs",g.html()).html(h.spinner)}this.xhr=b.ajax(b.extend({},h.ajaxOptions,{url:e,success:function(j,i){b(d._sanitizeSelector(c.hash)).html(j);d._cleanup();if(h.cache){b.data(c,"cache.tabs",true)}d._trigger("load",null,d._ui(d.anchors[f],d.panels[f]));try{h.ajaxOptions.success(j,i)}catch(k){}},error:function(k,i,j){d._cleanup();d._trigger("load",null,d._ui(d.anchors[f],d.panels[f]));try{h.ajaxOptions.error(k,i,f,c)}catch(j){}}}));d.element.dequeue("tabs");return this},abort:function(){this.element.queue([]);this.panels.stop(false,true);this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));if(this.xhr){this.xhr.abort();delete this.xhr}this._cleanup();return this},url:function(d,c){this.anchors.eq(d).removeData("cache.tabs").data("load.tabs",c);return this},length:function(){return this.anchors.length}});b.extend(b.ui.tabs,{version:"1.8rc3"});b.extend(b.ui.tabs.prototype,{rotation:null,rotate:function(e,g){var c=this,h=this.options;var d=c._rotate||(c._rotate=function(i){clearTimeout(c.rotation);c.rotation=setTimeout(function(){var j=h.selected;c.select(++j<c.anchors.length?j:0)},e);if(i){i.stopPropagation()}});var f=c._unrotate||(c._unrotate=!g?function(i){if(i.clientX){c.rotate(null)}}:function(i){t=h.selected;d()});if(e){this.element.bind("tabsshow",d);this.anchors.bind(h.event+".tabs",f);d()}else{clearTimeout(c.rotation);this.element.unbind("tabsshow",d);this.anchors.unbind(h.event+".tabs",f);delete this._rotate;delete this._unrotate}return this}})})(jQuery);;/*
 * jQuery UI Datepicker 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *  jquery.ui.core.js
 */(function($){$.extend($.ui,{datepicker:{version:"1.8rc3"}});var PROP_NAME="datepicker";var dpuuid=new Date().getTime();function Datepicker(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._datepickerShowing=false;this._inDialog=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"show",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"_default",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false};$.extend(this._defaults,this.regional[""]);this.dpDiv=$('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all ui-helper-hidden-accessible"></div>')}$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",log:function(){if(this.debug){console.log.apply("",arguments)}},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(settings){extendRemove(this._defaults,settings||{});return this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase();var inline=(nodeName=="div"||nodeName=="span");if(!target.id){target.id="dp"+(++this.uuid)}var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{});if(nodeName=="input"){this._connectDatepicker(target,inst)}else{if(inline){this._inlineDatepicker(target,inst)}}},_newInst:function(target,inline){var id=target[0].id.replace(/([^A-Za-z0-9_])/g,"\\\\$1");return{id:id,input:target,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:inline,dpDiv:(!inline?this.dpDiv:$('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}},_connectDatepicker:function(target,inst){var input=$(target);inst.append=$([]);inst.trigger=$([]);if(input.hasClass(this.markerClassName)){return}this._attachments(input,inst);input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value}).bind("getData.datepicker",function(event,key){return this._get(inst,key)});this._autoSize(inst);$.data(target,PROP_NAME,inst)},_attachments:function(input,inst){var appendText=this._get(inst,"appendText");var isRTL=this._get(inst,"isRTL");if(inst.append){inst.append.remove()}if(appendText){inst.append=$('<span class="'+this._appendClass+'">'+appendText+"</span>");input[isRTL?"before":"after"](inst.append)}input.unbind("focus",this._showDatepicker);if(inst.trigger){inst.trigger.remove()}var showOn=this._get(inst,"showOn");if(showOn=="focus"||showOn=="both"){input.focus(this._showDatepicker)}if(showOn=="button"||showOn=="both"){var buttonText=this._get(inst,"buttonText");var buttonImage=this._get(inst,"buttonImage");inst.trigger=$(this._get(inst,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:buttonImage,alt:buttonText,title:buttonText}):$('<button type="button"></button>').addClass(this._triggerClass).html(buttonImage==""?buttonText:$("<img/>").attr({src:buttonImage,alt:buttonText,title:buttonText})));input[isRTL?"before":"after"](inst.trigger);inst.trigger.click(function(){if($.datepicker._datepickerShowing&&$.datepicker._lastInput==input[0]){$.datepicker._hideDatepicker()}else{$.datepicker._showDatepicker(input[0])}return false})}},_autoSize:function(inst){if(this._get(inst,"autoSize")&&!inst.inline){var date=new Date(2009,12-1,20);var dateFormat=this._get(inst,"dateFormat");if(dateFormat.match(/[DM]/)){var findMax=function(names){var max=0;var maxI=0;for(var i=0;i<names.length;i++){if(names[i].length>max){max=names[i].length;maxI=i}}return maxI};date.setMonth(findMax(this._get(inst,(dateFormat.match(/MM/)?"monthNames":"monthNamesShort"))));date.setDate(findMax(this._get(inst,(dateFormat.match(/DD/)?"dayNames":"dayNamesShort")))+20-date.getDay())}inst.input.attr("size",this._formatDate(inst,date).length)}},_inlineDatepicker:function(target,inst){var divSpan=$(target);if(divSpan.hasClass(this.markerClassName)){return}divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value}).bind("getData.datepicker",function(event,key){return this._get(inst,key)});$.data(target,PROP_NAME,inst);this._setDate(inst,this._getDefaultDate(inst),true);this._updateDatepicker(inst);this._updateAlternate(inst)},_dialogDatepicker:function(input,date,onSelect,settings,pos){var inst=this._dialogInst;if(!inst){var id="dp"+(++this.uuid);this._dialogInput=$('<input type="text" id="'+id+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');this._dialogInput.keydown(this._doKeyDown);$("body").append(this._dialogInput);inst=this._dialogInst=this._newInst(this._dialogInput,false);inst.settings={};$.data(this._dialogInput[0],PROP_NAME,inst)}extendRemove(inst.settings,settings||{});date=(date&&date.constructor==Date?this._formatDate(inst,date):date);this._dialogInput.val(date);this._pos=(pos?(pos.length?pos:[pos.pageX,pos.pageY]):null);if(!this._pos){var browserWidth=document.documentElement.clientWidth;var browserHeight=document.documentElement.clientHeight;var scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;var scrollY=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[(browserWidth/2)-100+scrollX,(browserHeight/2)-150+scrollY]}this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");inst.settings.onSelect=onSelect;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);if($.blockUI){$.blockUI(this.dpDiv)}$.data(this._dialogInput[0],PROP_NAME,inst);return this},_destroyDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return}var nodeName=target.nodeName.toLowerCase();$.removeData(target,PROP_NAME);if(nodeName=="input"){inst.append.remove();inst.trigger.remove();$target.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)}else{if(nodeName=="div"||nodeName=="span"){$target.removeClass(this.markerClassName).empty()}}},_enableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return}var nodeName=target.nodeName.toLowerCase();if(nodeName=="input"){target.disabled=false;inst.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);inline.children().removeClass("ui-state-disabled")}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)})},_disableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return}var nodeName=target.nodeName.toLowerCase();if(nodeName=="input"){target.disabled=true;inst.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);inline.children().addClass("ui-state-disabled")}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)});this._disabledInputs[this._disabledInputs.length]=target},_isDisabledDatepicker:function(target){if(!target){return false}for(var i=0;i<this._disabledInputs.length;i++){if(this._disabledInputs[i]==target){return true}}return false},_getInst:function(target){try{return $.data(target,PROP_NAME)}catch(err){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(target,name,value){var inst=this._getInst(target);if(arguments.length==2&&typeof name=="string"){return(name=="defaults"?$.extend({},$.datepicker._defaults):(inst?(name=="all"?$.extend({},inst.settings):this._get(inst,name)):null))}var settings=name||{};if(typeof name=="string"){settings={};settings[name]=value}if(inst){if(this._curInst==inst){this._hideDatepicker()}var date=this._getDateDatepicker(target,true);extendRemove(inst.settings,settings);this._attachments($(target),inst);this._autoSize(inst);this._setDateDatepicker(target,date);this._updateDatepicker(inst)}},_changeDatepicker:function(target,name,value){this._optionDatepicker(target,name,value)},_refreshDatepicker:function(target){var inst=this._getInst(target);if(inst){this._updateDatepicker(inst)}},_setDateDatepicker:function(target,date){var inst=this._getInst(target);if(inst){this._setDate(inst,date);this._updateDatepicker(inst);this._updateAlternate(inst)}},_getDateDatepicker:function(target,noDefault){var inst=this._getInst(target);if(inst&&!inst.inline){this._setDateFromField(inst,noDefault)}return(inst?this._getDate(inst):null)},_doKeyDown:function(event){var inst=$.datepicker._getInst(event.target);var handled=true;var isRTL=inst.dpDiv.is(".ui-datepicker-rtl");inst._keyEvent=true;if($.datepicker._datepickerShowing){switch(event.keyCode){case 9:$.datepicker._hideDatepicker();handled=false;break;case 13:var sel=$("td."+$.datepicker._dayOverClass,inst.dpDiv).add($("td."+$.datepicker._currentClass,inst.dpDiv));if(sel[0]){$.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0])}else{$.datepicker._hideDatepicker()}return false;break;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M");break;case 34:$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M");break;case 35:if(event.ctrlKey||event.metaKey){$.datepicker._clearDate(event.target)}handled=event.ctrlKey||event.metaKey;break;case 36:if(event.ctrlKey||event.metaKey){$.datepicker._gotoToday(event.target)}handled=event.ctrlKey||event.metaKey;break;case 37:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?+1:-1),"D")}handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M")}break;case 38:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,-7,"D")}handled=event.ctrlKey||event.metaKey;break;case 39:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?-1:+1),"D")}handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M")}break;case 40:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,+7,"D")}handled=event.ctrlKey||event.metaKey;break;default:handled=false}}else{if(event.keyCode==36&&event.ctrlKey){$.datepicker._showDatepicker(this)}else{handled=false}}if(handled){event.preventDefault();event.stopPropagation()}},_doKeyPress:function(event){var inst=$.datepicker._getInst(event.target);if($.datepicker._get(inst,"constrainInput")){var chars=$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat"));var chr=String.fromCharCode(event.charCode==undefined?event.keyCode:event.charCode);return event.ctrlKey||(chr<" "||!chars||chars.indexOf(chr)>-1)}},_doKeyUp:function(event){var inst=$.datepicker._getInst(event.target);if(inst.input.val()!=inst.lastVal){try{var date=$.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),(inst.input?inst.input.val():null),$.datepicker._getFormatConfig(inst));if(date){$.datepicker._setDateFromField(inst);$.datepicker._updateAlternate(inst);$.datepicker._updateDatepicker(inst)}}catch(event){$.datepicker.log(event)}}return true},_showDatepicker:function(input){input=input.target||input;if(input.nodeName.toLowerCase()!="input"){input=$("input",input.parentNode)[0]}if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput==input){return}var inst=$.datepicker._getInst(input);if($.datepicker._curInst&&$.datepicker._curInst!=inst){$.datepicker._curInst.dpDiv.stop(true,true)}var beforeShow=$.datepicker._get(inst,"beforeShow");extendRemove(inst.settings,(beforeShow?beforeShow.apply(input,[input,inst]):{}));inst.lastVal=null;$.datepicker._lastInput=input;$.datepicker._setDateFromField(inst);if($.datepicker._inDialog){input.value=""}if(!$.datepicker._pos){$.datepicker._pos=$.datepicker._findPos(input);$.datepicker._pos[1]+=input.offsetHeight}var isFixed=false;$(input).parents().each(function(){isFixed|=$(this).css("position")=="fixed";return !isFixed});if(isFixed&&$.browser.opera){$.datepicker._pos[0]-=document.documentElement.scrollLeft;$.datepicker._pos[1]-=document.documentElement.scrollTop}var offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null;inst.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});$.datepicker._updateDatepicker(inst);offset=$.datepicker._checkOffset(inst,offset,isFixed);inst.dpDiv.css({position:($.datepicker._inDialog&&$.blockUI?"static":(isFixed?"fixed":"absolute")),display:"none",left:offset.left+"px",top:offset.top+"px"});if(!inst.inline){var showAnim=$.datepicker._get(inst,"showAnim");var duration=$.datepicker._get(inst,"duration");var postProcess=function(){$.datepicker._datepickerShowing=true;var borders=$.datepicker._getBorders(inst.dpDiv);inst.dpDiv.find("iframe.ui-datepicker-cover").css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()})};inst.dpDiv.zIndex($(input).zIndex()+1);if($.effects&&$.effects[showAnim]){inst.dpDiv.show(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)}else{inst.dpDiv[showAnim||"show"]((showAnim?duration:null),postProcess)}if(!showAnim){postProcess()}if(inst.input.is(":visible")&&!inst.input.is(":disabled")){inst.input.focus()}$.datepicker._curInst=inst}},_updateDatepicker:function(inst){var self=this;var borders=$.datepicker._getBorders(inst.dpDiv);inst.dpDiv.empty().append(this._generateHTML(inst)).find("iframe.ui-datepicker-cover").css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()}).end().find("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a").bind("mouseout",function(){$(this).removeClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!=-1){$(this).removeClass("ui-datepicker-prev-hover")}if(this.className.indexOf("ui-datepicker-next")!=-1){$(this).removeClass("ui-datepicker-next-hover")}}).bind("mouseover",function(){if(!self._isDisabledDatepicker(inst.inline?inst.dpDiv.parent()[0]:inst.input[0])){$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");$(this).addClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!=-1){$(this).addClass("ui-datepicker-prev-hover")}if(this.className.indexOf("ui-datepicker-next")!=-1){$(this).addClass("ui-datepicker-next-hover")}}}).end().find("."+this._dayOverClass+" a").trigger("mouseover").end();var numMonths=this._getNumberOfMonths(inst);var cols=numMonths[1];var width=17;if(cols>1){inst.dpDiv.addClass("ui-datepicker-multi-"+cols).css("width",(width*cols)+"em")}else{inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("")}inst.dpDiv[(numMonths[0]!=1||numMonths[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");inst.dpDiv[(this._get(inst,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");if(inst==$.datepicker._curInst&&$.datepicker._datepickerShowing&&inst.input&&inst.input.is(":visible")&&!inst.input.is(":disabled")){inst.input.focus()}},_getBorders:function(elem){var convert=function(value){return{thin:1,medium:2,thick:3}[value]||value};return[parseFloat(convert(elem.css("border-left-width"))),parseFloat(convert(elem.css("border-top-width")))]},_checkOffset:function(inst,offset,isFixed){var dpWidth=inst.dpDiv.outerWidth();var dpHeight=inst.dpDiv.outerHeight();var inputWidth=inst.input?inst.input.outerWidth():0;var inputHeight=inst.input?inst.input.outerHeight():0;var viewWidth=document.documentElement.clientWidth+$(document).scrollLeft();var viewHeight=document.documentElement.clientHeight+$(document).scrollTop();offset.left-=(this._get(inst,"isRTL")?(dpWidth-inputWidth):0);offset.left-=(isFixed&&offset.left==inst.input.offset().left)?$(document).scrollLeft():0;offset.top-=(isFixed&&offset.top==(inst.input.offset().top+inputHeight))?$(document).scrollTop():0;offset.left-=Math.min(offset.left,(offset.left+dpWidth>viewWidth&&viewWidth>dpWidth)?Math.abs(offset.left+dpWidth-viewWidth):0);offset.top-=Math.min(offset.top,(offset.top+dpHeight>viewHeight&&viewHeight>dpHeight)?Math.abs(dpHeight+inputHeight):0);return offset},_findPos:function(obj){var inst=this._getInst(obj);var isRTL=this._get(inst,"isRTL");while(obj&&(obj.type=="hidden"||obj.nodeType!=1)){obj=obj[isRTL?"previousSibling":"nextSibling"]}var position=$(obj).offset();return[position.left,position.top]},_hideDatepicker:function(input){var inst=this._curInst;if(!inst||(input&&inst!=$.data(input,PROP_NAME))){return}if(this._datepickerShowing){var showAnim=this._get(inst,"showAnim");var duration=this._get(inst,"duration");var postProcess=function(){$.datepicker._tidyDialog(inst);this._curInst=null};if($.effects&&$.effects[showAnim]){inst.dpDiv.hide(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)}else{inst.dpDiv[(showAnim=="slideDown"?"slideUp":(showAnim=="fadeIn"?"fadeOut":"hide"))]((showAnim?duration:null),postProcess)}if(!showAnim){postProcess()}var onClose=this._get(inst,"onClose");if(onClose){onClose.apply((inst.input?inst.input[0]:null),[(inst.input?inst.input.val():""),inst])}this._datepickerShowing=false;this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if($.blockUI){$.unblockUI();$("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(inst){inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(event){if(!$.datepicker._curInst){return}var $target=$(event.target);if($target[0].id!=$.datepicker._mainDivId&&$target.parents("#"+$.datepicker._mainDivId).length==0&&!$target.hasClass($.datepicker.markerClassName)&&!$target.hasClass($.datepicker._triggerClass)&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI)){$.datepicker._hideDatepicker()}},_adjustDate:function(id,offset,period){var target=$(id);var inst=this._getInst(target[0]);if(this._isDisabledDatepicker(target[0])){return}this._adjustInstDate(inst,offset+(period=="M"?this._get(inst,"showCurrentAtPos"):0),period);this._updateDatepicker(inst)},_gotoToday:function(id){var target=$(id);var inst=this._getInst(target[0]);if(this._get(inst,"gotoCurrent")&&inst.currentDay){inst.selectedDay=inst.currentDay;inst.drawMonth=inst.selectedMonth=inst.currentMonth;inst.drawYear=inst.selectedYear=inst.currentYear}else{var date=new Date();inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear()}this._notifyChange(inst);this._adjustDate(target)},_selectMonthYear:function(id,select,period){var target=$(id);var inst=this._getInst(target[0]);inst._selectingMonthYear=false;inst["selected"+(period=="M"?"Month":"Year")]=inst["draw"+(period=="M"?"Month":"Year")]=parseInt(select.options[select.selectedIndex].value,10);this._notifyChange(inst);this._adjustDate(target)},_clickMonthYear:function(id){var target=$(id);var inst=this._getInst(target[0]);if(inst.input&&inst._selectingMonthYear&&!$.browser.msie){inst.input.focus()}inst._selectingMonthYear=!inst._selectingMonthYear},_selectDay:function(id,month,year,td){var target=$(id);if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])){return}var inst=this._getInst(target[0]);inst.selectedDay=inst.currentDay=$("a",td).html();inst.selectedMonth=inst.currentMonth=month;inst.selectedYear=inst.currentYear=year;this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear))},_clearDate:function(id){var target=$(id);var inst=this._getInst(target[0]);this._selectDate(target,"")},_selectDate:function(id,dateStr){var target=$(id);var inst=this._getInst(target[0]);dateStr=(dateStr!=null?dateStr:this._formatDate(inst));if(inst.input){inst.input.val(dateStr)}this._updateAlternate(inst);var onSelect=this._get(inst,"onSelect");if(onSelect){onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])}else{if(inst.input){inst.input.trigger("change")}}if(inst.inline){this._updateDatepicker(inst)}else{this._hideDatepicker();this._lastInput=inst.input[0];if(typeof(inst.input[0])!="object"){inst.input.focus()}this._lastInput=null}},_updateAlternate:function(inst){var altField=this._get(inst,"altField");if(altField){var altFormat=this._get(inst,"altFormat")||this._get(inst,"dateFormat");var date=this._getDate(inst);var dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst));$(altField).each(function(){$(this).val(dateStr)})}},noWeekends:function(date){var day=date.getDay();return[(day>0&&day<6),""]},iso8601Week:function(date){var checkDate=new Date(date.getTime());checkDate.setDate(checkDate.getDate()+4-(checkDate.getDay()||7));var time=checkDate.getTime();checkDate.setMonth(0);checkDate.setDate(1);return Math.floor(Math.round((time-checkDate)/86400000)/7)+1},parseDate:function(format,value,settings){if(format==null||value==null){throw"Invalid arguments"}value=(typeof value=="object"?value.toString():value+"");if(value==""){return null}var shortYearCutoff=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff;var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var year=-1;var month=-1;var day=-1;var doy=-1;var literal=false;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};var getNumber=function(match){lookAhead(match);var size=(match=="@"?14:(match=="!"?20:(match=="y"?4:(match=="o"?3:2))));var digits=new RegExp("^\\d{1,"+size+"}");var num=value.substring(iValue).match(digits);if(!num){throw"Missing number at position "+iValue}iValue+=num[0].length;return parseInt(num[0],10)};var getName=function(match,shortNames,longNames){var names=(lookAhead(match)?longNames:shortNames);for(var i=0;i<names.length;i++){if(value.substr(iValue,names[i].length)==names[i]){iValue+=names[i].length;return i+1}}throw"Unknown name at position "+iValue};var checkLiteral=function(){if(value.charAt(iValue)!=format.charAt(iFormat)){throw"Unexpected literal at position "+iValue}iValue++};var iValue=0;for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{checkLiteral()}}else{switch(format.charAt(iFormat)){case"d":day=getNumber("d");break;case"D":getName("D",dayNamesShort,dayNames);break;case"o":doy=getNumber("o");break;case"m":month=getNumber("m");break;case"M":month=getName("M",monthNamesShort,monthNames);break;case"y":year=getNumber("y");break;case"@":var date=new Date(getNumber("@"));year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"!":var date=new Date((getNumber("!")-this._ticksTo1970)/10000);year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"'":if(lookAhead("'")){checkLiteral()}else{literal=true}break;default:checkLiteral()}}}if(year==-1){year=new Date().getFullYear()}else{if(year<100){year+=new Date().getFullYear()-new Date().getFullYear()%100+(year<=shortYearCutoff?0:-100)}}if(doy>-1){month=1;day=doy;do{var dim=this._getDaysInMonth(year,month-1);if(day<=dim){break}month++;day-=dim}while(true)}var date=this._daylightSavingAdjust(new Date(year,month-1,day));if(date.getFullYear()!=year||date.getMonth()+1!=month||date.getDate()!=day){throw"Invalid date"}return date},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),formatDate:function(format,date,settings){if(!date){return""}var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};var formatNumber=function(match,value,len){var num=""+value;if(lookAhead(match)){while(num.length<len){num="0"+num}}return num};var formatName=function(match,value,shortNames,longNames){return(lookAhead(match)?longNames[value]:shortNames[value])};var output="";var literal=false;if(date){for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{output+=format.charAt(iFormat)}}else{switch(format.charAt(iFormat)){case"d":output+=formatNumber("d",date.getDate(),2);break;case"D":output+=formatName("D",date.getDay(),dayNamesShort,dayNames);break;case"o":output+=formatNumber("o",(date.getTime()-new Date(date.getFullYear(),0,0).getTime())/86400000,3);break;case"m":output+=formatNumber("m",date.getMonth()+1,2);break;case"M":output+=formatName("M",date.getMonth(),monthNamesShort,monthNames);break;case"y":output+=(lookAhead("y")?date.getFullYear():(date.getYear()%100<10?"0":"")+date.getYear()%100);break;case"@":output+=date.getTime();break;case"!":output+=date.getTime()*10000+this._ticksTo1970;break;case"'":if(lookAhead("'")){output+="'"}else{literal=true}break;default:output+=format.charAt(iFormat)}}}}return output},_possibleChars:function(format){var chars="";var literal=false;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{chars+=format.charAt(iFormat)}}else{switch(format.charAt(iFormat)){case"d":case"m":case"y":case"@":chars+="0123456789";break;case"D":case"M":return null;case"'":if(lookAhead("'")){chars+="'"}else{literal=true}break;default:chars+=format.charAt(iFormat)}}}return chars},_get:function(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name]},_setDateFromField:function(inst,noDefault){if(inst.input.val()==inst.lastVal){return}var dateFormat=this._get(inst,"dateFormat");var dates=inst.lastVal=inst.input?inst.input.val():null;var date,defaultDate;date=defaultDate=this._getDefaultDate(inst);var settings=this._getFormatConfig(inst);try{date=this.parseDate(dateFormat,dates,settings)||defaultDate}catch(event){this.log(event);dates=(noDefault?"":dates)}inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();inst.currentDay=(dates?date.getDate():0);inst.currentMonth=(dates?date.getMonth():0);inst.currentYear=(dates?date.getFullYear():0);this._adjustInstDate(inst)},_getDefaultDate:function(inst){return this._restrictMinMax(inst,this._determineDate(inst,this._get(inst,"defaultDate"),new Date()))},_determineDate:function(inst,date,defaultDate){var offsetNumeric=function(offset){var date=new Date();date.setDate(date.getDate()+offset);return date};var offsetString=function(offset){try{return $.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),offset,$.datepicker._getFormatConfig(inst))}catch(e){}var date=(offset.toLowerCase().match(/^c/)?$.datepicker._getDate(inst):null)||new Date();var year=date.getFullYear();var month=date.getMonth();var day=date.getDate();var pattern=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;var matches=pattern.exec(offset);while(matches){switch(matches[2]||"d"){case"d":case"D":day+=parseInt(matches[1],10);break;case"w":case"W":day+=parseInt(matches[1],10)*7;break;case"m":case"M":month+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break;case"y":case"Y":year+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break}matches=pattern.exec(offset)}return new Date(year,month,day)};date=(date==null?defaultDate:(typeof date=="string"?offsetString(date):(typeof date=="number"?(isNaN(date)?defaultDate:offsetNumeric(date)):date)));date=(date&&date.toString()=="Invalid Date"?defaultDate:date);if(date){date.setHours(0);date.setMinutes(0);date.setSeconds(0);date.setMilliseconds(0)}return this._daylightSavingAdjust(date)},_daylightSavingAdjust:function(date){if(!date){return null}date.setHours(date.getHours()>12?date.getHours()+2:0);return date},_setDate:function(inst,date,noChange){var clear=!(date);var origMonth=inst.selectedMonth;var origYear=inst.selectedYear;date=this._restrictMinMax(inst,this._determineDate(inst,date,new Date()));inst.selectedDay=inst.currentDay=date.getDate();inst.drawMonth=inst.selectedMonth=inst.currentMonth=date.getMonth();inst.drawYear=inst.selectedYear=inst.currentYear=date.getFullYear();if((origMonth!=inst.selectedMonth||origYear!=inst.selectedYear)&&!noChange){this._notifyChange(inst)}this._adjustInstDate(inst);if(inst.input){inst.input.val(clear?"":this._formatDate(inst))}},_getDate:function(inst){var startDate=(!inst.currentYear||(inst.input&&inst.input.val()=="")?null:this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return startDate},_generateHTML:function(inst){var today=new Date();today=this._daylightSavingAdjust(new Date(today.getFullYear(),today.getMonth(),today.getDate()));var isRTL=this._get(inst,"isRTL");var showButtonPanel=this._get(inst,"showButtonPanel");var hideIfNoPrevNext=this._get(inst,"hideIfNoPrevNext");var navigationAsDateFormat=this._get(inst,"navigationAsDateFormat");var numMonths=this._getNumberOfMonths(inst);var showCurrentAtPos=this._get(inst,"showCurrentAtPos");var stepMonths=this._get(inst,"stepMonths");var isMultiMonth=(numMonths[0]!=1||numMonths[1]!=1);var currentDate=this._daylightSavingAdjust((!inst.currentDay?new Date(9999,9,9):new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");var drawMonth=inst.drawMonth-showCurrentAtPos;var drawYear=inst.drawYear;if(drawMonth<0){drawMonth+=12;drawYear--}if(maxDate){var maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-(numMonths[0]*numMonths[1])+1,maxDate.getDate()));maxDraw=(minDate&&maxDraw<minDate?minDate:maxDraw);while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){drawMonth--;if(drawMonth<0){drawMonth=11;drawYear--}}}inst.drawMonth=drawMonth;inst.drawYear=drawYear;var prevText=this._get(inst,"prevText");prevText=(!navigationAsDateFormat?prevText:this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst)));var prev=(this._canAdjustMonth(inst,-1,drawYear,drawMonth)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._adjustDate('#"+inst.id+"', -"+stepMonths+", 'M');\" title=\""+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>"));var nextText=this._get(inst,"nextText");nextText=(!navigationAsDateFormat?nextText:this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst)));var next=(this._canAdjustMonth(inst,+1,drawYear,drawMonth)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._adjustDate('#"+inst.id+"', +"+stepMonths+", 'M');\" title=\""+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>"));var currentText=this._get(inst,"currentText");var gotoDate=(this._get(inst,"gotoCurrent")&&inst.currentDay?currentDate:today);currentText=(!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst)));var controls=(!inst.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+dpuuid+'.datepicker._hideDatepicker();">'+this._get(inst,"closeText")+"</button>":"");var buttonPanel=(showButtonPanel)?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(isRTL?controls:"")+(this._isInRange(inst,gotoDate)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._gotoToday('#"+inst.id+"');\">"+currentText+"</button>":"")+(isRTL?"":controls)+"</div>":"";var firstDay=parseInt(this._get(inst,"firstDay"),10);firstDay=(isNaN(firstDay)?0:firstDay);var showWeek=this._get(inst,"showWeek");var dayNames=this._get(inst,"dayNames");var dayNamesShort=this._get(inst,"dayNamesShort");var dayNamesMin=this._get(inst,"dayNamesMin");var monthNames=this._get(inst,"monthNames");var monthNamesShort=this._get(inst,"monthNamesShort");var beforeShowDay=this._get(inst,"beforeShowDay");var showOtherMonths=this._get(inst,"showOtherMonths");var selectOtherMonths=this._get(inst,"selectOtherMonths");var calculateWeek=this._get(inst,"calculateWeek")||this.iso8601Week;var defaultDate=this._getDefaultDate(inst);var html="";for(var row=0;row<numMonths[0];row++){var group="";for(var col=0;col<numMonths[1];col++){var selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));var cornerClass=" ui-corner-all";var calender="";if(isMultiMonth){calender+='<div class="ui-datepicker-group';if(numMonths[1]>1){switch(col){case 0:calender+=" ui-datepicker-group-first";cornerClass=" ui-corner-"+(isRTL?"right":"left");break;case numMonths[1]-1:calender+=" ui-datepicker-group-last";cornerClass=" ui-corner-"+(isRTL?"left":"right");break;default:calender+=" ui-datepicker-group-middle";cornerClass="";break}}calender+='">'}calender+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+cornerClass+'">'+(/all|left/.test(cornerClass)&&row==0?(isRTL?next:prev):"")+(/all|right/.test(cornerClass)&&row==0?(isRTL?prev:next):"")+this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,row>0||col>0,monthNames,monthNamesShort)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var thead=(showWeek?'<th class="ui-datepicker-week-col">'+this._get(inst,"weekHeader")+"</th>":"");for(var dow=0;dow<7;dow++){var day=(dow+firstDay)%7;thead+="<th"+((dow+firstDay+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+dayNames[day]+'">'+dayNamesMin[day]+"</span></th>"}calender+=thead+"</tr></thead><tbody>";var daysInMonth=this._getDaysInMonth(drawYear,drawMonth);if(drawYear==inst.selectedYear&&drawMonth==inst.selectedMonth){inst.selectedDay=Math.min(inst.selectedDay,daysInMonth)}var leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;var numRows=(isMultiMonth?6:Math.ceil((leadDays+daysInMonth)/7));var printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));for(var dRow=0;dRow<numRows;dRow++){calender+="<tr>";var tbody=(!showWeek?"":'<td class="ui-datepicker-week-col">'+this._get(inst,"calculateWeek")(printDate)+"</td>");for(var dow=0;dow<7;dow++){var daySettings=(beforeShowDay?beforeShowDay.apply((inst.input?inst.input[0]:null),[printDate]):[true,""]);var otherMonth=(printDate.getMonth()!=drawMonth);var unselectable=(otherMonth&&!selectOtherMonths)||!daySettings[0]||(minDate&&printDate<minDate)||(maxDate&&printDate>maxDate);tbody+='<td class="'+((dow+firstDay+6)%7>=5?" ui-datepicker-week-end":"")+(otherMonth?" ui-datepicker-other-month":"")+((printDate.getTime()==selectedDate.getTime()&&drawMonth==inst.selectedMonth&&inst._keyEvent)||(defaultDate.getTime()==printDate.getTime()&&defaultDate.getTime()==selectedDate.getTime())?" "+this._dayOverClass:"")+(unselectable?" "+this._unselectableClass+" ui-state-disabled":"")+(otherMonth&&!showOtherMonths?"":" "+daySettings[1]+(printDate.getTime()==currentDate.getTime()?" "+this._currentClass:"")+(printDate.getTime()==today.getTime()?" ui-datepicker-today":""))+'"'+((!otherMonth||showOtherMonths)&&daySettings[2]?' title="'+daySettings[2]+'"':"")+(unselectable?"":' onclick="DP_jQuery_'+dpuuid+".datepicker._selectDay('#"+inst.id+"',"+printDate.getMonth()+","+printDate.getFullYear()+', this);return false;"')+">"+(otherMonth&&!showOtherMonths?"&#xa0;":(unselectable?'<span class="ui-state-default">'+printDate.getDate()+"</span>":'<a class="ui-state-default'+(printDate.getTime()==today.getTime()?" ui-state-highlight":"")+(printDate.getTime()==currentDate.getTime()?" ui-state-active":"")+(otherMonth?" ui-priority-secondary":"")+'" href="#">'+printDate.getDate()+"</a>"))+"</td>";printDate.setDate(printDate.getDate()+1);printDate=this._daylightSavingAdjust(printDate)}calender+=tbody+"</tr>"}drawMonth++;if(drawMonth>11){drawMonth=0;drawYear++}calender+="</tbody></table>"+(isMultiMonth?"</div>"+((numMonths[0]>0&&col==numMonths[1]-1)?'<div class="ui-datepicker-row-break"></div>':""):"");group+=calender}html+=group}html+=buttonPanel+($.browser.msie&&parseInt($.browser.version,10)<7&&!inst.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");inst._keyEvent=false;return html},_generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,secondary,monthNames,monthNamesShort){var changeMonth=this._get(inst,"changeMonth");var changeYear=this._get(inst,"changeYear");var showMonthAfterYear=this._get(inst,"showMonthAfterYear");var html='<div class="ui-datepicker-title">';var monthHtml="";if(secondary||!changeMonth){monthHtml+='<span class="ui-datepicker-month">'+monthNames[drawMonth]+"</span>"}else{var inMinYear=(minDate&&minDate.getFullYear()==drawYear);var inMaxYear=(maxDate&&maxDate.getFullYear()==drawYear);monthHtml+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+dpuuid+".datepicker._selectMonthYear('#"+inst.id+"', this, 'M');\" onclick=\"DP_jQuery_"+dpuuid+".datepicker._clickMonthYear('#"+inst.id+"');\">";for(var month=0;month<12;month++){if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth())){monthHtml+='<option value="'+month+'"'+(month==drawMonth?' selected="selected"':"")+">"+monthNamesShort[month]+"</option>"}}monthHtml+="</select>"}if(!showMonthAfterYear){html+=monthHtml+(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")}if(secondary||!changeYear){html+='<span class="ui-datepicker-year">'+drawYear+"</span>"}else{var years=this._get(inst,"yearRange").split(":");var thisYear=new Date().getFullYear();var determineYear=function(value){var year=(value.match(/c[+-].*/)?drawYear+parseInt(value.substring(1),10):(value.match(/[+-].*/)?thisYear+parseInt(value,10):parseInt(value,10)));return(isNaN(year)?thisYear:year)};var year=determineYear(years[0]);var endYear=Math.max(year,determineYear(years[1]||""));year=(minDate?Math.max(year,minDate.getFullYear()):year);endYear=(maxDate?Math.min(endYear,maxDate.getFullYear()):endYear);html+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+dpuuid+".datepicker._selectMonthYear('#"+inst.id+"', this, 'Y');\" onclick=\"DP_jQuery_"+dpuuid+".datepicker._clickMonthYear('#"+inst.id+"');\">";for(;year<=endYear;year++){html+='<option value="'+year+'"'+(year==drawYear?' selected="selected"':"")+">"+year+"</option>"}html+="</select>"}html+=this._get(inst,"yearSuffix");if(showMonthAfterYear){html+=(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")+monthHtml}html+="</div>";return html},_adjustInstDate:function(inst,offset,period){var year=inst.drawYear+(period=="Y"?offset:0);var month=inst.drawMonth+(period=="M"?offset:0);var day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+(period=="D"?offset:0);var date=this._restrictMinMax(inst,this._daylightSavingAdjust(new Date(year,month,day)));inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();if(period=="M"||period=="Y"){this._notifyChange(inst)}},_restrictMinMax:function(inst,date){var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");date=(minDate&&date<minDate?minDate:date);date=(maxDate&&date>maxDate?maxDate:date);return date},_notifyChange:function(inst){var onChange=this._get(inst,"onChangeMonthYear");if(onChange){onChange.apply((inst.input?inst.input[0]:null),[inst.selectedYear,inst.selectedMonth+1,inst])}},_getNumberOfMonths:function(inst){var numMonths=this._get(inst,"numberOfMonths");return(numMonths==null?[1,1]:(typeof numMonths=="number"?[1,numMonths]:numMonths))},_getMinMaxDate:function(inst,minMax){return this._determineDate(inst,this._get(inst,minMax+"Date"),null)},_getDaysInMonth:function(year,month){return 32-new Date(year,month,32).getDate()},_getFirstDayOfMonth:function(year,month){return new Date(year,month,1).getDay()},_canAdjustMonth:function(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst);var date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset<0?offset:numMonths[0]*numMonths[1]),1));if(offset<0){date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()))}return this._isInRange(inst,date)},_isInRange:function(inst,date){var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");return((!minDate||date.getTime()>=minDate.getTime())&&(!maxDate||date.getTime()<=maxDate.getTime()))},_getFormatConfig:function(inst){var shortYearCutoff=this._get(inst,"shortYearCutoff");shortYearCutoff=(typeof shortYearCutoff!="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));return{shortYearCutoff:shortYearCutoff,dayNamesShort:this._get(inst,"dayNamesShort"),dayNames:this._get(inst,"dayNames"),monthNamesShort:this._get(inst,"monthNamesShort"),monthNames:this._get(inst,"monthNames")}},_formatDate:function(inst,day,month,year){if(!day){inst.currentDay=inst.selectedDay;inst.currentMonth=inst.selectedMonth;inst.currentYear=inst.selectedYear}var date=(day?(typeof day=="object"?day:this._daylightSavingAdjust(new Date(year,month,day))):this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return this.formatDate(this._get(inst,"dateFormat"),date,this._getFormatConfig(inst))}});function extendRemove(target,props){$.extend(target,props);for(var name in props){if(props[name]==null||props[name]==undefined){target[name]=props[name]}}return target}function isArray(a){return(a&&(($.browser.safari&&typeof a=="object"&&a.length)||(a.constructor&&a.constructor.toString().match(/\Array\(\)/))))}$.fn.datepicker=function(options){if(!$.datepicker.initialized){$(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv);$.datepicker.initialized=true}var otherArgs=Array.prototype.slice.call(arguments,1);if(typeof options=="string"&&(options=="isDisabled"||options=="getDate"||options=="widget")){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))}if(options=="option"&&arguments.length==2&&typeof arguments[1]=="string"){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))}return this.each(function(){typeof options=="string"?$.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this].concat(otherArgs)):$.datepicker._attachDatepicker(this,options)})};$.datepicker=new Datepicker();$.datepicker.initialized=false;$.datepicker.uuid=new Date().getTime();$.datepicker.version="1.8rc3";window["DP_jQuery_"+dpuuid]=$})(jQuery);;/*
 * jQuery UI Progressbar 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Progressbar
 *
 * Depends:
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 */(function(a){a.widget("ui.progressbar",{options:{value:0},_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this._valueMin(),"aria-valuemax":this._valueMax(),"aria-valuenow":this._value()});this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.valueDiv.remove();a.Widget.prototype.destroy.apply(this,arguments)},value:function(b){if(b===undefined){return this._value()}this._setOption("value",b);return this},_setOption:function(b,c){switch(b){case"value":this.options.value=c;this._refreshValue();this._trigger("change");break}a.Widget.prototype._setOption.apply(this,arguments)},_value:function(){var b=this.options.value;if(typeof b!=="number"){b=0}if(b<this._valueMin()){b=this._valueMin()}if(b>this._valueMax()){b=this._valueMax()}return b},_valueMin:function(){return 0},_valueMax:function(){return 100},_refreshValue:function(){var b=this.value();this.valueDiv[b===this._valueMax()?"addClass":"removeClass"]("ui-corner-right").width(b+"%");this.element.attr("aria-valuenow",b)}});a.extend(a.ui.progressbar,{version:"1.8rc3"})})(jQuery);;/*
 * jQuery UI Effects 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/
 */jQuery.effects||(function(g){g.effects={};g.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(l,k){g.fx.step[k]=function(m){if(!m.colorInit){m.start=j(m.elem,k);m.end=i(m.end);m.colorInit=true}m.elem.style[k]="rgb("+Math.max(Math.min(parseInt((m.pos*(m.end[0]-m.start[0]))+m.start[0],10),255),0)+","+Math.max(Math.min(parseInt((m.pos*(m.end[1]-m.start[1]))+m.start[1],10),255),0)+","+Math.max(Math.min(parseInt((m.pos*(m.end[2]-m.start[2]))+m.start[2],10),255),0)+")"}});function i(l){var k;if(l&&l.constructor==Array&&l.length==3){return l}if(k=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(l)){return[parseInt(k[1],10),parseInt(k[2],10),parseInt(k[3],10)]}if(k=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(l)){return[parseFloat(k[1])*2.55,parseFloat(k[2])*2.55,parseFloat(k[3])*2.55]}if(k=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(l)){return[parseInt(k[1],16),parseInt(k[2],16),parseInt(k[3],16)]}if(k=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(l)){return[parseInt(k[1]+k[1],16),parseInt(k[2]+k[2],16),parseInt(k[3]+k[3],16)]}if(k=/rgba\(0, 0, 0, 0\)/.exec(l)){return a.transparent}return a[g.trim(l).toLowerCase()]}function j(m,k){var l;do{l=g.curCSS(m,k);if(l!=""&&l!="transparent"||g.nodeName(m,"body")){break}k="backgroundColor"}while(m=m.parentNode);return i(l)}var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]};var e=["add","remove","toggle"],c={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};function f(){var n=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,o={},l,m;if(n&&n.length&&n[0]&&n[n[0]]){var k=n.length;while(k--){l=n[k];if(typeof n[l]=="string"){m=l.replace(/\-(\w)/g,function(p,q){return q.toUpperCase()});o[m]=n[l]}}}else{for(l in n){if(typeof n[l]==="string"){o[l]=n[l]}}}return o}function b(l){var k,m;for(k in l){m=l[k];if(m==null||g.isFunction(m)||k in c||(/scrollbar/).test(k)||(!(/color/i).test(k)&&isNaN(parseFloat(m)))){delete l[k]}}return l}function h(k,m){var n={_:0},l;for(l in m){if(k[l]!=m[l]){n[l]=m[l]}}return n}g.effects.animateClass=function(k,l,n,m){if(g.isFunction(n)){m=n;n=null}return this.each(function(){var r=g(this),o=r.attr("style")||" ",s=b(f.call(this)),q,p=r.attr("className");g.each(e,function(t,u){if(k[u]){r[u+"Class"](k[u])}});q=b(f.call(this));r.attr("className",p);r.animate(h(s,q),l,n,function(){g.each(e,function(t,u){if(k[u]){r[u+"Class"](k[u])}});if(typeof r.attr("style")=="object"){r.attr("style").cssText="";r.attr("style").cssText=o}else{r.attr("style",o)}if(m){m.apply(this,arguments)}})})};g.fn.extend({_addClass:g.fn.addClass,addClass:function(l,k,n,m){return k?g.effects.animateClass.apply(this,[{add:l},k,n,m]):this._addClass(l)},_removeClass:g.fn.removeClass,removeClass:function(l,k,n,m){return k?g.effects.animateClass.apply(this,[{remove:l},k,n,m]):this._removeClass(l)},_toggleClass:g.fn.toggleClass,toggleClass:function(m,l,k,o,n){if(typeof l=="boolean"||l===undefined){if(!k){return this._toggleClass(m,l)}else{return g.effects.animateClass.apply(this,[(l?{add:m}:{remove:m}),k,o,n])}}else{return g.effects.animateClass.apply(this,[{toggle:m},l,k,o])}},switchClass:function(k,m,l,o,n){return g.effects.animateClass.apply(this,[{add:m,remove:k},l,o,n])}});g.extend(g.effects,{version:"1.8rc3",save:function(l,m){for(var k=0;k<m.length;k++){if(m[k]!==null){l.data("ec.storage."+m[k],l[0].style[m[k]])}}},restore:function(l,m){for(var k=0;k<m.length;k++){if(m[k]!==null){l.css(m[k],l.data("ec.storage."+m[k]))}}},setMode:function(k,l){if(l=="toggle"){l=k.is(":hidden")?"show":"hide"}return l},getBaseline:function(l,m){var n,k;switch(l[0]){case"top":n=0;break;case"middle":n=0.5;break;case"bottom":n=1;break;default:n=l[0]/m.height}switch(l[1]){case"left":k=0;break;case"center":k=0.5;break;case"right":k=1;break;default:k=l[1]/m.width}return{x:k,y:n}},createWrapper:function(k){if(k.parent().is(".ui-effects-wrapper")){return k.parent()}var l={width:k.outerWidth(true),height:k.outerHeight(true),"float":k.css("float")},m=g("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0});k.wrap(m);m=k.parent();if(k.css("position")=="static"){m.css({position:"relative"});k.css({position:"relative"})}else{g.extend(l,{position:k.css("position"),zIndex:k.css("z-index")});g.each(["top","left","bottom","right"],function(n,o){l[o]=k.css(o);if(isNaN(parseInt(l[o],10))){l[o]="auto"}});k.css({position:"relative",top:0,left:0})}return m.css(l).show()},removeWrapper:function(k){if(k.parent().is(".ui-effects-wrapper")){return k.parent().replaceWith(k)}return k},setTransition:function(l,n,k,m){m=m||{};g.each(n,function(p,o){unit=l.cssUnit(o);if(unit[0]>0){m[o]=unit[0]*k+unit[1]}});return m}});function d(l,k,m,n){if(typeof l=="object"){n=k;m=null;k=l;l=k.effect}if(g.isFunction(k)){n=k;m=null;k={}}if(typeof k=="number"||g.fx.speeds[k]){n=m;m=k;k={}}k=k||{};m=m||k.duration;m=g.fx.off?0:typeof m=="number"?m:g.fx.speeds[m]||g.fx.speeds._default;n=n||k.complete;return[l,k,m,n]}g.fn.extend({effect:function(n,m,p,q){var l=d.apply(this,arguments),o={options:l[1],duration:l[2],callback:l[3]},k=g.effects[n];return k&&!g.fx.off?k.call(this,o):this},_show:g.fn.show,show:function(l){if(!l||typeof l=="number"||g.fx.speeds[l]){return this._show.apply(this,arguments)}else{var k=d.apply(this,arguments);k[1].mode="show";return this.effect.apply(this,k)}},_hide:g.fn.hide,hide:function(l){if(!l||typeof l=="number"||g.fx.speeds[l]){return this._hide.apply(this,arguments)}else{var k=d.apply(this,arguments);k[1].mode="hide";return this.effect.apply(this,k)}},__toggle:g.fn.toggle,toggle:function(l){if(!l||typeof l=="number"||g.fx.speeds[l]||typeof l=="boolean"||g.isFunction(l)){return this.__toggle.apply(this,arguments)}else{var k=d.apply(this,arguments);k[1].mode="toggle";return this.effect.apply(this,k)}},cssUnit:function(k){var l=this.css(k),m=[];g.each(["em","px","%","pt"],function(n,o){if(l.indexOf(o)>0){m=[parseFloat(l),o]}});return m}});g.easing.jswing=g.easing.swing;g.extend(g.easing,{def:"easeOutQuad",swing:function(l,m,k,o,n){return g.easing[g.easing.def](l,m,k,o,n)},easeInQuad:function(l,m,k,o,n){return o*(m/=n)*m+k},easeOutQuad:function(l,m,k,o,n){return -o*(m/=n)*(m-2)+k},easeInOutQuad:function(l,m,k,o,n){if((m/=n/2)<1){return o/2*m*m+k}return -o/2*((--m)*(m-2)-1)+k},easeInCubic:function(l,m,k,o,n){return o*(m/=n)*m*m+k},easeOutCubic:function(l,m,k,o,n){return o*((m=m/n-1)*m*m+1)+k},easeInOutCubic:function(l,m,k,o,n){if((m/=n/2)<1){return o/2*m*m*m+k}return o/2*((m-=2)*m*m+2)+k},easeInQuart:function(l,m,k,o,n){return o*(m/=n)*m*m*m+k},easeOutQuart:function(l,m,k,o,n){return -o*((m=m/n-1)*m*m*m-1)+k},easeInOutQuart:function(l,m,k,o,n){if((m/=n/2)<1){return o/2*m*m*m*m+k}return -o/2*((m-=2)*m*m*m-2)+k},easeInQuint:function(l,m,k,o,n){return o*(m/=n)*m*m*m*m+k},easeOutQuint:function(l,m,k,o,n){return o*((m=m/n-1)*m*m*m*m+1)+k},easeInOutQuint:function(l,m,k,o,n){if((m/=n/2)<1){return o/2*m*m*m*m*m+k}return o/2*((m-=2)*m*m*m*m+2)+k},easeInSine:function(l,m,k,o,n){return -o*Math.cos(m/n*(Math.PI/2))+o+k},easeOutSine:function(l,m,k,o,n){return o*Math.sin(m/n*(Math.PI/2))+k},easeInOutSine:function(l,m,k,o,n){return -o/2*(Math.cos(Math.PI*m/n)-1)+k},easeInExpo:function(l,m,k,o,n){return(m==0)?k:o*Math.pow(2,10*(m/n-1))+k},easeOutExpo:function(l,m,k,o,n){return(m==n)?k+o:o*(-Math.pow(2,-10*m/n)+1)+k},easeInOutExpo:function(l,m,k,o,n){if(m==0){return k}if(m==n){return k+o}if((m/=n/2)<1){return o/2*Math.pow(2,10*(m-1))+k}return o/2*(-Math.pow(2,-10*--m)+2)+k},easeInCirc:function(l,m,k,o,n){return -o*(Math.sqrt(1-(m/=n)*m)-1)+k},easeOutCirc:function(l,m,k,o,n){return o*Math.sqrt(1-(m=m/n-1)*m)+k},easeInOutCirc:function(l,m,k,o,n){if((m/=n/2)<1){return -o/2*(Math.sqrt(1-m*m)-1)+k}return o/2*(Math.sqrt(1-(m-=2)*m)+1)+k},easeInElastic:function(l,n,k,u,r){var o=1.70158;var q=0;var m=u;if(n==0){return k}if((n/=r)==1){return k+u}if(!q){q=r*0.3}if(m<Math.abs(u)){m=u;var o=q/4}else{var o=q/(2*Math.PI)*Math.asin(u/m)}return -(m*Math.pow(2,10*(n-=1))*Math.sin((n*r-o)*(2*Math.PI)/q))+k},easeOutElastic:function(l,n,k,u,r){var o=1.70158;var q=0;var m=u;if(n==0){return k}if((n/=r)==1){return k+u}if(!q){q=r*0.3}if(m<Math.abs(u)){m=u;var o=q/4}else{var o=q/(2*Math.PI)*Math.asin(u/m)}return m*Math.pow(2,-10*n)*Math.sin((n*r-o)*(2*Math.PI)/q)+u+k},easeInOutElastic:function(l,n,k,u,r){var o=1.70158;var q=0;var m=u;if(n==0){return k}if((n/=r/2)==2){return k+u}if(!q){q=r*(0.3*1.5)}if(m<Math.abs(u)){m=u;var o=q/4}else{var o=q/(2*Math.PI)*Math.asin(u/m)}if(n<1){return -0.5*(m*Math.pow(2,10*(n-=1))*Math.sin((n*r-o)*(2*Math.PI)/q))+k}return m*Math.pow(2,-10*(n-=1))*Math.sin((n*r-o)*(2*Math.PI)/q)*0.5+u+k},easeInBack:function(l,m,k,p,o,n){if(n==undefined){n=1.70158}return p*(m/=o)*m*((n+1)*m-n)+k},easeOutBack:function(l,m,k,p,o,n){if(n==undefined){n=1.70158}return p*((m=m/o-1)*m*((n+1)*m+n)+1)+k},easeInOutBack:function(l,m,k,p,o,n){if(n==undefined){n=1.70158}if((m/=o/2)<1){return p/2*(m*m*(((n*=(1.525))+1)*m-n))+k}return p/2*((m-=2)*m*(((n*=(1.525))+1)*m+n)+2)+k},easeInBounce:function(l,m,k,o,n){return o-g.easing.easeOutBounce(l,n-m,0,o,n)+k},easeOutBounce:function(l,m,k,o,n){if((m/=n)<(1/2.75)){return o*(7.5625*m*m)+k}else{if(m<(2/2.75)){return o*(7.5625*(m-=(1.5/2.75))*m+0.75)+k}else{if(m<(2.5/2.75)){return o*(7.5625*(m-=(2.25/2.75))*m+0.9375)+k}else{return o*(7.5625*(m-=(2.625/2.75))*m+0.984375)+k}}}},easeInOutBounce:function(l,m,k,o,n){if(m<n/2){return g.easing.easeInBounce(l,m*2,0,o,n)*0.5+k}return g.easing.easeOutBounce(l,m*2-n,0,o,n)*0.5+o*0.5+k}})})(jQuery);;/*
 * jQuery UI Effects Blind 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Blind
 *
 * Depends:
 *  jquery.effects.core.js
 */(function(a){a.effects.blind=function(b){return this.queue(function(){var d=a(this),c=["position","top","left"];var h=a.effects.setMode(d,b.options.mode||"hide");var g=b.options.direction||"vertical";a.effects.save(d,c);d.show();var j=a.effects.createWrapper(d).css({overflow:"hidden"});var e=(g=="vertical")?"height":"width";var i=(g=="vertical")?j.height():j.width();if(h=="show"){j.css(e,0)}var f={};f[e]=h=="show"?i:0;j.animate(f,b.duration,b.options.easing,function(){if(h=="hide"){d.hide()}a.effects.restore(d,c);a.effects.removeWrapper(d);if(b.callback){b.callback.apply(d[0],arguments)}d.dequeue()})})}})(jQuery);;/*
 * jQuery UI Effects Bounce 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Bounce
 *
 * Depends:
 *  jquery.effects.core.js
 */(function(a){a.effects.bounce=function(b){return this.queue(function(){var e=a(this),l=["position","top","left"];var k=a.effects.setMode(e,b.options.mode||"effect");var n=b.options.direction||"up";var c=b.options.distance||20;var d=b.options.times||5;var g=b.duration||250;if(/show|hide/.test(k)){l.push("opacity")}a.effects.save(e,l);e.show();a.effects.createWrapper(e);var f=(n=="up"||n=="down")?"top":"left";var p=(n=="up"||n=="left")?"pos":"neg";var c=b.options.distance||(f=="top"?e.outerHeight({margin:true})/3:e.outerWidth({margin:true})/3);if(k=="show"){e.css("opacity",0).css(f,p=="pos"?-c:c)}if(k=="hide"){c=c/(d*2)}if(k!="hide"){d--}if(k=="show"){var h={opacity:1};h[f]=(p=="pos"?"+=":"-=")+c;e.animate(h,g/2,b.options.easing);c=c/2;d--}for(var j=0;j<d;j++){var o={},m={};o[f]=(p=="pos"?"-=":"+=")+c;m[f]=(p=="pos"?"+=":"-=")+c;e.animate(o,g/2,b.options.easing).animate(m,g/2,b.options.easing);c=(k=="hide")?c*2:c/2}if(k=="hide"){var h={opacity:0};h[f]=(p=="pos"?"-=":"+=")+c;e.animate(h,g/2,b.options.easing,function(){e.hide();a.effects.restore(e,l);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}})}else{var o={},m={};o[f]=(p=="pos"?"-=":"+=")+c;m[f]=(p=="pos"?"+=":"-=")+c;e.animate(o,g/2,b.options.easing).animate(m,g/2,b.options.easing,function(){a.effects.restore(e,l);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}})}e.queue("fx",function(){e.dequeue()});e.dequeue()})}})(jQuery);;/*
 * jQuery UI Effects Clip 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Clip
 *
 * Depends:
 *  jquery.effects.core.js
 */(function(a){a.effects.clip=function(b){return this.queue(function(){var f=a(this),j=["position","top","left","height","width"];var i=a.effects.setMode(f,b.options.mode||"hide");var k=b.options.direction||"vertical";a.effects.save(f,j);f.show();var c=a.effects.createWrapper(f).css({overflow:"hidden"});var e=f[0].tagName=="IMG"?c:f;var g={size:(k=="vertical")?"height":"width",position:(k=="vertical")?"top":"left"};var d=(k=="vertical")?e.height():e.width();if(i=="show"){e.css(g.size,0);e.css(g.position,d/2)}var h={};h[g.size]=i=="show"?d:0;h[g.position]=i=="show"?0:d/2;e.animate(h,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(i=="hide"){f.hide()}a.effects.restore(f,j);a.effects.removeWrapper(f);if(b.callback){b.callback.apply(f[0],arguments)}f.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Drop 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Drop
 *
 * Depends:
 *  jquery.effects.core.js
 */(function(a){a.effects.drop=function(b){return this.queue(function(){var e=a(this),d=["position","top","left","opacity"];var i=a.effects.setMode(e,b.options.mode||"hide");var h=b.options.direction||"left";a.effects.save(e,d);e.show();a.effects.createWrapper(e);var f=(h=="up"||h=="down")?"top":"left";var c=(h=="up"||h=="left")?"pos":"neg";var j=b.options.distance||(f=="top"?e.outerHeight({margin:true})/2:e.outerWidth({margin:true})/2);if(i=="show"){e.css("opacity",0).css(f,c=="pos"?-j:j)}var g={opacity:i=="show"?1:0};g[f]=(i=="show"?(c=="pos"?"+=":"-="):(c=="pos"?"-=":"+="))+j;e.animate(g,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(i=="hide"){e.hide()}a.effects.restore(e,d);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}e.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Explode 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Explode
 *
 * Depends:
 *  jquery.effects.core.js
 */(function(a){a.effects.explode=function(b){return this.queue(function(){var k=b.options.pieces?Math.round(Math.sqrt(b.options.pieces)):3;var e=b.options.pieces?Math.round(Math.sqrt(b.options.pieces)):3;b.options.mode=b.options.mode=="toggle"?(a(this).is(":visible")?"hide":"show"):b.options.mode;var h=a(this).show().css("visibility","hidden");var l=h.offset();l.top-=parseInt(h.css("marginTop"),10)||0;l.left-=parseInt(h.css("marginLeft"),10)||0;var g=h.outerWidth(true);var c=h.outerHeight(true);for(var f=0;f<k;f++){for(var d=0;d<e;d++){h.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-d*(g/e),top:-f*(c/k)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:g/e,height:c/k,left:l.left+d*(g/e)+(b.options.mode=="show"?(d-Math.floor(e/2))*(g/e):0),top:l.top+f*(c/k)+(b.options.mode=="show"?(f-Math.floor(k/2))*(c/k):0),opacity:b.options.mode=="show"?0:1}).animate({left:l.left+d*(g/e)+(b.options.mode=="show"?0:(d-Math.floor(e/2))*(g/e)),top:l.top+f*(c/k)+(b.options.mode=="show"?0:(f-Math.floor(k/2))*(c/k)),opacity:b.options.mode=="show"?1:0},b.duration||500)}}setTimeout(function(){b.options.mode=="show"?h.css({visibility:"visible"}):h.css({visibility:"visible"}).hide();if(b.callback){b.callback.apply(h[0])}h.dequeue();a("div.ui-effects-explode").remove()},b.duration||500)})}})(jQuery);;/*
 * jQuery UI Effects Fold 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Fold
 *
 * Depends:
 *  jquery.effects.core.js
 */(function(a){a.effects.fold=function(b){return this.queue(function(){var e=a(this),k=["position","top","left"];var h=a.effects.setMode(e,b.options.mode||"hide");var o=b.options.size||15;var n=!(!b.options.horizFirst);var g=b.duration?b.duration/2:a.fx.speeds._default/2;a.effects.save(e,k);e.show();var d=a.effects.createWrapper(e).css({overflow:"hidden"});var i=((h=="show")!=n);var f=i?["width","height"]:["height","width"];var c=i?[d.width(),d.height()]:[d.height(),d.width()];var j=/([0-9]+)%/.exec(o);if(j){o=parseInt(j[1],10)/100*c[h=="hide"?0:1]}if(h=="show"){d.css(n?{height:0,width:o}:{height:o,width:0})}var m={},l={};m[f[0]]=h=="show"?c[0]:o;l[f[1]]=h=="show"?c[1]:0;d.animate(m,g,b.options.easing).animate(l,g,b.options.easing,function(){if(h=="hide"){e.hide()}a.effects.restore(e,k);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(e[0],arguments)}e.dequeue()})})}})(jQuery);;/*
 * jQuery UI Effects Highlight 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Highlight
 *
 * Depends:
 *  jquery.effects.core.js
 */(function(a){a.effects.highlight=function(b){return this.queue(function(){var d=a(this),c=["backgroundImage","backgroundColor","opacity"],f=a.effects.setMode(d,b.options.mode||"show"),e={backgroundColor:d.css("backgroundColor")};if(f=="hide"){e.opacity=0}a.effects.save(d,c);d.show().css({backgroundImage:"none",backgroundColor:b.options.color||"#ffff99"}).animate(e,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){(f=="hide"&&d.hide());a.effects.restore(d,c);(f=="show"&&!a.support.opacity&&this.style.removeAttribute("filter"));(b.callback&&b.callback.apply(this,arguments));d.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Pulsate 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Pulsate
 *
 * Depends:
 *  jquery.effects.core.js
 */(function(a){a.effects.pulsate=function(b){return this.queue(function(){var d=a(this),e=a.effects.setMode(d,b.options.mode||"show");times=((b.options.times||5)*2)-1;duration=b.duration?b.duration/2:a.fx.speeds._default/2,isVisible=d.is(":visible"),animateTo=0;if(!isVisible){d.css("opacity",0).show();animateTo=1}if((e=="hide"&&isVisible)||(e=="show"&&!isVisible)){times--}for(var c=0;c<times;c++){d.animate({opacity:animateTo},duration,b.options.easing);animateTo=(animateTo+1)%2}d.animate({opacity:animateTo},duration,b.options.easing,function(){if(animateTo==0){d.hide()}(b.callback&&b.callback.apply(this,arguments))});d.queue("fx",function(){d.dequeue()}).dequeue()})}})(jQuery);;/*
 * jQuery UI Effects Scale 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Scale
 *
 * Depends:
 *  jquery.effects.core.js
 */(function(a){a.effects.puff=function(b){return this.queue(function(){var f=a(this),g=a.effects.setMode(f,b.options.mode||"hide"),e=parseInt(b.options.percent,10)||150,d=e/100,c={height:f.height(),width:f.width()};a.extend(b.options,{fade:true,mode:g,percent:g=="hide"?e:100,from:g=="hide"?c:{height:c.height*d,width:c.width*d}});f.effect("scale",b.options,b.duration,b.callback);f.dequeue()})};a.effects.scale=function(b){return this.queue(function(){var g=a(this);var d=a.extend(true,{},b.options);var j=a.effects.setMode(g,b.options.mode||"effect");var h=parseInt(b.options.percent,10)||(parseInt(b.options.percent,10)==0?0:(j=="hide"?0:100));var i=b.options.direction||"both";var c=b.options.origin;if(j!="effect"){d.origin=c||["middle","center"];d.restore=true}var f={height:g.height(),width:g.width()};g.from=b.options.from||(j=="show"?{height:0,width:0}:f);var e={y:i!="horizontal"?(h/100):1,x:i!="vertical"?(h/100):1};g.to={height:f.height*e.y,width:f.width*e.x};if(b.options.fade){if(j=="show"){g.from.opacity=0;g.to.opacity=1}if(j=="hide"){g.from.opacity=1;g.to.opacity=0}}d.from=g.from;d.to=g.to;d.mode=j;g.effect("size",d,b.duration,b.callback);g.dequeue()})};a.effects.size=function(b){return this.queue(function(){var c=a(this),n=["position","top","left","width","height","overflow","opacity"];var m=["position","top","left","overflow","opacity"];var j=["width","height","overflow"];var p=["fontSize"];var k=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"];var f=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"];var g=a.effects.setMode(c,b.options.mode||"effect");var i=b.options.restore||false;var e=b.options.scale||"both";var o=b.options.origin;var d={height:c.height(),width:c.width()};c.from=b.options.from||d;c.to=b.options.to||d;if(o){var h=a.effects.getBaseline(o,d);c.from.top=(d.height-c.from.height)*h.y;c.from.left=(d.width-c.from.width)*h.x;c.to.top=(d.height-c.to.height)*h.y;c.to.left=(d.width-c.to.width)*h.x}var l={from:{y:c.from.height/d.height,x:c.from.width/d.width},to:{y:c.to.height/d.height,x:c.to.width/d.width}};if(e=="box"||e=="both"){if(l.from.y!=l.to.y){n=n.concat(k);c.from=a.effects.setTransition(c,k,l.from.y,c.from);c.to=a.effects.setTransition(c,k,l.to.y,c.to)}if(l.from.x!=l.to.x){n=n.concat(f);c.from=a.effects.setTransition(c,f,l.from.x,c.from);c.to=a.effects.setTransition(c,f,l.to.x,c.to)}}if(e=="content"||e=="both"){if(l.from.y!=l.to.y){n=n.concat(p);c.from=a.effects.setTransition(c,p,l.from.y,c.from);c.to=a.effects.setTransition(c,p,l.to.y,c.to)}}a.effects.save(c,i?n:m);c.show();a.effects.createWrapper(c);c.css("overflow","hidden").css(c.from);if(e=="content"||e=="both"){k=k.concat(["marginTop","marginBottom"]).concat(p);f=f.concat(["marginLeft","marginRight"]);j=n.concat(k).concat(f);c.find("*[width]").each(function(){child=a(this);if(i){a.effects.save(child,j)}var q={height:child.height(),width:child.width()};child.from={height:q.height*l.from.y,width:q.width*l.from.x};child.to={height:q.height*l.to.y,width:q.width*l.to.x};if(l.from.y!=l.to.y){child.from=a.effects.setTransition(child,k,l.from.y,child.from);child.to=a.effects.setTransition(child,k,l.to.y,child.to)}if(l.from.x!=l.to.x){child.from=a.effects.setTransition(child,f,l.from.x,child.from);child.to=a.effects.setTransition(child,f,l.to.x,child.to)}child.css(child.from);child.animate(child.to,b.duration,b.options.easing,function(){if(i){a.effects.restore(child,j)}})})}c.animate(c.to,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(c.to.opacity===0){c.css("opacity",c.from.opacity)}if(g=="hide"){c.hide()}a.effects.restore(c,i?n:m);a.effects.removeWrapper(c);if(b.callback){b.callback.apply(this,arguments)}c.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Shake 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Shake
 *
 * Depends:
 *  jquery.effects.core.js
 */(function(a){a.effects.shake=function(b){return this.queue(function(){var e=a(this),l=["position","top","left"];var k=a.effects.setMode(e,b.options.mode||"effect");var n=b.options.direction||"left";var c=b.options.distance||20;var d=b.options.times||3;var g=b.duration||b.options.duration||140;a.effects.save(e,l);e.show();a.effects.createWrapper(e);var f=(n=="up"||n=="down")?"top":"left";var p=(n=="up"||n=="left")?"pos":"neg";var h={},o={},m={};h[f]=(p=="pos"?"-=":"+=")+c;o[f]=(p=="pos"?"+=":"-=")+c*2;m[f]=(p=="pos"?"-=":"+=")+c*2;e.animate(h,g,b.options.easing);for(var j=1;j<d;j++){e.animate(o,g,b.options.easing).animate(m,g,b.options.easing)}e.animate(o,g,b.options.easing).animate(h,g/2,b.options.easing,function(){a.effects.restore(e,l);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}});e.queue("fx",function(){e.dequeue()});e.dequeue()})}})(jQuery);;/*
 * jQuery UI Effects Slide 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Slide
 *
 * Depends:
 *  jquery.effects.core.js
 */(function(a){a.effects.slide=function(b){return this.queue(function(){var e=a(this),d=["position","top","left"];var i=a.effects.setMode(e,b.options.mode||"show");var h=b.options.direction||"left";a.effects.save(e,d);e.show();a.effects.createWrapper(e).css({overflow:"hidden"});var f=(h=="up"||h=="down")?"top":"left";var c=(h=="up"||h=="left")?"pos":"neg";var j=b.options.distance||(f=="top"?e.outerHeight({margin:true}):e.outerWidth({margin:true}));if(i=="show"){e.css(f,c=="pos"?-j:j)}var g={};g[f]=(i=="show"?(c=="pos"?"+=":"-="):(c=="pos"?"-=":"+="))+j;e.animate(g,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(i=="hide"){e.hide()}a.effects.restore(e,d);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}e.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Transfer 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Transfer
 *
 * Depends:
 *  jquery.effects.core.js
 */(function(a){a.effects.transfer=function(b){return this.queue(function(){var f=a(this),h=a(b.options.to),e=h.offset(),g={top:e.top,left:e.left,height:h.innerHeight(),width:h.innerWidth()},d=f.offset(),c=a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(b.options.className).css({top:d.top,left:d.left,height:f.innerHeight(),width:f.innerWidth(),position:"absolute"}).animate(g,b.duration,b.options.easing,function(){c.remove();(b.callback&&b.callback.apply(f[0],arguments));f.dequeue()})})}})(jQuery);;
// ==ClosureCompiler==
// @compilation_level SIMPLE_OPTIMIZATIONS
/** 
 * @license Highcharts JS v1.2.5 (2010-04-13)
 * 
 * (c) 2010 Torstein Hønsi
 * 
 * License: www.highcharts.com/license
 */

/*
 * Roadmap
 * 
 * 2.0 (summer 2010)
 * - Rewritten rendering engine to SVG/VML
 * - Save as image
 * - Print chart - open in a popup and call window.print.
 * - Improvements to the toolbar object to allow the two above
 * 
 * 2.1 (summer/autumn 2010)
 * - Logarithmic axis
 * - Built-in table parser
 * - Base value for column, bar and area series
 * - Automatic margin size based on axis label size and legend. Anti-collision logic for labels.
 * - Floating columns and bars
 * - Candlestick charts
 * - Stock charts?
 * - Radar charts?
 * 
 * 2.2 (autumn 2010)
 * - Improve pies: shadow, better dataLabels, 3D view.
 *
 */


(function() {

// encapsulated variables
var 
  // abstracts to make compiled code smaller
  undefined,
  doc = document,
  win = window,
  math = Math,
  mathRound = math.round,
  mathFloor = math.floor,
  mathMax = math.max,
  mathAbs = math.abs,
  mathCos = math.cos,
  mathSin = math.sin,  
  
  
  // some variables
  userAgent = navigator.userAgent,
  isIE = /msie/i.test(userAgent) && !win.opera,
  isWebKit = /AppleWebKit/.test(userAgent),
  styleTag,
  canvasCounter = 0,
  colorCounter,
  symbolCounter,
  symbolSizes = {},
  idCounter = 0,
  timeFactor = 1, // 1 = JavaScript time, 1000 = Unix time
  garbageBin,
  
  // some constants for frequently used strings
  DIV = 'div',
  ABSOLUTE = 'absolute',
  RELATIVE = 'relative',
  HIDDEN = 'hidden',
  HIGHCHARTS_HIDDEN = 'highcharts-' + HIDDEN,
  VISIBLE = 'visible',
  PX = 'px',
  
  // time methods, changed based on whether or not UTC is used
  makeTime,
  getMinutes,
  getHours,
  getDay,
  getDate,
  getMonth,
  getFullYear,
  setMinutes,
  setHours,
  setDate,
  setMonth,
  setFullYear,
  
  // check for a custom HighchartsAdapter defined prior to this file
  globalAdapter = win.HighchartsAdapter,
  adapter = globalAdapter || {}, 
  
  // Utility functions. If the HighchartsAdapter is not defined, adapter is an empty object
  // and all the utility functions will be null. In that case they are populated by the 
  // default adapters below.
  each = adapter.each,
  grep = adapter.grep,
  map = adapter.map,
  merge = adapter.merge,
  hyphenate = adapter.hyphenate,
  addEvent = adapter.addEvent,
  fireEvent = adapter.fireEvent,
  animate = adapter.animate,
  getAjax = adapter.getAjax,
  
  // lookup over the types and the associated classes
  seriesTypes = {};
  
  
// the jQuery adapter
if (!globalAdapter && win.jQuery) {
  var jQ = jQuery;
  each = function(arr, fn) {
    for (var i = 0, len = arr.length; i < len; i++) {
      if (fn.call(arr[i], arr[i], i, arr) === false) {
        return i;
      }
    }
  };
  grep = jQ.grep;
  map = function(arr, fn){
    //return jQuery.map(arr, fn);
    var results = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      results[i] = fn.call(arr[i], arr[i], i, arr);
    }
    return results;
    
  }
  merge = function(){
    var args = arguments;
    return jQ.extend(true, null, args[0], args[1], args[2], args[3]);
  }
  hyphenate = function (str){
    return str.replace(/([A-Z])/g, function(a, b){ return '-'+ b.toLowerCase() });
  }
  addEvent = function (el, event, fn){
    jQ(el).bind(event, fn);
  }
  fireEvent = function(el, type, eventArguments, defaultFunction) {
    var event = jQ.Event(type),
      detachedType = 'detached'+ type;
    extend(event, eventArguments);
    
    // Prevent jQuery from triggering the object method that is named the
    // same as the event. For example, if the event is 'select', jQuery
    // attempts calling el.select and it goes into a loop.
    if (el[type]) {
      el[detachedType] = el[type];
      el[type] = null;  
    }
    
    // trigger it
    jQ(el).trigger(event);
    
    // attach the method
    if (el[detachedType]) {
      el[type] = el[detachedType];
      el[detachedType] = null;
    }
    
    if (defaultFunction && !event.isDefaultPrevented()) {
        defaultFunction(event);
    }  
  }

  animate = function (el, params, options) {
    jQ(el).animate(params, options);
  }
  getAjax = function (url, callback) {
    jQ.get(url, null, callback);
  }
  
  jQ.extend( jQ.easing, {
    easeOutQuad: function (x, t, b, c, d) {
      return -c *(t/=d)*(t-2) + b;
    }
  });
  
// the MooTools adapter
} else if (!globalAdapter && win.MooTools) {
  
  each = $each;
  
  map = function (arr, fn){
    return arr.map(fn);
  }
  
  grep = function(arr, fn) {
    return arr.filter(fn)
  }
  
  merge = $merge;
  
  hyphenate = function (str){
    return str.hyphenate();
  }
  
  addEvent = function (el, type, fn) {
    // if the addEvent method is not defined, el is a custom Highcharts object
    // like series or point
    if (!el.addEvent) {
      if (el.nodeName) el = $(el); // a dynamically generated node
      else extend(el, new Events()); // a custom object
    } 
    el.addEvent(type, fn);
  }
  fireEvent = function(el, event, eventArguments, defaultFunction) {
    // create an event object that keeps all functions    
    event = new Event({ 
      type: event,
      target: el
    });
    event = extend (event, eventArguments);
    // override the preventDefault function to be able to use
    // this for custom events
    event.preventDefault = function() {
      defaultFunction = null;
    }
    // if fireEvent is not available on the object, there hasn't been added
    // any events to it above
    if (el.fireEvent) el.fireEvent(event.type, event);
    
    // fire the default if it is passed and it is not prevented above
    if (defaultFunction) defaultFunction(event);
    
  }
  animate = function (el, params, options){
    var myEffect = new Fx.Morph($(el), extend(options, {
       transition: Fx.Transitions.Quad.easeInOut
     }));
    myEffect.start(params);
  }
  getAjax = function (url, callback) {
    (new Request({
      url: url,
      method: 'get',
      onSuccess: callback
    })).send();      
  }
} 

/**
 * Check if an element is an array, and if not, make it into an array. Like
 * MooTools' $.splat.
 */
function splat(obj) {
  if (!obj || obj.constructor != Array) obj = [obj];
  return obj; 
}

/**
 * Returns true if the object is not null or undefined. Like MooTools' $.defined.
 * @param {Object} obj
 */
function defined (obj) {
  return obj !== undefined && obj !== null;
}

/**
 * Return the first value that is defined. Like MooTools' $.pick.
 */
function pick() {
  var args = arguments,
    i,
    arg;
  for (i = 0; i < args.length; i++) {
    arg = args[i];
    if (defined(arg)) return arg;
  };
}

/**
 * Dynamically add a CSS rule to the page
 * @param {String} selector
 * @param {Object} declaration
 * @param {Boolean} print Whether to add the styles only to print media. IE only.
 */
function addCSSRule(selector, declaration, print) {
  
  var key,
    serialized = '',
    styleSheets,
    last,
    media = print ? 'print' : '',
    createStyleTag = function(print) {
      return createElement(
        'style', { 
          type: 'text/css',
          media: print ? 'print' : ''
        }, 
        null, 
        doc.getElementsByTagName('HEAD')[0]
      );

    };
  
  // add the style tag the first time
  if (!styleTag) styleTag = createStyleTag();
    
    
  // serialize the declaration
  for (key in declaration)
    serialized += hyphenate(key) +':'+ declaration[key] + ';';
  
  if (!isIE) { // create a text node in the style tag
    styleTag.appendChild(
      doc.createTextNode(
        selector + " {" + serialized + "}\n"
      )
    );
  } else { // get the last stylesheet and add rules
    var styleSheets = doc.styleSheets, 
      index,
      styleSheet;
      
    if (print) { // only in IE for now
      createStyleTag(true);
    }
    
    index = styleSheets.length - 1;
    while (index >= 0 && styleSheets[index].media != media) index--; 
    
    styleSheet = styleSheets[index];
    styleSheet.addRule(selector, serialized);
  }
}
/**
 * Extend an object with the members of another
 * @param {Object} a The object to be extended
 * @param {Object} b The object to add to the first one
 */
function extend(a, b) {
  if (!a) a = {};
  for (var n in b) a[n] = b[n];
  return a;
}

/**
 * Merge the default options with custom options and return the new options structure
 * @param {Object} options The new custom options
 */
function setOptions(options) {
  defaultOptions = merge(defaultOptions, options);
  
  // apply UTC
  setTimeMethods();
  
  return defaultOptions;
}

/**
 * Discard an element by moving it to the bin and delete
 * @param {Object} The HTML node to discard
 */
function discardElement(element) {
  // create a garbage bin element, not part of the DOM
  if (!garbageBin) garbageBin = createElement(DIV);
  
  // move the node and empty bin
  if (element) garbageBin.appendChild(element);
  garbageBin.innerHTML = '';
}

var defaultFont = 'normal 12px "Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',

defaultLabelOptions = {
  enabled: true,
  // rotation: 0,
  align: 'center',
  x: 0,
  y: 15,
  /*formatter: function() {
    return this.value;
  },*/
  style: {
    color: '#666',
    font: defaultFont.replace('12px', '11px') 
    //'10px bold "Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif'  
  }
},
defaultOptions = {
  colors: ['#4572A7', '#AA4643', '#89A54E', '#80699B', '#3D96AE', 
    '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92'],
  symbols: ['circle', 'diamond', 'square', 'triangle', 'triangle-down'],
  lang: {
    loading: 'Loading...',
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
        'August', 'September', 'October', 'November', 'December'],
    weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    decimalPoint: '.',
    resetZoom: 'Reset zoom',
    resetZoomTitle: 'Reset zoom level 1:1',
    thousandsSep: ','
  },
  global: {
    useUTC: true
  },
  chart: {
    //alignTicks: false,
    //className: null,
    /*events: {
     *   load,
     *   selection
     * },
     */
    margin: [50, 50, 60, 80],
    borderColor: '#4572A7',
    //borderWidth: 0,
    borderRadius: 5,    
    defaultSeriesType: 'line',
    ignoreHiddenSeries: true,
    //inverted: false,
    //shadow: false,
    //style: {},
    //backgroundColor: null,
    //plotBackgroundColor: null,
    plotBorderColor: '#C0C0C0'
    //plotBorderWidth: 0,
    //plotShadow: false,
    //zoomType: ''
  },
  title: {
    text: 'Chart title',
    style: {
      textAlign: 'center',
      color: '#3E576F',
      font: defaultFont.replace('12px', '16px'),
      margin: '10px 0 0 0'
    }

  },
  subtitle: {
    text: '',
    style: {
      textAlign: 'center',
      color: '#6D869F',
      font: defaultFont,
      margin: 0
    }
  },
  
  plotOptions: {
    line: { // base series options
      allowPointSelect: false,
      //allowDrag: false, // point dragging - not yet implemented
      //dragType: 'y',
      showCheckbox: false,
      animation: true,
      //cursor: 'default',
      //enableMouseTracking: true,
      events: {},
      lineWidth: 2,
      shadow: true,
      // stacking: null,
      marker: { 
        enabled: true,
        symbol: 'auto',
        lineWidth: 0,
        radius: 4,
        lineColor: '#FFFFFF',
        fillColor: 'auto',
        states: { // states for a single point
          hover: {
            //radius: base + 2
          },
          select: {
            fillColor: '#FFFFFF',
            lineColor: 'auto',
            lineWidth: 2
          }          
        }
      },
      point: {
        events: {}
      },
      dataLabels: merge(defaultLabelOptions, {
        enabled: false,
        y: -6,
        formatter: function() {
          return this.y;
        }
      }),
      
      //pointStart: 0,
      //pointInterval: 1,
      showInLegend: true,
      states: { // states for the entire series
        hover: {
          //enabled: false,
          lineWidth: 3,
          marker: {
            // lineWidth: base + 1,
            // radius: base + 1
          }
        },
        select: {
          marker: {}
        }
      }
    }
  },
  labels: {
    //items: [],
    style: {
      position: ABSOLUTE,
      color: '#3E576F',
      font: defaultFont
    }
  },
  legend: {
    enabled: true,
    layout: 'horizontal',
    labelFormatter: function() {
      return this.name
    },
    //borderWidth: 0,
    borderColor: '#909090',
    borderRadius: 5,
    shadow: true,
    //backgroundColor: null,
    style: {
      bottom: '10px',
      left: '80px',
      padding: '5px'
    },
    itemStyle: {
      listStyle: 'none',
      margin: 0,
      padding: '0 2em 0 0', // make room for the checkbox
      font: defaultFont,
      cursor: 'pointer',
      color: '#3E576F',
      position: RELATIVE // to allow absolute placement of the checkboxes
    },
    itemHoverStyle: {
      color: '#000'
    },
    itemHiddenStyle: {
      color: '#CCC'
    },
    itemCheckboxStyle: {
      position: ABSOLUTE,
      right: 0
    },
    //reversed: false, // docs
    symbolWidth: 16,
    symbolPadding: 5
  },
  
  loading: {
    hideDuration: 100,
    labelStyle: {
      font: defaultFont.replace('normal', 'bold'),
      position: RELATIVE,
      top: '1em'
    },
    showDuration: 100,
    style: {
      position: ABSOLUTE,
      backgroundColor: 'white',
      opacity: 0.5,
      textAlign: 'center'
    }
  },
  
  tooltip: {
    enabled: true,
    formatter: function() {
      var pThis = this,
        series = pThis.series,
        xAxis = series.xAxis,
        x = pThis.x;
      return '<b>'+ (pThis.point.name || series.name) +'</b><br/>'+
        (defined(x) ? 
          'X value: '+ (xAxis && xAxis.options.type == 'datetime' ? 
            dateFormat('%Y-%m-%d %H:%M:%S', x) : x) +'<br/>':
          '')+
        'Y value: '+ pThis.y;
    },
    backgroundColor: 'rgba(255, 255, 255, .85)',
    borderWidth: 2,
    borderRadius: 5,
    shadow: true,
    snap: 10,
    style: {
      color: '#333333',
      font: defaultFont,
      fontSize: '9pt',
      padding: '5px',
      whiteSpace: 'nowrap'
    }
  },
  
  toolbar: {
    itemStyle: {
      color: '#4572A7',
      cursor: 'pointer',
      margin: '20px',
      font: defaultFont
    }
  },
  
  credits: {
    enabled: true,
    text: 'Highcharts.com',
    href: 'http://www.highcharts.com',
    style: {
      position: ABSOLUTE,
      right: '10px',
      bottom: '5px',
      color: '#999',
      textDecoration: 'none',
      font: defaultFont.replace('12px', '10px')
    },
    target: '_self'
  }
};

// Axis defaults
//defaultOptions.xAxis = merge(defaultOptions.axis);
var defaultXAxisOptions =  {
  // alternateGridColor: null,
  // categories: [],
  dateTimeLabelFormats: {
    second: '%H:%M:%S',
    minute: '%H:%M',
    hour: '%H:%M',
    day: '%e. %b',
    week: '%e. %b',
    month: '%b \'%y',
    year: '%Y'
  },
  endOnTick: false,
  gridLineColor: '#C0C0C0',
  // gridLineWidth: 0,
  // reversed: false,
  
  labels: defaultLabelOptions,
  lineColor: '#C0D0E0',
  lineWidth: 1,
  max: null,
  min: null,
  maxZoom: null,
  minorGridLineColor: '#E0E0E0',
  minorGridLineWidth: 1,
  minorTickColor: '#A0A0A0',
  //minorTickInterval: null,
  minorTickLength: 2,
  minorTickPosition: 'outside', // inside or outside
  minorTickWidth: 1,
  //plotBands: [],
  //plotLines: [],
  //reversed: false,
  showFirstLabel: true,
  showLastLabel: false,
  startOfWeek: 1, 
  startOnTick: false,
  tickColor: '#C0D0E0',
  tickInterval: 'auto',
  tickLength: 5,
  tickmarkPlacement: 'between', // on or between
  tickPixelInterval: 100,
  tickPosition: 'outside',
  tickWidth: 1,
  title: {
    enabled: false,
    text: 'X-values',
    align: 'middle', // low, middle or high
    margin: 35,
    //rotation: 0,
    //side: 'outside',
    style: {
      color: '#6D869F',
      font: defaultFont.replace('normal', 'bold')
    }
  },
  type: 'linear' // linear or datetime
},

defaultYAxisOptions = merge(defaultXAxisOptions, {
  endOnTick: true,
  gridLineWidth: 1,
  tickPixelInterval: 72,
  showLastLabel: true,
  labels: {
    align: 'right',
    x: -8,
    y: 3
  },
  lineWidth: 0,
  maxPadding: 0.05,
  minPadding: 0.05,
  startOnTick: true,
  tickWidth: 0,
  title: {
    enabled: true,
    margin: 40,
    rotation: 270,
    text: 'Y-values'
  }
}),

defaultLeftAxisOptions = {
  labels: {
    align: 'right',
    x: -8,
    y: 3
  },
  title: {
    rotation: 270
  }
},
defaultRightAxisOptions = {
  labels: {
    align: 'left',
    x: 8,
    y: 3
  },
  title: {
    rotation: 90
  }
},
defaultBottomAxisOptions = { // horizontal axis
  labels: {
    align: 'center',
    x: 0,
    y: 14
  },
  title: {
    rotation: 0
  }
},
defaultTopAxisOptions = merge(defaultBottomAxisOptions, {
  labels: {
    y: -5
  }
});


 

// Series defaults
var defaultPlotOptions = defaultOptions.plotOptions, 
  defaultSeriesOptions = defaultPlotOptions.line; 
//defaultPlotOptions.line = merge(defaultSeriesOptions);
defaultPlotOptions.spline = merge(defaultSeriesOptions);
defaultPlotOptions.scatter = merge(defaultSeriesOptions, {
  //dragType: 'xy', // n/a
  lineWidth: 0,
  states: {
    hover: {
      lineWidth: 0
    }
  }
});
defaultPlotOptions.area = merge(defaultSeriesOptions, {
  // lineColor: null, // overrides color, but lets fillColor be unaltered
  // fillOpacity: .75,
  fillColor: 'auto'

});
defaultPlotOptions.areaspline = merge(defaultPlotOptions.area);
defaultPlotOptions.column = merge(defaultSeriesOptions, {
  borderColor: '#FFFFFF',
  borderWidth: 1,
  borderRadius: 0,
  groupPadding: 0.2,
  pointPadding: 0.1,
  states: {
    hover: {
      brightness: 0.1,
      shadow: false
    },
    select: {
      color: '#C0C0C0',
      borderColor: '#000000',
      shadow: false
    }
  }
});
defaultPlotOptions.bar = merge(defaultPlotOptions.column, {
  dataLabels: {
    align: 'left',
    x: 5,
    y: 0
  }
});
defaultPlotOptions.pie = merge(defaultSeriesOptions, {
  //dragType: '', // n/a
  borderColor: '#FFFFFF',
  borderWidth: 1,
  center: ['50%', '50%'],
  legendType: 'point',
  size: '90%',
  slicedOffset: 10,
  states: {
    hover: {
      brightness: 0.1,
      shadow: false
    }
  }
  
});

// set the default time methods
setTimeMethods();


// class-like inheritance
function extendClass(parent, members) {
  var object = function(){};
  object.prototype = new parent();
  extend(object.prototype, members);
  return object;
}
/*
function reverseArray(arr) {
  var reversed = [];
  for (var i = arr.length - 1; i >= 0; i--)
    reversed.push( arr[i]);
  return reversed;
}
*/
// return a deep value without throwing an error
/*function deepStructure(obj, path) {
  // split the path into an array
  path = path.split('.'), i = 0;
  // recursively set obj to the path
  while (path[i] && obj) obj = obj[path[i++]];
  
  if (i == path.length) return obj;
}*/

/**
 * Create a color from a string or configuration object
 * @param {Object} val
 */
function setColor(val, ctx) {
  if (typeof val == 'string') {
    return val;

  } else if (val.linearGradient) {
    var gradient = ctx.createLinearGradient.apply(ctx, val.linearGradient);
    each (val.stops, function(stop) {
      gradient.addColorStop(stop[0], stop[1]);
    });
    return gradient;
  }
}


var Color = function(input) {
  var rgba = [], result;
  function parse(input) {
    
    // rgba
    if((result = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(input)))
      rgba = [parseInt(result[1]), parseInt(result[2]), parseInt(result[3]), parseFloat(result[4])];  

    // hex
    else if((result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(input)))
      rgba = [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16), 1];
  
  }
  function get() {
    // it's NaN if gradient colors on a column chart
    if (rgba && !isNaN(rgba[0])) return 'rgba('+ rgba.join(',') +')';
    else return input;
  }
  
  function brighten(alpha) {
    if (typeof alpha == 'number' && alpha != 0) {
      for (var i = 0; i < 3; i++) {
        rgba[i] += parseInt(alpha * 255);
        if (rgba[i] < 0) rgba[i] = 0;
        if (rgba[i] > 255) rgba[i] = 255;
      }
    }
    return this;
  }
  
  function setOpacity(alpha) {
    rgba[3] = alpha;
    return this;
  }  
  
  parse(input);
  
  // public methods
  return {
    get: get,
    brighten: brighten,
    setOpacity: setOpacity
  };
};

  //defaultMarkers = ['circle'];


function createElement (tag, attribs, styles, parent, nopad) {
  var el = doc.createElement(tag);
  if (attribs) extend(el, attribs);
  if (nopad) setStyles(el, {padding: 0, border: 'none', margin: 0});
  if (styles) setStyles(el, styles);
  if (parent) parent.appendChild(el);  
  return el;
};

function setStyles (el, styles) {
  //for (var x in styles) el.style[x] = styles[x];
  if (isIE) {
    if (styles.opacity !== undefined) 
      styles.filter = 'alpha(opacity='+ (styles.opacity * 100) +')';  
  }
  
  extend(el.style, styles);

};

/**
 * Format a number and return a string based on input settings
 * @param {Number} number The input number to format
 * @param {Number} decimals The amount of decimals
 * @param {String} decPoint The decimal point, defaults to the one given in the lang options
 * @param {String} thousandsSep The thousands separator, defaults to the one given in the lang options
 */
function numberFormat (number, decimals, decPoint, thousandsSep) {
  var lang = defaultOptions.lang,
    // http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_number_format/
    n = number, c = isNaN(decimals = mathAbs(decimals)) ? 2 : decimals,
      d = decPoint === undefined ? lang.decimalPoint : decPoint,
      t = thousandsSep === undefined ? lang.thousandsSep : thousandsSep, s = n < 0 ? "-" : "",
      i = parseInt(n = mathAbs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
    
  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
    (c ? d + mathAbs(n - i).toFixed(c).slice(2) : "");
};

/**
 * Based on http://www.php.net/manual/en/function.strftime.php 
 * @param {String} format
 * @param {Number} timestamp
 * @param {Boolean} capitalize
 */
function dateFormat(format, timestamp, capitalize) {
  function pad (number) {
    return number.toString().replace(/^([0-9])$/, '0$1');
  }
  
  if (!defined(timestamp)) return 'Invalid date';
  
  
  var date = new Date(timestamp * timeFactor),
  
    // get the basic time values
    hours = date[getHours](),
    day = date[getDay](),
    dayOfMonth = date[getDate](),
    month = date[getMonth](),
    fullYear = date[getFullYear](),
    lang = defaultOptions.lang,
    langWeekdays = lang.weekdays,
    langMonths = lang.months,
    
    // list all format keys
    replacements = {

      // Day
      'a': langWeekdays[day].substr(0, 3), // Short weekday, like 'Mon'
      'A': langWeekdays[day], // Long weekday, like 'Monday'
      'd': pad(dayOfMonth), // Two digit day of the month, 01 to 31 
      'e': dayOfMonth, // Day of the month, 1 through 31 
      
      // Week (none implemented)      
      
      // Month
      'b': langMonths[month].substr(0, 3), // Short month, like 'Jan'
      'B': langMonths[month], // Long month, like 'January'
      'm': pad(month + 1), // Two digit month number, 01 through 12
      
      // Year
      'y': fullYear.toString().substr(2, 2), // Two digits year, like 09 for 2009
      'Y': fullYear, // Four digits year, like 2009
      
      // Time
      'H': pad(hours), // Two digits hours in 24h format, 00 through 23
      'I': pad((hours % 12) || 12), // Two digits hours in 12h format, 00 through 11
      'l': (hours % 12) || 12, // Hours in 12h format, 1 through 12
      'M': pad(date[getMinutes]()), // Two digits minutes, 00 through 59
      'p': hours < 12 ? 'AM' : 'PM', // Upper case AM or PM
      'P': hours < 12 ? 'am' : 'pm', // Lower case AM or PM
      'S': pad(date.getSeconds()) // Two digits seconds, 00 through  59
      
    };


  // do the replaces
  for (var key in replacements) format = format.replace('%'+ key, replacements[key]);
    
  // Optionally capitalize the string and return
  return capitalize ? format.substr(0, 1).toUpperCase() + format.substr(1) : format;
};

/**
 * Set the time methods globally based on the useUTC option. Time method can be either 
 * local time or UTC (default).
 */
function setTimeMethods() {
  var useUTC = defaultOptions.global.useUTC;
  
  makeTime = useUTC ? Date.UTC : function(year, month, date, hours, minutes, seconds) {
    return new Date(
      year, 
      month, 
      pick(date, 1), 
      pick(hours, 0), 
      pick(minutes, 0), 
      pick(seconds, 0)
    ).getTime();
  };
  getMinutes = useUTC ? 'getUTCMinutes' : 'getMinutes';
  getHours = useUTC ? 'getUTCHours' : 'getHours';
  getDay = useUTC ? 'getUTCDay' : 'getDay';
  getDate = useUTC ? 'getUTCDate' : 'getDate';
  getMonth = useUTC ? 'getUTCMonth' : 'getMonth';
  getFullYear = useUTC ? 'getUTCFullYear' : 'getFullYear';
  setMinutes = useUTC ? 'setUTCMinutes' : 'setMinutes';
  setHours = useUTC ? 'setUTCHours' : 'setHours';
  setDate = useUTC ? 'setUTCDate' : 'setDate';
  setMonth = useUTC ? 'setUTCMonth' : 'setMonth';
  setFullYear = useUTC ? 'setUTCFullYear' : 'setFullYear';
    
};

/**
 * Return the absolute page position of an element
 * @param {Object} el
 */
function getPosition (el)  {
  var p = { x: el.offsetLeft, y: el.offsetTop };
  while (el.offsetParent)  {
    el = el.offsetParent;
    p.x += el.offsetLeft;
    p.y += el.offsetTop;
    if (el != doc.body && el != doc.documentElement) {
      p.x -= el.scrollLeft;
      p.y -= el.scrollTop;
    }
  }
  return p;
}


var Layer = function (name, appendTo, props, styles) {
  var layer = this,
    div,
    appendToStyle = appendTo.style;
  props = extend({
    className: 'highcharts-'+ name
  }, props);
  styles = extend({
    width: appendToStyle.width, //appendTo.offsetWidth + PX,
    height: appendToStyle.height, //appendTo.offsetHeight + PX,
    position: ABSOLUTE,
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    border: 'none'    
  }, styles);
  
  div = createElement(DIV, props, styles, appendTo);
  
  extend(layer, {
    div: div,
    width: parseInt(styles.width),
    height: parseInt(styles.height)
  });
  
  // initial SVG string
  layer.svg = isIE ? '' : '<?xml version="1.0" encoding="utf-8"?>'+
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" '+
    'xmlns:xlink="http://www.w3.org/1999/xlink" width="'+ layer.width 
    +'px" height="'+ layer.height +'">';
      
  // save it for later
  layer.basicSvg = layer.svg;  
}
Layer.prototype = {
  getCtx: function() {
    if (!this.ctx) {
      var cvs = createElement('canvas', {
        id: 'highcharts-canvas-' + idCounter++,
        width: this.width,
        height: this.height
      }, {
        position: ABSOLUTE
      }, this.div);
      
      if (isIE) {
        G_vmlCanvasManager.initElement(cvs);
        cvs = doc.getElementById(cvs.id);
      }
    
      this.ctx = cvs.getContext('2d');      
    }
    
    return this.ctx;
  },
  getSvg: function() {
    if (!this.svgObject) {
      var layer = this,
        div = layer.div,
        width = layer.width,
        height = layer.height;
      if (isIE) {
        // create xmlns if excanvas hasn't done it
            if (!doc.namespaces["g_vml_"]) {
          doc.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml");
          // setup default css
          doc.createStyleSheet().cssText = "g_vml_\\:*{behavior:url(#default#VML)}";
            }
        this.svgObject = createElement(DIV, null, {
          width: width + PX,
          height: height + PX,
          position: ABSOLUTE
        }, div);
  
        
      } else {
        // create an object and inject SVG into it
        this.svgObject = createElement('object', { 
          width: width,
          height: height,
          type: 'image/svg+xml'
        }, {
          position : ABSOLUTE,
          left: 0,
          top: 0
        }, div);
      }
    }
    return this.svgObject;
  },
  drawLine: function(x1, y1, x2, y2, color, width) {    
    var ctx = this.getCtx(), xBefore = x1;
    
    // normalize to a crisp line
    if (x1 == x2) x1 = x2 = mathRound(x1) + (width % 2 / 2);
    if (y1 == y2) y1 = y2 = mathRound(y1) + (width % 2 / 2);
    
    // draw path
    ctx.lineWidth = width;
    ctx.lineCap = 'round'; /* If this is not set, plotBands appear
      like 'square' in Firefox/Win. Reason unknown. */ 
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.strokeStyle = color;
    ctx.lineTo(x2, y2);
    ctx.closePath();
    ctx.stroke();
  },
  
  drawPolyLine: function(points, color, width, shadow, fillColor) {
    var ctx = this.getCtx(),
      shadowLine = [];
    // the shadow
    if (shadow && width) {
      each (points, function(point) { // add 1px offset
        shadowLine.push(point === undefined ? point : point + 1);
      }); 
      for (var i = 1; i <= 3; i++) // three lines of differing thickness and opacity
        this.drawPolyLine(shadowLine, 'rgba(0, 0, 0, '+ (0.05 * i) +')', 6 - 2 * i);
    }
    
    // the line path
    ctx.beginPath();
    for (i = 0; i < points.length; i += 2) 
      ctx[i == 0 ? 'moveTo' : 'lineTo'](points[i], points[i + 1]);
    
    // common properties
    extend(ctx, {
      lineWidth: width,
      lineJoin: 'round'
    });
    
    // stroke 
      if (color && width)  {
      ctx.strokeStyle = setColor(color, ctx); 
      ctx.stroke();
    }
    
    // fill
    if (fillColor) {
      ctx.fillStyle = setColor(fillColor, ctx);
      ctx.fill();
    }
    
  },
  drawRect: function(x, y, w, h, color, width, radius, fill, shadow, image) {
    // must (?) be done twice to apply both stroke and fill in excanvas
    var drawPath = function() {
      var ret;
      if (w > 0 && h > 0) { // zero or negative dimensions break Opera 10
        ctx.beginPath();
        if (!radius) {
          ctx.rect(x, y, w, h);
        } else {
          ctx.moveTo(x, y + radius);
          ctx.lineTo(x, y + h - radius);
          ctx.quadraticCurveTo(x, y + h, x + radius, y + h); // change: use bezier
          ctx.lineTo(x + w - radius, y + h);
          ctx.quadraticCurveTo(x + w, y + h, x + w, y + h - radius);
          ctx.lineTo(x + w, y + radius);
          ctx.quadraticCurveTo(x + w, y , x + w - radius, y);
          ctx.lineTo(x + radius, y);
          ctx.quadraticCurveTo(x , y, x, y + radius);
        }
        ctx.closePath();
        ret = true;
      }
      return ret;
    };
    
    var ctx = this.getCtx(), normalizer = (width || 0) % 2 / 2;

    // normalize for sharp edges
    x = mathRound(x) + normalizer;
    y = mathRound(y) + normalizer;
    w = mathRound(w - 2 * normalizer);
    h = mathRound(h - 2 * normalizer);

        
    // apply the drop shadow
    if (shadow) for (var i = 1; i <= 3; i++) {
        this.drawRect(x + 1, y + 1, w, h, 'rgba(0, 0, 0, '+ (0.05 * i) +')', 
          6 - 2 * i, radius);
    }

    // apply the background image behind everything
    if (image) ctx.drawImage(image, x, y, w, h);
    
    if (drawPath()) {
      if (fill) {
        ctx.fillStyle = setColor(fill, ctx);
        ctx.fill();
        // draw path again
        if (win.G_vmlCanvasManager) drawPath();
      }
      if (width) {
        ctx.strokeStyle = setColor(color, ctx);
        ctx.lineWidth = width;
        ctx.stroke();
      }
    }

  },
  drawSymbol: function(symbol, x, y, radius, lineWidth, lineColor, fillColor) {
    var ctx = this.getCtx(),
      imageRegex = /^url\((.*?)\)$/;
    ctx.beginPath();
    
    if (symbol == 'square') {
      var len = 0.707 * radius;
      ctx.moveTo(x - len, y - len);
      ctx.lineTo(x + len, y - len);
      ctx.lineTo(x + len, y + len);
      ctx.lineTo(x - len, y + len);
      ctx.lineTo(x - len, y - len);
      
    } else if (symbol == 'triangle') {
      y++;
      ctx.moveTo(x, y - 1.33 * radius);
      ctx.lineTo(x + radius, y + 0.67 * radius);
      ctx.lineTo(x - radius, y + 0.67 * radius);
      ctx.lineTo(x, y - 1.33 * radius);
      
    } else if (symbol == 'triangle-down') {
      y--;
      ctx.moveTo(x, y + 1.33 * radius);
      ctx.lineTo(x - radius, y - 0.67 * radius);
      ctx.lineTo(x + radius, y - 0.67 * radius);
      ctx.lineTo(x, y + 1.33 * radius);
      
    } else if (symbol == 'diamond') {
      ctx.moveTo(x, y - radius);
      ctx.lineTo(x + radius, y);
      ctx.lineTo(x, y + radius);
      ctx.lineTo(x - radius, y);
      ctx.lineTo(x, y - radius);
      
    } else if (imageRegex.test(symbol)) {
      createElement('img', {
        onload: function() {
          var img = this,
            size = symbolSizes[img.src] || [img.width, img.height];
          setStyles(img, {
            left: mathRound(x - size[0] / 2) + PX,
            top: mathRound(y - size[1] / 2) + PX,
            visibility: VISIBLE
          })
          // Bug workaround: Opera (10.01) fails to get size the second time
          symbolSizes[img.src] = size;
        },
        src: symbol.match(imageRegex)[1]
      }, {
        position: ABSOLUTE,
        visibility: isIE ? VISIBLE : HIDDEN // hide until left and top are set in Gecko
      }, this.div);
      
    } else { // default: circle
      ctx.arc(x, y, radius, 0, 2*math.PI, true);
    } 
  
    if (fillColor) {
      ctx.fillStyle = fillColor;
      ctx.fill();
      
      // draw path again
      //if (isIE) ctx.arc(x, y, radius, 0, 2*Math.PI, true);
    }
    if (lineColor && lineWidth) {
      ctx.strokeStyle = lineColor || "rgb(100, 100, 255)";
        ctx.lineWidth = lineWidth || 2;
        ctx.stroke();
    }
  },
  drawHtml: function(html, attributes, styles) {
    createElement(
      DIV, 
      extend(attributes, { innerHTML: html }), 
      extend(styles, { position: ABSOLUTE}),
      this.div
    );
  },
  /**
   * Add text and draw it. For those browsers adding the text to an SVG object,
   * it is better for performance to add all strings before the object 
   * is created. This function takes the same arguments as addText.
   * 
   * @param {string} str
   * @param {number} x
   * @param {number} y
   * @param {object} style
   * @param {number} rotation
   * @param {string} align
   */
  drawText: function() {
    this.addText.apply(this, arguments);
    this.strokeText();
  },
  addText: function(str, x, y, style, rotation, align) {
    if (str || str === 0) {
      
      // declare variables
      var layer = this,
        hasObject,
        div = layer.div,
        CSStransform,
        css = '', 
        style = style || {},
        fill = style.color || '#000000',
        align = align || 'left',
        fontSize = parseInt(style.fontSize || style.font.replace(/^[a-z ]+/, '')),
        span,
        spanWidth,
        transformOriginX;
    
      
      // prepare style
      for (var key in style) css += hyphenate(key) +':'+ style[key] +';';
      
      // what transform property is supported?
      each (['MozTransform', 'WebkitTransform', 'transform'], function(str) {
        if (str in div.style) CSStransform = str;
      });
      
      // if the text is not rotated, or if the browser supports CSS transform,
      // write a simple span
      if (!rotation || CSStransform) {
        span = createElement('span', {
          innerHTML: str
        }, extend(style, {
          position: ABSOLUTE,
          left: x + PX,
          whiteSpace: 'nowrap',
          bottom: mathRound(layer.height - y - fontSize * 0.25) + PX,
          color: fill
        }), div);
        
        // fix the position according to align and rotation
        spanWidth = span.offsetWidth;
        
        if (align == 'right') setStyles(span, {
          left: (x - spanWidth) + PX
        });
        else if (align == 'center') setStyles(span, { 
          left: mathRound(x - spanWidth / 2) + PX
        });
        
        if (rotation) {  // ... and CSStransform
          transformOriginX = { left: 0, center: 50, right: 100 }[align]
          span.style[CSStransform] = 'rotate('+ rotation +'deg)';
          span.style[CSStransform +'Origin'] = transformOriginX +'% 100%';          
        }
        
      } else if (isIE) {
        // to achieve rotated text, the ie text is drawn on a vector line that
        // is extrapolated to the left or right or both depending on the 
        // alignment of the text
        hasObject = true;
        var radians = (rotation || 0) * math.PI * 2 / 360, // deg to rad
          costheta = mathCos(radians),
          sintheta = mathSin(radians),
          length = layer.width, // the text is not likely to be longer than this
          baselineCorrection = fontSize / 3 || 3,
          left = align == 'left',
          right = align == 'right',
          x1 = left ?   x : x - length * costheta,
          x2 = right ?  x : x + length * costheta,
          y1 = left ?   y : y - length * sintheta,
          y2 = right ?  y : y + length * sintheta;
          
          
        // IE seems to always draw the text with v-text-align middle, so we need 
        // to correct for that by moving the path
        x1 += baselineCorrection * sintheta;
        x2 += baselineCorrection * sintheta;
        y1 -= baselineCorrection * costheta;
        y2 -= baselineCorrection * costheta;
        
        if (mathAbs(x1 - x2) < 0.1) x1 += 0.1; // strange IE painting bug
        if (mathAbs(y1 - y2) < 0.1) y1 += 0.1; // strange IE painting bug
        layer.svg += 
          '<g_vml_:line from="'+ x1 +', '+ y1 +'" to="'+ x2 +', '+ y2 +'" stroked="false">'+
            '<g_vml_:fill on="true" color="'+ fill +'"/>'+
            '<g_vml_:path textpathok="true"/>'+
            '<g_vml_:textpath on="true" string="'+ str +'" '+
              'style="v-text-align:'+ align + 
              ';'+ css +'"/>'+
          '</g_vml_:line>';
      
      // svg browsers
      } else { 
        hasObject = true;
        layer.svg +=  
          '<g>'+
            '<text transform="translate('+ x +','+ y +
              ') rotate('+ (rotation || 0) +')" '+
              'style="fill:'+ fill +';text-anchor:'+ 
              { left: 'start', center: 'middle', right: 'end' }[align] +
               ';'+ css.replace(/"/g, "'") +'">'+  str+
            '</text>'+
          '</g>';
      }
      
      layer.hasObject = hasObject;
    }
  },
  /*
  Experimental text rendering using canvas text. Speed and possibly weight are the advantages.
  Excanvas trunk supports canvas text, but not current version (2009-11-03). Older Gecko and Webkit
  browsers and Opera needs SVG approach, so all in all there is not much weight spared by this one.
  Furthermore, CanvasText looks crappy in Firefox, but on the other hand, SVG object make the tooltip
  animation slow.
  
  2009-11-07: Preliminary conclusion:
    - IE: Use VML on a textpath. The con is that IE8 renders all text as bold italic. Possibly
      experiment with CSS text rotation for whole 90 degrees if that's supported by IE8.
    - Firefox >= 3.5 (Gecko 1.9.1 was it?) and Webkit > ?: Use CSS transforms to rotate the text.
      Canvas and textFill would be a better and faster alternative, but the text is very badly
      drawn in Firefox. When that's fixed in future versions, go for Canvas and textFill instead.
    - Opera, older Gecko and older Webkit: Use SVG. It is slow, and all the text has to be added 
      before written to the SVG object. Hence the addText and strokeText functions. When Opera 
      starts supporting textFill or text rotate, use that instead.
    
  
  _addText: function(str, x, y, style, rotation, anchor) {
    if (str || str === 0) {
    
      // declare variables
      var css = '', 
        style = style || {},
        fill = style.color || '#000000',
        anchor = anchor || 'start',
        ctx,
        span,
        font = (style.font || '') +' '+ (style.fontSize || '') +' '+ 
          (style.fontWeight || '') +' '+ (style.fontFamily || ''),
        align = { start: 'left', middle: 'center', end: 'right' }[anchor],
        rotation = (rotation || 0) * math.PI * 2 / 360, // deg to rad
        fontSize = parseInt(style.fontSize || font); 
        
      // prepare style
      for (var key in style) css += hyphenate(key) +':'+ style[key] +';';
      
      if (rotation) {
        var ctx = this.getCtx();
        ctx.font = font;
        ctx.fillStyle = fill;
        ctx.textAlign = align;
        
        ctx.translate(x, y);
        ctx.rotate(rotation);
        ctx.fillText(str, 0, 0);
        ctx.rotate(-rotation);
        ctx.translate(-x, -y);
      } else {

      }
      
    }
  },*/
  strokeText: function() {
    if (this.hasObject) {
      var svgObject = this.getSvg(),
        svg = this.svg;
      if (isIE) {
        svgObject.innerHTML = svg;
      } else {
        svgObject.data = 
          'data:image/svg+xml,'+ svg +'</svg>';
          
        // append it again for Chrome to update
        if (isWebKit) this.div.appendChild(svgObject);
  
      }
    }
  },
  clear: function() {
    var layer = this,
      div = this.div,
      childNodes = div.childNodes,
      node;
    if (layer.ctx) layer.ctx.clearRect(0, 0, layer.width, layer.height);
    if (layer.svgObject) {
      discardElement(layer.svgObject);
      layer.svgObject = null;
      layer.svg = layer.basicSvg;
    }
    
    // remove all spans
    for (var i = childNodes.length - 1; i >= 0; i--) {
      node = childNodes[i];      
      if (/(SPAN|IMG)/.test(node.tagName)) discardElement(node);
    } 
    
  },
  hide: function() {
    setStyles (this.div, {
      display: 'none'
    })
    
    //jQuery(this.div).fadeOut(250);
    
    // A possible way to fade out in IE would be to get all the shapes
    // in the layer and change the opacities of their FillColor and StrokeColor
    /*var shapes = this.div.getElementsByTagName('shape');
    each (shapes, function(shape) {
      //shape.style.filter = 'alpha(opacity=59)';
      
    })  
    var layer = this;
    setTimeout(function() {
      layer.div.style.visibility = HIDDEN
    }, 2000);*/
  },
  show: function() {
    setStyles (this.div, {
      display: ''
    })
    //jQuery(this.div).fadeIn(50);
  },
  /**
   * Discard layer DOM elements and null the reference
   */
  destroy: function() {
    discardElement(this.div);
    return null;
  }
};


function Chart (options) {
  /**
   * Add a series dynamically after  time
   * 
   * @param {Object} options The config options
   * @param {Boolean} redraw Whether to redraw the chart after adding. Defaults to true.
   * 
   * @return {Object} series The newly created series object
   */
  function addSeries(options, redraw) {
    var series;
    
    redraw = pick(redraw, true); // defaults to true
    
    fireEvent(chart, 'addSeries', { options: options }, function() {
      series = initSeries(options);
      series.isDirty = true;
      
      chart.isDirty = true; // the series array is out of sync with the display
      if (redraw) chart.redraw();
    });
    
    return series;
  };

  /**
   * Redraw legend, axes or series based on updated data
   */
  function redraw() {
    var redrawLegend = chart.isDirty;
      
    // handle updated data in the series    
    each (series, function(serie) {
      if (serie.isDirty) { // prepare the data so axis can read it
        serie.cleanData();
        serie.getSegments();
        
        if (serie.options.legendType == 'point') redrawLegend = true;
      }
    });
    
    // reset maxTicks
    maxTicks = null;
    if (hasCartesianSeries) {
      // set axes scales
      each (axes, function(axis) {
        axis.setScale();
      })
      adjustTickAmounts();
  
      // redraw axes
      each (axes, function(axis) {
        if (axis.isDirty) axis.redraw();
      })
    }
    
    // redraw affected series
    each (series, function(serie) {
      if (serie.isDirty && serie.visible) serie.redraw();
    });
    
    // handle added or removed series 
    if (redrawLegend) { // series or pie points are added or removed
      // draw legend graphics
      if (legend && legend.renderHTML) {
        legend.renderHTML(true);
        legend.drawGraphics(true);
      }
      
      chart.isDirty = false;
    }

    // hide tooltip and hover states
    if (tracker && tracker.resetTracker) tracker.resetTracker();      
    
    
    // fire the event
    fireEvent(chart, 'redraw');
  }
  
  /** 
   * Initialize an individual series, called internally before render time
   */
  function initSeries(options) {
    var type = options.type || optionsChart.defaultSeriesType,
      typeClass = seriesTypes[type],
      serie,
      hasRendered = chart.hasRendered;
      
      
    // an inverted chart can't take a column series and vice versa
    if (hasRendered) {
      if (inverted && type == 'column') typeClass = BarSeries;
      else if (!inverted && type == 'bar') typeClass = ColumnSeries;
    }
    
    serie = new typeClass();
    
    serie.init(chart, options);
    
    // set internal chart properties
    if (!hasRendered && serie.inverted) inverted = true;
    if (serie.isCartesian) hasCartesianSeries = serie.isCartesian;
    
    series.push(serie);
    
    return serie;
  }
  
  /**
   * Dim the chart and show a loading text or symbol
   */
  function showLoading() {
    var loadingOptions = options.loading;

    // create the layer at the first call
    if (!loadingLayer) {
      loadingLayer = createElement(DIV, {
        className: 'highcharts-loading'
      }, extend(loadingOptions.style, {
        left: marginLeft + PX,
        top: marginTop + PX,
        width: plotWidth + PX,
        height: plotHeight + PX,
        zIndex: 10,
        display: 'none'
      }), container);
      
      createElement('span', {
        innerHTML: options.lang.loading
      }, loadingOptions.labelStyle, loadingLayer);
    }
    
    // show it
    setStyles(loadingLayer, { display: '' });
    animate(loadingLayer, {
      opacity: loadingOptions.style.opacity
    }, {
      duration: loadingOptions.showDuration
    });
  }
  /**
   * Hide the loading layer
   */
  function hideLoading() {
    animate(loadingLayer, {
      opacity: 0
    }, {
      duration: options.loading.hideDuration, 
      complete: function() {
        setStyles(loadingLayer, { display: 'none' });
      }
    });

  }
  
  /**
   * Get an axis, series or point object by id.
   * @param id {String} The id as given in the configuration options
   */
  function get(id) {
    var i,
      j,
      match,
      data;
    
    // search axes
    for (i = 0; i < axes.length; i++) {
      if (axes[i].options.id == id) return axes[i];
    }
    
    // search series
    for (i = 0; i < series.length; i++) {
      if (series[i].options.id == id) return series[i];
    }
    
    // search points
    for (i = 0; i < series.length; i++) {
      data = series[i].data;
      for (j = 0; j < data.length; j++) {
        if (data[j].id == id) return data[j];
      }
    }
    return null;  
  }
  
  /**
   * Update the chart's position after it has been moved, to match
   * the mouse positions with the chart
   */
  function updatePosition() {
    var container = doc.getElementById(containerId);
    if (container) {
      position = getPosition(container);
    }
  }
  
  /** 
   * Create the Axis instances based on the config options
   */
  function getAxes() {
    var xAxisOptions = options.xAxis || {},
      yAxisOptions = options.yAxis || {},
      axis;
      
    // make sure the options are arrays and add some members
    xAxisOptions = splat(xAxisOptions);
    each(xAxisOptions, function(axis, i) {
      axis.index = i; 
      axis.isX = true;
    });
    
    yAxisOptions = splat(yAxisOptions);
    each(yAxisOptions, function(axis, i) {
      axis.index = i;
    });
    
    // concatenate all axis options into one array
    axes = xAxisOptions.concat(yAxisOptions);
    
    // loop the options and construct axis objects
    chart.xAxis = [];
    chart.yAxis = [];
    axes = map (axes, function(axisOptions) {
      axis = new Axis(chart, axisOptions);
      chart[axis.isXAxis ? 'xAxis' : 'yAxis'].push(axis);
      
      return axis;
    });
    
    adjustTickAmounts();  
  };
  
  /**
   * Adjust all axes tick amounts
   */
  function adjustTickAmounts() {
    if (optionsChart.alignTicks !== false) each (axes, function(axis) {
      axis.adjustTickAmount();
    });  
  }
  /**
   * Get the currently selected points from all series
   */
  function getSelectedPoints() {
    var points = [];
    each(series, function(serie) {
      points = points.concat( grep( serie.data, function(point) {
        return point.selected;
      }));
    });
    return points;
  };
  
  /**
   * Get the currently selected series
   */
  function getSelectedSeries() {
    return grep (series, function (serie) {
      return serie.selected;
    });
  }
  
  /**
   * Zoom into a given portion of the chart given by axis coordinates
   * @param {Object} event
   */
  function zoom(event) {
    var lang = defaultOptions.lang;
    
    // add button to reset selection
    chart.toolbar.add('zoom', lang.resetZoom, lang.resetZoomTitle, function() {
      //zoom(false);
      fireEvent(chart, 'selection', { resetSelection: true }, zoom);
      chart.toolbar.remove('zoom');
    });
    
    
    // if zoom is called with no arguments, reset the axes
    if (!event || event.resetSelection) each(axes, function(axis) { 
      axis.setExtremes(null, null, false);
    });
      
    // else, zoom in on all axes
    else {
      each (event.xAxis.concat(event.yAxis), function(axisData) {
        var axis = axisData.axis;
          
        // don't zoom more than maxZoom
        if (chart.tracker[axis.isXAxis ? 'zoomX' : 'zoomY'])
          axis.setExtremes(axisData.min, axisData.max, false);
      });
    }
    
    // redraw chart
    redraw();
    
  }
  
  /**
   * Function: (private) showTitle
   * 
   * Show the title and subtitle of the chart
   */
  function showTitle () {
    var title = options.title,
      subtitle = options.subtitle;
      
    if (!chart.titleLayer) {
      var titleLayer = new Layer('title-layer', container, null, {
        zIndex: 2
      });
      
      // title
      if (title && title.text) createElement('h2', {
        className: 'highcharts-title',
        innerHTML: title.text
      }, title.style, titleLayer.div);
      
      // subtitle
      if (subtitle && subtitle.text) createElement('h3', {
        className: 'highcharts-subtitle',
        innerHTML: subtitle.text
      }, subtitle.style, titleLayer.div);
      
      chart.titleLayer = titleLayer;
    }
  }
  /**
   * Load graphics and data required to draw the chart
   */
  function checkResources() {
    var allLoaded = true;
    for (var n in chart.resources) {
      if (!chart.resources[n]) allLoaded = false;
    }
    if (allLoaded) resourcesLoaded();
  };
  
  /**
   * Prepare for first rendering after all data are loaded
   */
  function resourcesLoaded() {
    
    getAxes();
    
    
    // Prepare for the axis sizes
    each(series, function(serie) {
      serie.translate();
      serie.setTooltipPoints();
      /*if (options.tooltip.enabled) */ serie.createArea();
    });  
    
    chart.render = render;
    
    setTimeout(function() { // IE(7) needs timeout
      render();
      fireEvent(chart, 'load');
      
    }, 0); 
    
  }
  
  /**
   * Get the containing element, determine the size and create the inner container
   * div to hold the chart
   */
  function getContainer() {
    renderTo = optionsChart.renderTo;
    containerId = 'highcharts-'+ idCounter++;
  
    if (typeof renderTo == 'string') {
      renderTo = doc.getElementById(renderTo);
    }
  
    // remove previous chart
    renderTo.innerHTML = '';
    
    // If the container doesn't have an offsetWidth, it has or is a child of a node
    // that has display:none. We need to temporarily move it out to a visible
    // state to determine the size, else the legend and tooltips won't render
    // properly 
    if (!renderTo.offsetWidth) {
      renderToClone = renderTo.cloneNode(0);
      setStyles(renderToClone, {
        position: ABSOLUTE,
        top: '-9999px',
        display: ''
      });
      doc.body.appendChild(renderToClone);
    }
    
    // get the width and height
    var renderToOffsetHeight = (renderToClone || renderTo).offsetHeight;
    chartWidth = optionsChart.width || (renderToClone || renderTo).offsetWidth || 600;
    chartHeight = optionsChart.height || 
      // the offsetHeight of an empty container is 0 in standard browsers, but 19 in IE7:
      (renderToOffsetHeight > marginTop + marginBottom ? renderToOffsetHeight : 0) || 
      400;
    
    // create the inner container
    container = createElement(DIV, {
        className: 'highcharts-container' + 
          (optionsChart.className ? ' '+ optionsChart.className : ''),
        id: containerId
      }, extend({
        position: RELATIVE,
        overflow: HIDDEN,
        width: chartWidth + PX,
        height: chartHeight + PX,
        textAlign: 'left'
      }, optionsChart.style),
      renderToClone || renderTo
    );
  }
  /**
   * Render all graphics for the chart
   */
  function render () {
    var mgn, 
      div, 
      i, 
      labels = options.labels, 
      credits = options.credits;
    
    
    // Chart area
    mgn = 2 * (optionsChart.borderWidth || 0) + (optionsChart.shadow ? 8 : 0);
    backgroundLayer.drawRect(mgn / 2, mgn / 2, chartWidth - mgn, chartHeight - mgn, 
      optionsChart.borderColor, optionsChart.borderWidth, optionsChart.borderRadius, 
      optionsChart.backgroundColor, optionsChart.shadow);
    
    
    // Plot background
    backgroundLayer.drawRect(
      marginLeft, 
      marginTop, 
      plotWidth, 
      plotHeight, 
      null, 
      null, 
      null, 
      optionsChart.plotBackgroundColor, 
      null, 
      plotBackground
    );
    
    // Plot area border
    (new Layer('plot-border', container, null, {
      zIndex: 4 // in front of grid lines and graphs, behind axis lines
    })).drawRect(
      marginLeft, 
      marginTop, 
      plotWidth, 
      plotHeight, 
      optionsChart.plotBorderColor, 
      optionsChart.plotBorderWidth, 
      null, 
      null, 
      optionsChart.plotShadow
    );
      
    
    // Printing CSS for IE
    if (isIE) addCSSRule('.highcharts-image-map', { display: 'none' }, 'print');
    
    
    // Axes
    if (hasCartesianSeries) each(axes, function(axis) { 
      axis.render();
    });
  
    // Title
    showTitle();
    
    
    // Labels
    if (labels.items)  each (labels.items, function () {
      var attributes = extend({ className: 'highcharts-label' }, this.attributes);
      plotLayer.drawHtml(this.html, attributes, extend(labels.style, this.style));
    });

    // The series
    each (series, function(serie) {
      serie.render();
    });
    
    // Legend
    legend = chart.legend = new Legend(chart);

    
    // Toolbar (don't redraw)
    if (!chart.toolbar) chart.toolbar = Toolbar(chart);
    
    // Credits
    if (credits.enabled && !chart.credits) 
      chart.credits = createElement('a', {
        className: 'highcharts-credits',
        href: credits.href,
        innerHTML: credits.text,
        target: credits.target
      }, extend(credits.style, {
        zIndex: 8
      }), container);

    // Set flag
    chart.hasRendered = true;
    
    // If the chart was rendered outside the top container, put it back in
    if (renderToClone) {
      renderTo.appendChild(container);
      discardElement(renderToClone);
      updatePosition()
    }
  };
  
  /**
   * Clean up memory usage
   */
  function destroy() {
    

    /**
     * Clear certain attributes from the element
     * @param {Object} d
     */
    function purge(d) {
        var a = d.attributes, i, l, n;
        if (a) {
            l = a.length;
            for (i = l - 1; i >= 0; i -= 1) {
                n = a[i].name;
          
          try {
                  //if (typeof d[n] != 'object' && !/^(width|height)$/.test(n)) {
            if (typeof d[n] == 'function') {
              d[n] = null;
                  }
          } catch (e) {
            // IE/excanvas produces errors on some of the properties
          }
          
            }
        }
      
        a = d.childNodes;
        if (a) {
            l = a.length;
            for (i = l - 1; i >= 0; i--) {
                var node = d.childNodes[i];
          purge(node);  
          
          if (!node.childNodes.length) discardElement(node);      
            }
        }
      
    }
    
    // destroy each series
    each (series, function(serie) {
      serie.destroy();
    });
    series = [];
    
    
    purge(container);
  };
  
  /**
   * Create a new axis object
   * @param {Object} chart
   * @param {Object} options
   */
  function Axis (chart, options) {
    
    /**
     * Set the options by merging the inheritance line
     */
    function setOptions() {
      options = merge(
        isXAxis ? defaultXAxisOptions : defaultYAxisOptions,
        //defaultOptions[isXAxis ? 'xAxis' : 'yAxis'],
        horiz ? 
          (opposite ? defaultTopAxisOptions : defaultBottomAxisOptions) :
          (opposite ? defaultRightAxisOptions : defaultLeftAxisOptions),
        options
      );    
    };

    /**
     * Get the minimum and maximum for the series of each axis 
     */
    function getSeriesExtremes() {
      var stack = [],
        run;
        
      // reset dataMin and dataMax in case we're redrawing
      dataMin = dataMax = null;
      
      // get an overview of what series are associated with this axis
      associatedSeries = [];
      
      each(series, function(serie) {
        run = false;
        
        
        // match this axis against the series' given or implicated axis
        each(['xAxis', 'yAxis'], function(strAxis) {
          if (
            // we're in the right x or y dimension, and...
            (strAxis == 'xAxis' && isXAxis || strAxis == 'yAxis' && !isXAxis) && (
              // the axis number is given in the options and matches this axis index, or
              (serie.options[strAxis] == options.index) || 
              // the axis index is not given
              (serie.options[strAxis] === undefined && options.index == 0)
            )
          ) {
            serie[strAxis] = axis;
            associatedSeries.push(serie);
            
            // the series is visible, run the min/max detection
            run = true;    
          }
        });
        // ignore hidden series if opted 
        if (!serie.visible && optionsChart.ignoreHiddenSeries) run = false;        
        
        if (run) {
          
          var stacking;
    
          if (!isXAxis) {
            stacking = serie.options.stacking;
            usePercentage = stacking == 'percent';
  
            // create a stack for this particular series type
            if (stacking) {
              var typeStack = stack[serie.type] || [];
              stack[serie.type] = typeStack;
            }
            if (usePercentage) {
              dataMin = 0;
              dataMax = 99;      
            }
          } 
          if (serie.isCartesian) { // line, column etc. need axes, pie doesn't
            each(serie.data, function(point, i) {
              var pointX = point.x,
                pointY = point.y;
              
              // initial values
              if (dataMin === null) {

                // start out with the first point
                dataMin = dataMax = point[xOrY]; 
              }
    
              // x axis
              if (isXAxis) {
                if (pointX > dataMax) dataMax = pointX;
                else if (pointX < dataMin)   dataMin = pointX;
                
              }
              
              // y axis
              else if (defined(pointY)) {
                if (stacking) 
                  typeStack[pointX] = typeStack[pointX] ? typeStack[pointX] + pointY : pointY;
                
                var stackedPoint = typeStack ? typeStack[pointX] : pointY;
                if (!usePercentage) {
                  if (stackedPoint > dataMax) dataMax = stackedPoint;
                  else if (stackedPoint < dataMin) dataMin = stackedPoint;
                }
                if (stacking) stacks[serie.type][pointX] = { 
                  total: stackedPoint,
                  cum: stackedPoint 
                };
              }
            });
            
              
            // For column, areas and bars, set the minimum automatically to zero
            // and prevent that minPadding is added in setScale
            if (!isXAxis && /(area|column|bar)/.test(serie.type)) {
              if (dataMin >= 0) {
                dataMin = 0;
                ignoreMinPadding = true;
              } else if (dataMax < 0) {
                dataMax = 0;
                ignoreMaxPadding = true;
              }
            }
          }
        }
      });
      
      
    };
  
    /**
     * Translate from axis value to pixel position on the chart, or back
     * 
     */
    function translate(val, backwards, cvsCoord) {
      var sign = 1,
        cvsOffset = 0,
        returnValue;
      if (cvsCoord) {
        sign *= -1; // canvas coordinates inverts the value
        cvsOffset = axisLength;
      }
      if (reversed) { // reversed axis
        sign *= -1; 
        cvsOffset -= sign * axisLength;
      }
      
      if (backwards) { // reverse translation
        if (reversed) val = axisLength - val;
        returnValue = val / transA + min; // from chart pixel to value        
      
      } else { // normal translation
        returnValue = sign * (val - min) * transA + cvsOffset; // from value to chart pixel
      }
      
      return returnValue;
    };
    
    /**
     * Add a single line across the plot
     */
    function drawPlotLine(value, color, width) {
      
      if (width) {
        var x1, 
          y1, 
          x2, 
          y2,
          translatedValue = translate(value),
          skip;
          
        x1 = x2 = translatedValue + transB;
        y1 = y2 = chartHeight - translatedValue - transB;
        
        if (horiz) { // horizontal axis, vertical plot line 
          y1 = marginTop;
          y2 = chartHeight - marginBottom;
          if (x1 < marginLeft || x1 > marginLeft + plotWidth) skip = true;
          
        } else { // vertical axis, horizontal plot line
          x1 = marginLeft;
          x2 = chartWidth - marginRight;
          if (y1 < marginTop || y1 > marginTop + plotHeight) skip = true;
        }
        if (!skip) gridLayer.drawLine(x1, y1, x2, y2, color, width);
        
      }
    };
    /**
     * Add a masked band across the plot
     * @param {Number} from chart axis value
     * @param {Number} to chart axis value
     * @param {String} color
     */
    function drawPlotBand(from, to, color) {
      // keep within plot area
      from = mathMax(from, min);
      to = Math.min(to, max);  
      
      var width = (to - from) * transA;
      drawPlotLine(from + (to - from) / 2, color, width);
      
    }
    
    /**
     * Add a tick mark an a label
     */
    function addTick(pos, tickPos, color, width, len, withLabel, index) {
      var x1, y1, x2, y2, str, labelOptions = options.labels;
      
      // negate the length
      if (tickPos == 'inside') len = -len;
      if (opposite) len = -len;
      
      // set the initial positions
      x1 = x2 = translate(pos + tickmarkOffset) + transB;
      y1 = y2 = chartHeight - translate(pos + tickmarkOffset) - transB;
      
      if (horiz) {
        y1 = chartHeight - marginBottom - (opposite ? plotHeight : 0) + offset;
        y2 = y1 + len;
      } else {
        x1 = marginLeft + (opposite ? plotWidth : 0) + offset;
        x2 = x1 - len;        
      }
      
      if (width) axisLayer.drawLine(x1, y1, x2, y2, color, width);
      
      
      // write the label
      if (withLabel && labelOptions.enabled) {
        str = labelFormatter.call({
          index: index,
          isFirst: pos == tickPositions[0],
          isLast: pos == tickPositions[tickPositions.length - 1],
          value: (categories && categories[pos] ? categories[pos] : pos)
        });
        if (str || str === 0) axisLayer.addText(
          str,
          x1 + labelOptions.x - (tickmarkOffset && horiz ? tickmarkOffset * transA * (reversed ? -1 : 1) : 0),
          y1 + labelOptions.y - (tickmarkOffset && !horiz ? tickmarkOffset * transA * (reversed ? 1 : -1) : 0),
          labelOptions.style, 
          labelOptions.rotation,
          labelOptions.align
        );
      }
      
    };
    
    /**
     * Take an interval and normalize it to multiples of 1, 2, 2.5 and 5
     * @param {Number} interval
     */
    function normalizeTickInterval(interval, multiples) {
      var normalized,
        allowDecimals = pick(options.allowDecimals, true);
        
      // round to a tenfold of 1, 2, 2.5 or 5
      magnitude = multiples ? 1 : math.pow(10, mathFloor(math.log(interval) / math.LN10));
      normalized = interval / magnitude;
      
      // multiples for a linear scale
      if (!multiples) multiples = [1, 2, 2.5, 5, 10];
      
      // normalize the interval to the nearest multiple
      for (var i = 0; i < multiples.length; i++) {
        interval = multiples[i];
        if (normalized <= (multiples[i] + (multiples[i+1] || multiples[i])) / 2) {
          break;
        }
      }
      
      // multiply back to the correct magnitude
      interval *= magnitude;
      return interval;
    };
  
    /**
     * Set the tick positions to a time unit that makes sense, for example
     * on the first of each month or on every Monday.
     */
    function setDateTimeTickPositions() {
      tickPositions = [];
      var useUTC = defaultOptions.global.useUTC,
        oneSecond = 1000 / timeFactor,
        oneMinute = 60000 / timeFactor,
        oneHour = 3600000 / timeFactor,
        oneDay = 24 * 3600000 / timeFactor,
        oneWeek = 7 * 24 * 3600000 / timeFactor,
        oneMonth = 30 * 24 * 3600000 / timeFactor,
        oneYear = 31556952000 / timeFactor,
      
        units = [[
          'second',            // unit name
          oneSecond,            // fixed incremental unit
          [1, 2, 5, 10, 15, 30]      // allowed multiples
        ], [
          'minute',            // unit name
          oneMinute,        // fixed incremental unit
          [1, 2, 5, 10, 15, 30]      // allowed multiples
        ], [
          'hour',              // unit name
          oneHour,      // fixed incremental unit
          [1, 2, 3, 4, 6, 8, 12]      // allowed multiples
        ], [
          'day',              // unit name
          oneDay,    // fixed incremental unit
          [1, 2]              // allowed multiples
        ], [
          'week',              // unit name
          oneWeek,  // fixed incremental unit
          [1, 2]              // allowed multiples
        ], [
          'month',
          oneMonth,
          [1, 2, 3, 4, 6]
        ], [
          'year',
          oneYear,
          null
        ]],
      
        unit = units[6], // default unit is years
        interval = unit[1], 
        multiples = unit[2];
      
      // loop through the units to find the one that best fits the tickInterval
      for (var i = 0; i < units.length; i++)  {
        unit = units[i];
        interval = unit[1];
        multiples = unit[2];
        
        
        if (units[i+1]) {
          // lessThan is in the middle between the highest multiple and the next unit.
          var lessThan = (interval * multiples[multiples.length - 1] + 
                units[i + 1][1]) / 2;
              
          // break and keep the current unit
          if (tickInterval <= lessThan) break;
        }
      }
      
      // prevent 2.5 years intervals, though 25, 250 etc. are allowed
      if (interval == oneYear && tickInterval < 5 * interval)
        multiples = [1, 2, 5];
  
      // get the minimum value by flooring the date
      var multitude = normalizeTickInterval(tickInterval / interval, multiples),
        minYear, // used in months and years as a basis for Date.UTC()
        minDate = new Date(min * timeFactor);
        
        
      minDate.setMilliseconds(0);
      
      if (interval >= oneSecond) // second
        minDate.setSeconds(interval >= oneMinute ? 0 :
          multitude * mathFloor(minDate.getSeconds() / multitude));
  
      if (interval >= oneMinute) // minute
        minDate[setMinutes](interval >= oneHour ? 0 :
          multitude * mathFloor(minDate[getMinutes]() / multitude));
  
      if (interval >= oneHour) // hour
        minDate[setHours](interval >= oneDay ? 0 :
          multitude * mathFloor(minDate[getHours]() / multitude));
  
      if (interval >= oneDay) // day
        minDate[setDate](interval >= oneMonth ? 1 :
          multitude * mathFloor(minDate[getDate]() / multitude));
          
      if (interval >= oneMonth) { // month
        minDate[setMonth](interval >= oneYear ? 0 :
          multitude * mathFloor(minDate[getMonth]() / multitude));
        minYear = minDate[getFullYear]();
      }
      
      if (interval >= oneYear) { // year
        minYear -= minYear % multitude;
        minDate[setFullYear](minYear);
      }
      
      // week is a special case that runs outside the hierarchy
      if (interval == oneWeek) {
        // get start of current week, independent of multitude
        minDate[setDate](minDate[getDate]() - minDate[getDay]() + 
          options.startOfWeek);
      }  
      
      
      // get tick positions
      var i = 1, // prevent crash just in case
        time = minDate.getTime() / timeFactor,
        minYear = minDate[getFullYear](),
        minMonth = minDate[getMonth](),
        minDateDate = minDate[getDate]();
        
      // iterate and add tick positions at appropriate values
      while (time < max && i < plotWidth) {
        tickPositions.push(time);
        
        // if the interval is years, use Date.UTC to increase years
        if (interval == oneYear) {
          time = makeTime(minYear + i * multitude, 0) / timeFactor;
        
        // if the interval is months, use Date.UTC to increase months
        } else if (interval == oneMonth) {
          time = makeTime(minYear, minMonth + i * multitude) / timeFactor;
          
        // if we're using global time, the interval is not fixed as it jumps
        // one hour at the DST crossover
        } else if (!useUTC && (interval == oneDay || interval == oneWeek)) {
          time = makeTime(minYear, minMonth, minDateDate + 
            i * multitude * (interval == oneDay ? 1 : 7));
          
        // else, the interval is fixed and we use simple addition
        } else {
          time += interval * multitude;
        }
        
        i++;
      }
      // push the last time
      tickPositions.push(time);
      
      // dynamic label formatter 
      if (!options.labels.formatter) labelFormatter = function() {
        return dateFormat(options.dateTimeLabelFormats[unit[0]], this.value, 1);
      }
    }
      
      
    /**
     * Set the tick positions of a linear axis to round values like whole tens or every five.
     */
    function setLinearTickPositions() {
      
      var correctFloat = function(num) { // JS round off float errors
          var invMag = (magnitude < 1 ? mathRound(1 / magnitude) : 1) * 10;
          
          return mathRound(num * invMag) / invMag
        },
        
        i,
        roundedMin = mathFloor(min / tickInterval) * tickInterval,
        roundedMax = math.ceil(max / tickInterval) * tickInterval;
        // default extreme ticks when axis does not start and end on a tick
        //firstTickPosition = roundedMin + tickInterval,
        //lastTickPosition = roundedMax - tickInterval,
      
        
        //invMag = (magnitude < 1 ? 1 / magnitude : 1) * 10; // round off JS float errors;
        
      tickPositions = [];
      
      // populate the intermediate values
      // todo: round off float errors occur here!
      i = correctFloat(roundedMin);
      while (i <= roundedMax) {
      //for (i = roundedMin; i <= roundedMax; i += tickInterval) {
        //i = mathRound(i * invMag) / invMag
        tickPositions.push(i);
        i = correctFloat(i + tickInterval);
      }
        
      // pad categorised axis to nearest half unit
      if (categories) {
         min -= 0.5;
         max += 0.5;
      }

      // dynamic label formatter 
      if (!labelFormatter) labelFormatter = function() {
        return this.value;
      }
      
    };
    
    /**
     * Set the tick positions to round values and optionally extend the extremes
     * to the nearest tick
     */
    function setTickPositions() {
      if (isDatetimeAxis)  setDateTimeTickPositions();
      else setLinearTickPositions();
      
      // reset min/max or remove extremes based on start/end on tick
      var roundedMin = tickPositions[0],
        roundedMax = tickPositions[tickPositions.length - 1];
          
      
      if (options.startOnTick) {
        min = roundedMin;
      } else if (min > roundedMin) {
        tickPositions.shift();
      }
      if (options.endOnTick) {
        max = roundedMax;
      } else if (max < roundedMax) {
        tickPositions.pop();
      }  
    }
    
    /**
     * When using multiple axes, adjust the number of ticks to match the highest
     * number of ticks in that group
     */ 
    function adjustTickAmount() {
      if (!isDatetimeAxis && !categories) { // only apply to linear scale
        var oldTickAmount = tickAmount,
          calculatedTickAmount = tickPositions.length;
          
        // set the axis-level tickAmount to use below
        tickAmount = maxTicks[xOrY];
        
          
        if (calculatedTickAmount < tickAmount) {
          while (tickPositions.length < tickAmount)
            tickPositions.push(tickPositions[tickPositions.length - 1] + tickInterval);
          transA *= (calculatedTickAmount - 1) / (tickAmount - 1);
        }
        if (defined(oldTickAmount) && tickAmount != oldTickAmount) axis.isDirty = true;  
        
      }
    };
  
    /**
     * Set the scale based on data min and max, user set min and max or options
     */
    function setScale() {
      var length, 
        type, 
        i,
        total,
        oldMin = min,
        oldMax = max,
        maxZoom = options.maxZoom,
        zoomOffset;
      
      // get data extremes if needed
      getSeriesExtremes();
      
      
      // initial min and max from the extreme data values
      min = pick(userSetMin, options.min, dataMin);
      max = pick(userSetMax, options.max, dataMax);
      
      // maxZoom exceeded, just center the selection
      if (max - min < maxZoom) { 
        zoomOffset = (maxZoom - max + min) / 2;
        // if min and max options have been set, don't go beyond it
        min = mathMax(min - zoomOffset, pick(options.min, min - zoomOffset));
        max = math.min(min + maxZoom, pick(options.max, min + maxZoom));
      }
        
      // pad the values to get clear of the chart's edges
      if (!categories && !usePercentage) {
        length = (max - min) || 1;
        if (!defined(options.min) && minPadding && (dataMin < 0 || !ignoreMinPadding)) 
          min -= length * minPadding; 
        if (!defined(options.max) && maxPadding && (dataMax > 0 || !ignoreMaxPadding)) 
          max += length * maxPadding;
      }
      
      // tickInterval
      if (categories || min == max) tickInterval = 1;
      else tickInterval = options.tickInterval == 'auto' ? 
          (max - min) * options.tickPixelInterval / axisLength : 
          options.tickInterval;
          
      if (!isDatetimeAxis && options.tickInterval == 'auto') // linear
        tickInterval = normalizeTickInterval(tickInterval);
      
      // minorTickInterval
      minorTickInterval = (options.minorTickInterval == 'auto' && tickInterval) ?
          tickInterval / 5 : options.minorTickInterval;
          
      // get fixed positions based on tickInterval
      setTickPositions();
      
      // the translation factor used in translate function      
      transA = axisLength / ((max - min) || 1);
      
      // record the greatest number of ticks for multi axis
      if (!maxTicks) maxTicks = { // first call, or maxTicks have been reset after a zoom operation
        x: 0,
        y: 0
      };        
      if (!isDatetimeAxis && tickPositions.length > maxTicks[xOrY]) 
        maxTicks[xOrY] = tickPositions.length;
        
      // reset stacks
        
      //if (!isXAxis) for (type in stacks) each (stacks[type], function(stack, i) {
      if (!isXAxis) for (type in stacks) for (i in stacks[type]) {
        stacks[type][i].cum = stacks[type][i].total;
      }


      
      // mark as dirty
      axis.isDirty = (min != oldMin || max != oldMax);
    };
    
    /**
     * Set the extremes and optionally redraw
     * @param {Number} newMin
     * @param {Number} newMax
     * @param {Boolean} redraw
     * 
     */
    function setExtremes(newMin, newMax, redraw) {
      redraw = pick(redraw, true); // defaults to true
        
      fireEvent(axis, 'setExtremes', { // fire an event to enable syncing of multiple charts
        min: newMin,
        max: newMax
      }, function() { // the default event handler
        // make sure categorized axes are not exceeded
        if (categories) {
          if (newMin < 0) newMin = 0;
          if (newMax > categories.length - 1) newMax = categories.length - 1;
        }
        
        // set the new values
        //userSetMin = pick(newMin, min);
        //userSetMax = pick(newMax, max);
        //if (defined(newMin)) userSetMin = newMin;
        //if (defined(newMax)) userSetMax = newMax;
        
        // this fails on zooming when a series is hidden and ignoreHiddenSeries is true
        //userSetMin = pick(newMin, options.min, dataMin);
        //userSetMax = pick(newMax, options.max, dataMax);
        
        userSetMin = newMin;
        userSetMax = newMax;
      
        
        // redraw
        if (redraw) chart.redraw();
      });
      
    };
    
    /**
     * Set new axis categories and optionally redraw
     * @param {Array} newCategories
     * @param {Boolean} doRedraw
     */
    function setCategories(newCategories, doRedraw) {
        categories = newCategories;
        if (pick(doRedraw, true)) redraw();
    };
    
    
    /* *
     * Reset min and max and set the scale again from data min and max
     * /
    function reset() {
      //min = max = tickInterval = minorTickInterval = tickPositions = null;
      setScale();
    }*/
    
    /**
     * Get the actual axis extremes
     */
    function getExtremes() {
      return {
        min: min,
        max: max,
        dataMin: dataMin,
        dataMax: dataMax
      }
    }
    
    /**
     * Add a plot band or plot line after render time
     * 
     * @param item {Object} The plotBand or plotLine configuration object
     */
    function addPlotBandOrLine(item) {
      var isLine = item.width,
        collection = isLine ? plotLines : plotBands;  

      collection.push(item);
      
      if (isLine) drawPlotLine(item.value, item.color, item.width);
      else drawPlotBand(item.from, item.to, item.color);      
    }
    
    /**
     * Remove a plot band or plot line from the chart by id
     * @param {Object} id
     */
    function removePlotBandOrLine(id) {
      each ([plotBands, plotLines], function(collection) {
        for (var i = 0; i < collection.length; i++) {
  
          if (collection[i].id == id) {
            collection.splice(i, 1);
            break;
          }
        }
      });
      render();
    }
    
    
    /**
     * Redraw the axis to reflect changes in the data or axis extremes
     */
    function redraw() {
      
      // hide tooltip and hover states
      if (tracker.resetTracker) tracker.resetTracker();
    
      // render the axis
      render();
      
      // mark associated series as dirty and ready for redraw
      each (associatedSeries, function(series) {
        series.isDirty = true;
      });
            
    }
    
    function render() {
      var axisTitle = options.title,
        alternateGridColor = options.alternateGridColor,
        minorTickWidth = options.minorTickWidth,
        lineWidth = options.lineWidth,
        lineLeft,
        lineTop,
        tickmarkPos,
        hasData = associatedSeries.length && defined(min) && defined(max);
      
      
      // clear the axis layers before new grid and ticks are drawn
      axisLayer.clear();
      gridLayer.clear();
      
      // return if there's no series on this axis
      //if (!associatedSeries.length || !defined(min) || !defined(max)) return;
      
      // If the series has data draw the ticks. Else only the line and title
      if (hasData) {
      
        // alternate grid color
        if (alternateGridColor) {
          each(tickPositions, function(pos, i) {
            if (i % 2 == 0 && pos < max) {
              drawPlotBand(
                pos, 
                tickPositions[i + 1] !== undefined ? tickPositions[i + 1] : max, 
                alternateGridColor
              );
            }
          });
        }
        
        // custom plot bands (behind grid lines)
        each (plotBands, function(plotBand) {
          drawPlotBand(plotBand.from, plotBand.to, plotBand.color);
        });
        
        // minor grid lines
        if (minorTickInterval && !categories) for (var i = min; i <= max; i += minorTickInterval) {
          drawPlotLine(i, options.minorGridLineColor, options.minorGridLineWidth);
          if (minorTickWidth) addTick(
            i, 
            options.minorTickPosition, 
            options.minorTickColor, 
            minorTickWidth, 
            options.minorTickLength
          );
        }
        // grid lines and tick marks
        each(tickPositions, function(pos, index) {
          tickmarkPos = pos + tickmarkOffset;
          
          // add the grid line
          drawPlotLine(tickmarkPos, options.gridLineColor, options.gridLineWidth);
          
          // add the tick mark
          addTick(
            pos, 
            options.tickPosition, 
            options.tickColor, 
            options.tickWidth, 
            options.tickLength, 
            !((pos == min && !options.showFirstLabel) || (pos == max && !options.showLastLabel)),
            index
          );
        });
      
      
        
        // custom plot lines (in front of grid lines)
        each (plotLines, function(plotLine) {
          drawPlotLine(plotLine.value, plotLine.color, plotLine.width);
        });
      
      } // end if hasData
      
      // axis line
      if (lineWidth) {
        lineLeft = marginLeft + (opposite ? plotWidth : 0) + offset;
        lineTop = chartHeight - marginBottom - (opposite ? plotHeight : 0) + offset;
        axisLayer.drawLine(
          horiz ? 
            marginLeft: 
            lineLeft,
          horiz ? 
            lineTop: 
            marginTop, 
          horiz ? 
            chartWidth - marginRight : 
            lineLeft,
          horiz ? 
            lineTop:
            chartHeight - marginBottom, 
          options.lineColor, 
          lineWidth
        );
      }
      
      // title
      if (axisTitle && axisTitle.enabled && axisTitle.text) {
        
        // compute anchor points for each of the title align options
        var margin = horiz ? 
            marginLeft : marginTop,
          length = horiz ? plotWidth : plotHeight;
          
        // the position in the length direction of the axis
        var alongAxis = { 
          low: margin + (horiz ? 0 : length), 
          middle: margin + length / 2, 
          high: margin + (horiz ? length : 0)
        }[axisTitle.align];
        
        // the position in the perpendicular direction of the axis
        var offAxis = (horiz ? marginTop + plotHeight : marginLeft) +
          (horiz ? 1 : -1) * // horizontal axis reverses the margin
          (opposite ? -1 : 1) * // so does opposite axes
          axisTitle.margin 
          - (isIE ? parseInt(
            axisTitle.style.fontSize || axisTitle.style.font.replace(/^[a-z ]+/, '')
          ) / 3 : 0); // preliminary fix for vml's centerline
        
        axisLayer.addText(
          axisTitle.text,
          horiz ? 
            alongAxis: 
            offAxis + (opposite ? plotWidth : 0) + offset, // x
          horiz ? 
            offAxis - (opposite ? plotHeight : 0) + offset: 
            alongAxis, // y
          axisTitle.style, 
          axisTitle.rotation || 0,
          { low: 'left', middle: 'center', high: 'right' }[axisTitle.align]
        );
        
      }
      // stroke tick labels and title
      axisLayer.strokeText();
      
      axis.isDirty = false;
    };
    
    
    // Run Axis
    var isXAxis = options.isX,
      opposite = options.opposite, // needed in setOptions      
      horiz = inverted ? !isXAxis : isXAxis,
      stacks = {
        bar: {},
        column: {},
        area: {},
        areaspline: {}
      };
  
    setOptions(); // do the merging
  
    var axis = this,
      isDatetimeAxis = options.type == 'datetime',
      offset = options.offset || 0,
      xOrY = isXAxis ? 'x' : 'y',
      axisLength = horiz ? plotWidth : plotHeight,
    
      transA,                 // translation factor
      transB = horiz ? marginLeft : marginBottom,     // translation addend
      axisLayer = new Layer('axis-layer', container, null, { zIndex: 7}), /* The
        axis layer is in front of the series because the axis line must hide
        graphs and bars. Grid lines are drawn on the grid layer. */
      gridLayer = new Layer('grid-layer', container, null, { zIndex: 1 }),
      dataMin,
      dataMax,
      associatedSeries,
      userSetMin,
      userSetMax,
      max = null,
      min = null,
      minPadding = options.minPadding,
      maxPadding = options.maxPadding,
      ignoreMinPadding, // can be set to true by a column or bar series
      ignoreMaxPadding,
      usePercentage,
      events = options.events,
      eventType,
      plotBands = options.plotBands || [],
      plotLines = options.plotLines || [],
      tickInterval,
      minorTickInterval,
      magnitude,
      tickPositions, // array containing predefined positions
      tickAmount,
      zoom = 1,
      //var axisLabelsLayer = new Layer((horiz ? 'x' : 'y') +'-axis-labels');
      labelFormatter = options.labels.formatter, // can be overwritten by dynamic format
      // column plots are always categorized
      categories = options.categories || (isXAxis && chart.columnCount), 
      reversed = options.reversed,
      tickmarkOffset = (categories && options.tickmarkPlacement == 'between') ? 0.5 : 0;
      //var hasWrittenTitle;
      
    // inverted charts have reversed xAxes as default
    if (inverted && isXAxis && reversed === undefined) reversed = true;
      
    // negate offset
    if (!opposite) offset *= -1;
    if (horiz) offset *= -1; 
    
      
    // expose some variables
    extend (axis, {
      addPlotBand: addPlotBandOrLine,
      addPlotLine: addPlotBandOrLine,
      adjustTickAmount: adjustTickAmount,
      categories: categories,
      getExtremes: getExtremes,
      isXAxis: isXAxis,
      options: options,
      render: render,
      setExtremes: setExtremes,
      setScale: setScale,
      setCategories: setCategories,
      translate: translate,
      redraw: redraw,
      removePlotBand: removePlotBandOrLine,
      removePlotLine: removePlotBandOrLine,
      //reset: reset,
      reversed: reversed,
      stacks: stacks
    });
    
    // register event listeners
    for (eventType in events) {
      addEvent(axis, eventType, events[eventType]);
    }
    
    // set min and max
    setScale();
      
  
  }; // end Axis
  
  function Toolbar(chart) {
    var toolbarLayer, buttons = {};
    
    toolbarLayer = new Layer('toolbar', container, null, { 
      zIndex: 1004, 
      width: 'auto', 
      height: 'auto'
    });
    
    
    function add(id, text, title, fn) {
      if (!buttons[id]) {
        var button = createElement(DIV, {
            innerHTML: text,
            title: title,
            onclick: fn
          }, extend(options.toolbar.itemStyle, {   
            zIndex: 1003
          }), toolbarLayer.div);
        buttons[id] = button;
      }
    }
    function remove(id) {
      discardElement(buttons[id]);
      buttons[id] = null;
    }
    
    // public
    return {
      add: add,
      remove: remove
    }
  };
  
  function MouseTracker (chart, options) {
    /**
     * Get the currently hovered point
     */
    function getActivePoint() {
      return activePoint;
    };
    
    /**
     * Add IE support for pageX and pageY
     * @param {Object} e The event object in standard browsers
     */
    function normalizeMouseEvent(e) {
      // common IE normalizing
      e = e || win.event;
      if (!e.target) e.target = e.srcElement;
        
      // pageX and pageY
      if (!e.pageX)
        e.pageX = e.clientX + (doc.documentElement.scrollLeft || doc.body.scrollLeft);
      
      if (!e.pageY)
        e.pageY = e.clientY + (doc.documentElement.scrollTop || doc.body.scrollTop);
        
      return e;
    }
    
    /**
     * Get the click position in terms of axis values.
     * 
     * @param {Object} e A mouse event
     */
    function getMouseCoordinates(e) {
      var coordinates = {
        xAxis: [],
        yAxis: []
      }; 
      each (axes, function(axis, i) {
        var translate = axis.translate,
          isXAxis = axis.isXAxis,
          isHorizontal = inverted ? !isXAxis : isXAxis;
          
        coordinates[isXAxis ? 'xAxis' : 'yAxis'].push({
          axis: axis,
          value: translate(
            isHorizontal ? 
              e.pageX - position.x - marginLeft  : 
              plotHeight - e.pageY + position.y + marginTop ,
            true
          )                
        })
      });
      return coordinates;
    }
    
    /* *
     * Drop a point after dragging to change it's value
     * 
     * @todo: 
     * - x dimension
     * /
    function dropDragPoint() {
      if (hasDragged && dragPoint) {
        var yAxis = dragPointCoordinates.yAxis,
          i = 0;
          
        // identify the point's yAxis
        for (i; i < yAxis.length; i++) { 
          if (yAxis[i].axis == dragPoint.series.yAxis) {
            break;
          }          
        }
        // update the point
        dragPoint.update(yAxis[i].value);
        dragPoint = null;        
      }
    }
    */
    /**
     * Set the JS events on the container element
     */
    function setDOMEvents () {
      
      imagemap.onmousedown = function(e) {
        e = normalizeMouseEvent(e);
        
        // record the start position
        if (e.preventDefault) e.preventDefault();
        chart.mouseIsDown = mouseIsDown = true;
        mouseDownX = e.pageX;
        mouseDownY = e.pageY;
          
        
        // make a selection
        if (hasCartesianSeries && (zoomX || zoomY)) {
          if (!selectionMarker) selectionMarker = createElement(DIV, null, {
            position: ABSOLUTE,
            border: 'none',
            background: '#4572A7',
            opacity: 0.25,
            width: zoomHor ? 0 : plotWidth + PX,
            height: zoomVert ? 0 : plotHeight + PX
          });
          plotLayer.div.appendChild(selectionMarker);
        }
        
        // drag a point
        /* else if (activePoint && e.target.tagName == 'AREA') {
          var seriesOptions = activePoint.series.options,
            dragType = seriesOptions.dragType;
          
          if (seriesOptions.allowDrag) {
            allowXDrag = /x/.test(dragType);
            allowYDrag = /y/.test(dragType);
          }
          // define the point
          if (allowXDrag || allowYDrag) dragPoint = activePoint;
        }
        */
      };
      
      
      // Use native browser event for this one. It's faster, and MooTools
      // doesn't use clientX and clientY.
      imagemap.onmousemove = function(e) {
        e = normalizeMouseEvent(e);
        e.returnValue = false;
        if (mouseIsDown) { // make selection
        
          // determine if the mouse has moved more than 10px
          hasDragged = Math.sqrt(
            Math.pow(mouseDownX - e.pageX, 2) + 
            Math.pow(mouseDownY - e.pageY, 2)
          ) > 10;
          
          // adjust the width of the selection marker
          if (zoomHor) {
            var xSize = e.pageX - mouseDownX;
            setStyles(selectionMarker, {
              width: mathAbs(xSize) + PX,
              left: ((xSize > 0 ? 0 : xSize) 
                 + mouseDownX - position.x - marginLeft) + PX
            });
          }
          // adjust the height of the selection marker
          if (zoomVert) {
            var ySize = e.pageY - mouseDownY;
            setStyles(selectionMarker, {
              height: mathAbs(ySize) + PX,
              top: ((ySize > 0 ? 0 : ySize) +
                 + mouseDownY - position.y - marginTop) + PX
            });
          }
          
          /* Removed to prevent bloating. Can be added as a separate component later. 
          // drag a point
          if (hasDragged && dragPoint) {
    
            // draw the hover point
            dragPoint.series.drawPointState(dragPoint, 'hover');

            // record the coordinates
            dragPointCoordinates = getMouseCoordinates(e);
            
            if (allowXDrag) {
              // update the plot coordinates
              dragPoint.plotX = e.pageX - position.x - marginLeft;
              // get the tooltip text and refresh the tooltip
              dragPoint.x = dragPoint.series.xAxis.translate(
                dragPoint.plotX, 
                true
              );
            }
            if (allowYDrag) {
              // update the plot coordinates
              dragPoint.plotY = e.pageY - position.y - marginTop;
              // get the tooltip text and refresh the tooltip
              dragPoint.y = dragPoint.series.yAxis.translate(
                plotHeight - dragPoint.plotY, 
                true
              );
            }
            
            // adjust height for columns
            dragPoint.h = (dragPoint.yBottom || dragPoint.y0) - dragPoint.plotY;
            
            dragPoint.setTooltipText();
            tooltip.refresh(dragPoint, dragPoint.series);            
          }
          */
          
        } else {
          // show the tooltip
          onmousemove(e);
        }
        return false;
      };
      imagemap.onmouseup = function() {
        var selectionIsMade;
        
        if (selectionMarker) {
          var selectionData = {
              xAxis: [],
              yAxis: []
            },
            selectionLeft = selectionMarker.offsetLeft,
            selectionTop = selectionMarker.offsetTop,
            selectionWidth = selectionMarker.offsetWidth,
            selectionHeight = selectionMarker.offsetHeight;
            
            
          // a selection has been made
          if (hasDragged) {
            
            // record each axis' min and max
            each (axes, function(axis, i) {
              var translate = axis.translate,
                isXAxis = axis.isXAxis,
                isHorizontal = inverted ? !isXAxis : isXAxis,
                selectionMin = translate(
                  isHorizontal ? 
                    selectionLeft : 
                    plotHeight - selectionTop - selectionHeight, 
                  true
                ),
                selectionMax = translate(
                  isHorizontal ? 
                    selectionLeft + selectionWidth : 
                    plotHeight - selectionTop, 
                  true
                );
                
              selectionData[isXAxis ? 'xAxis' : 'yAxis'].push({
                axis: axis,
                min: math.min(selectionMin, selectionMax), // for reversed axes
                max: mathMax(selectionMin, selectionMax)
              });
              
            });
            fireEvent(chart, 'selection', selectionData, zoom);

            selectionIsMade = true;
          }          
          
          discardElement(selectionMarker);
          selectionMarker = null;
        }
        
        chart.mouseIsDown = mouseIsDown = hasDragged = false;
        /*
        else {
          dropDragPoint();
        }*/
      };
      
      // MooTools 1.2.4 doesn't handle this 'mouseleave' in IE
      imagemap.onmouseout = function(e) {
        e = e || win.event;
        var  related = e.relatedTarget || e.toElement;
        
        // check that the mouse has really left the imagemap
        if (related && related != trackerImage && related.tagName != 'AREA') {
      
          // reset the tracker
          resetTracker();
          
          // if the user is pushing a point, drop it
          //dropDragPoint();
          
          // reset mouseIsDown and hasDragged
          chart.mouseIsDown = mouseIsDown = hasDragged = false;
          
        }
      }
      
      // MooTools 1.2.3 doesn't fire this in IE when using addEvent
      imagemap.onclick = function(e) {
        e = normalizeMouseEvent(e);
         
        e.cancelBubble = true; // IE specific
        
        if (!hasDragged) {
          if (activePoint && e.target.tagName == 'AREA') {
            var plotX = activePoint.plotX,
              plotY = activePoint.plotY;
              
            // add page position info
            extend(activePoint, {
              pageX: position.x + marginLeft + 
                (inverted ? plotWidth - plotY : plotX),
              pageY: position.y + marginTop + 
                (inverted ? plotHeight - plotX : plotY)
            });
            
            // the series click event
            fireEvent(chart.hoverSeries, 'click', extend(e, {
              point: activePoint
            }));
            
            // the point click event
            activePoint.firePointEvent('click', e);
          
          } else { 
            extend (e, getMouseCoordinates(e));
              
            
            // fire a click event in the chart
            fireEvent(chart, 'click', e);
          }
          
          
        }
        // reset mouseIsDown and hasDragged
        //chart.mouseIsDown = mouseIsDown = hasDragged = false;
        hasDragged = false;
      };
      
      
       
    };
    /**
     * Refresh the tooltip on mouse move
     */
    function onmousemove (e) {
      var point = chart.hoverPoint,
        series = chart.hoverSeries;
      
      if (series) {
    
        // get the point
        if (!point) point = series.tooltipPoints[
          inverted ? 
            e.pageY - position.y - marginTop : 
            e.pageX - position.x - marginLeft
        ];
      
        // a new point is hovered, refresh the tooltip
        if (point && point != activePoint) {
          
          // trigger the events
          if (activePoint) activePoint.firePointEvent('mouseOut');
          point.firePointEvent('mouseOver');

          // refresh the tooltip
          if (tooltip) tooltip.refresh(point);
          activePoint = point;
          
          
        }        
      }
    };
    

    
    /**
     * Create the image map that listens for mouseovers
     */
    function createImageMap () {
      var id = 'highchartsMap'+ canvasCounter++;
      
      chart.imagemap = imagemap = createElement('map', {
          name: id,
          id: id,
          className: 'highcharts-image-map'
        }, null, container);
      
      // Append the image to the image map to allow events to 
      // bubble up
      trackerImage = createElement('img', {
        useMap: '#'+ id
      }, {
        width: plotWidth + PX,
        height: plotHeight + PX,
        left: marginLeft + PX,
        top: marginTop + PX,
        opacity: 0,
        border: 'none',
        position: ABSOLUTE,
        // Workaround: if not clipped, the left axis will flicker in 
        // IE8 when hovering the chart
        clip: 'rect(1px,'+ plotWidth +'px,'+ plotHeight +'px,1px)', 
        zIndex: 9
      }, imagemap);
      
            
      // Blank image for modern browsers. IE doesn't need a valid 
      // image for the image map to work, and fails in SSL mode
      // if it's present.
      if (!isIE) trackerImage.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
    };
    
    /**
     * Reset the tracking by hiding the tooltip, the hover series state and the hover point
     */
    function resetTracker() {
      // hide the tooltip
      if (tooltip) tooltip.hide();
      
      // hide the hovered series and point
      if (chart.hoverSeries) {
        chart.hoverSeries.setState();
        chart.hoverSeries = null;
        activePoint = null;
      }
    }
    /**
     * Bring a specific area to the front so that the user can follow a line. The
     * legend area should always stay on top. Series tracker areas are brought to the
     * top after the legend area.
     * @param {Object} area The area DOM element
     */
    function insertAtFront(area) {
      var before = 0,
        i,
        childNodes = imagemap.childNodes;
      for (i = 0; i < childNodes.length; i++) {
        if (childNodes[i].isLegendArea) {
          before = i + 1;
          break;
        }
      }
      imagemap.insertBefore(area, childNodes[before]);        
    }
    
    //if (!options.enabled) return;
    
    // Run MouseTracker
    var activePoint,
      mouseDownX, 
      mouseDownY,
      hasDragged,
      selectionMarker,
      /*dragPoint,
      dragPointCoordinates,
      allowXDrag,
      allowYDrag,*/
      zoomType = optionsChart.zoomType,
      zoomX = /x/.test(zoomType),
      zoomY = /y/.test(zoomType),
      zoomHor = zoomX && !inverted || zoomY && inverted,
      zoomVert = zoomY && !inverted || zoomX && inverted;
      
      
    // public
    createImageMap();
    if (options.enabled) chart.tooltip = tooltip = Tooltip(options);
    
    setDOMEvents();
    
    // set the fixed interval ticking for the smooth tooltip
    setInterval(function() {
      if (tooltipTick) tooltipTick();
    }, 32);
    
    // expose properties
    extend (this, {
      insertAtFront: insertAtFront,
      zoomX: zoomX,
      zoomY: zoomY,
      resetTracker: resetTracker
    });
  };
  

  
  /**
   * The overview of the chart's series
   * @param {Object} chart
   */
  var Legend = function(chart) {
    // already existing      
    //if (chart.legend) return;
      
    var options = chart.options.legend;
      
    if (!options.enabled) return;
    
    var li,
      layout = options.layout,
      symbolWidth = options.symbolWidth,
      dom,
      topRule = '#'+ container.id +' .highcharts-legend li', // apply once for each chart
      allItems = [],
      legendLayer = new Layer('legend', container, null, { zIndex: 7 }),
      legendArea,
      series = chart.series,
      reversedLegend = options.reversed;
      
    
    // Don't use Layer prototype because this needs to sit above the chart in zIndex
    this.dom = dom = createElement(DIV, {
      className: 'highcharts-legend highcharts-legend-'+ layout,
      innerHTML: '<ul style="margin:0;padding:0"></ul>'
    }, extend({
      position: ABSOLUTE,
      zIndex: 7
    }, options.style), container);
      
    // Add the CSS for all states
    addCSSRule(topRule, extend(options.itemStyle, {
      paddingLeft: (symbolWidth +  options.symbolPadding) + PX,
      'float': layout == 'horizontal' ? 'left' : 'none'
    }));
    addCSSRule(topRule +':hover', options.itemHoverStyle);
    addCSSRule(topRule +'.'+ HIGHCHARTS_HIDDEN, options.itemHiddenStyle);
    addCSSRule('.highcharts-legend-horizontal li', { 'float': 'left' });
    
    renderHTML();
    drawGraphics();
    
    function renderHTML(clear) {
      if (clear) {
        each (allItems, function(item) {
          discardElement(item.legendItem);
        });
        allItems = [];
      }

      // add HTML for each series
      if (reversedLegend) {
        series.reverse();
      } 
      each(series, function(serie) {
        if (!serie.options.showInLegend) return;
        
        // use points or series for the legend item depending on legendType
        var items = (serie.options.legendType == 'point') ?
            serie.data : [serie];
            
          
        each(items, function(item) {
          // let these series types use a simple symbol
          item.simpleSymbol = /(bar|pie|area|column)/.test(serie.type);
          
          
          // generate the list item
          item.legendItem = li = createElement('li', {
              innerHTML: options.labelFormatter.call(item),
              className: item.visible ? '' : HIGHCHARTS_HIDDEN
            }, 
            null, //item.visible ? style : merge(style, options.itemHiddenStyle), 
            dom.firstChild
          );
          
          
          // add the checkbox
          if (item.options && item.options.showCheckbox) {
            item.checkbox = createElement('input', {
              type: 'checkbox',
              checked: item.selected,
              defaultChecked: item.selected // required by IE7
            }, options.itemCheckboxStyle, li);
          }
          
          // add the events
          addEvent(li, 'mouseover', function() {
            item.setState('hover');
          });
          addEvent(li, 'mouseout', function() {
            item.setState();
          });
          addEvent(li, 'click', function(event) {
            var target = event.target,
              strLegendItemClick = 'legendItemClick',
              fnLegendItemClick = function() {
                //item.setVisible();
              };
            
            // click the input
            if (target.tagName == 'INPUT') {
              fireEvent (item, 'checkboxClick', { 
                  checked: target.checked 
                }, 
                function() {
                  item.select();
                }
              );
              
            // click the name or symbol
            } else if (item.firePointEvent) { // point
              item.firePointEvent (strLegendItemClick, null, fnLegendItemClick);
            } else {
              fireEvent (item, strLegendItemClick, null, fnLegendItemClick);
            }
          });
          
          // add it all to an array to use below
          allItems.push(item);
        });
      });
      if (reversedLegend) {
        series.reverse();
      }
    }
    
    
    /**
     * Draw the box behind the legend and the symbols
     * @param {Boolean} clear Whether to clear out previous graphics
     */
    function drawGraphics(clear) {
      if (clear) {
        legendLayer.clear();
        discardElement(legendArea);
        legendArea = null;
      }
      if (series.length) {
      
        // draw the box around the legend
        if (options.borderWidth || options.backgroundColor) 
            legendLayer.drawRect(
          dom.offsetLeft, 
          dom.offsetTop,
          dom.offsetWidth, 
          dom.offsetHeight, 
          options.borderColor, 
          options.borderWidth, 
          options.borderRadius, 
          options.backgroundColor, 
          options.shadow
        );
  
  
      
        // Add the symbol after the list is complete.    
        each(allItems, function(item) {
          if (!item.legendItem) return;
  
          var li = item.legendItem,
            symbolX = dom.offsetLeft + li.offsetLeft,
            symbolY = dom.offsetTop + li.offsetTop + li.offsetHeight / 2,
            markerOptions,
            isHidden = item.legendItem.className == HIGHCHARTS_HIDDEN,
            color = isHidden ? 
              options.itemHiddenStyle.color : 
              item.color;
              
          // draw the line
          if (!item.simpleSymbol && item.options && item.options.lineWidth)
            legendLayer.drawLine(
              symbolX, 
              symbolY, 
              symbolX + symbolWidth, 
              symbolY, 
              color, 
              item.options.lineWidth
            );
          // draw a simple symbol
          if (item.simpleSymbol) // bar|pie|area|column
            legendLayer.drawRect(
              symbolX,
              symbolY - 6,
              16,
              12,
              null,
              0,
              2,
              color
            );
            
          // draw the marker
          else if (item.options && item.options.marker && item.options.marker.enabled)
            item.drawMarker(
              legendLayer, 
              symbolX + symbolWidth / 2, 
              symbolY, 
              merge(item.options.marker, isHidden ? {
                fillColor: color,
                lineColor: color
              }: null)
            );
        });
        
        // Add an area that detects mouseovers and puts the legend in front so it can be clicked
        if (imagemap) {
          legendArea = createElement('area', {
            shape: 'rect',
            isLegendArea: true,
            coords: [
              dom.offsetLeft - marginLeft, 
              dom.offsetTop - marginTop, 
              dom.offsetLeft + dom.offsetWidth - marginLeft,
              dom.offsetTop + dom.offsetHeight - marginTop
            ].join(',')
          });
          // insert at the top
          tracker.insertAtFront(legendArea);
          
          // note: using addEvent and mouseleave, mouseenter doesn't work with Moo in IE
          legendArea.onmouseover = function(e) {
            e = e || win.event;
            var  relatedTarget = e.relatedTarget || e.fromElement;
            if (relatedTarget != dom && !mouseIsDown) {
              if (tooltip) tooltip.hide();
              setStyles(dom, {
                zIndex: 10
              });
            }    
          }
          dom.onmouseout = legendArea.onmouseout = function(e) {
            e = e || win.event;
            var  relatedTarget = e.relatedTarget || e.toElement;
            if (relatedTarget && (relatedTarget == trackerImage || 
                (relatedTarget.tagName == 'AREA' && relatedTarget != legendArea))) 
              setStyles(dom, {
                zIndex: 7
              });
          }
        }
      } // if series.length
    }
    
    // expose redrawGraphics
    return {
      renderHTML: renderHTML,
      drawGraphics: drawGraphics
    };
  };
  
  function Tooltip (options) {
    var currentSeries,
      innerDiv,
      borderWidth = options.borderWidth,
      boxLayer;
    
    tooltipDiv = createElement(DIV, null, {
      position: ABSOLUTE,
      visibility: HIDDEN,
      overflow: HIDDEN,
      padding: '0 50px 5px 0',
      zIndex: 8
    }, container);
    
    // the rounded corner box
    boxLayer = new Layer('tooltip-box', tooltipDiv, null, {
      width: chartWidth + PX,
      height: chartHeight + PX
    });
    
    // an inner element for the contents
    innerDiv = createElement(DIV, { 
        className: "highcharts-tooltip"
      }, extend(options.style, {
        maxWidth: (chartWidth - 40) + PX,
        //overflow: HIDDEN, interferes with the text width detection
        textOverflow: 'ellipsis',
        position: RELATIVE,
        zIndex: 2
      }), tooltipDiv
    );
    
    
    /**
     * Refresh the tooltip's text and position. 
     * @param {Object} point
     * 
     */
    function refresh(point, series) {
      var tooltipPos = point.tooltipPos,
        series = point.series,
        //chartOptions = chart.options,
        borderColor = options.borderColor || point.color || series.color || '#606060',
        //categories = series.xAxis ? series.xAxis.categories : null,
        inverted = chart.inverted,//chart.options.chart.inverted,
        x,
        y,
        boxX,
        boxY,
        boxWidth,
        boxHeight,
        oldInnerDivHeight = innerDiv.offsetHeight,
        show,
        text = point.tooltipText;
        
      
      // register the current series
      currentSeries = series;
      
      // get the reference point coordinates (pie charts use tooltipPos)
      x = tooltipPos ? tooltipPos[0] : (inverted ? plotWidth - point.plotY : point.plotX);
      y = tooltipPos ? tooltipPos[1] : (inverted ? plotHeight - point.plotX : point.plotY);
        
        
      // hide tooltip if the point falls outside the plot
      if (x >= 0 && x <= plotWidth && y >= 0 && y <= plotHeight) {
        show = true;
      }
      
      // update the inner HTML
      if (text === false || !show) { 
        hide();
      } else {
        innerDiv.innerHTML = text;
        
        // Draw a rounded border. Draw the border with 20px extra width to minimize
        // the need to redraw it later. Next time, only redraw if the width of the 
        // box is more than 20px wider or smaller than the old box.
        setStyles(innerDiv, { overflow: VISIBLE });
        boxWidth = innerDiv.offsetWidth - borderWidth;
        boxHeight = innerDiv.offsetHeight - borderWidth;
        setStyles(innerDiv, { overflow: HIDDEN });
        
        if (boxWidth > (boxLayer.w || 0) + 20 || boxWidth < (boxLayer.w || 0) - 20 || 
            boxHeight > boxLayer.h || boxLayer.c != borderColor ||
            oldInnerDivHeight != innerDiv.offsetHeight ) {
            boxLayer.clear();    
            boxLayer.drawRect(
            borderWidth / 2, 
            borderWidth / 2, 
              boxWidth + 20,
              boxHeight, 
              borderColor, 
            borderWidth, 
            options.borderRadius, 
              options.backgroundColor, 
            options.shadow
          );
          
          // register size
          extend(boxLayer, {
            w: boxWidth,
            h: boxHeight,
            c: borderColor
          });
        }
        
        // keep the box within the chart area
        boxX = x - boxLayer.w + marginLeft - 35;
        boxY = y - boxLayer.h + 10 + marginTop;
        
        // it is too far to the left, and there is space to the right
        /*if ((inverted || boxX < 5) && x + marginLeft + boxLayer.w < chartWidth - 100) 
          boxX = x + marginLeft + 15; // right align*/
        
        // it is too far to the left, lift it up
        if (boxX < 5) {
          boxX = 5;
          boxY -= 20;
        }
        
        
        if (boxY < 5) boxY = 5; // above
        else if (boxY + boxLayer.h > chartHeight) 
          boxY = chartHeight - boxLayer.h - 5; // below
        
        // do the move
        move(mathRound(boxX), mathRound(boxY));
    
          // show the hover mark
        series.drawPointState(point, 'hover');
      
        tooltipDiv.style.visibility = VISIBLE;
      }
    
    };
    
    // Provide a soft movement of the tooltip
    function move(finalX, finalY) {
      
      var hidden = (tooltipDiv.style.visibility == HIDDEN),
        x = hidden ? finalX : (tooltipDiv.offsetLeft + finalX) / 2, 
        y = hidden ? finalY : (tooltipDiv.offsetTop + finalY) / 2;
      
      setStyles( tooltipDiv, {
        left: x + PX, 
        top: y + PX
      });
      
      // run on next tick of the mouse tracker
      if (mathAbs(finalX - x) > 1 || mathAbs(finalY - y) > 1) {
        tooltipTick = function() {
          move(finalX, finalY);
        };
      } else {
        tooltipTick = null;
      }
    };
    function hide() {
      if (tooltipDiv) tooltipDiv.style.visibility = HIDDEN;
      if (currentSeries) currentSeries.drawPointState();
    };
    
    // public members
    return {
      refresh: refresh,
      hide: hide
    }    
  };
  
    
  

    
  //--- Run Chart ---
  // Override defaults for inverted axis
  /*if (options.chart && options.chart.inverted) defaultOptions = 
    merge(defaultOptions, invertedDefaultOptions);*/
  // Make sure the VML canvas manager is initialized. It initializes on doc.ready by default,
  // which in some cases is too late for Highcharts.
  if (win.G_vmlCanvasManager) {
    win.G_vmlCanvasManager.init_(document);
  }
    
  // Pull out the axis options to enable multiple axes
  defaultXAxisOptions = merge(defaultXAxisOptions, defaultOptions.xAxis);
  defaultYAxisOptions = merge(defaultYAxisOptions, defaultOptions.yAxis);
  defaultOptions.xAxis = defaultOptions.yAxis = null;
    
  // Handle regular options
  options = merge(defaultOptions, options);
  
  var optionsChart = options.chart;
  

    
  // handle margins
  var optionsMargin = optionsChart.margin,
    margin = typeof optionsMargin == 'number' ? 
      [optionsMargin, optionsMargin, optionsMargin, optionsMargin] :
      optionsMargin,
    marginTop = margin[0],
    marginRight = margin[1],
    marginBottom = margin[2],
    marginLeft = margin[3],
    renderTo,
    renderToClone,
    container,
    containerId,
    chartWidth,
    chartHeight;
    
  // create the container
  // todo: move this to render and don't render anything to the container before that
  getContainer();
  
  
  var chart = this,
    //container = doc.getElementById(optionsChart.renderTo),
    //container,
    chartEvents = optionsChart.events,
    eventType,
    imagemap,
    tooltip,
    mouseIsDown,
    backgroundLayer = new Layer('chart-background', container),
    //chartHeight, 
    //chartWidth,
    loadingLayer,
    plotLayer,
    plotHeight,
    plotWidth,
    //ctx, 
    tracker,
    trackerImage,
    legend,
    //xAxis, 
    //yAxis,
    position = getPosition(container),
    hasCartesianSeries = optionsChart.showAxes,
    axes = [],
    maxTicks, // handle the greatest amount of ticks on grouped axes
    series = [], 
    resourcesLoaded, 
    plotBackground,
    inverted,
    tooltipTick,
    tooltipDiv;
    
    
  // Set to zero for each new chart
  colorCounter = 0;
  symbolCounter = 0;
  
  // Update position on resize and scroll
  addEvent(win, 'resize', updatePosition);
  
  // Destroy the chart and free up memory
  addEvent(win, 'unload', destroy);
  
  // Chart event handlers
  if (chartEvents) for (eventType in chartEvents) { 
    addEvent(chart, eventType, chartEvents[eventType]);
  }
  
  // Chart member functions
  chart.addLoading = function (loadingId) {
    chart.resources[loadingId] = false;
  }
  chart.clearLoading = function (loadingId) {
    chart.resources[loadingId] = true;
    checkResources();
  }
  
  
  chart.options = options;
  chart.series = series;
  chart.container = container;
  
  chart.resources = {};
  
  chart.inverted = inverted = options.chart.inverted
  
  chart.chartWidth = chartWidth;
  chart.chartHeight = chartHeight;
  
  chart.plotWidth = plotWidth = chartWidth - marginLeft - marginRight;
  chart.plotHeight = plotHeight = chartHeight - marginTop - marginBottom;
  
  chart.plotLeft = marginLeft;
  chart.plotTop = marginTop;
  
  // API methods
  chart.redraw = redraw;
  chart.addSeries = addSeries;
  chart.getSelectedPoints = getSelectedPoints;
  chart.getSelectedSeries = getSelectedSeries;
  chart.showLoading = showLoading;
  chart.hideLoading = hideLoading;
  chart.get = get;
  chart.destroy = destroy;
  
  chart.updatePosition = updatePosition; // docs
  
  chart.plotLayer = plotLayer = new Layer('plot', container, null, {
    position: ABSOLUTE,
    width: plotWidth + PX,
    height: plotHeight + PX,
    left: marginLeft + PX,
    top: marginTop + PX,
    overflow: HIDDEN,
    zIndex: 3
  });
  
  
  // Wait for loading of plot area background
  if (optionsChart.plotBackgroundImage) {
    chart.addLoading('plotBack');
    plotBackground = createElement('img');
    plotBackground.onload = function() {
      chart.clearLoading('plotBack');
    }
    plotBackground.src = optionsChart.plotBackgroundImage;
  }
  
  // Initialize the series
  //initSeries();
  each (options.series || [], function(serieOptions) {
    initSeries(serieOptions);
  });
  
  // Mouse tracker must be initiated after series because it depends on inverted
  chart.tracker = tracker = new MouseTracker(chart, options.tooltip);
  
  
  checkResources();
  
};

/**
 * The Point object and prototype. Inheritable and used as base for PiePoint
 */
var Point = function() {};
Point.prototype = {

  /**
   * Initialize the point
    * @param {Object} series The series object containing this point
    * @param {Object} options The data in either number, array or object format
   */
  init: function(series, options) {
    var point = this;
    point.series = series;
    point.applyOptions(options);
    
    return point;
  },
  /**
   * Apply the options containing the x and y data and possible some extra properties.
   * This is called on point init or from point.update.
   * 
   * @param {Object} options
   */
  applyOptions: function(options) {
    var point = this,
      series = point.series,
      n;
  
    
    // onedimensional array input
    if (typeof options == 'number' || options === null) {
      //point.x = i;
      point.y = options;  
    }
    
    // object input
    else if (typeof options == 'object' && typeof options.length != 'number') {
      
      // copy options directly to point
      //for (n in options) point[n] = options[n];
      extend(point, options);
      
      point.options = options;
      // set x and y
      //point.x = options.x;
      //point.y = options.y;
    }
    
    // categorized data with name in first position
    else if (typeof options[0] == 'string') {
      point.name = options[0];
      //point.x = i;
      point.y = options[1];
    }
    
    // two-dimentional array
    else if (typeof options[0] ==  'number') {
      point.x = options[0];
      point.y = options[1];
    }
    
    /* 
     * If no x is set by now, get auto incremented value. All points must have an
     * x value, however the y value can be null to create a gap in the series
     */
    if (point.x === undefined) point.x = series.autoIncrement();
  },
  
  /**
   * Clear memory
   */
  destroy: function() {
    var point = this;
    
    if (point.stateLayer) point.stateLayer.destroy();
    for (prop in point) point[prop] = null; 
  },
  
  /**
   * Toggle the selection status of a point
   * @param {Boolean} selected Whether to select or unselect the point.
   * @param {Boolean} accumulate Whether to add to the previous selection. By default,
   *     this happens if the control key (Cmd on Mac) was pressed during clicking.
   */
  select: function(selected, accumulate) {
    var point = this,
      series = point.series,
      chart = series.chart,
      stateLayers,
      state,
      singlePointLayer = pick(point.stateLayer, series.singlePointLayer, chart.singlePointLayer);
      
    //point.selected = !point.selected;
    // if called without an argument, toggle
    //series.selected = selected = (selected === undefined) ? !series.selected : selected;
    point.selected = selected = pick(selected, !point.selected);
    
    series.isDirty = true;
    point.firePointEvent(selected ? 'select' : 'unselect');
    
    // remove the hover marker so the user can see the underlying marker changes to selected
    if (singlePointLayer) singlePointLayer.clear();
    
    
    each (chart.series, function (series) {
      stateLayers = series.stateLayers;
      
      // unselect all other points unless Ctrl or Cmd + click
      if (!accumulate) each (series.data, function(loopPoint) {
        if (loopPoint.selected && loopPoint != point) {
          loopPoint.selected = false;
          fireEvent(loopPoint, 'unselect');
          series.isDirty = true;
        }
      });
      
      
      // Just render the series, not the entire chart. Also, don't redraw
      // with new translation and all. 
      if (series.isDirty) {
        for (state in stateLayers) {
          stateLayers[state].clear();
        }
        series.render();
      }
    })
    
  },
  
  /**
   * Update the point with new options (typically x/y data) and optionally redraw the series.
   * 
   * @param {Object} options Point options as defined in the series.data array
   * @param {Boolean} redraw Whether to redraw the chart or wait for an explicit call
   * 
   */
  update: function(options, redraw) {
    var point = this,
      series = point.series;
    redraw = pick(redraw, true);
    
    // fire the event with a default handler of doing the update
    point.firePointEvent('update', { options: options }, function() {

      point.applyOptions(options);
  
      // redraw
      series.isDirty = true;
      if (redraw) series.chart.redraw();
    });
  },
  
  /**
   * Remove a point and optionally redraw the series and if necessary the axes
   * @param {Boolean} redraw Whether to redraw the chart or wait for an explicit call
   */
  remove: function(redraw) {
    var point = this,
      series = point.series,
      chart = series.chart,
      data = series.data;
    
    redraw = pick(redraw, true);
    
    // fire the event with a default handler of removing the point      
    point.firePointEvent('remove', null, function() {

      // loop through the data to locate the point and remove it
      each(data, function(existingPoint, i) {
        if (existingPoint == point) {
          data.splice(i, 1);
        }
      })
      
      // pies have separate point layers and legend items
      if (point.layer) point.layer = point.layer.destroy();
      if (point.legendItem) {
        discardElement(point.legendItem);
        point.legendItem = null;
        chart.isDirty = true;
      }
      
      // redraw
      series.isDirty = true;
      if (redraw) chart.redraw();
    })
      
    
  },
  
  /**
   * Fire an event on the Point object. Must not be renamed to fireEvent, as this
   * causes a name clash in MooTools
   * @param {String} eventType
   * @param {Object} eventArgs Additional event arguments
   * @param {Function} defaultFunction Default event handler
   */
  firePointEvent: function(eventType, eventArgs, defaultFunction) {
    var point = this,
      series = this.series,
      seriesOptions = series.options;
    
    // load event handlers on demand to save time on mouseover/out
    if (seriesOptions.point.events[eventType] || (
        point.options && point.options.events && point.options.events[eventType])) 
      this.importEvents();
      
    // add default handler if in selection mode
    if (eventType == 'click' && seriesOptions.allowPointSelect)
      defaultFunction = function (event) {
        // Control key is for Windows, meta (= Cmd key) for Mac, Shift for Opera
        point.select(null, event.ctrlKey || event.metaKey || event.shiftKey);
      } 
      
    fireEvent(this, eventType, eventArgs, defaultFunction);
  },
  /**
   * Import events from the series' and point's options. Only do it on 
   * demand, to save processing time on hovering.
   */
  importEvents: function() {
    if (!this.hasImportedEvents) {
      var point = this,
        options = merge (point.series.options.point, point.options),
        events = options.events,
        eventType;
        
      point.events = events;
      
      for (eventType in events) {
        addEvent(point, eventType, events[eventType]);
      }
      this.hasImportedEvents = true;
    }
  },
  
  setTooltipText: function() {
    var point = this;
    point.tooltipText = point.series.chart.options.tooltip.formatter.call({
      series: point.series,
      point: point,
      x: point.category, 
      y: point.y,
      percentage: point.percentage,
      total: point.stackTotal
    });
  }  
};

/**
 * The base function which all other series types inherit from
 * @param {Object} chart
 * @param {Object} options
 */
var Series = function() {
  this.isCartesian = true;
  this.type = 'line';
  this.pointClass = Point;
};

Series.prototype = {
  init: function(chart, options) {
    var series = this,
      eventType,
      events,
      pointEvent,
      index = chart.series.length;
      
    series.chart = chart;
    options = series.setOptions(options); // merge with plotOptions
    
    // set some variables
    extend (series, {
      index: index,
      options: options,
      name: options.name || 'Series '+ (index + 1),
      state: '',
      visible: options.visible !== false, // true by default
      selected: options.selected == true // false by default
    });
    
    // register event listeners
    events = options.events;
    for (eventType in events) {
      addEvent(series, eventType, events[eventType]);
    }
    
    series.getColor();
    series.getSymbol();
    
    // get the data and go on when the data is loaded
    series.getData(options);
      
  },
  getData: function(options) {
    var series = this,
      chart = series.chart,
      loadingId = 'series'+ idCounter++;
    
    // Ajax loaded data
    if (!options.data && options.dataURL) {
      chart.addLoading(loadingId);
      getAjax(options.dataURL, function(data) {
        series.dataLoaded(data);
        chart.clearLoading(loadingId);
      });
    } else {
      series.dataLoaded(options.data);
    }
  },
  dataLoaded: function(data) {
    var series = this,
      chart = series.chart,
      options = series.options,
      enabledStates = [''],
      //data = series.data,
      dataParser = options.dataParser,
      stateLayers = {},
      layerGroup,
      point,
      //pointInterval = options.pointInterval || 1,
      x;
    
    // if no dataParser is defined for ajax loaded data, assume JSON and eval the code
    if (options.dataURL && !dataParser) 
      dataParser = function(data){
        return eval(data);
      }
    // dataParser is defined, run parsing
    if (dataParser) data = dataParser.call(series, data);
    
    
    // create the group layer (TODO: move to render?)
    series.layerGroup = layerGroup = new Layer('series-group', chart.plotLayer.div, null, {
      zIndex: 2 // labels are underneath
    });
    
    if (options.states.hover.enabled) enabledStates.push('hover');
    each(enabledStates, function(state) { // create the state layers
      stateLayers[state] = new Layer('state-'+ state, layerGroup.div);
    });
    series.stateLayers = stateLayers;
    
    series.setData(data, false);
  
  },
  
  /**
   * Return an auto incremented x value based on the pointStart and pointInterval options. 
   * This is only used if an x value is not given for the point that calls autoIncrement.
   */
  autoIncrement: function() {
    var series = this,
      options = series.options,
      xIncrement = series.xIncrement;
      
    xIncrement = pick(xIncrement, options.pointStart, 0);
    
    series.pointInterval = pick(series.pointInterval, options.pointInterval, 1);
    
    series.xIncrement = xIncrement + series.pointInterval;
    return xIncrement;
  },
  
  /**
   * Sort the data and remove duplicates
   * 
   * @todo: For reversed x axis, reverse the data once and for all here
   */
  cleanData: function() {
    var series = this,
      data = series.data,
      i;
      //smallestInterval,
      //closestPoints,
      //interval;
      
    // sort the data points
    data.sort(function(a, b){
      return (a.x - b.x);
    });
    
    // remove points with equal x values
    // record the closest distance for calculation of column widths
    for (i = data.length - 1; i >= 0; i--) {
      if (data[i - 1]) {
        if (data[i - 1].x == data[i].x)  data.splice(i - 1, 1); // remove the duplicate
        
        /*interval = data[i].x - data[i - 1].x
        if (smallestInterval === undefined || interval < smallestInterval) {
          smallestInterval = interval;
          closestPoints = i;  
        }*/
      }
    }
    //series.closestPoints = closestPoints;
  },    
    
  /**
   * Divide the series data into segments divided by null values. Also sort
   * the data points and delete duplicate values.
   */
  getSegments: function() {
    var lastNull = -1,
      segments = [],
      data = this.data;
    
    // create the segments
    each (data, function(point, i) {
      if (point.y === null) {
        if (i > lastNull + 1)
          segments.push(data.slice(lastNull + 1, i));
        lastNull = i;  
      } else if (i == data.length - 1) { // last value
        segments.push(data.slice(lastNull + 1, i + 1));
      }
    });
    
    
    this.segments = segments;
    
    
  },
  
  /**
   * Set the series options by merging from the options tree
   * @param {Object} options
   */
  setOptions: function(options) {
    var plotOptions = this.chart.options.plotOptions,
      options = merge(
        plotOptions[this.type], 
        plotOptions.series,
        options
      ),
      normalSeriesMarkerOptions = options.marker,
      hoverSeriesMarkerOptions = options.states.hover.marker;
      
    // default hover values are dynamic based on basic state 
    //var stateOptions = seriesOptions.states[state].marker;
    if (hoverSeriesMarkerOptions.lineWidth === undefined) 
      hoverSeriesMarkerOptions.lineWidth = normalSeriesMarkerOptions.lineWidth + 1;
    if (hoverSeriesMarkerOptions.radius === undefined) 
      hoverSeriesMarkerOptions.radius = normalSeriesMarkerOptions.radius + 1;
    //markerOptions = merge(markerOptions, stateOptions);
    
    return options;
    
  },
  getColor: function(){
    var defaultColors = this.chart.options.colors;
    this.color = this.options.color || defaultColors[colorCounter++] || '#0000ff';
    if (colorCounter >= defaultColors.length) 
      colorCounter = 0;
  },
  getSymbol: function(){
    var defaultSymbols = this.chart.options.symbols,
      symbol = this.options.marker.symbol || 'auto';
    if (symbol == 'auto') symbol = defaultSymbols[symbolCounter++];
    this.symbol = symbol;
    if (symbolCounter >= defaultSymbols.length) 
      symbolCounter = 0;
  },
  
  /**
   * Add a point dynamically after chart load time
   * @param {Object} options Point options as given in series.data
   * @param {Boolean} redraw Whether to redraw the chart or wait for an explicit call
   * @param {Boolean} shift If shift is true, a point is shifted off the start 
   *     of the series as one is appended to the end.
   */
  addPoint: function(options, redraw, shift) {
    var series = this,
      data = series.data,
      point = (new series.pointClass).init(series, options);
      
    redraw = pick(redraw, true);
      
    data.push(point);
    if (shift) data.shift();
    
    
    // redraw
    series.isDirty = true;
    if (redraw) series.chart.redraw();
  },
  
  /**
   * Replace the series data with a new set of data
   * @param {Object} data
   * @param {Object} redraw
   */
  setData: function(data, redraw) {
    var series = this;
    
    // data.push(point);
    // if (shift) data.shift();
    
    // generate the point objects
    //x = options.pointStart || 0;
    series.xIncrement = null; // reset for new data
    data = map(splat(data), function(pointOptions) {
      return (new series.pointClass).init(series, pointOptions);
      //return new PiePoint(series, pointOptions);
      //x += pointInterval;
      //return point;
    });
    
    // set the data
    series.data = data;
  
    series.cleanData();  
    series.getSegments();
    
    // redraw
    series.isDirty = true;
    if (pick(redraw, true)) series.chart.redraw();
  },
  
  
  /**
   * Remove a series and optionally redraw the chart
   * 
   * @param {Boolean} redraw Whether to redraw the chart or wait for an explicit call
   */
  
  remove: function(redraw) {
    var series = this,
      chart = series.chart;
      
    redraw = pick(redraw, true);
    
    if (!series.isRemoving) {  /* prevent triggering native event in jQuery
        (calling the remove function from the remove event) */ 
      series.isRemoving = true;

      // fire the event with a default handler of removing the point      
      fireEvent(series, 'remove', null, function() {
        
        // remove the layer group
        discardElement(series.layerGroup.div);
        
        // remove the area
        each (series.areas, function(area) {
          discardElement(area);
        });
            
        // remove legend item
        discardElement(series.legendItem);
        series.legendItem = null;
        
        
        // loop through the chart series to locate the series and remove it
        each(chart.series, function(existingSeries, i) {
          if (existingSeries == series) {
            chart.series.splice(i, 1);
          }
        })
        
        // redraw
        chart.isDirty = true;
        if (redraw) chart.redraw();
      })
      
    } 
    series.isRemoving = false
  },
  
  /**
   * Translate data points from raw values 0 and 1 to x and y.
   */
  translate: function() {
    var chart = this.chart, 
      series = this, 
      stacking = series.options.stacking,
      categories = series.xAxis.categories,
      yAxis = series.yAxis,
      stack = yAxis.stacks[series.type];
      
    // do the translation
    each(this.data, function(point) {
      var xValue = point.x, 
        yValue = point.y, 
        yBottom, 
        pointStack,
        pointStackTotal;
      point.plotX = series.xAxis.translate(point.x);
      
      // calculate the bottom y value for stacked series
      if (stacking && series.visible && stack[xValue]) {
        pointStack = stack[xValue];
        pointStackTotal = pointStack.total;
        pointStack.cum = yBottom = pointStack.cum - yValue; // start from top
        yValue = yBottom + yValue;
        
        if (stacking == 'percent') {
          yBottom = pointStackTotal ? yBottom * 100 / pointStackTotal : 0;
          yValue = pointStackTotal ? yValue * 100 / pointStackTotal : 0;
        }
        point.percentage = pointStackTotal ? point.y * 100 / pointStackTotal : 0;
        point.stackTotal = pointStackTotal;
        point.yBottom = yAxis.translate(yBottom, 0, 1);
      }
      
      // set the y value
      if (yValue !== null) 
        point.plotY = yAxis.translate(yValue, 0, 1);
      
      // set client related positions for mouse tracking
      point.clientX = chart.inverted ? 
        chart.plotHeight - point.plotX + chart.plotTop : 
        point.plotX + chart.plotLeft; // for mouse tracking
        
      // some API data
      point.category = categories && categories[point.x] !== undefined ? 
        categories[point.x] : point.x;
        
        
    });
  },
  /**
   * Memoize tooltip texts and positions
   */
  setTooltipPoints: function (renew) {
    var series = this,
      chart = series.chart,
      inverted = chart.inverted,
      //concatenated = [],
      data = [],
      plotSize = inverted ? chart.plotHeight : chart.plotWidth,
      low,
      high,
      tooltipPoints = []; // a lookup array for each pixel in the x dimension
      
    // renew
    if (renew) series.tooltipPoints = null;
      
    // concat segments to overcome null values
    each (series.segments, function(segment){
      data = data.concat(segment);
    });
    
    // loop the concatenated data and apply each point to all the closest
    // pixel positions
    if (series.xAxis.reversed) data = data.reverse();//reverseArray(data);
    each (data, function(point, i) {
      
      
      if (!series.tooltipPoints) // only create the text the first time, not on zoom
        point.setTooltipText();
      
      low = data[i - 1] ? data [i - 1].high + 1 : 0;
      high = point.high = data[i + 1] ? (
        mathFloor((point.plotX + (data[i + 1] ? 
          data[i + 1].plotX : plotSize)) / 2)) :
          plotSize;
      
      while (low <= high) {
        tooltipPoints[inverted ? plotSize - low++ : low++] = point;
      }
    });
    series.tooltipPoints = tooltipPoints;
  },
  
  
  /**
   * Draw the actual graph
   */
  drawLine: function(state) {
    var i, 
      j, 
      series = this, 
      options = series.options, 
      chart = series.chart, 
      doAnimation = options.animation && series.animate,
      layer = series.stateLayers[state], 
      data = series.data, 
      color = options.lineColor || series.color, 
      fillColor = options.fillColor == 'auto' ? 
        Color(series.color).setOpacity(options.fillOpacity || 0.75).get() : 
        options.fillColor, 
      inverted = chart.inverted, 
      y0 = (inverted ? 0 : chart.plotHeight) - series.yAxis.translate(0);
    
    // get state options
    if (state) 
      options = merge(options, options.states[state]);
      
    
    // initiate the animation
    if (doAnimation) series.animate(true);
    
    // divide into segments
    each(series.segments, function(segment){
      var line = [], 
        area = [];
      
      // get the points
      each(segment, function(point, i) {
        if (i && options.step) {
          var lastPoint = segment[i - 1];
          line.push (
            inverted ? chart.plotWidth - lastPoint.plotY : point.plotX, 
            inverted ? chart.plotHeight - point.plotX : lastPoint.plotY            
          );
        }

        line.push(
          inverted ? chart.plotWidth - point.plotY : point.plotX, 
          inverted ? chart.plotHeight - point.plotX : point.plotY
        );
      });
      
      // draw the area
      if (/area/.test(series.type)) {
        for (i = 0; i < line.length; i++) 
          area.push(line[i]);
        if (options.stacking && series.type != 'areaspline') {
          // follow stack back. Todo: implement areaspline
          for (i = segment.length - 1; i >= 0; i--) 
            area.push(segment[i].plotX, segment[i].yBottom);
          
        
        } else { // follow zero line back
          area.push(
            inverted ? y0 : segment[segment.length - 1].plotX, 
            inverted ? chart.plotHeight - segment[segment.length - 1].plotX : y0, 
            inverted ? y0 : segment[0].plotX, 
            inverted ? chart.plotHeight - segment[0].plotX : y0
          );
        }
        layer.drawPolyLine(area, null, null, options.shadow, fillColor);
      }
      // draw the line
      if (options.lineWidth) layer.drawPolyLine(line, color, options.lineWidth, options.shadow);
    });
    
    // experimental animation
    if (doAnimation) series.animate();
    
  },
  /**
   * Experimental animation
   */
  animate: function(init) {
    var series = this,
      chart = series.chart,
      inverted = chart.inverted,
      div = series.layerGroup.div;
    
    if (series.visible) {
      if (init) { // initialize the animation
        setStyles (
          div, 
          extend(
            { overflow: HIDDEN }, 
            inverted ? { height: 0 } : { width: 0 }
          )
        );
      } else { // run the animation
        animate(
          div, 
          inverted ? { height: chart.plotHeight + PX } : { width: chart.plotWidth + PX }, 
          { duration: 1000 }
        );
    
        // delete this function to allow it only once
        this.animate = null;
      }
    }
  },
  
  /**
   * Draw the markers
   */
  drawPoints: function(state){
    var series = this, i,  //state = series.state,
    layer = series.stateLayers[state], 
      seriesOptions = series.options, 
      markerOptions = seriesOptions.marker, 
      data = series.data, 
      chart = series.chart, 
      inverted = chart.inverted;
    
    /*if (state) {
      // default hover values are dynamic based on basic state 
      var stateOptions = seriesOptions.states[state].marker;
      if (stateOptions.lineWidth === undefined) 
        stateOptions.lineWidth = markerOptions.lineWidth + 1;
      if (stateOptions.radius === undefined) 
        stateOptions.radius = markerOptions.radius + 1;
      markerOptions = merge(markerOptions, stateOptions);
    }*/
    
    if (markerOptions.enabled) {
      each(data, function(point){
        if (point.plotY !== undefined) 
          series.drawMarker(
            layer, 
            inverted ? chart.plotWidth - point.plotY : point.plotX, 
            inverted ? chart.plotHeight - point.plotX : point.plotY, 
            merge(markerOptions, point.marker)
          );
        
        // draw the selected mode marker on top of the default one
        if (point.selected)  series.drawPointState(point, 'select', layer);
        
      });
    }
  },
  /**
   * Some config objects, like marker, have a state value that depends on the base value
   * @param {Object} props
   */
  /*getDynamicStateValues: function(base, state, props) {
   each (props, function(value, key) {
   if (state[key] === undefined) state[key] = base[key] + value;
   });
   return state;
   },*/
  /**
   * Draw a single marker into a given layer and position
   */
  drawMarker: function(layer, x, y, options) {
    if (options.lineColor == 'auto') 
      options.lineColor = this.color;
    if (options.fillColor == 'auto') 
      options.fillColor = this.color;
    if (options.symbol == 'auto') 
      options.symbol = this.symbol;
    layer.drawSymbol(
      options.symbol, 
      x, 
      y, 
      options.radius, 
      options.lineWidth, 
      options.lineColor, 
      options.fillColor
    );
  },
  
  /**
   * Draw the data labels
   */
  drawDataLabels: function() {
    if (this.options.dataLabels.enabled) {
      var series = this, 
        i, 
        x, 
        y, 
        data = series.data, 
        options = series.options.dataLabels, 
        color, 
        str, 
        dataLabelsLayer = series.dataLabelsLayer, 
        chart = series.chart, 
        inverted = chart.inverted,
        seriesType = series.type,
        isPie = (seriesType == 'pie'), 
        align;
        
      // create a separate layer for the data labels
      if (dataLabelsLayer) {
        dataLabelsLayer.clear();
      } else {
        series.dataLabelsLayer = dataLabelsLayer = new Layer('data-labels', 
          series.layerGroup.div, 
          null, {
            zIndex: 1
          });
      }
        
      // determine the color
      options.style.color = options.color == 'auto' ? series.color : options.color;
      
      // make the labels for each point
      each(data, function(point){
        var plotX = point.plotX,
          plotY = point.plotY,
          tooltipPos = point.tooltipPos;
          
        str = options.formatter.call({
          x: point.x,
          y: point.y,
          series: series,
          point: point
        });
        x = (inverted ? chart.plotWidth - plotY : plotX) + options.x;
        y = (inverted ? chart.plotHeight - plotX : plotY) + options.y;
        
        // special case for pies
        if (tooltipPos) {
          x = tooltipPos[0] + options.x;
          y = tooltipPos[1] + options.y;
        }
        // special for pies
        if (isPie) {
          if (!point.dataLabelsLayer) point.dataLabelsLayer =  
            new Layer('data-labels', point.layer.div, null, { zIndex: 3} );
          dataLabelsLayer = point.dataLabelsLayer;
        }
        
        // in columns, align the string to the column
        align = options.align;
        if (seriesType == 'column') 
          x += {
            center: point.w / 2,
            right: point.w
          }[align] || 0;
          
        
        if (str) dataLabelsLayer[isPie ? 'drawText' : 'addText'](
          str, 
          x, 
          y, 
          options.style, 
          options.rotation, 
          align
        );
          
      });
      if (!isPie) dataLabelsLayer.strokeText();
      
      // only draw once - todo: different labels in different states and single point label?
      //series.hasDrawnDataLabels = true;
    }
  },
  
  /**
   * Draw a single point in a specific state
   */
  drawPointState: function(point, state, layer){
    var chart = this.chart, 
      inverted = chart.inverted,
      isHoverState = state == 'hover',
      layer = layer || chart.singlePointLayer,
      options = this.options,
      stateOptions;
    
    // a specific layer for the currently active point
    if (isHoverState) {
      if (!layer) layer = chart.singlePointLayer = new Layer(
        'single-point', 
        chart.plotLayer.div, 
        null, 
        { zIndex: 3 }
      );
      layer.clear();
    }
    
    if (state) {
      // merge series hover marker and marker hover marker
      var seriesStateOptions = options.states[state].marker, 
        pointStateOptions = options.marker.states[state];
      
      // the default for hover points is two more than normal radius
      if (isHoverState && pointStateOptions.radius === undefined) 
        pointStateOptions.radius = seriesStateOptions.radius + 2;
        
      // merge all options
      stateOptions = merge(
        options.marker, 
        point.marker, 
        seriesStateOptions, 
        pointStateOptions
      );
      
      // draw the marker
      if (stateOptions && stateOptions.enabled) 
        this.drawMarker(
          layer, 
          inverted ? chart.plotWidth - point.plotY : point.plotX, 
          inverted ? chart.plotHeight - point.plotX : point.plotY, 
          stateOptions
        );
    }
  },
  
  /**
   * Clear DOM objects and free up memory
   */
  destroy: function() {
    var series = this,
      prop;
    
    each (series.data, function(point) {
      point.destroy();
    });
    
    for (prop in series) series[prop] = null; 
  },
  
  /**
   * Render the graph and markers
   */
  render: function() {
    var series = this,
      state, 
      stateLayers = series.stateLayers;
      
    series.drawDataLabels();
    if (series.visible) for (state in stateLayers) {
      series.drawLine(state);
      series.drawPoints(state);      
    }
    else series.setVisible(false, false);
    
    // initially hide other states than normal
    if (!series.hasRendered && stateLayers.hover) {
      stateLayers.hover.hide();
      hasRendered = true;
    }
    
    series.isDirty = false; // means data is in accordance with what you see
    
  },
  
  /**
   * Redraw the series after an update in the axes.
   */
  redraw: function() {
    var series = this;
    
    series.translate();
    series.setTooltipPoints(true);
    /*if (series.chart.options.tooltip.enabled) */series.createArea();
    series.clear();
    
    series.render();
  },
  
  
  /**
   * Clear all graphics and HTML from the series layer group
   */
  clear: function(){
    var stateLayers = this.stateLayers;
    for (var state in stateLayers) {
      stateLayers[state].clear();
      stateLayers[state].cleared = true;
    }
    if (this.dataLabelsLayer) {
      this.dataLabelsLayer.clear();
      this.hasDrawnDataLabels = false;
    }
  },
  
  /**
   * Set the state of the graph and redraw
   */
  setState: function(state) {
    state = state || '';
    if (this.state != state) {
      
      var series = this, 
        stateLayers = series.stateLayers, 
        newStateLayer = stateLayers[state],
        oldStateLayer = stateLayers[series.state],
        singlePointLayer = series.singlePointLayer || series.chart.singlePointLayer;
      
      series.state = state;
      
      if (newStateLayer) { // if not, hover state is disabled
        
        if (state) 
          newStateLayer.show();
        else {
          if (oldStateLayer) oldStateLayer.hide();
          if (singlePointLayer) singlePointLayer.clear();
        }
      }
    }
  },
  
  /**
   * Set the visibility of the graph
   * 
   * @param vis {Boolean} True to show the series, false to hide. If undefined,
   *        the visibility is toggled.
   */
  setVisible: function(vis, redraw) {
    var series = this,
      chart = series.chart,
      //imagemap = chart.imagemap,
      layerGroup = series.layerGroup,
      legendItem = series.legendItem,
      areas = series.areas,
      oldVisibility = series.visible;
    
    // if called without an argument, toggle visibility
    series.visible = vis = vis === undefined ? !oldVisibility : vis;
    
    if (vis) {
      series.isDirty = true; // when series is initially hidden
      
      layerGroup.show();
    } else { 
      layerGroup.hide();
    }
      
    if (legendItem) { 
      legendItem.className = vis ? '' : HIGHCHARTS_HIDDEN;
      chart.legend.drawGraphics(true);
    }
      
    // hide or show areas
    if (areas) each (areas, function(area) {
      if (vis)
        //imagemap.insertBefore(area, imagemap.childNodes[1]);
        chart.tracker.insertAtFront(area); 
      else
        discardElement(area);
    });
    
    // rescale
    if (chart.options.chart.ignoreHiddenSeries) {
      
      // in a stack, all other series are affected
      if (series.options.stacking) each (chart.series, function(otherSeries) {
        if (otherSeries.options.stacking && otherSeries.visible) 
          otherSeries.isDirty = true;
      }); 
      
    }
    if (redraw !== false) chart.redraw();
    
    fireEvent(series, vis ? 'show' : 'hide');
  },
  
  /**
   * Show the graph
   */
  show: function() {
    this.setVisible(true);
  },
  
  /**
   * Hide the graph
   */
  hide: function() {
    this.setVisible(false);
  },
  
  
  /**
   * Set the selected state of the graph
   * 
   * @param selected {Boolean} True to select the series, false to unselect. If
   *        undefined, the selection state is toggled.
   */
  select: function(selected) {
    var series = this;
    // if called without an argument, toggle
    series.selected = selected = (selected === undefined) ? !series.selected : selected;

    if (series.checkbox) series.checkbox.checked = selected;
    
    fireEvent(series, selected ? 'select' : 'unselect');
  },
  
  /**
   * Calculate the mouseover area coordinates for a given data series
   */
  getAreaCoords: function(){
  
    var data = this.data, 
      series = this, 
      datas = [], 
      chart = this.chart, 
      inverted = chart.inverted, 
      plotWidth = chart.plotWidth, 
      plotHeight = chart.plotHeight, 
      reversedXAxis = series.xAxis.reversed,
      reversedData,
      snap = chart.options.tooltip.snap,
      dataIsReverse,
      i = 0, 
      ret = [];
    
    each(series.splinedata || series.segments, function(data, i) {
      //if (reversedXAxis) data.reverse();//reverseArray(data);
      
      // Reverse the data in case of a reversed x axis. Spline data
      // is already reversed at this point, so we need to actually
      // inspect the data x values.
      reversedData = data.length > 1 && data[0].x > data[1].x;
      if (reversedData && !reversedXAxis || reversedXAxis && !reversedData) {
        data = data.reverse();
      }
      
      var coords = [], outlineTop = [], outlineBottom = [];
      each([outlineTop, outlineBottom], function(outline){
        var last = 0, i = 0, extreme, slice, 
          peaks = [data[0]], // add the first point at init
           sign = outline == outlineTop ? 1 : -1, 
          intersects, 
          num, 
          x, y, lastX, lastY, x1, y1, x2, y2, dX, dY, pX, pY, l, factor, p1, p2, mA, mB, iX, iY, area;
        
        // pull out the highest and lowest peaks in slices of {snap} width,
        // push these peaks into the peaks array.
        while (data[i]) {
          if (data[i].plotX > data[last].plotX + snap || i == data.length - 1) {
            extreme = data[i];
            slice = data.slice(last, i - 1);
            each(slice, function(point) {
              if (sign * point.plotY < sign * extreme.plotY) {
                extreme = point;
              }
            });
            // push it only if we have moved on along the x axis
            if (mathRound(data[last].plotX) < mathRound(extreme.plotX) ||
                data[i].plotX > data[last].plotX + snap) {
              peaks.push(extreme);
            }
            
            last = i;
          }
          i++;
        }
        
        // push the last point
        if (peaks[peaks.length - 1] != data[data.length-1])
          peaks.push(data[data.length - 1]);
          
        
        
        // loop through the peaks and calculate rectangles {snap} pixels
        // away from the peaks.
        //peaks = data;
        for (i = 0; i < peaks.length; i++) {
        
          // clickable area
          if (i > 0) {
            // vector from last point to this
            x = peaks[i].plotX;
            y = peaks[i].plotY;
            lastX = peaks[i - 1].plotX;
            lastY = peaks[i - 1].plotY;
            
            
            dX = x - peaks[i - 1].plotX;
            dY = y - peaks[i - 1].plotY;
            
            
            
            // perpendicular vector
            pX = dY;
            pY = -dX;
            
            // length of the perpendicular vector
            l = math.sqrt(math.pow(pX, 2) + math.pow(pY, 2));
            
            
            // extend the line by {snap} pixels
            if (i == 1) {
              lastX -= (snap / l) * dX;
              lastY -= (snap / l) * dY;
            
            } else if (i == peaks.length - 1) {
              x += (snap / l) * dX;
              y += (snap / l) * dY;
            }
            
            // factors compared to snap
            factor = sign * snap / l;
            
            // incremental calculation of the top and bottom line
            
            // the new upper parallel vector
            x1 = mathRound(lastX + factor * pX);
            y1 = mathRound(lastY + factor * pY);
            x2 = mathRound(x + factor * pX);
            y2 = mathRound(y + factor * pY);
            
            // loop back until this line intersects a previous line
            if (outline[outline.length - 1] && outline[outline.length - 1][0] > x1) {
              intersects = false;
              while (!intersects) {
                p2 = outline.pop();
                p1 = outline[outline.length - 1];
                if (!p1) 
                  break;
                // get intersection point
                // http://www.ultrashock.com/forums/showthread.php?t=81785
                mA = (y1 - y2) / (x1 - x2);
                mB = (p1[1] - p2[1]) / (p1[0] - p2[0]);
                
                iX = ((-mB * p1[0]) + p1[1] + (mA * x1) - y1) / (mA - mB);
                iY = (mA * (iX - x1)) + y1;
                
                if (iX > p1[0]) {
                  outline.push([mathRound(iX), mathRound(iY), 1]);
                  intersects = true;
                }
                
              }
            }
            else {
              if (!isNaN(x1)) 
                outline.push([x1, y1]);
            }
            if (outline[outline.length - 1] && outline[outline.length - 1][0] < x2) 
              outline.push([x2, y2]);
          }
        }
        
        
        
      });
      
      // area for detecting moveover
      for (i = 0; i < outlineTop.length; i++) { // top of the area
        coords.push(
          inverted ? plotWidth - outlineTop[i][1] : outlineTop[i][0], 
          inverted ? plotHeight - outlineTop[i][0] : outlineTop[i][1]
        );
        
      }
      for (i = outlineBottom.length - 1; i >= 0; i--) { // bottom of the area
        coords.push(
          inverted ? plotWidth - outlineBottom[i][1] : outlineBottom[i][0], 
          inverted ? plotHeight - outlineBottom[i][0] : outlineBottom[i][1]
        );
      }
      
      // single point: make circle
      if (!coords.length) {
        coords.push(mathRound(data[0].plotX), mathRound(data[0].plotY));
      }
      
      // visualize
      //series.stateLayers[''].drawPolyLine(coords, '#afaf00', 1);
      
      if (coords.length) ret.push([coords.join(',')]);
      
      // undo reverse
      //if (reversedXAxis) data.reverse();
    });
    
    return ret;
  },
  
  createArea: function() {
    if (this.options.enableMouseTracking === false) return;
    
    var area, 
      series = this,
      options = series.options,
      chart = series.chart,
      inverted = chart.inverted,
      tracker = chart.tracker,
      //cursor = series.options.cursor,
      coordsArray = series.getAreaCoords(), 
      firstArea, 
      seriesAreas = [],
      existingAreas = series.areas, 
      isCircle;
      
      
    // remove old areas in case of updating
    if (existingAreas) each (existingAreas, function(area) {
      discardElement(area);
    })
      
    // create each area
    each(coordsArray, function(coords) {
      isCircle = /^[0-9]+,[0-9]+$/.test(coords[0]);
      area = createElement('area', {
        shape: isCircle ? 'circle' : 'poly',
        chart: chart,
        coords: coords[0] + (isCircle ? ','+ chart.options.tooltip.snap : ''),
        onmouseover: function(e) {
          if (!series.visible || chart.mouseIsDown) return;
          
          var hoverSeries = chart.hoverSeries;
          
          // for column/scatterplots, register that we entered a new column
          // coords[1] contains the reference to a point - if
          // no such reference is given, the area refers to 
          // a series
          chart.hoverPoint = coords[1];
          
          // trigger the event, but to save processing time, 
          // only if defined
          if (options.events.mouseOver) { 
            fireEvent(series, 'mouseOver', {
              point:  chart.hoverPoint
            });
          }
          
          // set normal state to previous series
          if (hoverSeries && hoverSeries != series) 
            hoverSeries.setState();
          
          // bring to front  
          if (!/(column|bar|pie)/.test(series.type)) {
            //imagemap.insertBefore(this, imagemap.childNodes[1]);
            tracker.insertAtFront(area);
          }
          
          // hover this
          series.setState('hover');
          chart.hoverSeries = series;
        },
        onmouseout: function() {
          // trigger the event only if listeners exist
          var hoverSeries = chart.hoverSeries;
          if (hoverSeries && options.events.mouseOut) { 
            fireEvent(hoverSeries, 'mouseOut');
          }
        }
      });
      
      // add a href to make the cursor appear - simply adding
      // the style is not enough for IE.
      if (options.cursor == 'pointer') {
        area.href = 'javascript:;';
        
        /*if (options.allowDrag) {
          setStyles(area, { cursor: {
            'x': inverted ? 'ns-resize' : 'ew-resize',
            'xy': 'move',
            'y': inverted ? 'ew-resize' : 'ns-resize'
          }[options.dragType] });
        }*/
      }
    
      
      // insert latest on top
      tracker.insertAtFront(area);
      seriesAreas.push(area);
    });
    series.areas = seriesAreas;
    
  }
  
}; // end Series prototype


/**
 * LineSeries object
 */
var LineSeries = extendClass(Series);
seriesTypes.line = LineSeries;
  

/**
 * AreaSeries object
 */
var AreaSeries = extendClass(Series, {
  type: 'area'
});
seriesTypes.area = AreaSeries;
    

/**
 * SplineSeries object
 */
var SplineSeries = extendClass( Series, {
  type: 'spline',
  /**
   * Translate the points and get the spline data
   */
  translate: function() {
    var series = this;
    
    // do the partent translate
    Series.prototype.translate.apply(series, arguments);
    
    // get the spline data
    series.splinedata = series.getSplineData();
    
  },
  /**
   * Draw the actual spline line with interpolated values
   * @param {Object} state
   */
  drawLine: function(state) {
    var series = this,
      realSegments = series.segments; 
    
    // temporarily set the segments to reflect the spline
    series.segments = series.splinedata;// || series.getSplineData();
    
    // draw the line
    Series.prototype.drawLine.apply(series, arguments);
    
    // reset the segments
    series.segments = realSegments;  
  },
  /**
   * Get interpolated spline values
   */
  getSplineData: function() {
    var series = this, 
      chart = series.chart,
      //data = this.data,
      splinedata = [],
      num;
      
    each (series.segments, function(data) {
      if (series.xAxis.reversed) data = data.reverse();//reverseArray(data);
      var croppedData = [],
        nextUp,
        nextDown;
      
      // to save calculations, only add data within the plot
      each (data, function(point, i) {
        nextUp = data[i+2] || data[i+1] || point;
        nextDown = data[i-2] || data[i-1] || point;
        if (nextUp.plotX > 0 && nextDown.plotY < chart.plotWidth) {
          croppedData.push(point);
        }
      });
      
        
      // 3px intervals:
      if (croppedData.length > 1) {
        num = mathRound(mathMax(chart.plotWidth, 
          croppedData[croppedData.length-1].clientX  - croppedData[0].clientX) / 3);
      }
      splinedata.push (
        data.length > 1 ? // if the data.length is one, it's a single point so we can't spline it
          num ? (new SplineHelper(croppedData)).get(num) : [] :
          data
      );
    });
    series.splinedata = splinedata;
    return splinedata;
  }
});
seriesTypes.spline = SplineSeries;
    

/**
 * Calculate the spine interpolation.
 * 
 * @todo: Implement true Bezier curves like shown at http://www.math.ucla.edu/~baker/java/hoefer/Spline.htm
 */
function SplineHelper (data) {
  var xdata = [];
  var ydata = [];
  for (var i = 0; i < data.length; i++) {
    xdata[i] = data[i].plotX;
    ydata[i] = data[i].plotY;
  }
  this.xdata = xdata;
  this.ydata = ydata;
  var delta = [];
  this.y2 = [];

  var n = ydata.length;
  this.n = n;

  // Natural spline 2:derivate == 0 at endpoints
  this.y2[0]    = 0.0;
  this.y2[n-1] = 0.0;
  delta[0] = 0.0;

  // Calculate 2:nd derivate
  for(var i=1; i < n-1; i++) {
      var d = (xdata[i+1]-xdata[i-1]);
      /*if( d == 0  ) {
      error: ('Invalid input data for spline. Two or more consecutive input X-values are equal. Each input X-value must differ since from a mathematical point of view it must be a one-to-one mapping, i.e. each X-value must correspond to exactly one Y-value.');
      }*/
      var s = (xdata[i]-xdata[i-1])/d;
      var p = s*this.y2[i-1]+2.0;
      this.y2[i] = (s-1.0)/p;
      delta[i] = (ydata[i+1]-ydata[i])/(xdata[i+1]-xdata[i]) -
             (ydata[i]-ydata[i-1])/(xdata[i]-xdata[i-1]);
      delta[i] = (6.0*delta[i]/(xdata[i+1]-xdata[i-1])-s*delta[i-1])/p;
  }

  // Backward substitution
  for(var j=n-2; j >= 0; j-- ) {
      this.y2[j] = this.y2[j]*this.y2[j+1] + delta[j];
  }
};
SplineHelper.prototype = {
// Return the two new data vectors
get: function(num) {
  if (!num) num = 50;
  var n = this.n ;
  var step = (this.xdata[n-1]-this.xdata[0]) / (num-1);
  var xnew=[];
  var ynew=[];
  xnew[0] = this.xdata[0];
  ynew[0] = this.ydata[0];
  var data = [{ plotX: xnew[0], plotY: ynew[0] }];//[[xnew[0], ynew[0]]];

  for(var j = 1; j < num; j++ ) {
      xnew[j] = xnew[0]+j*step;
      ynew[j] = this.interpolate(xnew[j]);
      data[j] = { plotX: xnew[j], plotY: ynew[j] };//[xnew[j], ynew[j]];
  }

  return data;
},

// Return a single interpolated Y-value from an x value
interpolate: function(xpoint) {
  var max = this.n-1;
  var min = 0;

  // Binary search to find interval
  while( max-min > 1 ) {
      var k = (max+min) / 2;
    if( this.xdata[mathFloor(k)] > xpoint )
      max=k;
      else
      min=k;
  }
  var intMax = mathFloor(max), intMin = mathFloor(min);

  // Each interval is interpolated by a 3:degree polynom function
  var h = this.xdata[intMax]-this.xdata[intMin];
  /*if( h == 0  ) {
      error: ('Invalid input data for spline. Two or more consecutive input X-values are equal. Each input X-value must differ since from a mathematical point of view it must be a one-to-one mapping, i.e. each X-value must correspond to exactly one Y-value.');
  }*/


  var a = (this.xdata[intMax]-xpoint)/h;
  var b = (xpoint-this.xdata[intMin])/h;
  return a*this.ydata[intMin]+b*this.ydata[intMax]+
       ((a*a*a-a)*this.y2[intMin]+(b*b*b-b)*this.y2[intMax])*(h*h)/6.0;
}

};


/**
 * AreaSplineSeries object
 */
var AreaSplineSeries = extendClass(SplineSeries, {
  type: 'areaspline'
});
seriesTypes.areaspline = AreaSplineSeries
    

/**
 * ColumnSeries object
 */
var ColumnSeries = extendClass(Series, {
  type: 'column',
  
  init: function() {
    Series.prototype.init.apply(this, arguments);
    
    var series = this,
      chart = series.chart;
    
    
    // record number of column series to calculate column width
    //if (!series.options.stacking) series.countColumn = true;
    
    // if the series is added dynamically, force redraw of other
    // series affected by a new column
    if (chart.hasRendered) each (chart.series, function(otherSeries) {
      if (otherSeries.type == series.type) otherSeries.isDirty = true;
    });
  },
  
  translate: function() {
    var series = this,
      chart = series.chart,
      columnCount = 0,
      stackedIndex; // the index of the first column in a stack
    
    Series.prototype.translate.apply(series);
    
    // Get the total number of column type series.
    // This is called on every series. Consider moving this logic to a 
    // chart.orderStacks() function and call it on init, addSeries and removeSeries
    each (chart.series, function(otherSeries) {
      if (otherSeries.type == series.type) {
        if (!otherSeries.options.stacking) {
          otherSeries.columnIndex = columnCount++;
        } else {
          if (!defined(stackedIndex)) stackedIndex = columnCount++;
          otherSeries.columnIndex = stackedIndex;
        }
      }
    });
    
    // calculate the width and position of each column based on 
    // the number of column series in the plot, the groupPadding
    // and the pointPadding options
    var options = series.options,
      data = series.data,
      inverted = chart.inverted,
      plotWidth = chart.plotWidth,
      plotHeight = chart.plotHeight,
      closestPoints = series.closestPoints,
      categoryWidth = mathAbs(
        data[1] ? data[closestPoints].plotX - data[closestPoints - 1].plotX : 
        (inverted ? plotHeight : plotWidth)
      ),
      groupPadding = categoryWidth * options.groupPadding,
      groupWidth = categoryWidth - 2 * groupPadding,
      pointOffsetWidth = groupWidth / columnCount,
      optionPointWidth = options.pointWidth,
      pointPadding = defined(optionPointWidth) ? (pointOffsetWidth - optionPointWidth) / 2 : 
        pointOffsetWidth * options.pointPadding,
      pointWidth = pick(optionPointWidth, pointOffsetWidth - 2 * pointPadding),
      columnIndex = (chart.options.xAxis.reversed ? columnCount - 
        series.columnIndex : series.columnIndex) || 0,
      pointX = -(categoryWidth / 2) + groupPadding + columnIndex *
        pointOffsetWidth + pointPadding,
      //pointY0 = plotWidth - chart.xAxis.translate(0),
      translatedY0 = series.yAxis.translate(0);
      
    // record the new values
    each (data, function(point) {
      point.plotX += pointX;
      point.w = pointWidth;
      point.y0 = (inverted ? plotWidth : plotHeight) - translatedY0;
      point.h = (point.yBottom || point.y0) - point.plotY;
    });
    
    
  },
  
  drawLine: function() {
  },
  
  getSymbol: function(){
  },
  
  drawPoints: function(state) {
    var series = this,
      options = series.options,
      chart = series.chart,
      doAnimation = options.animation && series.animate,
      plot = chart.plot,
      inverted = chart.inverted,
      data = series.data,
      layer = series.stateLayers[state];
      
    // make ready for animation
    if (doAnimation) this.animate(true);
      
    // draw the columns
    // todo: record the rectangle coordinates and reuse them for the mouseover area
    each (data, function(point) {
      if (point.plotY !== undefined) layer.drawRect(
        inverted ? 
          (point.h >= 0 ? chart.plotWidth - point.plotY - point.h : chart.plotWidth - point.plotY) :        
          point.plotX,
        inverted ? chart.plotHeight - point.plotX - point.w : 
          (point.h >= 0 ? point.plotY : point.plotY + point.h), // for negative bars, subtract h (Opera) 
        inverted ? mathAbs(point.h) : point.w, 
        inverted ? point.w : mathAbs(point.h),
        options.borderColor, 
        options.borderWidth, 
        options.borderRadius, 
        point.color || series.color,
        options.shadow
      );
      
      // draw the selected mode marker on top of the default one
      if (point.selected)  series.drawPointState(point, 'select', layer);
    });
    if (doAnimation) series.animate();
  },
  

  /**
   * Draw a single point in hover state
   */
  drawPointState: function(point, state, layer) {
    // local vars
    var series = this,
      chart = series.chart,
      seriesOptions = series.options,
      pointOptions = point ? point.options : null,  
      plot = chart.plot,
      inverted = chart.inverted,
      //singlePointLayer = series.singlePointLayer;
      layer = layer || series.singlePointLayer; 
      
    // use one layer each series as opposed to the chartwide singlePointLayer for line-type series.
    /*if (!singlePointLayer) singlePointLayer = series.singlePointLayer = new Layer(
        'single-point-layer', 
        series.layerGroup.div
      );
    singlePointLayer.clear();*/
        
    // a specific layer for the currently active point
    if (state == 'hover') {
      if (!layer) layer = series.singlePointLayer = new Layer(
        'single-point',  
        series.layerGroup.div
      );
      layer.clear();
    }
    
    // draw the column
    if (state && this.options.states[state]) {
      var options = merge(
        seriesOptions, 
        seriesOptions.states[state],
        pointOptions
      );
      layer.drawRect(
        inverted ? chart.plotWidth - point.plotY - point.h : point.plotX, 
        inverted ? chart.plotHeight - point.plotX - point.w : point.plotY, 
        inverted ? point.h : point.w, 
        inverted ? point.w : point.h, 
        options.borderColor, 
        options.borderWidth, 
        options.borderRadius, 
        Color(options.color || this.color).brighten(options.brightness).get(), 
        options.shadow    
      )
    }
  },
  
  getAreaCoords: function() {
    var areas = [],
      chart = this.chart,
      inverted = chart.inverted;
    each (this.data, function(point) {
      var pointH = mathMax(mathAbs(point.h), 3) * (point.h < 0 ? -1 : 1),
        x1 = inverted ? chart.plotWidth - point.plotY - pointH : point.plotX,
        y2 = inverted ? chart.plotHeight - point.plotX - point.w  : point.plotY,
        y1 = y2 + (inverted ? point.w : pointH),
        x2 = x1 + (inverted ? pointH : point.w);
        
      // make sure tightly packed colums can receive mouseover
      if (!inverted && mathAbs(x2 - x1) < 1) x2 = x1 + 1;
      else if (inverted && mathAbs(y2 - y1) < 1) y2 = y1 + 1;
        
      // push an array containing the coordinates and the point
      areas.push([
        map([
          x1, y1, 
          x1, y2, 
          x2, y2, 
          x2, y1
        ], mathRound).join(','),
        point
      ]);
    });
    return areas;
  },
  
  cleanData: function() {
    var series = this,
      data = series.data,
      interval,
      smallestInterval,
      closestPoints,
      i;
      
    // apply the parent method
    Series.prototype.cleanData.apply(series);
      
    // find the closes pair of points
    for (i = data.length - 1; i >= 0; i--) {
      if (data[i - 1]) {
        interval = data[i].x - data[i - 1].x;
        if (smallestInterval === undefined || interval < smallestInterval) {
          smallestInterval = interval;
          closestPoints = i;  
        }
      }
    }
    series.closestPoints = closestPoints;
  },
  
  animate: function(init) {
    var series = this,
      chart = series.chart,
      inverted = chart.inverted,
      div = series.layerGroup.div,
      dataLabelsLayer = series.dataLabelsLayer;
    if (init) { // initialize the animation
      div.style[inverted ? 'left' : 'top'] = 
        (inverted ? -chart.plotWidth : chart.plotHeight) + PX;
      
        
    } else { // run the animation
      animate(div, chart.inverted ? { left: 0 } : { top: 0 });    
      
      // delete this function to allow it only once
      series.animate = null;
    }
    
  },
  /**
   * Remove this series from the chart
   */
  remove: function() {
    var series = this,
      chart = series.chart;
      
    // column and bar series affects other series of the same type
    // as they are either stacked or grouped
    if (chart.hasRendered) each (chart.series, function(otherSeries) {
      if (otherSeries.type == series.type) otherSeries.isDirty = true;
    });
    
    Series.prototype.remove.apply(series, arguments);
  }
});
seriesTypes.column = ColumnSeries;

var BarSeries = extendClass(ColumnSeries, {
  type: 'bar',
  init: function(chart) {
    chart.inverted = this.inverted = true;
    ColumnSeries.prototype.init.apply(this, arguments);
  }
});
seriesTypes.bar = BarSeries;
    

/**
 * The scatter series class
 */
var ScatterSeries = extendClass(Series, {
  type: 'scatter', 
  /**
   * Calculate the mouseover area coordinates for a given data series
   */
  getAreaCoords: function () {

    var data = this.data,
      coords, 
      ret = [];
      
      
    each (data, function(point) {
      // create a circle for each point
      ret.push([[mathRound(point.plotX), mathRound(point.plotY)].join(','), point]);
    });
    return ret;
  },
  /**
   * Cleaning the data is not necessary in a scatter plot
   */
  cleanData: function() {}
});
seriesTypes.scatter = ScatterSeries;

/**
 * Extended point object for pies
 */
var PiePoint = extendClass(Point, {
  setState: function(state) {
    this.series.drawPointState(this, state);
  },
  init: function () {
    
    Point.prototype.init.apply(this, arguments);
    
    var point = this,
      series = point.series,
      defaultColors = series.chart.options.colors,
      toggleSlice;
    
    //visible: options.visible !== false,
    extend(point, {
      visible: point.visible !== false,
      name: pick(point.name, 'Slice'),
      color: point.color || defaultColors[colorCounter++]
    });
    
    // loop back to zero
    if (colorCounter >= defaultColors.length) colorCounter = 0;
    
    // create an individual layer
    if (!point.layer) point.layer = new Layer('pie', series.layerGroup.div);
    
    // add event listener for select
    toggleSlice = function() {
      point.slice();
    }
    addEvent(point, 'select', toggleSlice);
    addEvent(point, 'unselect', toggleSlice);
    
    return point;
  },
  setVisible: function(vis) {
    var point = this, 
      layer = point.layer,
      legendItem = point.legendItem;
      
    
    // if called without an argument, toggle visibility
    point.visible = vis = vis === undefined ? !point.visible : vis;
    
    if (vis) 
      layer.show();
    else 
      layer.hide();
  
    if (legendItem) { 
      legendItem.className = vis ? '' : HIGHCHARTS_HIDDEN;
      point.series.chart.legend.drawGraphics(true);
    }
  },
  /**
   * Set or toggle whether the slice is cut out from the pie
   * @param {Boolean} sliced When undefined, the slice state is toggled 
   * @param {Boolean} redraw Whether to redraw the chart. True by default.
   */
  slice: function(sliced, redraw) {
    var point = this,
      series = point.series;
    
    // redraw is true by default
    redraw = pick(redraw, true);
      
    // if called without an argument, toggle
    point.sliced = defined(sliced) ? sliced : !point.sliced;
    
    series.isDirty = true;
    
    if (redraw) series.chart.redraw();
    
  }
});


/**
 * The Pie series class
 */
var PieSeries = extendClass(Series, {
  type: 'pie',
  isCartesian: false,
  pointClass: PiePoint,
  getColor: function() {
    // pie charts have a color each point
  },
  translate: function() {
    var sum = 0,
      series = this,
      cumulative = -0.25, // start at top
      options = series.options,
      slicedOffset = options.slicedOffset,
      positions = options.center,
      size = options.size,
      chart = series.chart,
      data = series.data,
      circ = 2 * math.PI,
      fraction;
      
    // get positions - either an integer or a percentage string must be given
    positions.push(options.size);
    positions = map (positions, function(length, i) {
      return /%$/.test(length) ? 
        // i == 0: centerX, relative to width
        // i == 1: centerY, relative to height
        // i == 2: size, relative to height
        chart['plot' + (i ? 'Height' : 'Width')] * parseInt(length) / 100:
        length;
    });
          
    // get the total sum
    each (data, function(point) {
      sum += point.y;
    });
    
    each (data, function(point) {
      // set start and end angle
      fraction = sum ? point.y / sum : 0
      point.start = cumulative * circ;
      cumulative += fraction;
      point.end = cumulative * circ;
      point.percentage = fraction * 100;
      
      // set size and positions
      point.center = [positions[0], positions[1]];
      point.size = positions[2];
      
      // center for the sliced out slice
      var angle = (point.end + point.start) / 2;
      point.centerSliced = map([
        mathCos(angle) * slicedOffset + positions[0], 
        mathSin(angle) * slicedOffset + positions[1]
      ], mathRound);
      
    });
    
    this.setTooltipPoints();
  },
  
  /**
   * Render the graph and markers
   */
  render: function() {
    //if (!this.pointsDrawn) 
    this.drawPoints();
    this.drawDataLabels();
  },
  
  /**
   * Draw the data points
   * @param {Object} state The state of this graph
   */
  drawPoints: function(state) {
    var series = this;
    
    // draw the slices
    each (this.data, function(point) {
      series.drawPoint(point, point.layer.getCtx(), point.color);
      
      if (point.visible === false) point.setVisible(false);
      
      // draw the selected mode marker on top of the default one
      if (point.selected)  series.drawPointState(point, 'select', point.layer);
      
      //if (point.sliced) this.slice(point);    
    });
    
    //series.pointsDrawn = true;
  },
  
  getSymbol: function(){
  },
  

  /**
   * Draw a single point in hover state
   */
  drawPointState: function(point, state, layer) {
    var series = this,
      seriesOptions = series.options;

    
    if (point) { // drawPointState can be called without arguments to clear states

      // create a special state layer nested in this point's main layer
      /*stateLayer = point.stateLayer;
      if (!stateLayer) 
        stateLayer = point.stateLayer = new Layer('state-layer', point.layer.div);
      stateLayer.clear();*/
      
      // a specific layer for the currently active point
      
      layer = layer || point.stateLayer;
      if (state == 'hover') {
        if (!layer) layer = point.stateLayer = new Layer(
          'single-point',  
          point.layer.div
        );
        layer.clear();
      }
      
      // draw the point
      if (state && series.options.states[state]) {
        var options = merge(seriesOptions, seriesOptions.states[state]);
        this.drawPoint(
          point, 
          layer.getCtx(), 
          options.color || point.color, 
          options.brightness
        );
      }
      
    }
    // clear the old point on register the new one
    if (series.hoverPoint && series.hoverPoint.stateLayer) series.hoverPoint.stateLayer.clear();
    series.hoverPoint = point;
  },
  
  /**
   * Draw a single point (pie slice)
   * @param {Object} point The point object
   * @param {Object} ctx The canvas context to draw it into
   * @param {Object} color The color of the point
   * @param {Object} brightness The brightness relative to the color
   */
  drawPoint: function(point, ctx, color, brightness) {
    var options = this.options,
      center = point.sliced ? point.centerSliced : point.center,
      centerX = center[0],
      centerY = center[1],
      size = point.size,
      borderWidth = options.borderWidth,
      /* IE7 and IE6 fail to render a full circle unless start and
      end points are equal: */
      end = isIE && point.percentage == 100 ? point.start : point.end;
      
    // Todo: make Layer.prototype.drawArc method
    if (point.y > 0) { // drawing 0 will draw a full disc in IE
      ctx.fillStyle = setColor(Color(color).brighten(brightness).get(ctx), ctx);
      ctx.strokeStyle = options.borderColor;
      ctx.lineWidth = borderWidth;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, size / 2, point.start, end, false);
      ctx.lineTo(centerX, centerY);
      ctx.closePath();
      ctx.fill();
      if (borderWidth) ctx.stroke(); // in WebKit, a zero width line will display as 1 if stroked
    }
  },
  /**
   * Pull the slice out from the pie
   * @param {Object} point
   */
  /*slice: function(point) {
    var centerSliced = point.centerSliced;
    setStyles(point.layer, {
      left: centerSliced[0] + PX,
      top: centerSliced[1] + PX
    });
  },*/
  /**
   * Get the coordinates for the mouse tracker area
   */
  getAreaCoords: function() {
    var areas = [];
    var series = this;
    each (this.data, function(point) {
      var centerX = point.center[0],
        centerY = point.center[1],
        radius = point.size / 2,
        start = point.start,
        end = point.end,
        coords = [];
        
      // start building the coordinates from the start point
      // with .25 radians (~15 degrees) increments the coordinates
      for (var angle = start; angle; angle += 0.25) {
        if (angle >= end) angle = end;
        coords = coords.concat([
          centerX + mathCos(angle) * radius,
          centerY + mathSin(angle) * radius
        ])
        if (angle >= end) break;
      }
      
      // wrap it up with the center point    
      coords = coords.concat([
        centerX, centerY
      ]);
            
      // set tooltip position in the center of the sector
      point.tooltipPos = [
        centerX + 2 * mathCos((start + end) / 2) * radius / 3,
        centerY + 2 * mathSin((start + end) / 2) * radius / 3
      ];
      
      // push an array containing the coordinates and the point
      areas.push([
        map(coords, mathRound).join(','),
        point
      ])
      
    });
    return areas;
  },
  
  /**
   * Extend the default setData method by first removing the old points
   */
  setData: function() {
    // destroy old points, since the pie has one layer each point
    var series = this,
      data = series.data,
      i;
    if (data) {
      for (i = data.length - 1; i >= 0; i--) {
        data[i].remove();
      }
    }
    
    Series.prototype.setData.apply(series, arguments);
  },
  
  /**
   * Clear all graphics and HTML from the series layer group
   */
  clear: function() {
    /*var stateLayers = this.stateLayers;
    for (var state in stateLayers) {
      stateLayers[state].clear();
      stateLayers[state].cleared = true;
    }
    if (this.dataLabelsLayer) {
      this.dataLabelsLayer.clear();
      this.hasDrawnDataLabels = false;
    }*/
    // pies have separate layers per point
    each (this.data, function(point) {
      point.layer.clear();
      if (point.dataLabelsLayer) point.dataLabelsLayer.clear();
      if (point.stateLayer) point.stateLayer.clear();
    });
  }
});
seriesTypes.pie = PieSeries;


// global variables
Highcharts = {
  /*'load': function(arr) {
    each (arr, function(url) {
      getAjax(url, function(script) {
        eval(script)
      })
    })
  },*/
  numberFormat: numberFormat,
  dateFormat: dateFormat,
  defaultOptions: defaultOptions,
  setOptions: setOptions,
  Chart: Chart,
  extendClass: extendClass,
  seriesTypes: seriesTypes,
  Layer: Layer
}


})();

jQuery.cookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date();f.setTime(f.getTime()+(m.expires*24*60*60*1000))}else{f=m.expires}e="; expires="+f.toUTCString()}var l=m.path?"; path="+(m.path):"";var g=m.domain?"; domain="+(m.domain):"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==(b+"=")){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};
(function($){$.toJSON=function(o){if(typeof(JSON)=="object"&&JSON.stringify){return JSON.stringify(o)}var type=typeof(o);if(o===null){return"null"}if(type=="undefined"){return undefined}if(type=="number"||type=="boolean"){return o+""}if(type=="string"){return $.quoteString(o)}if(type=="object"){if(typeof o.toJSON=="function"){return $.toJSON(o.toJSON())}if(o.constructor===Date){var month=o.getUTCMonth()+1;if(month<10){month="0"+month}var day=o.getUTCDate();if(day<10){day="0"+day}var year=o.getUTCFullYear();var hours=o.getUTCHours();if(hours<10){hours="0"+hours}var minutes=o.getUTCMinutes();if(minutes<10){minutes="0"+minutes}var seconds=o.getUTCSeconds();if(seconds<10){seconds="0"+seconds}var milli=o.getUTCMilliseconds();if(milli<100){milli="0"+milli}if(milli<10){milli="0"+milli}return'"'+year+"-"+month+"-"+day+"T"+hours+":"+minutes+":"+seconds+"."+milli+'Z"'}if(o.constructor===Array){var ret=[];for(var i=0;i<o.length;i++){ret.push($.toJSON(o[i])||"null")}return"["+ret.join(",")+"]"}var pairs=[];for(var k in o){var name;var type=typeof k;if(type=="number"){name='"'+k+'"'}else{if(type=="string"){name=$.quoteString(k)}else{continue}}if(typeof o[k]=="function"){continue}var val=$.toJSON(o[k]);pairs.push(name+":"+val)}return"{"+pairs.join(", ")+"}"}};$.evalJSON=function(src){if(typeof(JSON)=="object"&&JSON.parse){return JSON.parse(src)}return eval("("+src+")")};$.secureEvalJSON=function(src){if(typeof(JSON)=="object"&&JSON.parse){return JSON.parse(src)}var filtered=src;filtered=filtered.replace(/\\["\\\/bfnrtu]/g,"@");filtered=filtered.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]");filtered=filtered.replace(/(?:^|:|,)(?:\s*\[)+/g,"");if(/^[\],:{}\s]*$/.test(filtered)){return eval("("+src+")")}else{throw new SyntaxError("Error parsing JSON, source is not valid.")}};$.quoteString=function(string){if(string.match(_escapeable)){return'"'+string.replace(_escapeable,function(a){var c=_meta[a];if(typeof c==="string"){return c}c=a.charCodeAt();return"\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16)})+'"'}return'"'+string+'"'};var _escapeable=/["\\\x00-\x1f\x7f-\x9f]/g;var _meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"}})(jQuery);