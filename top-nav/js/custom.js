jQuery(document).ready(function($) {

	// Stellarnav
	$('.stellarnav').stellarNav({
		theme: 'plain',
		phoneBtn: '5555555555',
		locationBtn: '/contact-us/',
		sticky : false,
		closeBtn: true,
		showArrows: false
	});

	$('#slider').flexslider({
		animation: "fade",
		directionNav: false,
		controlNav: false
	});


});
