$(document).ready(function($){

    $('.loader i').css('opacity', 1);

    // horizontally center header
    var body = $('body');
    var viewPortWidth = $(window).width();
    var viewPortHeight = $(window).height();
    console.log('}}}}', viewPortWidth,'}}{{', viewPortHeight)
    if (viewPortWidth < 1485){
        var horizontalCenter = $('.horizontal-center');
        var horizontalCenterWidth = $('.horizontal-center.container').siblings('.container').outerWidth();
        console.log('}}}}', horizontalCenterWidth,'}}{{', horizontalCenter)

        horizontalCenter.css('margin-left', - horizontalCenterWidth / 2);
    }
    else {
        if (body.hasClass('scrolled-to-content')){
            var horizontalCenter = $('.horizontal-center');
            var horizontalCenterWidth = $('.horizontal-center.container').siblings('.container').outerWidth();
            horizontalCenter.css('margin-left', - horizontalCenterWidth / 2 + 165);
        }
        else {http://127.0.0.1:8000/pl/
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

    // Post Slider

    var postSingleSlide = $('.post-slider .post');
    var postSliderWidth = $('.post-slider').width();

    postSingleSlide.width(postSliderWidth);

    // Wallet Slider

    var walletSliderHeight = $('.wallet-slider-wrapper, .wallet-slider li');

    walletSliderHeight.height(viewPortHeight);

    // Shop Slider

    var shopSingle = $('.shop-single');
    var shopSingleHeight = $('.shop-single').outerHeight();
    var shopSingleSlide = $('.shop-single-slider li');
    var shopSingleSliderWidth = $('.shop-single-slider').width();

    shopSingleSlide.width(shopSingleSliderWidth);

    if(viewPortWidth > 1350) {
        shopSingleSlide.height(shopSingleHeight);
    }

    // Nicescroll

    $('.cart-widget').niceScroll({
        cursorcolor:'#999',
        cursorborder: 0,
        cursorborderradius: 0,
        scrollspeed: 30,
        cursoropacitymin: 0.3,
        horizrailenabled: false
    });

    // Back to top
    var toTopArrow = $('.back-to-top');
    var mainWrapWidth = $('#main-wrapper').width();

    toTopArrow.click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800, 'easeOutQuart');
        return false;
    });

    if(viewPortWidth > 800){
        toTopArrow.css('right', (viewPortWidth - mainWrapWidth) / 4 - 22);
    }

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

    // Size choosing

    var size = $('.product-details .sizes li a');

    $(size).click(function(e){
        e.preventDefault();
        $(this).toggleClass('active').parent().siblings('li').find('a').removeClass('active');
        $("#sizehidden").val($(this).data("value"));
    });

    // Share Button

    var shareBtn = $('.shop-single-slider .btn, .home-slider .share.btn');
    var shareIcons = $('.shop-single-slider .social, .home-slider .social');

    shareBtn.click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        shareIcons.toggleClass('active');
    });

    // Modals

    var modalTrigger = $('.md-trigger');
    var sizeChartTrigger = $('.size-chart');
    var sizeModal = $('.size-modal');
    var sizeModalHeight = $('.size-modal').outerHeight();
    var sizeModalWidth = $('.size-modal').width();
    var wooModalTrigger = $('.woocommerce table.cart a.remove');
    var modalOverlay = $('.md-overlay');
    var modal = $('.md-modal');
    var modalContent = $('.md-content');
    var modalClose = $('.md-content .close');
    var removeCartItem = $('.woocommerce .remove-item');

    modalContent.click(function(e){
        e.stopPropagation();
    });

    modalTrigger.click(function(e){
        e.preventDefault();
        e.stopPropagation();
        modal.animate({opacity: 1, top: 50.00 + '%'}, 300).addClass('md-show').show();
    });

    sizeChartTrigger.click(function(e){
        e.preventDefault();
        e.stopPropagation();
        sizeModal.animate({opacity: 1, left: 0}, 300).addClass('md-show').show();
        $('#ascrail2001').show();
    });

    sizeModal.height(viewPortHeight);

    sizeModal.niceScroll({
        cursorcolor:'#999',
        cursoropacitymax: 0.5,
        cursorborder: 0,
        cursorborderradius: 0,
        scrollspeed: 30,
        cursoropacitymin: 0,
        horizrailenabled: false
    });

    wooModalTrigger.click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $(this).parent().parent().find('.remove-item-modal').show().addClass('md-show').animate({opacity: 1, top: 50.00 + '%'}, 300);;
        modalOverlay.addClass('active');
    });

    $(window).click(function(){
        modal.animate({opacity: 0, top: 48.00 + '%'}, 300).fadeOut().removeClass('md-show');
        modalOverlay.removeClass('active');
        sizeModal.animate({opacity: 0, left: -100.00 + '%'}, 700).removeClass('md-show');
    });

    modalClose.click(function(e){
        e.preventDefault();
        modal.animate({opacity: 0, top: 48.00 + '%'}, 300).fadeOut().removeClass('md-show');
        modalOverlay.removeClass('active');
        sizeModal.animate({opacity: 0, left: -100.00 + '%'}, 700).removeClass('md-show');
        $('#ascrail2001').hide();
    });

    removeCartItem.click(function(e){
        modal.animate({opacity: 0, top: 48.00 + '%'}, 300).fadeOut().removeClass('md-show');
        modalOverlay.removeClass('active');
    });

    var menTs = $('.sizes-men');
    var womenTs = $('.sizes-women');
    var menSelect = $('.men-select');
    var womenSelect = $('.women-select');

    menSelect.click(function(e){
        e.preventDefault();
        menTs.addClass('active');
        womenTs.removeClass('active');
    });

    womenSelect.click(function(e){
        e.preventDefault();
        womenTs.addClass('active');
        menTs.removeClass('active');
    });

    // Added to cart modal

    var addedModal = $('.added-to-cart');
    var closeAdded = $('.select-a-size .close-added');
    var selectSize = $('.select-a-size');
    var addedTrigger = $('.product-details .add-to-cart');

    addedModal.click(function(e){
        e.stopPropagation();
    });

    closeAdded.click(function(e){
        e.preventDefault();
        modalOverlay.removeClass('active');
    });

    // Custom checkbox

    var checkboxLabel = $('label.checkbox');

    checkboxLabel.click(function(){
        $(this).toggleClass('active');
    });

    // Cart colleterals height

    var cartColleterals = $('.cart-collaterals');
    var cartColleteralsHeight = $('.cart-collaterals').height();

    if (viewPortWidth > 1184){
        cartColleterals.height(cartColleteralsHeight);
    }

    // IE8

    var productImg = $('.no-csstransforms .shop-item img');
    var productImgWidth = productImg.width();

    productImg.css('margin-left', - productImgWidth / 2);

    // Shipping Baner

    var shippingBanner = $('.shipping-banner');
    var footerWrap = $('#footer-wrapper');

    if (shippingBanner.is(':visible')) {
        footerWrap.css('padding-bottom', 65);
    }
    else {
        footerWrap.css('padding-bottom', 0);
    }

    // My Account

    var getAccountTableHeight = $('.my-account__left').height();
    var accountTable = $('.my-account__right');

    if(viewPortWidth > 1335){
        accountTable.height(getAccountTableHeight);
        accountTable.niceScroll({
            cursorcolor:'transparent',
            cursorborder: 0,
            cursorborderradius: 0,
            scrollspeed: 30,
            cursoropacitymin: 0,
            horizrailenabled: false
        });
    }

}); // End Document Ready

