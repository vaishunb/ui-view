var app = angular
  .module('MyApp', [
    'ui.router'
  ])

.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state( 'home', {
      url: '/home',
      controller: 'HomeCtrl',
      templateUrl: 'home/home.tpl.html'
    })

    .state("home.wizard", {
      //url: '/home/wizard',
      url: '/wizard',
      controller: 'VendorsCtrl',
      templateUrl: 'vendors/wizard.tpl.html'
    })

    .state( "home.wizard.where",  {
          //url: '/home/wizard/where',
          url: '/where',
          controller: 'VendorsCtrl',
          templateUrl: 'vendors/wizard-where.tpl.html',
          //parent: wizard
    })
    .state( "home.wizard.what",  {
          //url: '/home/wizard/what',
          url: '/what',
          controller: 'VendorsCtrl',
          templateUrl: 'vendors/wizard-what.tpl.html',
          //parent: wizard
    })
    .state( "home.wizard.when",  {
          //url: '/home/wizard/when',
          url: '/when',
          controller: 'VendorsCtrl',
          templateUrl: 'vendors/wizard-when.tpl.html',
          //parent: wizard
    })

    // catch all route
    // send users to the form page
    $urlRouterProvider.otherwise('/home/wizard/where');
}])
.controller('HomeCtrl', ['$scope', function ($scope) { }])
.controller('VendorsCtrl', ['$scope', function ($scope) { }])

.run(['$rootScope', '$state', '$stateParams',
  function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}])
