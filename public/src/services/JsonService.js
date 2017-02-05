var app = angular.module('queryBuilderApp');

app.factory('JsonService', function($http) {
  return $http.get('src/json/schema.json')
});
