var app = angular.module('queryBuilderApp');

app.directive('jsonSchemaForm',  ['JsonService', function Form(JsonService) {
  return {
    restrict: 'EA',
    templateUrl: 'src/directives/form.html',
    controllerAs: 'form',
    // controller: function($scope) {
    //   JsonService.then(function(data) {
    //     // scope.dummyData = data.properties['start_time'].type;
    //   });
    // },
    // scope: {
    //     schema: '=',
    // },
    link: function(scope, element, attr) {

      JsonService.then(function(json) {
        scope.schema = json.data['properties'];
      });

      // Returns true if the given property type is number or string. False otherwise.
      scope.isPrimitive = function(item) {
        return item.type === "string" || item.type === "number";
      }

      scope.getInputType = function(item) {
        
        var isPrimitiveProperty = scope.isPrimitive(item);
        var typeToCompare;
        if(isPrimitiveProperty) {
          return  (item.type === "string") ? "text" : "number";
        } else {
          return  (item.items.type === "string") ? "text":"number";
        }
      }

    }
  };
}]);
