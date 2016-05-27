App.controller('tableCtrl', function($scope, Data){

  $scope.data = [
    {"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"cmc stations","main":{"temp":200.29,"pressure":1015,"humidity":63,"temp_min":288.15,"temp_max":292.15},"wind":{"speed":5.7,"deg":90},"clouds":{"all":0},"dt":1464288154,"sys":{"type":1,"id":5091,"message":0.0044,"country":"GB","sunrise":1464234806,"sunset":1464292964},"id":2643743,"name":"London","cod":200},
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
    console.log("calling sort")
    $scope.data.sort(function(a,b){
      return b.main.temp - a.main.temp
    })
  }

  // $scope.getFiveDay = function(cityName){
  //   console.log("fiveDay clicked: ", cityName)
  //   Data.getFiveDay(cityName)
  // }

  $scope.transferEvent = function(obj) {
    Data.clickedItem = obj;
    sessionStorage["tempStorage"] = JSON.stringify(obj);
  }

})