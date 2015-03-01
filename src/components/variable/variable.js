(function() {
    'use strict';

    angular.module("businessify.variable", [])
    .value("variables", {
        FB_URL: 'https://afhack.firebaseio.com/'
    });
})();