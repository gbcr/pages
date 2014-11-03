'use strict';

angular.module('Wave').controller('indexController', ['$rootScope', '$scope', '$routeParams', '$location', '$window',
    function($rootScope, $scope, $routeParams, $location, $window) {
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