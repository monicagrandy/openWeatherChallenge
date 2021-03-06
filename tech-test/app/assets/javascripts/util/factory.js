App.factory('Data', function($http){
  var getAllData = function(cb){
    console.log("inside getAllData")
    $http({
      method: 'GET',
      url: '/api/fetchData'
    }).then(function success(data){
      console.log(data)
      var collection = data.data
      cb(collection);
    },
  function error(err) {
    console.log("ERROR: ", err)
  })
};

var makeDay = function(time){
  var d = new Date(time*1000);
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var dayOfWeek = days[d.getDay()]
  return dayOfWeek
};

 var addNew = function(city, cb){
  console.log("inside addNew: ", city)
  $http({
    method: 'POST',
    url: '/api/addNew',
    data: JSON.stringify(city)
    }).then(function success(data){
      var newCity = data.data
      cb(newCity)
    });
 };


var clickedItem = {} 

return {
    makeDay: makeDay,
    getAllData: getAllData,
    addNew: addNew,
    clickedItem: clickedItem
  }
})