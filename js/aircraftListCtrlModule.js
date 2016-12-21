(function () {
  angular.module('aircraftListCtrlModule', [])
    .controller('aircraftListCtrl', ['$scope',  'getAircraftData', 'shoppingCartData', 'IMAGEPATH', function ($scope, getAircraftData, shoppingCartData, IMAGEPATH) {
      $scope.IMAGEPATH = IMAGEPATH;
      $scope.aircraftList = [];

      //请求战机列表数据  这里就用上了getAircraftDataModule中定义的函数  注意函数的四个参数
      getAircraftData.requestData(
        'book.php',
        {},
        function (data) {
          $scope.aircraftList = data;
          console.log(data);
        },
        function (error) {
          console.log(error);
        }
      );

      /*$scope.shoppingCartList = shoppingCartData.data;


      //添加到购物车
      $scope.addToShoppingCart = function (aircraft) {
        if ($scope.shoppingCartList[aircraft.id]) {
          $scope.shoppingCartList[aircraft.id].countShoppingCart ++;
        } else {
          $scope.shoppingCartList[aircraft.id] = {
            'aircraft_name'    : aircraft.title,
            'aircraft_price'   : aircraft.price,
            'countShoppingCart': 1
          }
        }
      }*/
    }])
})()
