(function(){
  'use strict';

  angular.module('app')
          .service('navService', [
          '$q',
          navService
  ]);

  function navService($q){
    var menuItems = [
      {
        name: 'Events',
        icon: 'dashboard',
        sref: '.events'
      },
      {
        name: 'Attendees',
        icon: 'person',
        sref: '.attendees'
      },
      {
        name: 'Devices',
        icon: 'view_module',
        sref: '.devices'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(menuItems);
      }
    };
  }

})();
