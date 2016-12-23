(function () {
  angular.module('configModule', [])
    //api文件的绝对路径，仅限本地
    .constant('APIPATH', 'http://storedemo/aircraftStoreDemo/PHP/bookapi/')
    //图片的绝对路径，仅限本地
    .constant('IMAGEPATH', 'http://storedemo/aircraftStoreDemo/PHP/images/')
    //cookie中用户名 默认不存在
    .constant('USERNAME', false)
    //配置注入路由route
    .config(["$routeProvider", function ($routeProvider) {
      $routeProvider
        .when('/aircraftList', {
          templateUrl: './tpl/aircraftList.html',
          controller: 'aircraftListCtrl',
          controllerAs: 'listCtrl'
        })
        .when('/aircraftDetail/:id', {
          templateUrl: './tpl/aircraftDetail.html',
          controller: 'aircraftDetailCtrl'
        })
        .when('/shoppingCart', {
          templateUrl: './tpl/shoppingCart.html',
          controller: 'shoppingCartCtrl'
        })
        .when('/register', {
          templateUrl: './tpl/reg.html',
          controller: 'registerCtrl'
        })
        .when('/login', {
          templateUrl: './tpl/login.html',
          controller: 'loginCtrl'
        })
        .when('/order',{
          templateUrl: './tpl/order.html',
          controller: 'straightOrderCtrl'
        })
        .when('/orderDetail', {
          templateUrl: './tpl/orderDetail.html',
          controller: 'orderDetailCtrl'
        })
        .otherwise({
          redirectTo: '/aircraftList'
        });
    }])
})()
