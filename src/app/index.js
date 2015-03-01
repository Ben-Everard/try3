'use strict';

angular.module('businessify', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngResource',
  'ngRoute',
  'ngMaterial',
  'firebase',
  'add.business'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainCtrl'
    })
    .when('/business', {
      templateUrl: 'app/add-business/add-business.html',
      controller: 'AddBusinessCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
