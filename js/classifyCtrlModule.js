(function () {
  angular.module('classifyCtrlModule', [])
    .controller('classifyCtrl', [
      '$scope',
      'getAircraftData',
      'shoppingCartData',
      'IMAGEPATH',
      '$location',
      '$stateParams',
      function ($scope, getAircraftData, shoppingCartData, IMAGEPATH, $location, $stateParams) {
        // $scope.IMAGEPATH = IMAGEPATH;
        // $scope.aircraftList = [];
        // getAircraftData.requestData(
        //   'book.php',
        //   {cate_id: 1},
        //   function (data) {
        //     $scope.aircraftList = data;
        //     console.log(data);
        //   },
        //   function (error) {
        //     console.log(error);
        //   }
        // )
        $scope.nationList = [];
        getAircraftData.requestData(
          'cates.php',
          {},
          function (data) {

            $scope.nationList = data;
            console.log($scope.nationList);
          },function (error) {
            console.log(error);
          }
        )
      }

    ])
})()
