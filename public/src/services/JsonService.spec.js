describe('Unit: Form', function () {
   var JsonService;

   beforeEach(angular.mock.module('queryBuilderApp'));

   beforeEach(inject(function(_JsonService_){
     JsonService = _JsonService_;
   }));

   it('should exist', function() {
     expect(JsonService).toBeDefined();
   });
});
