(function () {
  angular.module('userModelServiceModule', [])
    .service('userModelService', ['$http', 'APIPATH', function ($http, APIPATH) {
      this. postUser = function (url, data, success, error) {
        $http.post(
          APIPATH+url,
          data,
          {headers: {'Content-type': 'application/x-www-form-urlencoded'}}
        ).then(success, error);
      }
    }])
})()
