(function () {
  angular.module('userloginModule', [])
    .controller('registerCtrl', ['$scope', 'userModelService', '$httpParamSerializer', '$location', function ($scope, userModelService, $httpParamSerializer, $location) {
      $scope.doRegister = function () {
        userModelService.postUser('register.php', $httpParamSerializer({
          username: $scope.username,
          password: $scope.pwd
        }), function (data) {
          if (data.data.code === 0) {
            alert('reg success, please login');
            $location.path('login');
          } else {
            alert('reg fail');
          }
        }, function (data) {
          alert('reg fail');
        })
      }
      //验证用户名
      $scope.yesornot = false;
      $scope.confirmUsername = function () {

        userModelService.postUser('register.php', $httpParamSerializer({
          username: $scope.username
        }), function (data) {

          if (data.data.code === 7) {
            //重名了
            $scope.yesornot = true;
          } else if (data.data.code === 8) {
            $scope.yesornot = false;
          }
        }, function () {
          console.log('miss');
        })
        console.log($scope.yesornot);
      }



    }])
    .controller('loginCtrl', ['$scope', 'userModelService', '$httpParamSerializer', '$location', 'cookieService', 'USERNAME', function ($scope, userModelService, $httpParamSerializer, $location, cookieService, USERNAME) {
      $scope.doLogin = function () {
        userModelService.postUser('userInfoLogin.php', $httpParamSerializer({
          username: $scope.username,
          password: $scope.pwd
        }), function (response) {
          if (response.data.code === 0) {
            cookieService.setCookie('user', response.data.data['users_name']);

            $scope.user.username = response.data.data['users_name'];

            alert('Login success');
            $location.path('aircraftList');
          } else {
            alert('Login fail'+response.data.data);
          }
        }, function () {
          alert('Login fail');
        })
      }
    }])
})()
