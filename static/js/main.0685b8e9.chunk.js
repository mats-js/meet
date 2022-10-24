(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(57)},33:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(25),i=n.n(o),c=(n(33),n(2)),s=n(6),u=n(4),l=n(3),h=n(5),f=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).state={detailsVisible:!1},n.handleDetailsToggled=function(){n.state.detailsVisible?n.setState({detailsVisible:!1}):n.setState({detailsVisible:!0})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.event;return a.a.createElement("div",{className:"event"},a.a.createElement("h2",{className:"summary"},e.summary),a.a.createElement("p",{className:"information"},e.start.dateTime," ",e.start.timeZone," ",e.location),this.state.detailsVisible?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"details"},a.a.createElement("h3",{className:"details-title"},"About event:"),a.a.createElement("a",{href:e.htmlLink,className:"details-link"},"See details on Google Calendar"),a.a.createElement("p",{className:"details-description"},e.description)),a.a.createElement("button",{className:"hide-details",onClick:this.handleDetailsToggled},"hide details")):a.a.createElement("button",{className:"show-details",onClick:this.handleDetailsToggled},"show details"))}}]),t}(r.Component),d=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.events;return a.a.createElement("ul",{className:"EventList"},e.map(function(e){return a.a.createElement("li",{key:e.id},a.a.createElement(f,{event:e}))}))}}]),t}(r.Component),p=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).getStyle=function(){return{color:n.color}},n.color=null,n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"Alert"},a.a.createElement("p",{style:this.getStyle()},this.props.text))}}]),t}(r.Component),m=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).color="blue",n}return Object(h.a)(t,e),t}(p),v=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).color="red",n}return Object(h.a)(t,e),t}(p),g=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},n.handleInputChanged=function(e){var t=e.target.value;n.setState({showSuggestions:!0});var r=n.props.locations.filter(function(e){return e.toUpperCase().indexOf(t.toUpperCase())>-1});if(0!==r.length)return n.setState({query:t,suggestions:r,infoText:""});n.setState({query:t,infoText:"City not found. Please try another city"})},n.handleItemClicked=function(e){n.setState({query:e,showSuggestions:!1,infoText:""}),n.props.updateEvents(e)},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"CitySearch"},a.a.createElement(m,{text:this.state.infoText}),a.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),a.a.createElement("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"}},this.state.suggestions.map(function(t){return a.a.createElement("li",{key:t,onClick:function(){return e.handleItemClicked(t)}},t)}),a.a.createElement("li",{onClick:function(){return e.handleItemClicked("all")}},a.a.createElement("b",null,"See all cities"))))}}]),t}(r.Component),y=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).state={numberOfEvents:32,errorText:""},n.handleInputChanged=function(e){var t=e.target.value;t<1||t>32?n.setState({numberOfEvents:t,errorText:"Enter number from 1 to 32"}):n.setState({numberOfEvents:e.target.value,errorText:""}),n.props.updateEvents(void 0,t)},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",{className:"number-of-events"},a.a.createElement("label",null,"Number of Events:",a.a.createElement("input",{type:"number",className:"number-of-events-input",min:"1",value:this.state.numberOfEvents,onChange:this.handleInputChanged})),a.a.createElement("div",null,a.a.createElement(v,{text:this.state.errorText}))))}}]),t}(r.Component),w=n(8),b=n(27),E=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],O=n(12),k=n.n(O),j=n(10),x=n.n(j);function S(){S=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(T){c=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var a=t&&t.prototype instanceof h?t:h,o=Object.create(a.prototype),i=new k(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return x()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=b(i,n);if(c){if(c===l)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=u(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(T){return{type:"throw",arg:T}}}e.wrap=s;var l={};function h(){}function f(){}function d(){}var p={};c(p,a,function(){return this});var m=Object.getPrototypeOf,v=m&&m(m(j([])));v&&v!==t&&n.call(v,a)&&(p=v);var g=d.prototype=h.prototype=Object.create(p);function y(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var r;this._invoke=function(a,o){function i(){return new t(function(r,i){!function r(a,o,i,c){var s=u(e[a],e,o);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(h).then(function(e){l.value=e,i(l)},function(e){return r("throw",e,i,c)})}c(s.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,l;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:x}}function x(){return{value:void 0,done:!0}}return f.prototype=d,c(g,"constructor",d),c(d,"constructor",f),f.displayName=c(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(w.prototype),c(w.prototype,o,function(){return this}),e.AsyncIterator=w,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new w(s(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},y(g),c(g,i,"Generator"),c(g,a,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=j,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},e}var T=function(e){var t=e.map(function(e){return e.location});return Object(b.a)(new Set(t))},L=function(){var e=Object(w.a)(S().mark(function e(t){var n;return S().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then(function(e){return e.json()}).catch(function(e){return e.json()});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),C=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},N=function(){var e=Object(w.a)(S().mark(function e(){var t,n,r,a;return S().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(x.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return x.a.done(),e.abrupt("return",E);case 4:return e.next=6,I();case 6:if(!(t=e.sent)){e.next=16;break}return C(),n="https://imuj0zp51i.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+t,e.next=12,k.a.get(n);case 12:return(r=e.sent).data&&(a=T(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(a))),x.a.done(),e.abrupt("return",r.data.events);case 16:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(w.a)(S().mark(function e(t){var n,r,a;return S().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://imuj0zp51i.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then(function(e){return e.json()}).catch(function(e){return e});case 3:return r=e.sent,(a=r.access_token)&&localStorage.setItem("access_token",a),e.abrupt("return",a);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(w.a)(S().mark(function e(){var t,n,r,a,o,i;return S().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,L(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return r=new URLSearchParams(window.location.search),e.next=13,r.get("code");case 13:if(a=e.sent){e.next=20;break}return e.next=17,k.a.get("https://imuj0zp51i.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,i=o.data.authUrl,e.abrupt("return",window.location.href=i);case 20:return e.abrupt("return",a&&Z(a));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),_=(n(56),function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).state={events:[],locations:[],numberOfEvents:32,selectedLocation:"all"},n.updateEvents=function(e,t){var r=n.state.numberOfEvents;void 0===e&&(e=n.state.selectedLocation),N().then(function(a){var o="all"===e?a:a.filter(function(t){return t.location===e});t=void 0===t?r:t,n.setState({events:o.slice(0,t),selectedLocation:e,numberOfEvents:t})})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,N().then(function(t){e.mounted&&e.setState({events:t,locations:T(t)})})}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state.numberOfEvents;return a.a.createElement("div",{className:"App"},a.a.createElement(g,{locations:this.state.locations,updateEvents:this.updateEvents}),a.a.createElement(y,{numberOfEvents:e,updateEvents:this.updateEvents}),a.a.createElement(d,{events:this.state.events}))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)})};n(26).config("72d38c8cd3cd408587bc716b8ad09814").install(),i.a.render(a.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)}),A()}},[[28,1,2]]]);
//# sourceMappingURL=main.0685b8e9.chunk.js.map