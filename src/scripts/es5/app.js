(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _module = require('./module');

var HELLO_WORLD = new _module.DeveloperGreetings('Hello ES6!');

HELLO_WORLD.shoutOut();

},{"./module":2}],2:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DeveloperGreetings = (function () {
	function DeveloperGreetings(msg) {
		_classCallCheck(this, DeveloperGreetings);

		this.message = msg;
	}

	_createClass(DeveloperGreetings, [{
		key: "shoutOut",
		value: function shoutOut() {
			console.log(this.message);
		}
	}]);

	return DeveloperGreetings;
})();

exports.DeveloperGreetings = DeveloperGreetings;

},{}]},{},[1,2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9lczYvYXBwLmluaXQuanMiLCJzcmMvc2NyaXB0cy9lczYvbW9kdWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQ0VBLElBQU0sV0FBVyxHQUFHLFlBRlgsa0JBQWtCLENBRWdCLFlBQVksQ0FBQyxDQUFDOztBQUV6RCxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7SUNKakIsa0JBQWtCO0FBQ3ZCLFVBREssa0JBQWtCLENBQ1gsR0FBRyxFQUFFO3dCQURaLGtCQUFrQjs7QUFFdEIsTUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7RUFDbkI7O2NBSEksa0JBQWtCOzs2QkFLWDtBQUNYLFVBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0dBQzFCOzs7UUFQSSxrQkFBa0I7OztRQVVmLGtCQUFrQixHQUFsQixrQkFBa0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHsgRGV2ZWxvcGVyR3JlZXRpbmdzIH0gZnJvbSAnLi9tb2R1bGUnO1xuXG5jb25zdCBIRUxMT19XT1JMRCA9IG5ldyBEZXZlbG9wZXJHcmVldGluZ3MoJ0hlbGxvIEVTNiEnKTtcblxuSEVMTE9fV09STEQuc2hvdXRPdXQoKTsiLCJjbGFzcyBEZXZlbG9wZXJHcmVldGluZ3Mge1xuXHRjb25zdHJ1Y3Rvcihtc2cpIHtcblx0XHR0aGlzLm1lc3NhZ2UgPSBtc2c7XG5cdH1cblxuXHRzaG91dE91dCAoKSB7XG5cdFx0Y29uc29sZS5sb2codGhpcy5tZXNzYWdlKTtcblx0fVxufVxuXG5leHBvcnQgeyBEZXZlbG9wZXJHcmVldGluZ3MgfTsiXX0=
