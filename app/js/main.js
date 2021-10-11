//show aside when bottom of page

$(window).scroll(function() {

    if($(document).height() - ($(window).scrollTop() + $(window).height()) < 250 ) {
        $('.aside').addClass('show');
    }
    else  {
        $('.aside').removeClass('show');
    }
});