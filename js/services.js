weatherApp.service('cityService',function () {
	this.city = 'Fairfield, IA';
});
weatherApp.service('weatherService',['$resource',function ($resource) {
	this.getWeather = function (city, days) {
		var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily',
			{callback:"JSON_CALLBACK"},
			{get:{method:"JSONP"}});
		 return weatherAPI.get({q: city, cnt:days, appid:'2647b80ab9f831c4c797795d9817a89a'});
	}
}]);