$(window).load(function(){

    // Preloader

    $('.loader').fadeOut('slow'); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow':'visible'}).fadeIn();

    var viewPortWidth = $(window).width();

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

    // Post Slider

    $('.post-slider').sly({
        horizontal: 1,
        itemNav: 'forceCentered',
        activateMiddle: 1,
        itemSelector: '.post-slider .slidee .post',
        smart: 1,
        activateOn: 'click',
        prev: '.post-slider-wrapper .prev',
        next: '.post-slider-wrapper .next',
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 0,
        activatePageOn: 'click',
        speed: 600,
        elasticBounds: 1,
        easing: 'easeOutExpo',
        keyboardNavBy: 'items'
      });

    // Shop Single Slider

    $('.shop-single-slider').sly({
        horizontal: 1,
        itemNav: 'forceCentered',
        activateMiddle: 1,
        itemSelector: '.shop-single-slider .slidee li',
        smart: 1,
        activateOn: 'click',
        prev: '.shop-single-slider-wrapper .prev',
        next: '.shop-single-slider-wrapper .next',
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 0,
        pagesBar: '.pages',
        activatePageOn: 'click',
        speed: 600,
        elasticBounds: 1,
        easing: 'easeOutExpo',
        keyboardNavBy: 'items'
      });

    var sliderCount = $('.shop-single-slider-wrapper .pages li').length;
    $('.shop-single-slider-wrapper .pages').append( '<span>' + sliderCount + '</span>');

    // Wallet Slider

    $('.wallet-slider').sly({
        horizontal: 0,
        vertical: 1,
        itemNav: 'forceCentered',
        activateMiddle: 1,
        itemSelector: '.wallet-slider .slidee li',
        scrollSource: '.wallet-slider .slidee li',
        smart: 1,
        activateOn: 'scroll',
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 0,
        pagesBar: '.pages',
        activatePageOn: 'scroll',
        scrollBy: 1,
        speed: 600,
        elasticBounds: 1,
        easing: 'easeOutExpo',
        keyboardNavBy: 'items'
      });

    var sliderCount = $('.wallet-slider-wrapper .pages li').length;
    $('.wallet-slider-wrapper .pages').append( '<span>' + sliderCount + '</span>');

    // Isotope

    var $container = $('.shop').isotope({
        animationEngine: 'best-available',
        layoutMode: 'sloppyMasonry',
        itemSelector : '.shop-item',
        sortBy : 'original-order'
    });

    $container.imagesLoaded( function() {
        $container.isotope('reLayout');
    });

    // Easy Zoom

    if (viewPortWidth > 1350){
        $('.shop-single-slider li a').each(function(){
            var zoomParent = $('.shop-single');
            $(this).easyZoom({
                preload: '<p class="preloader">Loading the image</p>',
                append: false,
                parent: zoomParent
            });
        });
    }

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
    var postSingleSlide = $('.post-slider .post');
    var postSliderWidth = $('.post-slider').width();
    var shopSingleSlide = $('.shop-single-slider li');
    var shopSingleHeight = $('.shop-single').outerHeight();
    var shopSingleSliderWidth = $('.shop-single-slider').width();
    var toTopArrow = $('.back-to-top');
    var mainWrapWidth = $('#main-wrapper').width();
    var homeSliderWrapp = $('.home-slider-wrapper');
    var sizeModal = $('.size-modal');

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

    if(viewPortWidth > 800){
        toTopArrow.css('right', (viewPortWidth - mainWrapWidth) / 4 - 22);
    }

    // Post slider

    postSingleSlide.width(postSliderWidth);
    shopSingleSlide.width(shopSingleSliderWidth);
    if(viewPortWidth > 1350) {
        shopSingleSlide.height(shopSingleHeight);
    }

    // Wallet Slider

    var walletSliderHeight = $('.wallet-slider-wrapper, .wallet-slider li');

    walletSliderHeight.height(viewPortHeight);

    $('.post-slider').sly('reload');
    $('.shop-single-slider').sly('reload');
    $('.wallet-slider').sly('reload');

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

    // Size chart modal

    sizeModal.height(viewPortHeight);

    // My Account

    var getAccountTableHeight = $('.my-account__left').height();
    var accountTable = $('.my-account__right');

    if(viewPortWidth > 1335){
        accountTable.height(getAccountTableHeight);
    }


}); // End Window Resize




