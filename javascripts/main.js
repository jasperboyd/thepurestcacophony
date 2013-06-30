$(document).ready(function(){
	$support_link = $('#support_link'); 
	$links = $('.links');
	$tt_link = $("#tt_link");
	$header = $("header");
	
	$support_link.click(function(){
		$('html, body').animate({
        					scrollTop: $links.offset().top
     					}, 300);
	});
	
	$tt_link.click(function(){
		$('html, body').animate({
        					scrollTop: $header.offset().top
     	}, 300);
	});
});