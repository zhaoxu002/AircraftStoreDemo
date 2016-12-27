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
        $scope.IMAGEPATH = IMAGEPATH;
        $scope.aircraftList = [];
        getAircraftData.requestData(
          'book.php',
          {cate_id: 1},
          function (data) {
            $scope.aircraftList = data;
            console.log(data);
          },
          function (error) {
            console.log(error);
          }
        )

      }

    ])
})()
