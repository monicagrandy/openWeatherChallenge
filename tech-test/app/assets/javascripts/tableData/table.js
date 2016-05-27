App.controller('tableCtrl', function($scope, Data){

  $scope.data = [];

  $scope.test = function(){
    console.log("inside table controller")
  }

  $scope.addNew = function(){
    var newCityName = $scope.newCity
    console.log("tableView line 9: ", $scope.newCity)
    Data.addNew(newCityName, function(cityData){
      console.log("on line 16! ", cityData)
      $scope.data.push(cityData)
    });
  }

  $scope.getAllData = function(){
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

  $scope.test();
  $scope.getAllData();

})