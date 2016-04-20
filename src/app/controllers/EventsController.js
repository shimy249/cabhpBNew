(function(){

    angular
        .module('app')
        .controller('EventListController', ['eventFact', '$state', EventsController]);

    function EventsController(eventFact, $state) {
        var vm = this;
        vm.events = [ ];

        eventFact.getEventList().success(function (res) {
            console.log(res);
            vm.events = [].concat(res);


        });
        //console.log(vm.events);

        vm.goToSubEvent = function(_id){
            console.log("going");
            $state.go('^.subevents', {id : _id})
        }


    }

})();
