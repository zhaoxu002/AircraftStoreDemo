(function () {
  angular.module('aircraftDetailCtrlModule', [])
    .controller('aircraftDetailCtrl', ['$scope', '$routeParams', 'getAircraftData', 'IMAGEPATH', '$stateParams', function ($scope, $routeParams, getAircraftData, IMAGEPATH, $stateParams) {
      $scope.aircraft = {};
      $scope.IMAGEPATH = IMAGEPATH;
      console.log('ctrl loaded');
      console.log($routeParams);
      console.log($stateParams);
      getAircraftData.requestData(
        //请求具体战机数据  这里也同样用上了getAircraftDataModule中定义的函数  注意函数的四个参数
        'bookId.php',
        {id: $stateParams.id},
        function (data) {
          $scope.aircraft = data;
        },
        function (error) {
          console.log(error);
        }
       )
    }])
})()
