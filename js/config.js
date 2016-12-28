(function () {
  angular.module('configModule', [])
    .config(function ($ionicConfigProvider) {
      $ionicConfigProvider.views.maxCache(0);
    })
    //api文件的绝对路径，仅限本地
    .constant('APIPATH', 'http://192.168.204.78/aircraftStoreDemo/PHP/bookapi/')
    //图片的绝对路径，仅限本地
    .constant('IMAGEPATH', 'http://192.168.204.78/aircraftStoreDemo/PHP/images/')
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
              controller: 'shoppingCartCtrl',
              cache: false
            }
          }
        })
        .state('person', {
          url: '/orderDetail',
          cache: 'false',
          views: {
            'person': {
              templateUrl: './tpl/orderDetail.html',
              controller: 'orderDetailCtrl',
              cache: false
            }
          }
        })
        .state('order', {
          url: '/order',
          views: {
            'shoppingCart': {
              templateUrl: './tpl/order.html',
              controller: 'straightOrderCtrl',
              cache: false
            }
          }
        })
        .state('login', {
         url: '/login',
         views: {
           'person': {
             templateUrl: './tpl/login.html',
             controller: 'loginCtrl',
             cache: false
           }
         }
        })
        .state('reg', {
          url: '/register',
          views: {
            'person': {
              templateUrl: './tpl/reg.html',
              controller: 'registerCtrl',
              cache: false
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
        })
        .state('classifyDetail',{
          url: '/classifyDetail/:id',
          views:{
            'classify':{
              templateUrl: './tpl/classifyDetail.html',
              controller: 'classifyDetailCtrl'
            }
          }
        });
      $urlRouterProvider.otherwise("/aircraftList");
    }])
})()
