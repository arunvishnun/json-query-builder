describe('Clean Filter', function(){
    var filter;
    beforeEach(angular.mock.module('queryBuilderApp'));
    beforeEach(inject(function($injector) {
      filter = $injector.get('$filter')('clean');
    }));

    it('should clean the given input and capitalize first letter', function() {
      expect(filter('hello_world')).toBe('Hello world');
    });
});
