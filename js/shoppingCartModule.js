//购物车中保存每种战机的如下数据
//战机名称 aircraft_name
//战机价格 aircraft_price
//要购买数量 countShoppingCart
//另外还要计算如下数据
//所有商品总价 total
(function () {
  angular.module('shoppingCartModule', [])
    .controller('shoppingCartCtrl', ['$scope', 'shoppingCartData', function ($scope, shoppingCartData) {
      $scope.shoppingCartList = shoppingCartData.data;
      console.log($scope.shoppingCartList);
      $scope.addNum = function (id) {
        $scope.shoppingCartList[id].countShoppingCart ++;
      }

      $scope.minusNum = function (id) {
        if ($scope.shoppingCartList[id].countShoppingCart <= 1) {
          $('#minusBtn'+id).tooltip('show');
          return;
        }
        $scope.shoppingCartList[id].countShoppingCart --;
      }

      $scope.deleteAircraft =function (id) {
        delete $scope.shoppingCartList[id];
      }
    }])
})()
