'use strict';

angular.module('Wave').controller('privacyController', ['$rootScope', '$scope',
    function($rootScope, $scope) {
        $scope.filter = function(item) {
            $('.privacy-terms').find('li').removeClass('active').parent().find('.'+item).addClass('active');
            $('.privacy-container .filters').find('li').removeClass('active').parent().find('.tag-'+item).addClass('active');
        }
    }
]);