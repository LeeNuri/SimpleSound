$(document).ready(function() {
	$("#play").click(function() {
		$(this).toggleClass("state1");
		$(this).toggleClass("state2");


		$("#playSound").trigger('play');
		$("#playSound").trigger('pause');
		
	});


});
