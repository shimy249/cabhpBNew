(function(){

    angular
        .module('app')
        .controller('SubEventListController', ['subeventFact','$stateParams', SubEventsController]);

    function SubEventsController(subeventFact, $stateParams) {
        console.log('subevent');
        var vm = this;
        vm.subevents = [ ];
        console.log($stateParams.id);
        subeventFact.getSubEventList($stateParams.id).success(function (res) {
            console.log(res.subevents);


            for(var i =0; i < res.subevents.length; i++){
                res.subevents[i].start_date_time = Date.parse(res.subevents[i].start_date_time);
            }
            vm.subevents = [].concat(res.subevents);

        });

        vm.goToAttendeeList = function(id){
            console.log("going");
            $state.go('^.attendees')
        };
        //console.log(vm.events);



    }

})();
