var $ = require("jquery");
// modal in
$.Velocity.RegisterUI("slideUpIn", {
	defaultDuration: 500,
	calls: [
		[{opacity: [1, 0], translateY: [0, -100]}]
	]
});
// modal out
$.Velocity.RegisterUI("slideUpOut", {
	defaultDuration: 300,
	calls: [
		[{opacity: [0, 1], translateY: [-100, 0]}]
	]
});
// modalback in
$.Velocity.RegisterUI("cFadeIn", {
	defaultDuration: 500,
	calls: [
		[{opacity: [0.2, 0]}]
	]
});
// modalback out
$.Velocity.RegisterUI("cFadeOut", {
	defaultDuration: 300,
	calls: [
		[{opacity: [0, 0.2]}]
	]
});
// validate error template in
$.Velocity.RegisterUI("slideLeftIn", {
	defaultDuration: 500,
	calls: [
		[{opacity: [1, 0], translateX: [0, 50]}]
	]
});
// validate error template out
$.Velocity.RegisterUI("slideLeftOut", {
	defaultDuration: 300,
	calls: [
		[{opacity: [0, 1], translateX: [50, 0]}]
	]
});