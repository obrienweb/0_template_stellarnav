jQuery(document).ready(function($) {

	// Stellarnav
	$('.stellarnav').stellarNav({
		theme: 'light',
		sticky : false,
		showArrows: false,
		breakpoint: 99999,
		mobileMode: true
	});

	$('#slider').flexslider({
		animation: "fade",
		directionNav: false,
		controlNav: false
	});


});
