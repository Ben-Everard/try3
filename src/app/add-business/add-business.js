(function() {
    'use strict';

    angular.module('add.business', ['businessify.variable'])
    .controller('AddBusinessCtrl', AddBusinessCtrl);

    function AddBusinessCtrl($scope, variables) {
        $scope.business = {};
    }
})();