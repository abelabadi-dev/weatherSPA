weatherApp.controller('homeController',['$scope','cityService',function ($scope,cityService) {
	$scope.city = cityService.city;
	$scope.$watch('city',function () {
		cityService.city = $scope.city;
	});
}]);
weatherApp.controller('forcastController',['$scope','$routeParams','weatherService','cityService',
	function ($scope,$routeParams,weatherService,cityService) {
		var days = $routeParams.days || '2';
		$scope.city = cityService.city;
		$scope.weatherResult = weatherService.getWeather($scope.city,days);

}]);