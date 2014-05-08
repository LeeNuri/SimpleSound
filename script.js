$(document).ready(function() {
	$("#play").click(function() {
		$(this).toggleClass("state1");
		$(this).toggleClass("state2");

		$("#playSound")[0].play();
	});

});
