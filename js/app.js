!function(){"use strict";function t(t,e){for(var n=arguments.length,o=Array(n>2?n-2:0),r=2;r<n;r++)o[r-2]=arguments[r];for(var i=void 0,s=[];o.length;)Array.isArray(i=o.shift())?i.map(function(t){return o.push(t)}):null!=i&&"boolean"!=typeof i&&("number"==typeof i&&(i+=""),s.push(i));return"string"==typeof t?{type:t,props:e||{},children:s}:t(e||{},s)}function e(t,e){var n={};for(var o in t)n[o]=t[o];for(var r in e)n[r]=e[r];return n}function n(t,n,o,r){if("key"===n);else if("style"===n)for(var i in e(r,o=o||{}))t.style[i]=String(o[i])||"";else{try{0===o&&(o=String(o)),t[n]=o}catch(t){}"function"!=typeof o&&(o?"xlink-href"===n?(t.setAttributeNS("http://www.w3.org/1999/xlink","href",o),t.setAttribute("href",o)):t.setAttribute(n,o):t.removeAttribute(n))}}function o(t,e){return"string"==typeof t?document.createTextNode(t):function(t,e){var r=(e=e||"svg"===t.type)?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type);return Object.keys(t.props).forEach(function(e){return n(r,e,t.props[e])}),t.children.map(function(t){return r.appendChild(o(t,e))}),r}(t,e)}function r(t){if(t&&t.props)return t.props.key}function i(t,s,u,l,c,h){if(null==u)s=t.insertBefore(o(l,c),s);else if(null!=l.type&&l.type===u.type){!function(t,o,r){Object.keys(e(o,r)).forEach(function(e){var i=r[e],s="value"===e||"checked"===e?t[e]:o[e];i!==s&&n(t,e,i,s)})}(s,u.props,l.props),c=c||"svg"===l.type;for(var p=l.children.length,f=u.children.length,m={},d=[],y={},v=0;v<f;){var b=d[v]=s.childNodes[v],w=u.children[v],S=r(w);null!=S&&(m[S]=[b,w]),v++}for(var k=0,g=0;g<p;){var x=d[k],N=u.children[k],C=l.children[g],W=r(N);if(y[W])k++;else{var E=r(C),U=m[E]||[];null==E?(null==W&&(i(s,x,N,C,c),g++),k++):(W===E?i(s,U[0],U[1],C,c)&&k++:U[0]?s.insertBefore(U[0],x)&&i(s,U[0],U[1],C,c):i(s,x,null,C,c),y[E]=C,g++)}}for(;k<f;){null==r(u.children[k])&&a(s,d[k]),k++}Object.keys(m).forEach(function(t){var e=m[t],n=e[1];y[n.props.key]||a(s,e[0])})}else s&&l!==s.nodeValue&&("string"==typeof l&&"string"==typeof u?s.nodeValue=l:(s=t.insertBefore(o(l,c),h=s),a(t,h,u.data)));return s}function s(e){return t("button",{class:e.class},e.text)}var a=function(t,e){return t.removeChild(e)},u=function(t,e){Object.keys(e).forEach(function(n){e.hasOwnProperty(n)&&Object.defineProperty(t,n,{value:e[n],writable:!0,enumerable:!1,configurable:!0})})},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c=(function(){function t(t){this.value=t}function e(e){function n(r,i){try{var s=e[r](i),a=s.value;a instanceof t?Promise.resolve(a.value).then(function(t){n("next",t)},function(t){n("throw",t)}):o(s.done?"return":"normal",s.value)}catch(t){o("throw",t)}}function o(t,e){switch(t){case"return":r.resolve({value:e,done:!0});break;case"throw":r.reject(e);break;default:r.resolve({value:e,done:!1})}(r=r.next)?n(r.key,r.arg):i=null}var r,i;this._invoke=function(t,e){return new Promise(function(o,s){var a={key:t,arg:e,resolve:o,reject:s,next:null};i?i=i.next=a:(r=i=a,n(t,e))})},"function"!=typeof e.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(e.prototype[Symbol.asyncIterator]=function(){return this}),e.prototype.next=function(t){return this._invoke("next",t)},e.prototype.throw=function(t){return this._invoke("throw",t)},e.prototype.return=function(t){return this._invoke("return",t)}}(),function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}),h=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),p=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},f=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return setTimeout(t,16)},m=(new Date).getTime(),d=function(){function t(e){c(this,t),e||(e={}),this.selector=e.container||e.root||"body",e.render&&(this.render=e.render),e.state&&(this.state=e.state),this.oldNode=null,this.selector&&(this.container=document.querySelector(this.selector)),this.componentShouldUpdate=!0,this.mounted=!1,this.element,e.beforeCreateComponent&&(this.beforeCreateComponent=e.beforeCreateComponent),(e.componentWillMount||this.componentWillMount)&&(this.beforeCreateComponent=e.componentWillMount||this.componentWillMount),e.componentWasCreated&&(this.componentWasCreated=e.componentWasCreated),(e.componentDidMount||this.componentDidMount)&&(this.componentWasCreated=e.componentDidMount||this.componentDidMount),e.componentWillUpdate&&(this.componentWillUpdate=e.componentWillUpdate),e.componentDidUpdate&&(this.componentDidUpdate=e.componentDidUpdate),e.componentWillUnmount&&(this.componentWillUnmount=e.componentWillUnmount)}return h(t,[{key:"setState",value:function(t,e){if("function"==typeof t){var n=t.call(this,this.state);"function"!=typeof n&&n&&this.setState(n)}if(Array.isArray(this.state)){var o=this.state;e||0===e?"object"===l(o[e])?(u(o[e],t),this.state=o):(o[e]=t,this.state=o):this.state=o}else if("object"===l(this.state)){var r=this.state;u(r,t),this.state=r}else this.state=t}},{key:"update",value:function(t){function e(t){try{return JSON.stringify(this.oldNode)!==JSON.stringify(o(t))}catch(t){return!0}}if(this.render&&(this.componentShouldUpdate||!this.mounted)){var n=this.state;!0!==t&&t&&(n=t),this.container&&"string"==typeof this.container&&(this.selector=this.container,this.container=document.querySelector(this.container));var o=this.render,r=this.render(n),s=void 0;if(r&&r.props&&r.props.id)try{s=this.container.querySelector("#"+r.props.id)}catch(t){}if(s&&!this.mounted&&s.parentNode.removeChild(s),this.element=function(t,e,n,o){return i(o||document.body,n,t,e)}(this.oldNode,this.oldNode=this.render(n),this.element,this.container),!(this.mounted&&this.oldNode&&e(n)))return this.beforeCreateComponent&&this.beforeCreateComponent(this),this.componentWasCreated&&this.componentWasCreated(this),void(this.mounted=!0);this.componentWillUpdate&&this.componentWillUpdate(this),this.componentDidUpdate&&e(n)&&this.componentDidUpdate(this)}}},{key:"unmount",value:function(){var t=this;if(this.element){this.componentWillUnmount&&this.componentWillUnmount(this),["click","dblclick","mousedown","mouseup","mouseover","mouseout","mouseover","mouseleave","select","input","change","keydown","keypress","keyup","submit"].map(function(e){t.element.removeEventListener(e,t)}),this.container.removeChild(this.element),this.container=void 0;for(var e in this)delete this[e];delete this.state,this.update=void 0,this.unmount=void 0}}},{key:"state",set:function(t){var e=this;this[m]=t,f(function(){return e.update()})},get:function(){return this[m]}}]),t}();window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(t){var e=(this.document||this.ownerDocument).querySelectorAll(t),n=void 0,o=this;do{for(n=e.length;--n>=0&&e.item(n)!==o;);}while(n<0&&(o=o.parentElement));return o});var y=new d({container:"header",render:function(e){return t("nav",null,t("h1",null,e))}}),v=[{text:"7",class:"7"},{text:"8",class:"8"},{text:"9",class:"9"},{text:"4",class:"4"},{text:"5",class:"5"},{text:"6",class:"6"},{text:"1",class:"1"},{text:"2",class:"2"},{text:"3",class:"3"},{text:".",class:"decimal"},{text:"0",class:"0"},{text:"=",class:"equals"}],b=[{text:"DEL",class:"delete"},{text:"÷",class:"divide"},{text:"×",class:"multiply"},{text:"-",class:"subtract"},{text:"+",class:"add"}],w=function(e){function n(t){c(this,n);var e=p(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e.state={currNum:"",total:0,memory:""},e.operation="",e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,d),h(n,[{key:"delete",value:function(){this.setState({currNum:"",total:0,memory:""})}},{key:"add",value:function(t){var e=this.state;e+=t,this.setState(e)}},{key:"subtract",value:function(t){var e=this.state;e-=t,this.setState(e)}},{key:"multiply",value:function(t){var e=this.state;e*=t,this.setState(e)}},{key:"divide",value:function(t){var e=this.state;e/=t,this.setState(e)}},{key:"useNumber",value:function(t){var e=t.target.className;"decimal"===e&&(e="."),"0"===this.state.total&&(this.state.total=""),this.setState({currNum:e}),0!=this.state.total?this.setState({total:this.state.total+this.state.currNum}):this.setState({total:this.state.currNum})}},{key:"render",value:function(){return t("main",{class:"composi-calculator"},t(function(e){return t("div",{class:"editable-field",contentEditable:"false",spellcheck:"false"},e.number)},{number:this.state.total}),t("div",{class:"calculator-body"},t(function(){return t("div",{class:"button-set--numbers"},v.map(function(e){return t(s,{text:e.text,class:e.class})}))},null),t(function(){return t("section",{class:"button-set--equations"},b.map(function(e){return t(s,{text:e.text,class:e.class})}))},null)))}},{key:"handleEvent",value:function(t){if("BUTTON"===t.target.nodeName){var e=t.target.className;if("equals"!=e&&"delete"!==e&&"divide"!==e&&"multiply"!==e&&"add"!==e&&"subtract"!==e&&this.useNumber(t),"delete"===e&&this.delete(),"add"===e&&(this.setState({memory:this.state.total}),this.setState({total:"",oldNum:"",currNum:""}),this.operation="+"),"subtract"===e&&(this.setState({memory:this.state.total}),this.setState({total:"",oldNum:"",currNum:""}),this.operation="-"),"divide"===e&&(this.setState({memory:this.state.total}),this.setState({total:"",oldNum:"",currNum:""}),this.operation="/"),"multiply"===e&&(this.setState({memory:this.state.total}),this.setState({total:"",oldNum:"",currNum:""}),this.operation="*"),"equals"===e){var n=this.operation,o=parseFloat(this.state.memory),r=parseFloat(this.state.total);"+"===n&&this.setState({total:o+r}),"*"===n&&this.setState({total:o*r}),"/"===n&&this.setState({total:o/r}),"-"===n&&this.setState({total:o-r})}}}},{key:"componentWasCreated",value:function(){this.element.addEventListener("click",this)}}]),n}();y.state="Composi Calculator";(new w).update()}();
//# sourceMappingURL=app.js.map
