var App = angular.module('techTest', ['ui.router', 'ui.bootstrap', 'moment', 'templates'])
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
App.controller('cityCtrl', function($scope, Data) {
  // / Check if object doesn't exist, use session storage.
  // This way, on refresh or back, it won't have all undefined values
  if (!Data.clickedItem) {
    Data.clickedItem = JSON.parse(sessionStorage.tempStorage);
  }

  //function to render days of week
  // var timestamp = 1464307200;
  // var a = new Date(timestamp*1000);
  // var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  // var dayOfWeek = days[a.getDay()]

  if (Data.clickedItem) {
    console.log("this is the clicked item: ", Data.clickedItem)
    $scope.city = Data.clickedItem;
    Data.getFiveDay($scope.city, function(forecastData){
      console.log("forecast data: ", forecastData)
      $scope.forecast = forecastData
    })
  }
})
App.controller('tableCtrl', function($scope, Data){

  $scope.data = [
    {"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"cmc stations","main":{"temp":390.29,"pressure":1015,"humidity":63,"temp_min":288.15,"temp_max":292.15},"wind":{"speed":5.7,"deg":90},"clouds":{"all":0},"dt":1464288154,"sys":{"type":1,"id":5091,"message":0.0044,"country":"GB","sunrise":1464234806,"sunset":1464292964},"id":2643743,"name":"London","cod":200},
    {"coord":{"lon":-71.06,"lat":42.36},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"base":"stations","main":{"temp":301.58,"pressure":1017,"humidity":35,"temp_min":296.48,"temp_max":305.15},"visibility":16093,"wind":{"speed":2.87,"deg":124.501},"clouds":{"all":20},"dt":1464287600,"sys":{"type":1,"id":1272,"message":1.3139,"country":"US","sunrise":1464253959,"sunset":1464307843},"id":4930956,"name":"Boston","cod":200}
  ];

  $scope.addNew = function(){
    var newCityName = $scope.newCity
    console.log("tableView line 9: ", $scope.newCity)
    Data.addNew(newCityName, function(cityData){
      $scope.data.push(cityData)
    });
  }

  $scope.cityInfo = function(){
    Data.getAllData(function(fetchedData){
      $scope.data = fetchedData
    })
  }

  $scope.sort = function(){
    $scope.data.sort(function(a,b){
      return a.main.temp - b.main.temp
    })
  }

  $scope.transferEvent = function(obj) {
    Data.clickedItem = obj;
    sessionStorage["tempStorage"] = JSON.stringify(obj);
  }

})
App.factory('Data', function($http){
  var getAllData = function(cb){
    console.log("inside getAllData")
    $http({
      method: 'POST',
      url: '/api/fetchData'
    }).then(function success(data){
      var collection = data.data.map(function(city){
        return {
          city: city
        };
      });
      cb(collection);
    },
  function error(err) {
    console.log("ERROR: ", err)
  })
};

 var addNew = function(city, cb){
  console.log("inside addNew: ", city)
  $http({
    method: 'POST',
    url: '/api/addData',
    data: city
  }).then(function success(data){
    cb(data)
  });
 };

var getFiveDay = function(cityName, cb){
  console.log("inside fiveDay: ", cityName)
  $http({
    method: 'POST',
    url: '/api/getForecast',
    data: cityName
  }).then(function success(data){
    return {
      data: data
    };
  });
  cb(data)
}; 

var clickedItem = {} 

return {
    getAllData: getAllData,
    addNew: addNew,
    getFiveDay: getFiveDay,
    clickedItem: clickedItem
  }
})





