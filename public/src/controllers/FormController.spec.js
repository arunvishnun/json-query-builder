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

        it('should have the FormController controller defined', function() {
          expect('FormController').toBeDefined();
        });

        it('model not be empty', function(){
            expect(scope.model).not.toBe(null);
        });
    });
});
