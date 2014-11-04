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
        $locationProvider.html5Mode(true);
    }
]).run(['$rootScope', '$location', '$http',
    function($rootScope, $location, $http) {
        $rootScope.sendEmail = function(email) {
            var rootUrl = $location.absUrl();
            $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            $http({
                url: rootUrl + 'subscribe.php',
                dataType: "json",
                method: "POST",
                data: {
                    email: email
                },
            }).success(function(){
                $('#sendModal').modal('show');
            });
        }
    }
]);

(function($) {
    $(document).ready(function() {
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
    });
})(jQuery);