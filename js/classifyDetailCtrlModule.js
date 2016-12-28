(function () {
  angular.module('classifyDetailCtrlModule', [])
    .controller('classifyDetailCtrl', [
      '$scope',  'getAircraftData', 'shoppingCartData', 'IMAGEPATH','$location','$stateParams', function ($scope, getAircraftData, shoppingCartData, IMAGEPATH, $location, $stateParams) {
        console.log($stateParams.id);
        $scope.IMAGEPATH = IMAGEPATH;
        $scope.aircraftList = [];
        getAircraftData.requestData(
          'book.php',
          {cate_id: $stateParams.id},
          function (data) {
            $scope.aircraftList = data;
            console.log(data);
          },
          function (error) {
            console.log(error);
          }
        );
      }
    ])
})()
