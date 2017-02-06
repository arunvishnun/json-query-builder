describe('Form Controller', function(){
    beforeEach(module('queryBuilderApp'));
    describe('FormController',function() {
        var formController;
        var scope;
        beforeEach(inject(function($rootScope, $controller) {
          scope = $rootScope.$new();
          formController = $controller('FormController', {
            $scope: scope
          });
        }));
        it('model not be empty', function(){
            expect(scope.model).not.toBe(null);
        });
    });
});
