/*
 * test/client/controllers/home.js
 */

/* globals beforeEach, chai, describe, inject, it */
'use strict';

chai.should();

describe('HomeCtrl', function () {
  var scope;

  beforeEach(inject(function ($controller) {
    $controller('HomeCtrl', { $scope: scope = {} });
  }));

  it('should create "items" model with 18 items', function () {
    scope.items.length.should.equal(18);
  });
});
