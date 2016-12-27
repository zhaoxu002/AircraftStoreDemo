(function () {
  angular.module('userloginModule', [])
    .controller('registerCtrl', ['$scope', 'userModelService', '$ionicPopup', '$httpParamSerializer', '$location', function ($scope, userModelService, $ionicPopup, $httpParamSerializer, $location) {
      $scope.uu = {};
      $scope.cc = {};
      $scope.doRegister = function () {
        console.log($scope.uu);
        userModelService.postUser('register.php', $httpParamSerializer({
          username: $scope.uu.username,
          password: $scope.uu.pwd
        }), function (data) {
          if (data.data.code === 0) {
            //alert('reg success, please login');
            $scope.showAlert = function() {
              var alertPopup = $ionicPopup.alert({
                title: '提示',
                template: '注册成功'
              });
              alertPopup.then(function(res) {
                $location.path('/login');
              });
            };
            $scope.showAlert();
          } else {
            alert('reg fail');
          }
        }, function (data) {
          alert('reg fail');
        })
      }
      //验证两次输入的密码相同
      $scope.sameornot = false;
      $scope.confirmRepwd = function () {
        if ($scope.cc.pwd == $scope.cc.repwd) {
          //相同了
          $scope.sameornot = true;
        } else {
          //不相同
          $scope.sameornot = false;
        }
      }
      //验证用户名
      $scope.yesornot = false;

      $scope.confirmUsername = function () {

        userModelService.postUser('register.php', $httpParamSerializer({
          username: $scope.cc.username
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
    .controller('loginCtrl', ['$scope', 'userModelService', '$httpParamSerializer', '$location', 'cookieService', 'USERNAME', '$ionicPopup', '$ionicHistory', function ($scope, userModelService, $httpParamSerializer, $location, cookieService, USERNAME, $ionicPopup, $ionicHistory) {
      $scope.uu = {};
      $scope.doLogin = function () {
        console.log($scope.uu);
        userModelService.postUser('userInfoLogin.php', $httpParamSerializer({
          username: $scope.uu.username,
          password: $scope.uu.pwd
        }), function (response) {
          if (response.data.code === 0) {
            cookieService.setCookie('user', response.data.data['users_name']);
            cookieService.setCookie('userId', response.data.data['users_id']);

            $scope.user.username = response.data.data['users_name'];

            //alert('Login success');
            $scope.showAlert = function() {
              var alertPopup = $ionicPopup.alert({
                title: '提示',
                template: '登录成功'
              });
              alertPopup.then(function(res) {
                //$location.path('/orderDetail');
                //$ionicHistory.backView();
                $ionicHistory.goBack(-1);
                console.log($ionicHistory);
              });
            };
            $scope.showAlert();

            //$location.path('/person');
          } else {
            alert('Login fail'+response.data.data);
          }
        }, function () {
          alert('Login fail');
        })
      }
    }])
})()
