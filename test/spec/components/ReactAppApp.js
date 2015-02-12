'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var ReactAppApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ReactAppApp = require('../../../src/scripts/components/ReactAppApp.js');
    component = React.createElement(ReactAppApp);
  });

  it('should create a new instance of ReactAppApp', function () {
    expect(component).toBeDefined();
  });
});
