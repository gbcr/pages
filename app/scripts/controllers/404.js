'use strict';

angular.module('Wave').controller('notFindController', ['$rootScope', '$scope',
    function($rootScope, $scope) {
        $('footer').css({
            'position':'fixed',
            'bottom':'0',
            'width':'100%'
        });
    }
]);