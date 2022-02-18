$(document).ready(function () {
    $('li.active').removeClass('active');
    $('a[href="' + location.pathname + '"]').closest('li').addClass('active');
});

$('.counter-count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {

        //chnage count up speed here
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

var owl = $(".owl-carousel");
owl.owlCarousel({
items: 4,
navigation: true,
loop: true,
margin: 0,
autoplay: true,
autoplayTimeout: 5000,
autoplayHoverPause: false,
dots: false,
animateIn: "fadeIn",
animateOut: "fadeOut",
navText: [
  "<i class='fa fa-chevron-left nav'></i>",
  "<i class='fa fa-chevron-right nav'></i>"
]
});
$(".play").on("click", function () {
owl.trigger("play.owl.autoplay", [5000]);
});
$(".stop").on("click", function () {
owl.trigger("stop.owl.autoplay");

});


const nav = document.querySelector('.Navbar');
window.addEventListener('scroll', fixNav);

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('navbar-active');
    } else {
        nav.classList.remove('navbar-active');
    }
}
