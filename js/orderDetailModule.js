(function () {
  angular.module('orderDetailModule', [])
    .controller('orderDetailCtrl', [
      'IMAGEPATH',
      '$http',
      '$scope',
      'cookieService',
      '$location',
      'getAircraftData',
      '$ionicHistory',
      function (IMAGEPATH, $http, $scope, cookieService, $location, getAircraftData,$ionicHistory) {
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
        //遮盖个人中心页左上角不应该出现的后退按钮
        var btn=document.querySelector(".back-button");
        btn.style.display="none";
      }
    ])
})()
