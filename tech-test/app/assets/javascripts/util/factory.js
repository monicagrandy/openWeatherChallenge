App.factory('Data', function($http){
  var getAllData = function(cb){
    console.log("inside getAllData")
    $http({
      method: 'GET',
      url: '/api/fetchData'
    }).then(function success(data){
      console.log(data)
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
    url: '/api/addNew',
    data: JSON.stringify(city)
    }).then(function success(data){
      var newCity = data.data
      cb(newCity)
    });
 };


var clickedItem = {} 

return {
    getAllData: getAllData,
    addNew: addNew,
    clickedItem: clickedItem
  }
})