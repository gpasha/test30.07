// Импортируем jQuery
//= ../../node_modules/jquery/dist/jquery.js

// Импортируем необходимые js-файлы Bootstrap 4
//= ../../node_modules/bootstrap/dist/js/bootstrap.js

// Импортируем необходимые js-файлы Bootstrap 4
//= libs/fullpage.js

// Импортируем другие js-файлы
//= libs/swiper.min.js


// FULLPAGE-PLUGIN

$(document).ready(function () {
    $('#fullpage').fullpage({
        sectionsColor: ['$color_white', '#cccccc'],
        navigation: true,
        navigationTooltips: ['01', '02'],
        showActiveTooltip: true,
        slidesNavigation: true,

        afterLoad:function(link,index){

             var $fpnav = $(".fp-show-active ul li a");

            $fpnav.eq(0).next().addClass("fp-tooltip-active");

             if ($fpnav.eq(0).hasClass('active')){
                 $fpnav.eq(1).next().removeClass("fp-tooltip-active");
                 $fpnav.eq(0).next().addClass("fp-tooltip-active");
                 return false;
             }
             else if($fpnav.eq(1).hasClass('active')){
                 $fpnav.eq(0).next().removeClass("fp-tooltip-active");
                 $fpnav.eq(1).next().addClass("fp-tooltip-active");
                 return false;
             }
        },

        onLeave:function(link,index){

            var $fpnav = $(".fp-show-active ul li a");

            $fpnav.each(function () {
                $(this).next().toggleClass("fp-tooltip-active");
            });

        }
    });
});


//SWIPER-SLIDER

var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: false,
    speed:350,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    }
});


//NAV-MENU

$(document).ready(function () {

    var $hamburger = $(".header__humb img");
    var $menu = $(".header__menu");
    var $close = $(".header__menu li:first-child");

    $hamburger.on("click", function () {
        $menu.addClass('header__menu-active');
        return false;
    });

    $close.on("click", function () {
        $menu.removeClass('header__menu-active');
        return false;
    });

});
