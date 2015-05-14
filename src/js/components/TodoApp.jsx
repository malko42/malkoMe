var React = require('react')
, Reflux = require('reflux')
, Router = require('react-router')
, TodoStore = require('../stores/TodoStore.js')
, TodoHeader = require('./TodoHeader.jsx')
, TodoFooter = require('./TodoFooter.jsx');

// Renders the full application
// activeRouteHandler will always be TodoMain, but with different 'showing' prop (all/completed/active)
var TodoApp = React.createClass({
    // this will cause setState({list:updatedlist}) whenever the store does trigger(updatedlist)
    mixins: [Reflux.connect(TodoStore,"list")],

    render: function() {
        return (
            <div>
                <TodoHeader />
                <Router.RouteHandler list={this.state.list} />
                <TodoFooter list={this.state.list} />
            </div>
        );
    }
});

module.exports = TodoApp;
