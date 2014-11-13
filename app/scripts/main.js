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
        when('/blog', {
            templateUrl: 'templates/pages/blog.html'
        }).
        when('/about', {
            templateUrl: 'templates/pages/about.html'
        }).
        when('/privacy', {
            templateUrl: 'templates/pages/privacy.html',
            controller: 'privacyController'
        }).
        when('/terms', {
            templateUrl: 'templates/pages/terms.html'
        }).
        otherwise({
            templateUrl: '/404.html'
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
        
    });
})(jQuery);