$(document).ready(function() {
	$(window).resize(function(){
		$('#play').css(width:80%, height: auto);
	});
	$("#play").click(function() {
		$(this).toggleClass("state1");


		$("#playSound")[0].load();
		$("#playSound")[0].play();
	});
	$("#play").click(function(){
		$(this).toggleClass("state2");
	});
});
