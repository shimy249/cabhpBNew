
angular.module('app').factory('eventFact', function($http){
    var obj = {};
    obj.getEventList = function() {
        return $http.get("http://arcgis-CABHP-1819518128.us-west-1.elb.amazonaws.com:3000" + "/events");
    };

    return obj;
});