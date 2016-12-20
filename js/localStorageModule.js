(function(){
	angular.module("localStorageModule", [])
	       .service("localStorageService", ["$window", function($window){
	       		//把字符串存入 localStorage
	       		this.set = function(key, value) {
	       			$window.localStorage[key] =value
	       		}

	       		this.get = function(key) {
	       			return $window.localStorage[key];
	       		}

	       		//把对象存入localStorage
	       		this.setData = function(key, obj) {
	       			console.log(obj);
	       			$window.localStorage[key] = angular.toJson(obj)
	       		}

	       		this.getData = function(key) {
	       			return angular.fromJson($window.localStorage[key]);
	       		}



	       }])

})()
