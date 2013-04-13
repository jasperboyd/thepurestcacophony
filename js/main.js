$(document).ready(function(){
	//declare variables
	$about = $('.about_lk'); 
	$shows = $('.shows_lk');
	$lyrics = $('.lyrics_lk');
	$contact = $('.contact_lk');
	$news = $('.news_lk');
	$top = $('.top_lk');
	$join = $('#join_lk');
	$form = $('#mailform'); 
	
	$albumart = $('.albumart'); 
	
	$TOW_LK = $('#TOW_LK');
	$CB_LK = $('#CB_LK');
	$NWIF_LK = $('#NWIF_LK');
	$NR_LK = $('#NR_LK');
	$OW_LK = $('#OW_LK');
	$TOW_LYR = $('#TOW_LYR');
	$CB_LYR = $('#CB_LYR');
	$NWIF_LYR = $('#NWIF_LYR');
	
	
	$TOW_LK.click(function(){
		$TOW_LYR.fadeToggle();
	});
	
	$CB_LK.click(function(){
		$CB_LYR.fadeToggle();
	});
	
	$NWIF_LK.click(function(){
		$NWIF_LYR.fadeToggle(); 
	});
	
	$lyrics.click(function(){
		$('html, body').animate({ scrollTop: 800 }, 300);
	});
	
	$about.click(function(){ 
		$('html, body').animate({ scrollTop: 2250 }, 300);
	}); 
	
	$shows.click(function(){ 
		$('html, body').animate({ scrollTop: 3000 }, 300);
	}); 
	
	$contact.click(function(){
		$('html, body').animate({ scrollTop: 3300 }, 300); 
	}); 
	
	$news.click(function(){
		$('html, body').animate({ scrollTop: 3300 }, 300); 
	}); 
	
	$albumart.click(function(){ 
		$albumart.fadeToggle(300);
		//fade in the player
	}); 	
	
	$top.click(function(){
		$('html, body').animate({ scrollTop: 100 }, 500); 
	}); 
	
	$join.click(function(){
		$form.fadeToggle(300);
	}); 
}); 
