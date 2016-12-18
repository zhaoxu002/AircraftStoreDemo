(function () {
  angular.module('aircraftListCtrlModule', [])
    .controller('aircraftListCtrl', ['$scope', 'getAircraftData', 'IMAGEPATH', function ($scope, getAircraftData, IMAGEPATH) {
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
    }])
})()
