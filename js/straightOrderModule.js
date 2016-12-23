(function () {
  angular.module('straightOrderModule', [])
    .controller('straightOrderCtrl', [
      '$http',
      '$scope',
      'shoppingCartData',
      '$location',
      'IMAGEPATH',
      'userModelService',
      '$httpParamSerializer',
      'cookieService',
      'localStorageService',

      function ($http, $scope, shoppingCartData, $location, IMAGEPATH, userModelService, $httpParamSerializer, cookieService, localStorageService) {
        //获取订单商品
        //console.log(shoppingCartData.data);
        $scope.orderList = shoppingCartData.data;
        console.log($scope.orderList);
        // 获取cookie中的userid
        $scope.userId = cookieService.getCookie('userId');
        console.log($scope.userId);
        // 服务器获取用户填写的订单信息
        $scope.postOrderDetail = function () {
          userModelService.postUser(
            'order.php',
            $httpParamSerializer({
              orderDetails : $scope.orderList,
              address: $scope.address,
              name   : $scope.name,
              phone  : $scope.phone,
              info   : $scope.info,
              userId : $scope.userId
            }),
            function (response) {
              if (response.data.code === 0) {
                console.log('success');
                localStorageService.setData('shoppingCart', {});
                shoppingCartData.data = {};
                $location.path('aircraftList');
              } else {
                console.log('failed');
                console.log(response.data.data);
              }
            },
            function () {
              console.log('totaly failed');
            }
           )
        }
      }
    ])
})()
