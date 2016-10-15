var weatherApp = angular.module('weatherApp',['ngRoute','ngResource']);

weatherApp.config(function ($routeProvider) {
	$routeProvider.when('/',{
		templateUrl:'../pages/home.html',
		controller:'homeController'
	}).when('/forcast',{
		templateUrl:'../pages/forcast.html',
		controller:'forcastController'
	});
});

weatherApp.controller('homeController',['$scope',function ($scope) {
	
}]);
weatherApp.controller('forcastController',['$scope',function ($scope) {
	
}]);