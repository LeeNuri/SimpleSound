$(document).ready(function() {
	    $('#play').css('width' ,  $(window).width() - 105 );
    $('#play').css('height' ,  $(window).height() - 105 );
    $(window).resize(function() {
      $('#play').css('width' ,  $(window).width() - 105 );
      $('#play').css('height' ,  $(window).height() - 105 );
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
