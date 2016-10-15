var weatherApp = angular.module('weatherApp',['ngRoute','ngResource']);

weatherApp.config(function ($routeProvider) {
	$routeProvider.when('/',{
		templateUrl:'../pages/home.html',
		controller:'homeController'
	}).when('/forcast',{
		templateUrl:'../pages/forcast.html',
		controller:'forcastController'
	}).when('/forcast/:days',{
		templateUrl:'../pages/forcast.html',
		controller:'forcastController'
	})
});
weatherApp.service('cityService',function () {
	this.city = 'Fairfield, IA';
});
weatherApp.controller('homeController',['$scope','cityService',function ($scope,cityService) {
	$scope.city = cityService.city;
	$scope.$watch('city',function () {
		cityService.city = $scope.city;
	});
}]);
weatherApp.controller('forcastController',['$scope','$resource','$routeParams','cityService',
	function ($scope,$resource,$routeParams,cityService) {
		var cnt = $routeParams.days || '2';
		$scope.city = cityService.city;
		$scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily',
			{callback:"JSON_CALLBACK"},
			{get:{method:"JSONP"}});
		$scope.weatherResult = $scope.weatherAPI.get({q:$scope.city,
			cnt:cnt,
			appid:'2647b80ab9f831c4c797795d9817a89a'});

	}]);

weatherApp.filter('fahrenheit',function () {
	return function (degk) {
		return Math.round((1.8*(degk-273))+32) +' F';
	}
});

weatherApp.directive('weatherReport',function () {
	return{
		restrict: 'E',
		templateUrl:'../directive/weatherReport.html',
		replace:true,
		scope:{
			weatherInfo:'=',
		}
	}
});