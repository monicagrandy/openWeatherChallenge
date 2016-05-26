App.controller('cityCtrl', function($scope, Data) {
  // / Check if object doesn't exist, use session storage.
  // This way, on refresh or back, it won't have all undefined values
  if (!Data.clickedItem) {
    Data.clickedItem = JSON.parse(sessionStorage.tempStorage);
  }

  if (Data.clickedItem) {
    console.log("this is the clicked item: ", Data.clickedItem)
    $scope.city = Data.clickedItem;
    Data.getFiveDay($scope.city, function(forecastData){
      console.log("forecast data: ", forecastData)
      $scope.forecast = forecastData
    })
  }

})




