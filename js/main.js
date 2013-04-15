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
	$TOW_LK = $('#TOW_LK');
	$CB_LK = $('#CB_LK');
	$NWIF_LK = $('#NWIF_LK');
	$NR_LK = $('#NR_LK');
	$OW_LK = $('#OW_LK');
	$TOW_LYR = $('#TOW_LYR');
	$CB_LYR = $('#CB_LYR');
	$NWIF_LYR = $('#NWIF_LYR');
	$NR_LYR = $('#NR_LYR');
	$OW_LYR = $('#OW_LYR');
	
	open = -1; 
	
	
	$TOW_LK.click(function(){
		if (open === -1){ 
			$TOW_LK.toggleClass("selected");
			$TOW_LYR.fadeToggle();
			open = 0; 
		} else if (open === 0) { 
			$TOW_LK.toggleClass("selected");
			$TOW_LYR.fadeToggle(); 
			open = -1; 
		} else if (open === 1) { 
			$CB_LK.toggleClass("selected");
			$CB_LYR.fadeToggle(); 
			open = 1; 
			$TOW_LK.toggleClass("selected");
			$TOW_LYR.fadeToggle();
		} else if (open === 2) {
			$NWIF_LK.toggleClass("selected");
			$NWIF_LYR.fadeToggle(); 
			open = 2; 
			$TOW_LK.toggleClass("selected");
			$TOW_LYR.fadeToggle();
		} else if (open === 3) { 
			$NR_LK.toggleClass("selected");
			$NR_LYR.fadeToggle(); 
			open = 3; 
			$TOW_LK.toggleClass("selected");
			$TOW_LYR.fadeToggle();
		} else if (open === 4) { 
			$OW_LK.toggleClass("selected");
			$OW_LYR.fadeToggle(); 
			open = 4;
			$TOW_LK.toggleClass("selected");
			$TOW_LYR.fadeToggle();
		} 
		$('html, body').animate({ scrollTop: 800 }, 300);2
	});
	
	$CB_LK.click(function(){
		if (open === -1){ 
			$CB_LK.toggleClass("selected");
			$CB_LYR.fadeToggle();
			open = 1; 
		} else if (open === 0) { 
			$TOW_LK.toggleClass("selected");
			$TOW_LYR.fadeToggle(); 
			open = 1; 
			$CB_LK.toggleClass("selected");
			$CB_LYR.fadeToggle();
		} else if (open === 1) { 
			$CB_LK.toggleClass("selected");
			$CB_LYR.fadeToggle(); 
			open = -1;
		} else if (open === 2) {
			$NWIF_LK.toggleClass("selected");
			$NWIF_LYR.fadeToggle(); 
			open = 1; 
			$CB_LK.toggleClass("selected");
			$CB_LYR.fadeToggle();
		} else if (open === 3) { 
			$NR_LK.toggleClass("selected");
			$NR_LYR.fadeToggle(); 
			open = 1; 
			$CB_LK.toggleClass("selected");
			$CB_LYR.fadeToggle();
		} else if (open === 4) { 
			$OW_LK.toggleClass("selected");
			$OW_LYR.fadeToggle(); 
			open = 1;
			$CB_LK.toggleClass("selected");
			$CB_LYR.fadeToggle();
		} 
		$('html, body').animate({ scrollTop: 800 }, 300);
	});
	
	$NWIF_LK.click(function(){
		if (open === -1){ 
			$NWIF_LK.toggleClass("selected");
			$NWIF_LYR.fadeToggle();
			open = 2; 
		} else if (open === 0) { 
			$TOW_LK.toggleClass("selected");
			$TOW_LYR.fadeToggle(); 
			open = 2; 
			$NWIF_LK.toggleClass("selected");
			$NWIF_LYR.fadeToggle();
		} else if (open === 1) { 
			$CB_LK.toggleClass("selected");
			$CB_LYR.fadeToggle(); 
			open = 2; 
			$NWIF_LK.toggleClass("selected");
			$NWIF_LYR.fadeToggle();
		} else if (open === 2) {
			$NWIF_LK.toggleClass("selected");
			$NWIF_LYR.fadeToggle(); 
			open = -1; 
		} else if (open === 3) { 
			$NR_LK.toggleClass("selected");
			$NR_LYR.fadeToggle(); 
			open = 2; 
			$NWIF_LK.toggleClass("selected");
			$NWIF_LYR.fadeToggle();
		} else if (open === 4) { 
			$OW_LK.toggleClass("selected");
			$OW_LYR.fadeToggle(); 
			open = 2;
			$NWIF_LK.toggleClass("selected");
			$NWIF_LYR.fadeToggle();
		}  
		$('html, body').animate({ scrollTop: 800 }, 300);
	});
	
	$NR_LK.click(function(){
		if (open === -1){ 
			$NR_LK.toggleClass("selected");
			$NR_LYR.fadeToggle();
			open = 3; 
		} else if (open === 0) { 
			$TOW_LK.toggleClass("selected");
			$TOW_LYR.fadeToggle(); 
			open = 3; 
			$NR_LK.toggleClass("selected");
			$NR_LYR.fadeToggle();
		} else if (open === 1) { 
			$CB_LK.toggleClass("selected");
			$CB_LYR.fadeToggle(); 
			open = 3;
			$NR_LK.toggleClass("selected");
			$NR_LYR.fadeToggle(); 
		} else if (open === 2) {
			$NWIF_LK.toggleClass("selected");
			$NWIF_LYR.fadeToggle(); 
			open = 3; 
			$NR_LK.toggleClass("selected");
			$NR_LYR.fadeToggle();
		} else if (open === 3) { 
			$NR_LK.toggleClass("selected");
			$NR_LYR.fadeToggle(); 
			open = -1; 
		} else if (open === 4) { 
			$OW_LK.toggleClass("selected");
			$OW_LYR.fadeToggle(); 
			open = 3;
			$NR_LK.toggleClass("selected");
			$NR_LYR.fadeToggle();
		} 
		$('html, body').animate({ scrollTop: 800 }, 300);
	}); 
	
	$OW_LK.click(function(){
		if (open === -1){ 
			$OW_LK.toggleClass("selected");
			$OW_LYR.fadeToggle();
			open = 4; 
		} else if (open === 0) { 
			$TOW_LK.toggleClass("selected");
			$TOW_LYR.fadeToggle(); 
			open = 4; 
			$OW_LK.toggleClass("selected");
			$OW_LYR.fadeToggle();
		} else if (open === 1) { 
			$CB_LK.toggleClass("selected");
			$CB_LYR.fadeToggle(); 
			open = 4; 
			$OW_LK.toggleClass("selected");
			$OW_LYR.fadeToggle();
		} else if (open === 2) {
			$NWIF_LK.toggleClass("selected");
			$NWIF_LYR.fadeToggle(); 
			open = 4; 
			$OW_LK.toggleClass("selected");
			$OW_LYR.fadeToggle();
		} else if (open === 3) { 
			$NR_LK.toggleClass("selected");
			$NR_LYR.fadeToggle(); 
			open = 4; 
			$OW_LK.toggleClass("selected");
			$OW_LYR.fadeToggle();
		} else if (open === 4) { 
			$OW_LK.toggleClass("selected");
			$OW_LYR.fadeToggle(); 
			open = -1;
		} 
		$('html, body').animate({ scrollTop: 800 }, 300);
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
	
	$top.click(function(){
		$('html, body').animate({ scrollTop: 100 }, 500); 
	}); 
	
	$join.click(function(){
		$form.fadeToggle(300);
	}); 
}); 
