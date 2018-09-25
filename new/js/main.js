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

$(document).ready(function() {
        // Transition effect for navbar
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 500) {
              $('.navbar').addClass('solid');
          } else {
              $('.navbar').removeClass('solid');
          }
        });
});
