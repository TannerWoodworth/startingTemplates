var myApp = angular.module('myApp', ['ngRoute']);

// ROUTES
//////////////////////////////////////////////////

myApp.config(function ($routeProvider, $locationProvider){

$locationProvider.hashPrefix('');

	$routeProvider
	.when('/', {
		templateUrl:'app/components/landing/landing.html',
		controller:'landingController'
	})
	
	.when('/example', {
		templateUrl:'app/components/example/example.html',
		controller:'exampleController'
	})
});

// CONTROLERS
//////////////////////////////////////////////////

myApp.controller('landingController', ['$scope', function($scope) {


}]); 

myApp.controller('exampleController', ['$scope', function($scope) {


}]);

// FACTORIES / SERVICES
//////////////////////////////////////////////////


// DIRECTIVES
//////////////////////////////////////////////////