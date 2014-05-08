$(document).ready(function() {
	$('.test').css('width', $(window).width() - 1 );
   	$('.test').css('height', $(window).height() - 1 );
   	$(window).resize(function() {
        $('.test').css('width', $(window).width() - 1 );
        $('.test').css('height', $(window).height() - 1 );
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
