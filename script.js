$(document).ready(function() {
	$("#bird").click(function() {
		$(this).toggleClass("state1");
		$(this).toggleClass("state2");

		$("#playSound")[0].load();
		$("#playSound")[0].play();
	});
});
