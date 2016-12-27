(function () {
  angular.module('configModule', [])
    //api文件的绝对路径，仅限本地
    .constant('APIPATH', 'http://storedemo/aircraftStoreDemo/PHP/bookapi/')
    //图片的绝对路径，仅限本地
    .constant('IMAGEPATH', 'http://storedemo/aircraftStoreDemo/PHP/images/')
    //cookie中用户名 默认不存在
    .constant('USERNAME', false)
    //配置注入路由route
    // .config(["$routeProvider", function ($routeProvider) {
    //   $routeProvider
    //     .when('/aircraftList', {
    //       templateUrl: './tpl/aircraftList.html',
    //       controller: 'aircraftListCtrl',
    //       controllerAs: 'listCtrl'
    //     })
    //     .when('/aircraftDetail/:id', {
    //       templateUrl: './tpl/aircraftDetail.html',
    //       controller: 'aircraftDetailCtrl'
    //     })
    //     .when('/shoppingCart', {
    //       templateUrl: './tpl/shoppingCart.html',
    //       controller: 'shoppingCartCtrl'
    //     })
    //     .when('/register', {
    //       templateUrl: './tpl/reg.html',
    //       controller: 'registerCtrl'
    //     })
    //     .when('/login', {
    //       templateUrl: './tpl/login.html',
    //       controller: 'loginCtrl'
    //     })
    //     .when('/order',{
    //       templateUrl: './tpl/order.html',
    //       controller: 'straightOrderCtrl'
    //     })
    //     .when('/orderDetail', {
    //       templateUrl: './tpl/orderDetail.html',
    //       controller: 'orderDetailCtrl'
    //     })
    //     .otherwise({
    //       redirectTo: '/aircraftList'
    //     });
    // }])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('index', {
          url: '/aircraftList',
          views: {
            'home': {
              templateUrl: './tpl/aircraftList.html',
              controller: 'aircraftListCtrl'
            }
          }
        })
        .state('classify', {
          url: '/classify',
          views: {
            'classify': {
              templateUrl: './tpl/classify.html',
              controller: 'classifyCtrl'
            }
          }
        })
        .state('shoppingCart', {
          url: '/shoppingCart',
          views: {
            'shoppingCart': {
              templateUrl: './tpl/shoppingCart.html',
              controller: 'shoppingCartCtrl'
            }
          }
        })
        .state('person', {
          url: '/orderDetail',
          cache: 'false',
          views: {
            'person': {
              templateUrl: './tpl/orderDetail.html',
              controller: 'orderDetailCtrl'
            }
          }
        })
        .state('order', {
          url: '/order',
          views: {
            'shoppingCart': {
              templateUrl: './tpl/order.html',
              controller: 'straightOrderCtrl'
            }
          }
        })
        .state('login', {
         url: '/login',
         views: {
           'person': {
             templateUrl: './tpl/login.html',
             controller: 'loginCtrl'
           }
         }
        })
        .state('reg', {
          url: '/register',
          views: {
            'person': {
              templateUrl: './tpl/reg.html',
              controller: 'registerCtrl'
            }
          }
        })
        .state('detail', {
          url: '/aircraftDetail/:id',
          views: {
            'home': {
              templateUrl: './tpl/aircraftDetail.html',
              controller: 'aircraftDetailCtrl'
            }
          }
        });
        // .state('classify.detail',{
        //   url: '/classify/:id',
        //   views:{
        //     'classify':{
        //       templateUrl: './tpl/classify.html',
        //       controller:
        //     }
        //   }
        // });
      $urlRouterProvider.otherwise("/aircraftList");
    }])
})()
