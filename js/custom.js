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

	jQuery('.cookie-accept').click(function() {
		jQuery('#cookie-disclaimer').hide();
	});

	$('.cookie-accept').click(function(){
		$('#cookie_disclaimer').slideUp();

		var nDays = 999;
		var cookieName = "disclaimer";
		var cookieValue = "true";

		var today = new Date();
		var expire = new Date();
		expire.setTime(today.getTime() + 3600000*24*nDays);
		document.cookie = cookieName+"="+escape(cookieValue)+";expires="+expire.toGMTString()+";path=/";
	 });

});
