!function(){"use strict";function t(t,e){for(var n=[],o=void 0,r=[],i=arguments.length,s=Array(i>2?i-2:0),a=2;a<i;a++)s[a-2]=arguments[a];for(n=n.concat(s.reverse());n.length;)Array.isArray(o=n.pop())?o.map(function(t){return n.unshift(t)}):null!=o&&!0!==o&&!1!==o&&("number"==typeof o&&(o+=""),r.push(o));return"string"==typeof t?{type:t,props:e||{},children:r}:t(e||{},r)}function e(t,e){var n={};for(var o in t)n[o]=t[o];for(var r in e)n[r]=e[r];return n}function n(t,n,o,r){if("key"===n);else if("style"===n)for(var i in e(r,o=o||{}))t.style[i]=String(o[i])||"";else{try{t[n]=o}catch(t){}"function"!=typeof o&&(o?"xlink-href"===n?t.setAttributeNS("http://www.w3.org/1999/xlink","href",o):t.setAttribute(n,o):t.removeAttribute(n))}}function o(t,e){return"string"==typeof t?document.createTextNode(t):function(t,e){var r=(e=e||"svg"===t.type)?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type);return Object.keys(t.props).forEach(function(e){return n(r,e,t.props[e])}),t.children.map(function(t){return r.appendChild(o(t,e))}),r}(t,e)}function r(t){if(t&&t.props)return t.props.key}function i(t,s,l,u,c,h){if(null==l)s=t.insertBefore(o(u,c),s);else if(null!=u.type&&u.type===l.type){!function(t,o,r){Object.keys(e(o,r)).forEach(function(e){var i=r[e],s="value"===e||"checked"===e?t[e]:o[e];i!==s&&n(t,e,i,s)})}(s,l.props,u.props),c=c||"svg"===u.type;for(var f=u.children.length,p=l.children.length,d={},m=[],y={},v=0;v<p;){var b=m[v]=s.childNodes[v],w=l.children[v],S=r(w);null!=S&&(d[S]=[b,w]),v++}for(var k=0,N=0;N<f;){var g=m[k],x=l.children[k],C=u.children[N],E=r(x);if(y[E])k++;else{var O=r(C),U=d[O]||[];null==O?(null==E&&(i(s,g,x,C,c),N++),k++):(E===O?i(s,U[0],U[1],C,c)&&k++:U[0]?s.insertBefore(U[0],g)&&i(s,U[0],U[1],C,c):i(s,g,null,C,c),y[O]=C,N++)}}for(;k<p;){null==r(l.children[k])&&a(s,m[k]),k++}Object.keys(d).forEach(function(t){var e=d[t],n=e[1];y[n.props.key]||a(s,e[0])})}else s&&u!==s.nodeValue&&("string"==typeof u&&"string"==typeof l?s.nodeValue=u:(s=t.insertBefore(o(u,c),h=s),a(t,h,l.data)));return s}function s(e){return t("button",{class:e.class},e.text)}var a=function(t,e){return t.removeChild(e)},l=function(t,e){Object.keys(e).forEach(function(n){e.hasOwnProperty(n)&&Object.defineProperty(t,n,{value:e[n],writable:!0,enumerable:!1,configurable:!0})})},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c=(function(){function t(t){this.value=t}function e(e){function n(r,i){try{var s=e[r](i),a=s.value;a instanceof t?Promise.resolve(a.value).then(function(t){n("next",t)},function(t){n("throw",t)}):o(s.done?"return":"normal",s.value)}catch(t){o("throw",t)}}function o(t,e){switch(t){case"return":r.resolve({value:e,done:!0});break;case"throw":r.reject(e);break;default:r.resolve({value:e,done:!1})}(r=r.next)?n(r.key,r.arg):i=null}var r,i;this._invoke=function(t,e){return new Promise(function(o,s){var a={key:t,arg:e,resolve:o,reject:s,next:null};i?i=i.next=a:(r=i=a,n(t,e))})},"function"!=typeof e.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(e.prototype[Symbol.asyncIterator]=function(){return this}),e.prototype.next=function(t){return this._invoke("next",t)},e.prototype.throw=function(t){return this._invoke("throw",t)},e.prototype.return=function(t){return this._invoke("return",t)}}(),function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}),h=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),f=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},p=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return setTimeout(t,16)},d=(new Date).getTime(),m=function(){function t(e){c(this,t),e||(e={}),this.selector=e.container||e.root||"body",e.render&&(this.render=e.render),e.state&&(this.state=e.state),this.oldNode=null,this.selector&&(this.container=document.querySelector(this.selector)),this.componentShouldUpdate=!0,this.mounted=!1,this.element,e.beforeCreateComponent&&(this.beforeCreateComponent=e.beforeCreateComponent),e.componentWasCreated&&(this.componentWasCreated=e.componentWasCreated),e.componentWillUpdate&&(this.componentWillUpdate=e.componentWillUpdate),e.componentDidUpdate&&(this.componentDidUpdate=e.componentDidUpdate),e.componentWillUnmount&&(this.componentWillUnmount=e.componentWillUnmount)}return h(t,[{key:"setState",value:function(t,e){if("function"==typeof t){var n=t.call(this,this.state);"function"!=typeof n&&n&&this.setState(n)}if(Array.isArray(this.state)){var o=this.state;e||0===e?"object"===u(o[e])?(l(o[e],t),this.state=o):(o[e]=t,this.state=o):this.state=o}else if("object"===u(this.state)){var r=this.state;l(r,t),this.state=r}else this.state=t}},{key:"update",value:function(t){function e(t){try{return JSON.stringify(this.oldNode)!==JSON.stringify(o(t))}catch(t){return!0}}if(this.render){var n=this.state;!0===t||0!==t&&!t||(n=t),this.container&&"string"==typeof this.container&&(this.selector=this.container,this.container=document.querySelector(this.container));var o=this.render,r=this.render(n),s=void 0;if(r&&r.props&&r.props.id)try{s=this.container.querySelector("#"+r.props.id)}catch(t){}if(s&&!this.mounted&&s.parentNode.removeChild(s),this.element=function(t,e,n,o){return i(o||document.body,n,t,e)}(this.oldNode,this.oldNode=this.render(n),this.element,this.container),!(this.mounted&&this.oldNode&&e(n)))return this.beforeCreateComponent&&this.beforeCreateComponent(this),this.componentWasCreated&&this.componentWasCreated(this),void(this.mounted=!0);this.componentWillUpdate&&this.componentWillUpdate(this),this.componentDidUpdate&&e(n)&&this.componentDidUpdate(this)}}},{key:"unmount",value:function(){this.componentWillUnmount&&this.componentWillUnmount(this),this.container.removeChild(this.element),this.container=void 0;for(var t in this)delete this[t];delete this.state,this.update=void 0,this.unmount=void 0}},{key:"state",set:function(t){var e=this;this[d]=t,p(function(){return e.update()})},get:function(){return this[d]}}]),t}();window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(t){var e=(this.document||this.ownerDocument).querySelectorAll(t),n=void 0,o=this;do{for(n=e.length;--n>=0&&e.item(n)!==o;);}while(n<0&&(o=o.parentElement));return o});var y=new m({container:"header",render:function(e){return t("nav",null,t("h1",null,e))}}),v=function(e){function n(t){c(this,n);var e=f(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e.state={currNum:"",total:0,memory:""},e.operation="",e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,m),h(n,[{key:"delete",value:function(){this.setState({currNum:"",total:0,memory:""})}},{key:"add",value:function(t){var e=this.state;e+=t,this.setState(e)}},{key:"subtract",value:function(t){var e=this.state;e-=t,this.setState(e)}},{key:"multiply",value:function(t){var e=this.state;e*=t,this.setState(e)}},{key:"divide",value:function(t){var e=this.state;e/=t,this.setState(e)}},{key:"useNumber",value:function(t){var e=t.target.className;"decimal"===e&&(e="."),"0"===this.state.total&&(this.state.total=""),this.setState({currNum:e}),0!=this.state.total?this.setState({total:this.state.total+this.state.currNum}):this.setState({total:this.state.currNum})}},{key:"render",value:function(){return t("main",{class:"composi-calculator"},t(function(e){return t("div",{class:"editable-field",contentEditable:"false",spellcheck:"false"},e.number)},{number:this.state.total}),t("div",{class:"calculator-body"},t(function(){return t("div",{class:"button-set--numbers"},t(s,{text:"7",class:"7"}),t(s,{text:"8",class:"8"}),t(s,{text:"9",class:"9"}),t(s,{text:"4",class:"4"}),t(s,{text:"5",class:"5"}),t(s,{text:"6",class:"6"}),t(s,{text:"1",class:"1"}),t(s,{text:"2",class:"2"}),t(s,{text:"3",class:"3"}),t(s,{text:".",class:"decimal"}),t(s,{text:"0",class:"0"}),t(s,{text:"=",class:"equals"}))},null),t(function(){return t("section",{class:"button-set--equations"},t(s,{text:"DEL",class:"delete"}),t(s,{text:"÷",class:"divide"}),t(s,{text:"×",class:"multiply"}),t(s,{text:"-",class:"subtract"}),t(s,{text:"+",class:"add"}))},null)))}},{key:"handleEvent",value:function(t){if("BUTTON"===t.target.nodeName){var e=t.target.className;if("equals"!=e&&"delete"!==e&&"divide"!==e&&"multiply"!==e&&"add"!==e&&"subtract"!==e&&this.useNumber(t),"delete"===e&&this.delete(),"add"===e&&(this.setState({memory:this.state.total}),this.setState({total:"",oldNum:"",currNum:""}),this.operation="+"),"subtract"===e&&(this.setState({memory:this.state.total}),this.setState({total:"",oldNum:"",currNum:""}),this.operation="-"),"divide"===e&&(this.setState({memory:this.state.total}),this.setState({total:"",oldNum:"",currNum:""}),this.operation="/"),"multiply"===e&&(this.setState({memory:this.state.total}),this.setState({total:"",oldNum:"",currNum:""}),this.operation="*"),"equals"===e){var n=void 0;switch(this.operation){case"+":n=parseFloat(this.state.memory)+parseFloat(this.state.total),this.setState({total:n});break;case"*":n=parseFloat(this.state.memory)*parseFloat(this.state.total),this.setState({total:n});break;case"/":n=parseFloat(this.state.memory)/parseFloat(this.state.total),this.setState({total:n});break;case"-":n=parseFloat(this.state.memory)-parseFloat(this.state.total),this.setState({total:n})}}}}},{key:"componentWasCreated",value:function(){this.element.addEventListener("click",this)}}]),n}();y.state="Composi Calculator";(new v).update()}();
//# sourceMappingURL=app.js.map
