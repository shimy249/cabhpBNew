(function(){

    angular
        .module('app')
        .controller('EventListController', ['eventFact', EventsController])
        .controller('DeviceListController', ['eventFact', EventsController])
        .controller('AttendeeListController', ['eventFact', EventsController]);

    function EventsController(eventFact) {
        /*var vm = this;
        vm.events = [ ];

        eventFact.getEventList().success(function (res) {
            //console.log(res);
            vm.events = [].concat(res);


        });
        //console.log(vm.events);
*/


    }

})();
