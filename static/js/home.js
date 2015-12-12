$(document).ready(function($){

    $('.loader i').css('opacity', 1);

    // horizontally center header

    var body = $('body');
    var viewPortWidth = $(window).width();
    var viewPortHeight = $(window).height();

    if (viewPortWidth < 1485){
        var horizontalCenter = $('.horizontal-center');
        var horizontalCenterWidth = $('.horizontal-center.container').siblings('.container').outerWidth();
        horizontalCenter.css('margin-left', - horizontalCenterWidth / 2);
    }
    else {
        if (body.hasClass('scrolled-to-content')){
            var horizontalCenter = $('.horizontal-center');
            var horizontalCenterWidth = $('.horizontal-center.container').siblings('.container').outerWidth();
            horizontalCenter.css('margin-left', - horizontalCenterWidth / 2 + 165);
        }
        else {
            var horizontalCenter = $('.horizontal-center');
            var horizontalCenterWidth = $('.horizontal-center').outerWidth();
            horizontalCenter.css('margin-left', - horizontalCenterWidth / 2);
        }
    }

    // Vertical middle

    var verticalMiddle = $('.vertical-middle');

    verticalMiddle.css('margin-top', function() {
        return -($(this).height() / 2);
    });

    // Horizontal middle

    var horizontalMiddle = $('.horizontal-middle');

    horizontalMiddle.css('margin-left', function() {
        return -($(this).width() / 2);
    });

    // Home Slider

    var viewPortWidth = $(window).outerWidth();
    var homeSliderWrapp = $('.home-slider-wrapper');
    var homeSlider = $('.home-slider .slidee');

    homeSliderWrapp.height(viewPortHeight);


    homeSlider.slick({
        slide: '.home-slider .slidee li',
        autoplay: true,
        autoplaySpeed: 8000,
        dots: false,
        arrows: false,
        draggable: false,
        fade: true,
        pauseOnHover: false,
        cssEase: 'cubic-bezier(.27,.52,.28,.97)',
        speed: 1600
    });

    var slyCounter = $('.slick-dots');
    var slidePrev = $('.slick-prev');
    var slideNext = $('.slick-next');
    var sliderCount = $('.slick-dots li').length;
    slyCounter.append( '<span>' + sliderCount + '</span>');
    slidePrev.append( '<span class="prev verticalize-container"><i class="icon-prev verticalize"></i></span>');
    slideNext.append( '<span class="next verticalize-container"><i class="icon-next verticalize"></i></span>');

    // Nicescroll

    $('.cart-widget').niceScroll({
        cursorcolor:'#999',
        cursorborder: 0,
        cursorborderradius: 0,
        scrollspeed: 30,
        cursoropacitymin: 0.3,
        horizrailenabled: false
    });

    // Header on scroll

    var menuToggle = $('.menu-toggle');
    var menuTrigger = $('.menu-toggle .menu-trigger');
    var navbar = $('.navbar-default');

    menuTrigger.click(function(e){
        e.preventDefault();
        body.addClass('header-big');
    });

    var menuClose = $('.menu-toggle .icon-close');
    menuClose.click(function(e){
        e.preventDefault();
        body.removeClass('header-big');
    });

    if ($(window).scrollTop() > 80) {
        body.addClass('scrolled-to-content');
    }

    $(window).scroll(function () {
        var $this = $(this);
        if ($this.scrollTop() > 80) {
            body.addClass('scrolled-to-content');
        } else {
            body.removeClass('scrolled-to-content');
        }
        var scrollVar = $this.scrollTop();
        if (scrollVar < 80) {
            navbar.css({'opacity':( 60 - scrollVar ) / 60});
        }
    });

    if (viewPortWidth > 975){
        $(window).scroll(function () {
            var $this = $(this);
            if ($this.scrollTop() > 80) {
                toTopArrow.fadeIn();
            } else {
                body.removeClass('header-big');
                toTopArrow.fadeOut();
            }
        });
    }

    // Shipping Baner

    var shippingBanner = $('.shipping-banner');
    var footerWrap = $('#footer-wrapper');

    if (shippingBanner.is(':visible')) {
        footerWrap.css('padding-bottom', 65);
    }
    else {
        footerWrap.css('padding-bottom', 0);
    }

}); // End Document Ready

$(window).load(function(){

    // Preloader

    $('.loader').fadeOut('slow'); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow':'visible'}).fadeIn();

    // Vertical middle

    var verticalMiddle = $('.vertical-middle');

    verticalMiddle.css('margin-top', function() {
        return -($(this).height() / 2);
    });

    // Horizontal middle

    var horizontalMiddle = $('.horizontal-middle');

    horizontalMiddle.css('margin-left', function() {
        return -($(this).width() / 2);
    });

}); // End Window Load

$(window).resize(function(){

    // horizontally center element

    var body = $('body');
    var viewPortWidth = $(window).width();
    var viewPortHeight = $(window).height();

    if (viewPortWidth < 1485){
        var horizontalCenter = $('.horizontal-center');
        var horizontalCenterWidth = $('.horizontal-center.container').siblings('.container').outerWidth();
        horizontalCenter.css('margin-left', - horizontalCenterWidth / 2);
    }
    else {
        if (body.hasClass('scrolled-to-content')){
            var horizontalCenter = $('.horizontal-center');
            var horizontalCenterWidth = $('.horizontal-center.container').siblings('.container').outerWidth();
            horizontalCenter.css('margin-left', - horizontalCenterWidth / 2 + 165);
        }
        else {
            var horizontalCenter = $('.horizontal-center');
            var horizontalCenterWidth = $('.horizontal-center').outerWidth();
            horizontalCenter.css('margin-left', - horizontalCenterWidth / 2);
        }
    }

    var navbar = $('.navbar-default');
    var mainWrapWidth = $('#main-wrapper').width();
    var homeSliderWrapp = $('.home-slider-wrapper');

    // Vertical middle

    var verticalMiddle = $('.vertical-middle');

    verticalMiddle.css('margin-top', function() {
        return -($(this).height() / 2);
    });

    // Horizontal middle

    var horizontalMiddle = $('.horizontal-middle');

    horizontalMiddle.css('margin-left', function() {
        return -($(this).width() / 2);
    });

    // Home slider

    homeSliderWrapp.height(viewPortHeight);

    // Header on scroll

    if (viewPortWidth > 975){
        $(window).scroll(function () {
            var $this = $(this);
            if ($this.scrollTop() > 80) {
               toTopArrow.fadeIn();
            } else {
               body.removeClass('header-big');
               toTopArrow.fadeOut();
            }
        });
    }

}); // End Window Resize




