App.controller('tableCtrl', function($scope, Data){

  $scope.data = [];

  $scope.addNew = function(){
    var newCityName = $scope.newCity
    console.log("tableView line 9: ", $scope.newCity)
    Data.addNew(newCityName, function(cityData){
      console.log("on line 16! ", cityData)
      $scope.data.push(cityData)
    });
  }

  $scope.getAllData = function(){
    console.log("calling getAllData")
    Data.getAllData(function(fetchedData){
      console.log("fetchedData: ", fetchedData)
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

$scope.getAllData();

})