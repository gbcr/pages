// function fadedEls(el, shift) {
//     el.css('opacity', 0);

//     switch (shift) {
//         case undefined: shift = 0;
//         break;
//         case 'h': shift = el.eq(0).outerHeight();
//         break;
//         case 'h/2': shift = el.eq(0).outerHeight() / 2;
//         break;
//     }

//     $(window).resize(function() {
//         if (!el.hasClass('ani-processed')) {
//             el.eq(0).data('scrollPos', el.eq(0).offset().top - $(window).height() + shift);
//         }
//     }).scroll(function() {
//         if (!el.hasClass('ani-processed')) {
//             if ($(window).scrollTop() >= el.eq(0).data('scrollPos')) {
//                 el.addClass('ani-processed');
//                 el.each(function(idx) {
//                     $(this).delay(idx * 200).animate({
//                         opacity : 1
//                     }, 1000);
//                 });
//             }
//         }
//     });
// };
// 
// 
function fadedEls(el, shift) {
    el.css('opacity', 0);

    switch (shift) {
        case undefined:
            shift = 0;
            break;
        case 'h':
            shift = el.eq(0).outerHeight();
            break;
        case 'h/2':
            shift = el.eq(0).outerHeight() / 2;
            break;
        case 'h/3':
            shift = el.eq(0).outerHeight() / 3;
            break;
    }

    $(window).resize(function() {
        if (!el.hasClass('ani-processed')) {
            el.eq(0).data('scrollPos', el.eq(0).offset().top - $(window).height() + shift);
        }
    }).scroll(function() {
        if (!el.hasClass('ani-processed')) {
            if ($(window).scrollTop() >= el.eq(0).data('scrollPos')) {
                el.addClass('ani-processed');
                el.each(function(idx) {
                    $(this).delay(idx * 100).animate({
                        opacity : 1
                    }, 400);
                });
            }
        }
    });
}


(function($) {
    $(function() {

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            window.mobile = true;
        } else {
            window.mobile = false;
            // fadedEls($('.content-sufferfromemail h3'), 'h/2');
            // fadedEls($('.content-10.feature-one .container'), 'h/3');
            // fadedEls($('.content-10.feature-two .container'), 'h/3');
            // fadedEls($('.content-10.feature-three .container'), 'h/3');
            // fadedEls($('.header-14-sub .container'), 'h/3');
            // fadedEls($('.features'), 'h');
        }

        //send email to device
        $('#email-device-btn').click(function(event) {
           $("#get-app").hide();
           $('#email-device').show();
        });

        $('#sent-btn').click(function (event) {
            var email = $('#email-input').val();
            if (/.+@.+/i.test(email)) {
                $.post( "mail/" + email, function ( data ) {
                    alert('Email has sent to your mailbox.');
                }).fail(function (err) {
                    alert('Network error');
                }).always(function() {
                    $('#email-device').hide();
                    $("#get-app").show();
                });
            } else {
                alert('Error message format');
            }
        });

        $('#cancel-email').click(function(event) {
           $('#email-device').hide();
           $("#get-app").show();
        });

        //learn more
        // $('.btn.btn-inverse.learn-more').click(function(){
        //     $.scrollTo('#learn-more',1200); 
        //     // $body.animate({scrollTop: $('#learn-more').offset().top}, 10000);
        //     return false;
        // });



       // Focus state for append/prepend inputs
        $('.input-prepend, .input-append').on('focus', 'input', function() {
            $(this).closest('.control-group, form').addClass('focus');
        }).on('blur', 'input', function() {
            $(this).closest('.control-group, form').removeClass('focus');
        });

        // Sections height
        $(window).resize(function() {
            var sH = $(window).height();
            $('header').css('height', sH + 'px');
        });

        // Faded elements
        // fadedEls($('.content-3 .col-sm-6 + .col-sm-6 img'), 'h');
        // fadedEls($('.content-3 .features'), 75);

        // fadedEls($('.col-sm-7 .features .box'), 'h');
        // fadedEls($('.content-features .box [class*="fui-"]'), 'h');
        // fadedEls($('.content-9 .col-sm-3 img'), 'h');
        // fadedEls($('.content-sufferfromemail div'),'h');

        // Parallax
        $('.header-4 .background').each(function() {
            if(! isMobile.any())
                $(this).parallax('50%', 0.3, true);
            else
                $(this).css('background-attachment', 'initial');
        });

        // responsive
        $(window).resize(function() {
            // imgs
            if ($(window).width() > 767) {
                $('.img.mobile-processed').each(function() {
                    $(this).removeClass('mobile-processed').insertAfter($(this).parent());
                });
            } else {
                $('.img:not(.mobile-processed)').each(function() {
                    $(this).addClass('mobile-processed').insertAfter($(this).parent().find('h3'));
                });
            }
        });

        $(window).resize().scroll();

    });
})(jQuery);

