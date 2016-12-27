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

        $scope.pp = {};
        $scope.pp.orderList = shoppingCartData.data;
        console.log($scope.pp.orderList);
        // 获取cookie中的userid
        $scope.userId = cookieService.getCookie('userId');
        console.log($scope.userId);
        // 服务器获取用户填写的订单信息
        $scope.IMAGEPATH = IMAGEPATH;
        $scope.pp.userId = $scope.userId;
        console.log($scope.pp);
        console.log($scope.pp.orderList[1].aircraft_image);
        console.log($scope.IMAGEPATH);
        $scope.postOrderDetail = function () {
          userModelService.postUser(
            'order.php',
            $httpParamSerializer({
              orderDetails : $scope.pp.orderList,
              address: $scope.pp.address,
              name   : $scope.pp.name,
              phone  : $scope.pp.phone,
              info   : $scope.pp.info,
              userId : $scope.pp.userId
            }),
            function (response) {
              if (response.data.code === 0) {
                console.log('success');
                localStorageService.setData('shoppingCart', {});
                shoppingCartData.data = {};
                $location.path('/aircraftList');
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
        //必须把信息补充完整才能提交订单
        $scope.uncomplete = true;
        $scope.checkUncomplete = function () {
          console.log(addrForm.orderName.$dirty);
        }
      }
    ])
})()
