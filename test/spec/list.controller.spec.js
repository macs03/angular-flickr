'use strict';

describe('Controller: ListController', function () {

  // load the controller's module
  beforeEach(module('flickrApp'));

  var ListController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListController = $controller('ListController', {
      $scope: scope
    });
  }));

  it('should have no items to start', function () {
    expect(scope.results.length).toBe(0);
  });

});
