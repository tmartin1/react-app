'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/app.css');

var imageURL = require('../../images/yeoman.png');

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

var ReactAppApp = React.createClass({
  render: function() {
    return (
      <div className='app'>
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
          <Question query={'What is your name?'}></Question>
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = ReactAppApp;
