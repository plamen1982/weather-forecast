(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(30)},23:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),u=(n(23),n(2)),i=n(3),l=n(11),s=n(17),d=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],f={city:null,days:[]},m=function(e,t){return Math.round(t.list[8*e].main.temp-273.15)},y=function(e,t){return d[new Date(1e3*t.list[8*e].dt).getDay()]},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FORECAST":return Object(s.a)({},e,{city:t.data.city.name,days:Array.from(Array(5).keys()).map(function(e){return{temperature:m(e,t.data),day:y(e,t.data)}})});default:return e}},E=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,h=Object(i.c)({forecast:p}),O=function(){return Object(i.e)(h,{},E(Object(i.a)(l.a)))},b=n(12),v=n(13),g=n(15),w=n(14),S=n(16),j=function(e){return r.a.createElement("div",{className:"input"},r.a.createElement("input",{type:"text",placeholder:"Sofia,bg / London,uk / Singapore,sg / ..."}))},_=function(e){var t=e.data;return r.a.createElement("li",null,r.a.createElement("div",{className:"header"},t.day),r.a.createElement("div",{className:"content"},t.temperature,"\xb0 C"))},C=Object(u.b)(function(e){return{days:e.forecast.days}},null)(function(e){var t=e.days;return r.a.createElement("ul",null,t.map(function(e,t){return r.a.createElement(_,{data:e,key:t})}))}),R=function(e){return r.a.createElement(C,null)},T=Object(u.b)(function(e){return{city:e.forecast.city}},null)(function(e){var t=e.city;return r.a.createElement("div",{className:"message"},"Showing a forecast for ",r.a.createElement("strong",null,t||"..."))}),k={getForecastByCoords:function(e){var t=new URL("".concat("http://api.openweathermap.org/data/2.5/","forecast"));e={lat:42.6977,lon:23.3219,appid:"7d55c4d6a93e6feeca80fb7e60445421"};return t.search=new URLSearchParams(e),fetch(t).then(function(e){if(e.ok)return e.json().then(function(e){return e});throw new Error("Network Error")})}},N=function(e){function t(){return Object(b.a)(this,t),Object(g.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation.getCurrentPosition(function(t){e.props.onGeolocationRetrieved({lat:t.coords.latitude,lon:t.coords.long})},function(){alert("no position available")})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(j,null),r.a.createElement(T,null),r.a.createElement(R,null))}}]),t}(a.Component),D=Object(u.b)(null,function(e){return{onGeolocationRetrieved:function(t){return e(function(e){return function(t){return t(function(e){return{type:"REQUEST_FORECAST_BY_COORDS",data:e}}(e)),k.getForecastByCoords().then(function(e){console.error(e),t({type:"SET_FORECAST",data:e})})}}(t))}}})(N),F=O(),A=function(){return r.a.createElement(u.a,{store:F},r.a.createElement(D,null))};c.a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[18,2,1]]]);
//# sourceMappingURL=main.748f9100.chunk.js.map