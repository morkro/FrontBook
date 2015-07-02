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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbW9ya3JvZ2UvRGVza3RvcC9Qcm9qZWN0cy9QZXJzb25hbC9Gcm9udEJvb2svc3JjL3NjcmlwdHMvZXM2L2FwcC5pbml0LmpzIiwiL1VzZXJzL21vcmtyb2dlL0Rlc2t0b3AvUHJvamVjdHMvUGVyc29uYWwvRnJvbnRCb29rL3NyYy9zY3JpcHRzL2VzNi9tb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozt1QkNBbUMsVUFBVTs7QUFFN0MsSUFBTSxXQUFXLEdBQUcsYUFGWCxrQkFBa0IsQ0FFZ0IsWUFBWSxDQUFDLENBQUM7O0FBRXpELFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7Ozs7Ozs7O0lDSmpCLGtCQUFrQjtBQUNaLFVBRE4sa0JBQWtCLENBQ1gsR0FBRyxFQUFFO3dCQURaLGtCQUFrQjs7QUFFdEIsTUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7RUFDbkI7O0FBSEksbUJBQWtCLFdBS3ZCLFFBQVEsR0FBQyxvQkFBRztBQUNYLFNBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0VBQzFCOztRQVBJLGtCQUFrQjs7O1FBVWYsa0JBQWtCLEdBQWxCLGtCQUFrQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgeyBEZXZlbG9wZXJHcmVldGluZ3MgfSBmcm9tICcuL21vZHVsZSc7XG5cbmNvbnN0IEhFTExPX1dPUkxEID0gbmV3IERldmVsb3BlckdyZWV0aW5ncygnSGVsbG8gRVM2IScpO1xuXG5IRUxMT19XT1JMRC5zaG91dE91dCgpOyIsImNsYXNzIERldmVsb3BlckdyZWV0aW5ncyB7XG5cdGNvbnN0cnVjdG9yKG1zZykge1xuXHRcdHRoaXMubWVzc2FnZSA9IG1zZztcblx0fVxuXG5cdHNob3V0T3V0ICgpIHtcblx0XHRjb25zb2xlLmxvZyh0aGlzLm1lc3NhZ2UpO1xuXHR9XG59XG5cbmV4cG9ydCB7IERldmVsb3BlckdyZWV0aW5ncyB9OyJdfQ==
