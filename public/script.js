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
      templateUrl: 'home/home.html'
    })

    .state("page", {
      //url: '/home/page',
      url: '/page',
      parent: 'home',
      controller: 'PagesCtrl',
      templateUrl: 'partials/page.html'
    })

    .state( "page.about",  {
          //url: '/home/page/about',
          url: '/about',
          controller: 'PagesCtrl',
          templateUrl: 'partials/about.html',
          //parent: page
    })
    .state( "page.contact",  {
          //url: '/home/page/contact',
          url: '/contact',
          controller: 'PagesCtrl',
          templateUrl: 'partials/contact.html',
          //parent: page
    })
    .state( "page.help",  {
          //url: '/home/page/help',
          url: '/help',
          controller: 'PagesCtrl',
          templateUrl: 'partials/help.html',
          //parent: page
    })

    // catch all route
    // send users to the form page
    $urlRouterProvider.otherwise('/home/page/about');
}])
.controller('HomeCtrl', ['$scope', function ($scope) { }])
.controller('PagesCtrl', ['$scope', function ($scope) { }])

.run(['$rootScope', '$state', '$stateParams',
  function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}])
