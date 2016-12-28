(function () {
  angular.module('app', [
    'ionic',
    'ngRoute',
    'localStorageModule',
    'configModule',
    'getAircraftDataModule',
    'aircraftListCtrlModule',
    'aircraftDetailCtrlModule',
    'userModelServiceModule',
    'userloginModule',
    'cookieServiceModule',
    'shoppingCartModule',
    'straightOrderModule',
    'orderDetailModule',
    'classifyCtrlModule',
    'classifyDetailCtrlModule'
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
    .controller('mainCtrl', ['$scope', '$http', 'shoppingCartData', '$location', 'localStorageService', 'cookieService', 'USERNAME', '$ionicHistory', '$ionicPopup','getAircraftData', function ($scope, $http, shoppingCartData, $location, localStorageService, cookieService, USERNAME, $ionicHistory, $ionicPopup, getAircraftData) {
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

      $scope.logout = function () {
        cookieService.deleteCookie('userId');
        cookieService.deleteCookie('user');
        $scope.user.username = false;

        $scope.showAlert = function() {
          var alertPopup = $ionicPopup.alert({
            title: '提示',
            template: '用户已注销，即将返回首页'
          });
          alertPopup.then(function(res) {
            $location.path('/aircraftList');
            //$ionicHistory.goBack(-1);
          });
        };
        $scope.showAlert();
        //$location.path('/orderDetail');
        //$scope.doRefresh();
      }

      //去下订单，没登录的要登录
      $scope.gotoOrder = function () {
        console.log($location.path());
        console.log('函数执行了');
        var usercookie = cookieService.getCookie('user');
        if (usercookie) {
          $location.path('/order');
        } else {
          $scope.showAlert = function() {
            var alertPopup = $ionicPopup.alert({
              title: '提示',
              template: '你还没登录，现在将跳转到登录页'
            });
            alertPopup.then(function(res) {
              $location.path('/login');
            });
          };
          $scope.showAlert();
        }
      }
      //去个人中心，没登录的注册或登录
      $scope.gotoCenter = function () {
        var usercookie =  cookieService.getCookie('user');
        if (usercookie) {
          $location.path('orderDetail');
        } else {
          $location.path('login');
        }
      }

      //添加商品到购物车 现置于主控制器中
      $scope.addToShoppingCart = function (aircraft) {
        if (shoppingCartData.data[aircraft.id]) {
          shoppingCartData.data[aircraft.id].countShoppingCart ++;
        } else {
          shoppingCartData.data[aircraft.id] = {
            'aircraft_name':aircraft.title,
            'aircraft_price':aircraft.price,
            'countShoppingCart':1,
            'aircraft_image':aircraft.images[0].image_name
          }
        }
      }
      console.log($location.$$url);
      // //分类页面的二级标题
      // $scope.titleornot = false;
      // $scope.$watch(function () {
      //   return $location.$$url
      // }, function () {
      //   if ($location.$$url == '/classify') {
      //     $scope.titleornot = true;
      //     console.log('$$url'+$location.$$url);
      //     console.log('titleornot'+$scope.titleornot);
      //   } else {
      //     $scope.titleornot = false;
      //     console.log('$$url'+$location.$$url);
      //     console.log('titleornot'+$scope.titleornot);
      //   }
      // },true);
      //获取一下商品分类，需要getAircraftData
      // $scope.nationList = [];
      // getAircraftData.requestData(
      //   'cates.php',
      //   {},
      //   function (data) {
      //
      //     $scope.nationList = data;
      //     console.log($scope.nationList);
      //   },function (error) {
      //     console.log(error);
      //   }
      // )



      //定义一个alert框
      // $scope.showAlert = function() {
      //   var alertPopup = $ionicPopup.alert({
      //     title: '提示',
      //     template: 'It might taste good'
      //   });
      //   alertPopup.then(function(res) {
      //     console.log('Thank you for not eating my delicious ice cream cone');
      //   });
      // };
      //
    }])
})()
