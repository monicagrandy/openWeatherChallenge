var App = angular.module('techTest', ['ui.router', 'ui.bootstrap', 'templates', 'angularMoment'])
App.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('cityView', {
    url: './city',
    templateUrl: 'cityData/_city.html',
    controller: 'cityCtrl'
  })
  .state('tableView', {
    url: '/',
    templateUrl: 'tableData/_table.html',
    controller: 'tableCtrl'
  })
  $urlRouterProvider.otherwise('tableView');

})







