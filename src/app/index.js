'use strict';

angular.module('angularMaterialAdmin', ['ngAnimate', 'ngCookies', 'ngTouch',
        'ngSanitize', 'ui.router', 'ngMaterial', 'nvd3', 'app'])

    //.constant('config', {
      //  apiUrl: 'http://arcgis-CABHP-1819518128.us-west-1.elb.amazonaws.com:3000'
    //})

    .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider,
                      $mdIconProvider) {
        $stateProvider

            .state('home', {
                url: '',
                templateUrl: 'app/views/main.html',
                controller: 'MainController',
                controllerAs: 'vm',
                abstract: true
            })
            
            .state('home.events', {
                url: '/events',
                templateUrl: 'app/views/events.html',
                controller: 'EventListController',
                controllerAs: 'vm',
                data:{
                    title: 'Events'
                }
            })
            .state('home.subevents',{
                url: '/events/:id',
                templateUrl: 'app/views/subevents.html',
                controller: 'SubEventListController',
                controllerAs: 'vm',
                data:{
                    title: 'SubEvents'
                }
            })
            .state('home.subeventdetails',{
                url:'/events/:id/details',
                templateUrl: 'app/views/subeventdetails.html',
                controller: 'SubEventDetailsController'
            })
            .state('home.attendees', {
                url: '/attendees',
                templateUrl: 'app/views/profile.html',
                controller: 'ProfileController',
                controllerAs: 'vm',
                data:{
                    title: 'Attendees'
                }
            })
            .state('home.devices', {
                url: '/devices',
                templateUrl: 'app/views/devices.html',
                controller: 'DeviceListController',
                controllerAs: 'vm',
                data:{
                    title: 'devices'
                }
            });



        $urlRouterProvider.otherwise('/events');

        $mdThemingProvider
            .theme('default')
            .primaryPalette('grey', {
                'default': '600'
            })
            .accentPalette('teal', {
                'default': '500'
            })
            .warnPalette('defaultPrimary');

        $mdThemingProvider.theme('dark', 'default')
            .primaryPalette('defaultPrimary')
            .dark();

        $mdThemingProvider.theme('grey', 'default')
            .primaryPalette('grey');

        $mdThemingProvider.theme('custom', 'default')
            .primaryPalette('defaultPrimary', {
                'hue-1': '50'
            });

        $mdThemingProvider.definePalette('defaultPrimary', {
            '50':  '#FFFFFF',
            '100': 'rgb(255, 198, 197)',
            '200': '#E75753',
            '300': '#E75753',
            '400': '#E75753',
            '500': '#E75753',
            '600': '#E75753',
            '700': '#E75753',
            '800': '#E75753',
            '900': '#E75753',
            'A100': '#E75753',
            'A200': '#E75753',
            'A400': '#E75753',
            'A700': '#E75753'
        });

        $mdIconProvider.icon('user', 'assets/images/user.svg', 64);
    });
