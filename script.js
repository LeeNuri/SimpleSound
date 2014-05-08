$(document).ready(function() {
	    $('#play').css('width' ,  $(window).width() - 10 );
    $('#play').css('height' ,  $(window).height() - 10 );
    $(window).resize(function() {
      $('#play').css('width' ,  $(window).width() - 10 );
      $('#play').css('height' ,  $(window).height() - 10 );
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
