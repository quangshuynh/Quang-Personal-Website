$(document).ready(function(){

// initial conditions (default settings)
$("#home-button").addClass("active");

  // toggle nav active class

})
// scroll switch buttons highlighted (one page navigation)
$('#nav').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing'
});