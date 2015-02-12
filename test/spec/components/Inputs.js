'use strict';

describe('Inputs', function () {
  var React = require('react/addons');
  var Inputs, component;

  beforeEach(function () {
    Inputs = require('../../../src/scripts/components/Inputs.js');
    component = React.createElement(Inputs);
  });

  it('should create a new instance of Inputs', function () {
    expect(component).toBeDefined();
  });
});
