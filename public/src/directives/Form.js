var app = angular.module('queryBuilderApp');

app.directive('jsonSchemaForm',  ['JsonService', function Form(JsonService) {
  return {
    restrict: 'EA',
    templateUrl: 'src/directives/form.html',
    controllerAs: 'form',
    link: function(scope, element, attr) {

      JsonService.then(function(json) {
        scope.schema = json.data['properties'];
      });

      // Returns true if the given property type is number or string. False otherwise.
      scope.isPrimitive = function(item) {
        return item.type === "string" || item.type === "number";
      }

      scope.getInputType = function(item) {
        var typeToCompare = scope.isPrimitive(item) ? item.type : item.items.type;
        return (typeToCompare === 'string') ? 'text' : 'number';
      }

    }
  };
}]);
