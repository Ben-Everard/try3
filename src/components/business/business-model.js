(function() {
    'use strict';

    angular.module('businessify.business.model', [
        'ngResource',
        'businessify.variable'
    ])
    .factory('Business', businessFactory);

    function businessFactory($firebase, variables) {
        var baseUrl = variables.FB_URL;
        var ref = new Firebase(baseUrl + '/business');
        var businesses = $firebase(ref).$asArray();

        var Business = {
            all: businesses,
            create: function (business) {
                business.id = businesses.length + 1;
                return businesses.$add(business);
            },
            find: function (businessId) {
                return $firebase(ref.child(businessId)).$asObject();
            },
            delete: function (business) {
                return businesses.$remove(business);
            }
        };

        return Business;
    }
})();