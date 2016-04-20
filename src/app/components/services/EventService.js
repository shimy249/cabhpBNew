
angular.module('app').factory('eventFact', function($http, config){
    var obj = {};
    obj.getEventList = function() {
        return $http.get(config.apiUrl + "/events");
    };

    return obj;
});