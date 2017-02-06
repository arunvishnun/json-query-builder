var app = angular.module('queryBuilderApp');
app.filter('clean', function() {
  return function(input, scope) {
    if (input!=null)
    input = input.toLowerCase();
    input = input.split('_').join(' ');
    return input.substring(0,1).toUpperCase()+input.substring(1);
  }
});
