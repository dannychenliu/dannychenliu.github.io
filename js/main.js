// wow js 
new WOW().init();
// menu 
$('.button_container').click(function() {
    $(this).toggleClass('active');
    $('.menu').slideToggle(200);
});

// menu 
$('.menu a').click(function() {
    if ($(window).width() < 768) {
        $('.button_container').removeClass('active');
        $('.menu').slideToggle(200);
    }
});

// gototop btn 
const goToTop = document.querySelector(".goToTop");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 1300) {
        goToTop.classList.add("active");

    } else {
        goToTop.classList.remove("active");
    }
}

goToTop.addEventListener("click", goAllUp);

function goAllUp() {
    $("html,body").animate({ scrollTop: 0 }, "slow")
}