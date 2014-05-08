$(document).ready(function() {
	if $("#play").click(function() {
		$(this).toggleClass("state1");


		$("#playSound")[0].play();
	});

	else $("#play").click(function() {
		$(this).toggleClass("state2");

		$("#playSound")[0].pause();
	});
});
