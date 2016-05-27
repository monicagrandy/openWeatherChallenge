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