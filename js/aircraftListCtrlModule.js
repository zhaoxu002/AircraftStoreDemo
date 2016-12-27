(function () {
  angular.module('aircraftListCtrlModule', [])
    .controller('aircraftListCtrl', ['$scope',  'getAircraftData', 'shoppingCartData', 'IMAGEPATH', function ($scope, getAircraftData, shoppingCartData, IMAGEPATH) {
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

      //控制轮播图
      $scope.options = {
        loop: true,
        speed:500,
        initialSlide: 0,
        autoplay: 2000,

      }
      // $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
      //   // data.slider is the instance of Swiper
      //   $scope.slider = data.slider;
      // });

      $scope.$on("$ionicSlides.slideChangeStart", function(event, data){
        console.log('Slide change is beginning');
      });

      $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
        // note: the indexes are 0-based
        $scope.activeIndex = data.slider.activeIndex;
        $scope.previousIndex = data.slider.previousIndex;
      });


      /*$scope.shoppingCartList = shoppingCartData.data;


      //添加到购物车
      $scope.addToShoppingCart = function (aircraft) {
        if ($scope.shoppingCartList[aircraft.id]) {
          $scope.shoppingCartList[aircraft.id].countShoppingCart ++;
        } else {
          $scope.shoppingCartList[aircraft.id] = {
            'aircraft_name'    : aircraft.title,
            'aircraft_price'   : aircraft.price,
            'countShoppingCart': 1
          }
        }
      }*/
    }])
})()
