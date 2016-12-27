(function () {
  angular.module('orderDetailModule', [])
    .controller('orderDetailCtrl', [
      'IMAGEPATH',
      '$http',
      '$scope',
      'cookieService',
      '$location',
      'getAircraftData',
      function (IMAGEPATH, $http, $scope, cookieService, $location, getAircraftData) {
        $scope.userId = cookieService.getCookie('userId');
        console.log($scope.userId);
        getAircraftData.requestData(
          'getOrders.php',
          {user_id: $scope.userId},
          function (data) {
            $scope.ordercontentList = data;
          },
          function (data) {
            console.log(data);
          }
        )
      }
    ])
})()
