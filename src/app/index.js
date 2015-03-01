'use strict';

angular.module('businessify', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngResource',
  'ngRoute',
  'ngMaterial',
  'firebase'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainCtrl'
    })
    .when('/business', {
      templateUrl: 'app/business/buisness.html',
      controller: 'BusinessCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
