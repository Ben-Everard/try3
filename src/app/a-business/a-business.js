(function() {
    'use strict';

    angular.module('a.business', [
        'businessify.variable',
        'businessify.business'
    ])
    .controller('ABusinessCtrl', ABusinessCtrl);

    function ABusinessCtrl($routeParams, $scope, Business, variables) {
        $scope.business = Business.find($routeParams.id);
    }
})();