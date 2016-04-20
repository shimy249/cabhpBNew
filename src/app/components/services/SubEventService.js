
angular.module('app').factory('subeventFact', function($http){
    var obj = {};
    obj.getSubEventList = function(eventId) {
        return $http.get("http://arcgis-CABHP-1819518128.us-west-1.elb.amazonaws.com:3000" + "/events/"+eventId);
    };

    return obj;
});