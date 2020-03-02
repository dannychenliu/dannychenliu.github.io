$('.more').click(function() {
    if ($('.header ul').css('display') == 'none') {
        $(".header ul").css("display", "inline-block");
    } else {
        $(".header ul").css("display", "none");
    }
});