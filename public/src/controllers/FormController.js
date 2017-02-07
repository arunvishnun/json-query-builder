var queryBuilderApp = angular.module('queryBuilderApp');

queryBuilderApp.controller('FormController', function FormController($scope) {

	// Just to pre-populate soome data.
	var select_fields = ['time','source_vn', 'destination_vn', 'source_port', 'destination_port', 'traffic'];
	var where_clauses =[{
			"name" : "source_vn",
			"value" : "frontend-vn",
			"operator" :"="
		},
		{
			"name" : "source_port",
			"value" : "9000",
			"operator" :"!="
		}];

	$scope.model = {};
	$scope.model['where'] = [];
	$scope.model['select_fields'] = select_fields;
	$scope.model['where'].push(where_clauses);


	$scope.cloneItem = function() {
		 $scope.model['where'].push([{}]);
	}

	$scope.submit = function() {
		// check to make sure the form is completely valid
		if ($scope.queryBuilder.$valid) {
			$scope.jsonQuery = $scope.model;
		}
	};

});
