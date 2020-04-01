$(document).ready( function() {

	// Animations for the inital load
	// For logo
	anime({
	  targets: ['.logo'],
	  translateX: [-50, 0],
	  opacity: [0, 1],
	  duration: 500,
	  easing: 'easeInCubic',
	});
	// For nav links
	anime({
	  targets: ['.social-links a, .navigation li'],
	  translateX: [50, 0],
	  opacity: [0, 1],
	  duration: 500,
	  easing: 'easeInCubic',
	  delay: anime.stagger(50),
	});

	var deviceWidth = $('body').width();
	if (deviceWidth <= '1024') {
		var translateDistFrom = -150;
		var translateDisTo = -200;
	} else {
		var translateDistFrom = -300;
		var translateDisTo = -350;
	}

	// For product image
	if($('#swup').hasClass('home')) {
		anime({
		  targets: ['.product-img'],
		  scale: [0.8, 1],
		  duration: 700,
		  easing: 'cubicBezier(.82,1.7,.7,.09)',
		});
	} else if(!$('#swup').hasClass('home') && deviceWidth > '768') {
		anime({
		  targets: ['.product-img'],
		  scale: [0.9, 1],
		  translateX: [translateDistFrom, translateDisTo],
		  duration: 700,
		  easing: 'cubicBezier(.82,1.7,.7,.09)',
		});
	} 
	// For the content
	anime({
	  targets: ['.home .content-right-inner'],
	  translateX: [-50, 0],
	  opacity: [0, 1],
	  duration: 500,
	  easing: 'easeInCubic',
	});

	/** Mobile Nav Script **/
	if(deviceWidth <= '768') {
		$('.mobile-nav-close-icon').hide();
		$('.mobile-nav').click( function() {
			$('.page-top nav').toggle(200);
			$('.mobile-nav-close-icon').toggle(200);
			$('.mobile-nav-icon').toggle(200);
		});
	}
});

const swup = new Swup();

function init() {

	/** Tab Script **/
	$('.tablinks').click( function() {
		var tabIdentifier = $(this).data('id');
		openTab(tabIdentifier);
	});

	function openTab(tabIdentifier) {
		$('.tabcontent').each( function() {
			$(this).hide();
		})
		$('.tablinks').each( function() {
			$(this).removeClass('active');
		})
		$('#'+tabIdentifier).show();
		$('.tablinks[data-id="'+tabIdentifier+'"]').addClass('active');

		anime({
		  targets: ['#'+tabIdentifier],
		  translateY: [50,0],
		  opacity: [0, 1],
		  duration: 500,
		  easing: 'cubicBezier(.56,.7,.11,1.01)',
		});

		anime({
		  targets: ['.tablinks.active .tabactive-bg'],
		  scale: [0, 1],
		  duration: 500,
		  easing: 'cubicBezier(.56,.7,.11,1.01)',
		});
	}
	// Get the element with id="defaultOpen" and click on it
	$('#defaultOpen').click();

	// Initate countdown module
	if($(".countdown").length>0){
		$(".countdown").each(function(){
			$(this).countdown();	
		})
	}

	var deviceWidth = $('body').width();
	if (deviceWidth <= '1024') {
		var translateDisTo = -200;
	} else {
		var translateDisTo = -350;
	}

	// Animation for the product image
	if(deviceWidth > '768') {
		if($('#swup').hasClass('home')) {
			anime({
			  targets: ['.product-img'],
			  translateX: 0,
			  duration: 500,
			  easing: 'easeOutBack',
			});
		} else {
			anime({
			  targets: ['.product-img'],
			  translateX: translateDisTo,
			  duration: 500,
			  easing: 'easeOutBack',
			});
		}
	} else {
		anime({
		  targets: ['.product-img'],
		  scale: [0.8, 1],
		  duration: 700,
		  easing: 'cubicBezier(.82,1.7,.7,.09)',
		});
	}

	/** Mobile Nav Script **/
	if(deviceWidth <= '768') {
		$('html.is-animating .page-top nav').hide(200);
		$('html.is-animating .mobile-nav-close-icon').hide(200);
		$('html.is-animating .mobile-nav-icon').show(200);
	}
}

init();
swup.on('contentReplaced', init);
