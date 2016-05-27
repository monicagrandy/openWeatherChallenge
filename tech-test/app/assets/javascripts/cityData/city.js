App.controller('cityCtrl', function($scope, Data) {
  // / Check if object doesn't exist, use session storage.
  // This way, on refresh or back, it won't have all undefined values
  if (!Data.clickedItem) {
    Data.clickedItem = JSON.parse(sessionStorage.tempStorage);
  }

  var makeDay = function(time){
    console.log("inside make day")
    var d = new Date(time*1000);
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var dayOfWeek = days[d.getDay()]
   return dayOfWeek 
  }

  if (Data.clickedItem) {
    console.log("this is the clicked item: ", Data.clickedItem)
    $scope.city = Data.clickedItem.name
    $scope.today = {
      day: makeDay(Data.clickedItem.currDay),
      temp: Data.clickedItem.currTemp,
      desc: Data.clickedItem.currDesc
    }
    $scope.tomorrow = {
      day: makeDay(Data.clickedItem.day2),
      temp: Data.clickedItem.temp2,
      desc: Data.clickedItem.desc2
    }
    $scope.day3 = {
      day: makeDay(Data.clickedItem.day3),
      temp: Data.clickedItem.temp3,
      desc: Data.clickedItem.desc3
    }
    $scope.day4 ={
      day: makeDay(Data.clickedItem.day4),
      temp: Data.clickedItem.temp4,
      desc: Data.clickedItem.desc4
    }
    $scope.day5 = {
      day: makeDay(Data.clickedItem.day5),
      temp: Data.clickedItem.temp5,
      desc: Data.clickedItem.desc5
    }
  }
})