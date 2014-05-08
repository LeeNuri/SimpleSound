$(document).ready(function() {
	$("#play").click(function() {
		$(this).toggleClass("state1");

		$("#playSound")[0].play();
	});

	$("#state1").click(function() {
		$(this).toggleClass("state2");

		$("#playSound")[0].pause();
	});
});
