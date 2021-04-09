(function() {
    "use strict";
    document.addEventListener('DOMContentLoaded', function() {

        //TYPED
        var typed = new Typed('.element', {
            strings: ["Frontend Developer."],
            typeSpeed: 60
        });

    }); //DOM CONTENT LOADED
})();



$(document).ready(function() {
    //JQuery

    //Animation boxbox

    // const animation = document.querySelectorAll(".box-box");
    // $('.box-box').on('mouseover', function() {
    //     console.log('di click');
    //     animation.addClass('animate__headShake animate__slower');
    // });


    // $('.box-box').on('mouseout', function() {
    //     console.log('quite click');
    //     animation.removeClass('animate__headShake animate__slower');
    // });


    //Scroll on the window
    // var windowHeight = $(window).height();

    // var iconbox = $('.iconbox').innerHeight();


    // $(window).scroll(function() {
    //     var scroll = $(window).scrollTop();

    //     if (scroll > windowHeight) {
    //         $('.iconbox').addClass('animate__fadeInRight');
    //     } else {
    //         // $('.iconbox').removeClass('animate__fadeInRight');
    //     }
    // });


    //Waypoint
    var iconbox = jQuery('.iconbox');
    if (iconbox.length > 0) {
        $('.iconbox').waypoint(function() {
            $('.iconbox').addClass('animate__fadeInRight animate__slow');
            // $('.iconbox div.animate__animated').addClass('b-box box-box');
            $('.iconbox').css('visibility', visible);
        }, {
            offset: '50%'
        });
    } else {
        $('.iconbox').css('visibility', hidden);
    }

    // var contents = jQuery('.event-mouse');
    // if (contents.length > 0) {
    //     $('.event-mouse').waypoint(function() {
    //         $('.event-mouse div.desktop i').addClass('fas fa-desktop');
    //     }, {
    //         offset: '50%'
    //     });
    // }
    //else {
    //     $('.iconbox').removeClass('animate__fadeInRight animate__slow');
    //     $('.iconbox div.animate__animated').removeClass('b-box box-box');
    // }

    //Agregar clases al hover
    $('.event-mouse').mouseover(function(e) {
        // console.log('di click');
        console.log(e);
        $(this).addClass("animate__headShake animate__slower");
    });

    $('.event-mouse').mouseout(function(e) {
        // console.log('quite click');
        $(this).removeClass("animate__headShake animate__slower");
    });

    //Slider
    $('.your-class').slick();

    //Hamburguer Menu
    $(document).ready(function() {
        $(".container-stick").click(function() {
            $(".stick").toggleClass(function() {
                return $(this).is('.open, .close') ?
                    'open close' : 'open';
            });
        });
    });

    //Countdown
    $('.cuenta-regresiva').countdown('2021/07/27 11:45:00', function(event) {
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    });

    //TILT
    $('.icon-tilt').tilt({
        scale: 1.1
    });
    const tilt = $('.js-tilt').tilt()
    tilt.on('change', function(e, transforms) {});
}); //JQUERY_