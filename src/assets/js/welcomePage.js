
new WOW().init();


$(window).scroll( function(){


var topWindow = $(window).scrollTop();
var topWindow = topWindow * 1.5;
var windowHeight = $(window).height();
var position = topWindow / windowHeight;
position = 1 - position;

$('#bottom').css('opacity', position);

});

function openNav() {
document.getElementById("mySidenav").style.width = "250px";
document.getElementById("main").style.display = "0";
document.body.style.backgroundColor = "white";
}

function closeNav() {
document.getElementById("mySidenav").style.width = "0";
document.getElementById("main").style.marginRight= "0";
document.body.style.backgroundColor = "white";
}


$(window).on("scroll", function() {
if ($(this).scrollTop() > 10) {
  $("nav.navbar").addClass("mybg-dark");
  $("nav.navbar").addClass("navbar-shrink");


} else {
  $("nav.navbar").removeClass("mybg-dark");
  $("nav.navbar").removeClass("navbar-shrink");
 
}



});

$(function() {
$('#bottom').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
var target = $(this.hash);
target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
if (target.length) {
$('html,body').animate({
scrollTop: target.offset().top
}, 500);
return false;
}
}
});
});

$(document).ready(function(){
$(".fancybox").fancybox({
openEffect: "none",
closeEffect: "none"
});
})
