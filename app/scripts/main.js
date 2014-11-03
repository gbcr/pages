'use strict';
angular.module('Wave', [
    'ui.router',
    'ngRoute',
    'ngAnimate',
    'ngTouch'
]).config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'templates/pages/index.html',
            controller: 'indexController'
        }).
        otherwise({
            redirectTo: '/'
        });
        //$locationProvider.html5Mode(true);
    }
]).run(['$rootScope', '$location',
    function($rootScope, $location) {
        $rootScope.sendEmail = function() {
            $('#sendModal').modal('show');
        }
    }
]);

(function($) {
    $(document).ready(function() {
        var kvTitles = ["Simplify your inbox.<br> No clutter, just you and the message.",
                  "Instant conversations.<br> Email that works as fast as you do.",
                  "Connect with a person, not an address. Network right from your inbox."],
            kvSubtitles = ["A streamlined interface that allows you to simply and easily take control of your mail and contacts",
                          "Finally, a messaging app–style email that actually works.",
                          "Wave brings people closer together by letting you network with people you know, and those you should know"];
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
    });
})(jQuery);