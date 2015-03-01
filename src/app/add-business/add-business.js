(function() {
    'use strict';

    angular.module('add.business', [
        'businessify.business'
    ])
    .controller('AddBusinessCtrl', AddBusinessCtrl);

    function AddBusinessCtrl($scope, Business) {
        $scope.businesses = Business.all;
        $scope.business = {
            address: {},
            types: []
        };

        $scope.capacities = [
            "5 - 25",
            "25 - 50",
            "50 - 100",
            "100 - 200",
            "200+"
        ];
        $scope.businessTypes = [
            'Activity',
            'Food',
            'Event Planner',
            'Hotel/Lodging',
            'Photos',
            'Transportation',
            'Venue'
        ];

        $scope.addBusiness = function() {
            Business.create($scope.business);
        };

        $scope.addType = function() {
            $scope.business.types.push($scope.businessType);
            _.pull($scope.businessTypes, $scope.businessType);
            $scope.businessType = '';
        };

        $scope.deleteBusiness = function(business) {
            Business.delete(business);
        };

        $scope.removeActivity = function(type) {
            _.pull($scope.business.types, type);
            $scope.businessTypes.push(type);
        };
    }
})();