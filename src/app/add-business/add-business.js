(function() {
    'use strict';

    angular.module('add.business', [
        'businessify.variable',
        'businessify.business'
    ])
    .controller('AddBusinessCtrl', AddBusinessCtrl);

    function AddBusinessCtrl($scope, Business, variables) {
        $scope.businesses = Business.all;

        $scope.buisness = {};

        $scope.addBusiness = function() {
            Business.create($scope.business);
        };

        $scope.deleteBusiness = function(business) {
            Business.delete(business);
        };
    }
})();