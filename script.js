$(document).ready(function() {
	    $('#play').css('width' ,  $(window).width() - 200 );
    $('#play').css('height' ,  $(window).height() - 200 );
    $(window).resize(function() {
      $('#play').css('width' ,  $(window).width() - 200 );
      $('#play').css('height' ,  $(window).height() - 200 );
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
