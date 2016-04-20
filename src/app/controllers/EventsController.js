(function(){

    angular
        .module('app')
        .controller('EventListController', [ EventsController]);

    function EventsController() {
        var vm = this;
        vm.events = [ ];

        /*eventFact.getEventList().success(function (res) {
            //console.log(res);
            vm.events = [].concat(res);


        });*/
        //console.log(vm.events);



    }

})();
