(function () {
  angular.module('configModule', [])
    //api文件的绝对路径，仅限本地
    .constant('APIPATH', 'http://storedemo/aircraftStoreDemo/PHP/bookapi/')
    //图片的绝对路径，仅限本地
    .constant('IMAGEPATH', 'http://storedemo/aircraftStoreDemo/PHP/images/')
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
        .otherwise({
          redirectTo: '/aircraftList'
        });
    }])
})()
