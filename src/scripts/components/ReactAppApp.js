'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// Style Components
require('../../styles/normalize.css');
require('../../styles/app.css');
require('../../lib/react-semantify.min.js');

var Button = Semantify.Button;

var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText) {
      return <li className="item">{itemText}</li>;
    };
    return <ul className="examplelist">{this.props.items.map(createItem)}</ul>;
  }
});

var ReactAppApp = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      <div>
        <h3>To-Do List</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input className="exampleinput" onChange={this.onChange} value={this.state.text} />
          <Button className="examplelabel">{'Add Task'}</Button>
        </form>
      </div>
    );
  }
});

module.exports = ReactAppApp;
