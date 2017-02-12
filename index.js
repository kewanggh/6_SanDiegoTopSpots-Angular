var app = angular.module('myApp', []);

	app.controller('MainController', ['$scope', '$http', function($scope, $http){
		$http.get('topspots.json').success(function(data){
			$scope.topSpots = data;
		});
	}]);
