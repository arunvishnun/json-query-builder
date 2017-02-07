describe('Directive: json-schema-form', function() {
  var element, scope;

  beforeEach(module('queryBuilderApp'));

  beforeEach(inject(function($rootScope, $compile, $httpBackend) {
    scope = $rootScope.$new();
    element = $compile('<json-schema-form></json-schema-form>')(scope);
    scope.$apply();

  }));

  // TODO: add tests for json-schema-form
  // it('should include form to dom', function() {
  //
  // });
});

describe('Directive: epochvalidate', function() {
    var $scope;
    beforeEach(module('queryBuilderApp'));
    beforeEach(inject(function($rootScope, $compile) {
      scope = $rootScope.$new();
      var template = '<form name="form"><input type="number" ng-model="test.epoch" name="testinput" epochvalidate></form>';
      $compile(template)(scope);
      scope.$apply();
    }));

    it('should not accept invalid input', function() {
        var form = scope.form;
        form.testinput.$setViewValue('abc');
        expect(form.$valid).toBeFalsy();
    });

    it('should accept valid inputs', function() {
      var form = scope.form;
      form.testinput.$setViewValue('1486725000');
      expect(form.$valid).toBeTruthy();
    });

    it('should not accept non epoch number', function() {
      var form = scope.form;
      form.testinput.$setViewValue('1486725');
      expect(form.$valid).toBeFalsy();
    });

    it('can be empty as it is not a required field', function() {
      var form = scope.form;
      form.testinput.$setViewValue('');
      expect(form.$valid).toBeTruthy();
    });

    it('should not be -ve', function() {
      var form = scope.form;
      form.testinput.$setViewValue('-1486725000');
      expect(form.$valid).toBeFalsy();
    });

    it('can be epoch number', function() {
      var form = scope.form;
      form.testinput.$setViewValue(1486725000);
      expect(form.$valid).toBeTruthy();
    });
});
