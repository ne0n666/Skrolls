'use strict';

angular.module('skrollsServices', ['ngResource','firebase'])


	.factory('FireFact', ['$firebase', function($firebase){
		return $firebase(new Firebase('https://skrollsapp.firebaseio.com/skrolls/:skrollid'));
	}])
	.factory('SkrollFact', ['$resource', function($resource){
		return $resource('https://skrollsapp.firebaseio.com/skrolls/:skrollid');
	}])
	.factory('SkrollListFact', ['$resource', function($resource){
		return $resource('data/skrolls/skrolls.json');
	}])
	.factory('UserFact', ['$resource', function($resource){
	    return $resource('data/users/:userFile');
	}]);
	