(function() {
    'use strict';

    angular.module('all.business', [
        'businessify.variable',
        'businessify.business'
    ])
    .controller('AllBusinessCtrl', AllBusinessCtrl);

    function AllBusinessCtrl($scope, Business, variables) {
        $scope.businesses = Business.all;
    }
})();