(function () {
  angular.module('getAircraftDataModule',[])
    .service('getAircraftData', ['$http', 'APIPATH', function ($http, APIPATH) {
      this.requestData = function (url, data, success_callback, error_callback) {
        $http.get(
          APIPATH + url,
          {params: data}
        ).then(function (response) {
          //code0则获取成功
          if (response.data.code === 0) {
            success_callback(response.data.data);
          } else {
            error_callback(response.data)
          }
        }, function (error_response) {
          error_callback(error_response);
        })
      }
    }])
})()
