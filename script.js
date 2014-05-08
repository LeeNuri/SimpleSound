$(document).ready(function() {
	$('#play').css('width', $(window).width() - 1 );
   	$('#play').css('height', $(window).height() - 1 );
   	$(window).resize(function() {
        $('#play').css('width', $(window).width() - 1 );
        $('#play').css('height', $(window).height() - 1 );
	    
	$("#play").click(function() {
		$(this).toggleClass("state1");


		$("#playSound")[0].load();
		$("#playSound")[0].play();
	});
	$("#play").click(function(){
		$(this).toggleClass("state2");
	});
});
