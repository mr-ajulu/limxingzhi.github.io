"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var App=function e(){_classCallCheck(this,e),this.database={},document.addEventListener("DOMContentLoaded",function(e){var n=this;Utils.fetchStubData("data").then(function(e){n.database=e,Home.dataLoaded(e.strings[Utils.detectLanguage()])})}.bind(this))},_createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),app=new App,Home=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"dataLoaded",value:function(e){document.querySelector("#index-myface");document.querySelector("#index-heading").innerHTML=e.index.heading,document.querySelector("#index-para").innerHTML=e.index.content}}]),e}(),_createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),Utils=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"fetchStubData",value:function(e){return fetch("./stubs/"+e+".json",{method:"get"}).then(function(e){return e.json()})}},{key:"fetchImage",value:function(e){return fetch(e,{method:"get",mode:"no-cors"}).then(function(e){return e.blob()})}},{key:"detectLanguage",value:function(){return window.navigator.language||"en-US"}}]),e}();