var queryBuilderApp = angular.module('queryBuilderApp',['ngRoute']);

queryBuilderApp.config(function($routeProvider) {
	'use strict';

	$routeProvider.when('/form', {
		templateUrl: 'views/form.html',
		controller: 'FormController',
		controllerAs: 'form'
	});

});
