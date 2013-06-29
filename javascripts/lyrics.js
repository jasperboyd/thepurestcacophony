$(document).ready(function(){
	$tow_link = $('#tow_link');
	$tow_lyrics = $('#tow_lyrics');
	$cb_link = $('#cb_link');
	$cb_lyrics = $('#cb_lyrics');
	$nwif_link = $('#nwif_link');
	$nwif_lyrics = $('#nwif_lyrics');
	$nr_link = $('#nr_link');
	$nr_lyrics = $('#nr_lyrics');
	$ow_link = $('#ow_link');
	$ow_lyrics = $('#ow_lyrics');
	$lyrics = $('.lyrics');
	
	$lyrics.addClass('initblank');
	
	
	var lyrics_vars = [$tow_lyrics, $cb_lyrics, $nwif_lyrics, $nr_lyrics, $ow_lyrics];
	var links_vars = [$tow_link, $cb_link, $nwif_link, $nr_link, $ow_link];
	
	var cursor = -1; 
	
	function changeSelection (newSelection){
		
		if (newSelection === cursor){
			lyrics_vars[cursor].slideToggle(500, function(){
				$('html, body').animate({
        				scrollTop: $('article h2').offset().top
     					}, 300);
				});	
			cursor = -1; 
		} else { 
			switch(cursor){
				case -1: 
					lyrics_vars[newSelection].slideToggle(300, function(){
						$('html, body').animate({
        				scrollTop: links_vars[newSelection].offset().top
     					}, 300);
					});
					break; 
				default: 
					lyrics_vars[cursor].slideToggle(300, function(){
						lyrics_vars[newSelection].slideToggle(300, function(){
							$('html, body').animate({
        					scrollTop: links_vars[newSelection].offset().top
     						}, 300);
						});
					});
					break; 
			}
			cursor = newSelection
		}
	}
	
	$tow_link.click(function(){
		changeSelection(0);
	});
	
	$cb_link.click(function(){
		changeSelection(1);
	});
	
	$nwif_link.click(function(){
		changeSelection(2);
	});
	
	$nr_link.click(function(){
		changeSelection(3);
	});
	
	$ow_link.click(function(){
		changeSelection(4);
	});
});