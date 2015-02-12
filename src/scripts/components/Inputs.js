'use strict';

var React = require('react/addons');

var Question = React.createClass({
  render: function() {
    return (
      <div>
        <h2>{this.props.query}</h2>
        <input type="text"></input>
      </div>
      );
  }
});

var InputExample = React.createClass({
  render: function () {
    return (
        <div>
          <label>Example text input</label>
          <input type="text"></input>
        </div>
      );
  }
});

module.exports = InputExample; 
