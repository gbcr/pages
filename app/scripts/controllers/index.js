'use strict';

angular.module('Wave').controller('indexController', ['$rootScope', '$scope', '$routeParams', '$location', '$window',
    function($rootScope, $scope, $routeParams, $location, $window) {
        var kvTitles = ["Email. Simplified for mobile.",
                  "Instant email that works as fast as you do.",
                  "Make email personal again. No clutter."],
            kvSubtitles = ["A minimalist interface backed up by sophisticated content trimming.",
                          "IM-style conversations allow for real-time, on-the-go chats.",
                          "An intelligent filtering system lets you focus on the people that matter."];
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            var imgArr = ["images/mobile-kv-1.jpg",
                "images/mobile-kv-2.jpg",
                "images/mobile-kv-3.jpg"];
        } else {
            var imgArr = ["images/kv-1.jpg",
                "images/kv-2.jpg",
                "images/kv-3.jpg"];
        }
        $('#kenburns-slideshow').Kenburns({
            images: imgArr,
            scale: 0.94,
            duration:7000,
            fadeSpeed:1200,
            ease3d:'ease-out',

            onSlideComplete: function(){
                var titleStr = kvTitles[this.getSlideIndex()],
                    subtitleStr = kvSubtitles[this.getSlideIndex()];
                $('#kv-title').fadeOut('slow',function(){
                    $(this).html(titleStr);
                }).fadeIn('slow');

                $('#kv-subtitle').fadeOut('slow',function(){
                    $(this).html(subtitleStr);
                }).fadeIn('slow');
            },
            onLoadingComplete: function(){
                
            }
        });
        //init slider
        var slider = $("#slider").mostSlider({
            aniSpeed: 1000,
            autoPlay: true,
            aniMethod: 'auto',
            pauseTime: 9000,
            transparancy: true,
            metrics: {
                width: 830,
                height: 570
            },
            contentClass: "content",
            sbsContent: true,
            contentAniDelay: 300,
        });

        $scope.more = function() {
            $("html, body").animate({scrollTop: $('.slider-wrapper').offset().top }, 1000);
        }
    }
]);