'use strict';

angular.module('skrollsApp', [
    'ngRoute',
    'skrollControllers',
	'skrollsServices',
	'skrollsDirectives',
	'ngAnimate'
])

.config(['$routeProvider', 
    function($routeProvider) {
		$routeProvider.
			when('/browse', {
				templateUrl: 'views/skrolls-list.html',
				controller: 'SkrollListController'
			}).
			when('/s/:skrollID', {
				templateUrl: 'views/skroll.html',
				controller: 'SkrollController'
			}).
			 when('/u/:userID', {
				templateUrl: 'views/user.html',
				controller: 'UserController'
			}).
			otherwise({
				templateUrl: 'views/home.html',
				controller: 'HomeController'
			});
    }]);