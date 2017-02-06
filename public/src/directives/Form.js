var app = angular.module('queryBuilderApp');

app.directive('jsonSchemaForm',  ['JsonService', function Form(JsonService) {
  return {
    restrict: 'EA',
    templateUrl: 'src/directives/form.html',
    controllerAs: 'form',
    link: function(scope, element, attr) {
      // Get schema to build the form.
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

/**
 * Validation for Unix epoch time.
 * Usage: add epochvalidate as attibute to dom element
 */
app.directive('epochvalidate', function () {
  return {
    restrict: 'A',
     require: 'ngModel',
    link: function (scope, element, attrs, ctrl) {
      ctrl.$parsers.unshift(function (viewValue) {
        var UNIX_TIME_REGEXP = /^\d{10}$|^\d{13}$/;
        // If valid return true
        if (UNIX_TIME_REGEXP.test(viewValue.toString())) {
          ctrl.$setValidity('epochvalidate', true);
          return viewValue;
        } else { // it is invalid, return undefined (no model update)
          ctrl.$setValidity('epochvalidate', false);
          return undefined;
        }
      });
    }
  };
});
