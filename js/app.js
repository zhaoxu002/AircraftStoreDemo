(function () {
  angular.module('app', [
    'ngRoute',
    'localStorageModule',
    'configModule',
    'getAircraftDataModule',
    'aircraftListCtrlModule',
    'aircraftDetailCtrlModule',
    'userModelServiceModule',
    'userloginModule',
    'cookieServiceModule',
    'shoppingCartModule'
  ])
    .service('shoppingCartData', ['localStorageService',function (localStorageService) {
      var lsdata = localStorageService.getData('shoppingCart');
      if (lsdata) {
        this.data = lsdata;
      } else {
        this.data = {};
        //如果没有在缓存中取到，那么定义shoppingcartdata.data为一个空对象
      }
      //shoppingCartData.data是存储在localstorage中的购物车商品信息,许多模块都会用到
    }])
    //这个是控制购物车模块的
    .controller('mainCtrl', ['$scope', '$http', 'shoppingCartData', '$location', 'localStorageService', 'cookieService', 'USERNAME', function ($scope, $http, shoppingCartData, $location, localStorageService, cookieService, USERNAME) {
      //购物车中商品种类 显示在button中

      $scope.quantityOfGoods = 0;

      $scope.$watch(
        function () {
          return shoppingCartData.data;
        },
        function () {
        var num = 0,
            total = 0;
        for(var i in shoppingCartData.data) {
          num ++;  //种类++
          total += shoppingCartData.data[i].aircraft_price * shoppingCartData.data[i].countShoppingCart; // 总价+=
        }
        $scope.quantityOfGoods = num;
        $scope.total = total;

        localStorageService.setData('shoppingCart', shoppingCartData.data);
      }, true);

      $scope.gotoShoppingCart = function () {
        $location.path('/shoppingCart');
      }

      //注册登录部分
      var user = {};
      user.username = cookieService.getCookie('user');
      $scope.user = user;

      console.log($scope.user.username);

      $scope.logout = function () {
        cookieService.deleteCookie('user');
        $scope.user.username = false;
      }


    }])
})()
