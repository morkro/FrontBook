(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _module2 = require('./module');

var HELLO_WORLD = new _module2.DeveloperGreetings('Hello ES6!');

HELLO_WORLD.shoutOut();

},{"./module":2}],2:[function(require,module,exports){
"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DeveloperGreetings = (function () {
	function DeveloperGreetings(msg) {
		_classCallCheck(this, DeveloperGreetings);

		this.message = msg;
	}

	DeveloperGreetings.prototype.shoutOut = function shoutOut() {
		console.log(this.message);
	};

	return DeveloperGreetings;
})();

exports.DeveloperGreetings = DeveloperGreetings;

},{}]},{},[1,2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbW9ya3JvZ2UvRGVza3RvcC9Qcm9qZWN0cy9QZXJzb25hbC9Gcm9udEJvb2svc3JjL3NjcmlwdHMvZXM2L2FwcC5pbml0LmpzIiwiL1VzZXJzL21vcmtyb2dlL0Rlc2t0b3AvUHJvamVjdHMvUGVyc29uYWwvRnJvbnRCb29rL3NyYy9zY3JpcHRzL2VzNi9tb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozt1QkNBbUMsVUFBVTs7QUFFN0MsSUFBTSxXQUFXLEdBQUcsZ0NBQXVCLFlBQVksQ0FBQyxDQUFDOztBQUV6RCxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7Ozs7Ozs7OztJQ0pqQixrQkFBa0I7QUFDWixVQUROLGtCQUFrQixDQUNYLEdBQUcsRUFBRTt3QkFEWixrQkFBa0I7O0FBRXRCLE1BQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO0VBQ25COztBQUhJLG1CQUFrQixXQUt2QixRQUFRLEdBQUMsb0JBQUc7QUFDWCxTQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztFQUMxQjs7UUFQSSxrQkFBa0I7OztRQVVmLGtCQUFrQixHQUFsQixrQkFBa0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHsgRGV2ZWxvcGVyR3JlZXRpbmdzIH0gZnJvbSAnLi9tb2R1bGUnO1xuXG5jb25zdCBIRUxMT19XT1JMRCA9IG5ldyBEZXZlbG9wZXJHcmVldGluZ3MoJ0hlbGxvIEVTNiEnKTtcblxuSEVMTE9fV09STEQuc2hvdXRPdXQoKTsiLCJjbGFzcyBEZXZlbG9wZXJHcmVldGluZ3Mge1xuXHRjb25zdHJ1Y3Rvcihtc2cpIHtcblx0XHR0aGlzLm1lc3NhZ2UgPSBtc2c7XG5cdH1cblxuXHRzaG91dE91dCAoKSB7XG5cdFx0Y29uc29sZS5sb2codGhpcy5tZXNzYWdlKTtcblx0fVxufVxuXG5leHBvcnQgeyBEZXZlbG9wZXJHcmVldGluZ3MgfTsiXX0=
