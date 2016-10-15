weatherApp.filter('fahrenheit',function () {
	return function (degk) {
		return Math.round((1.8*(degk-273))+32) +' F';
	}
});