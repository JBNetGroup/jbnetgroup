// Timing solution by Matan Yossef
// https://codepen.io/matanyo/
const device = document.querySelector(".device");

function cssClasses(element, removeClass, addClass) {
	return function() {
		element.classList.remove(removeClass);
		element.classList.add(addClass);
	};
}
function switchDevice() {
	setTimeout(cssClasses(device, "single", "both"), 1500);
	setTimeout(cssClasses(device, "both", "macbook"), 3000);
	setTimeout(cssClasses(device, "macbook", "both"), 4500);
	setTimeout(cssClasses(device, "both", "single"), 6000);
}
switchDevice();

function timeOut() {
	setTimeout(() => {
		switchDevice();
		timeOut();
	}, 7500);
}
timeOut();

// Mobile dropdown
$('.navbar-toggler').on('click', function() {
	if ($(window).scrollTop() <= 500)
	$('.navbar').toggleClass('solid');
});

$(document).ready(function() {
	$(window).scroll(function() {
		if ($('#navbarResponsive').hasClass('show'))
		$('#navbarResponsive').removeClass('show');
		if($(this).scrollTop() > 500) {
			$('.navbar').addClass('solid');
		} else {
			$('.navbar').removeClass('solid');
		}
	});
});

// Scrolling
$(".navbar .navbar-nav a[href^='#']").on('click', function(e) {
	e.preventDefault();
	var hash = this.hash;
	$('html, body').animate({
		scrollTop: $(this.hash).offset().top - 55
	}, 600);
});

// Scrollspy
$('body').scrollspy({
	target: '.navbar',
	offset: $(window).height() / 2
});

//Preloader
$(window).on('load', function() {
	$("#preloader").delay(600).fadeOut();
});

///////////////////////////
// Owl Carousel
$('#about-slider').owlCarousel({
	items:1,
	loop:true,
	margin:15,
	nav: true,
	navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	dots : true,
	autoplay : true,
	animateOut: 'fadeOut'
});

$('#testimonial-slider').owlCarousel({
	loop:true,
	margin:15,
	dots : true,
	nav: false,
	autoplay : true,
	responsive:{
		200:{
			items:1
		},
		400: {
			items:1
		},
		992:{
			items:2
		}
	}
});


$('#email-form').submit(function(){
  $.ajax({
    type: "POST",
    url: '../php/contact.php',
    data: {email: $('#email').val()},
    success: after_form_submitted,
    dataType: 'json'
  });
  return false;
});

function after_form_submitted(data)
{
  if (data == '200'){
    console.log("OK");
    location.reload();
  }
  else{
    console.log("Error. " + data);
  }
}
