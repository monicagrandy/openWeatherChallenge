var App = angular.module('techTest', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('cityView', {
    url: ./city,
    templateUrl: './app/cityView/cityView.html',
    controller: 'cityCtrl'
  })
  .state('tableView', {
    url: '/',
    templateUrl: './app/tableView/tableView.html',
    controller: 'tableCtrl'
  })
  $urlRouterProvider.otherwise('/');
})



