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
      //$watch用于监听模型变化，
      $scope.$watch(
        //第一个参数 监听的对象
        function () {
          return shoppingCartData.data;
        },
        //第二个参数 被监听对象变化时会被调用的函数或表达式
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
      },
      //第三个参数 是否深度监听
      true);

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

      //添加商品到购物车 现置于主控制器中
      $scope.shoppingCartList = shoppingCartData.data;

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
      }


    }])
})()
