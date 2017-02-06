var queryBuilderApp = angular.module('queryBuilderApp',['ngRoute']);

queryBuilderApp.config(function($routeProvider, $locationProvider) {
	'use strict';

	$routeProvider.when('/', {
		controller: 'FormController',
		controllerAs: 'form'
		}).otherwise({
      			redirectTo: '/'
  		});

	// Just to make clean URL
  	$locationProvider.html5Mode(true);
});
