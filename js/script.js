$(document).ready(function(){
	$('#hamburger1').click(function(){
		$(this).toggleClass('open');
	});


	$("#rotateBox").hover(function(){
		$(this).toggleClass("rotate360");
	});
	$(".column").click(function(){
		$(".column").removeClass("grow");
		$(this).toggleClass("grow");
	});
});
