var app = angular.module('bfl-final', ['ngRoute', 'ngSanitize']);

app.config(['$routeProvider', function ($routeProvider) {

	$routeProvider.
	when('/', {
		templateUrl: 'main.html',
		controller: 'MainCtrl'
	}).
	when('/ursa-major', {
		templateUrl: 'ursa-major.html',
		controller: 'MainCtrl'
	}).
	when('/pegasus', {
		templateUrl: 'pegasus.html',
		controller: 'MainCtrl'
	}).
	otherwise({redirectTo: '/'});

	
}]);

