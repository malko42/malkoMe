var React = require('react')
, Reflux = require('reflux')
, Router = require('react-router')
, TodoMain = require('./components/TodoMain.jsx')
, TodoApp = require('./TodoApp.jsx')
, Index = require('./Index');
require('../css/style.styl')
// import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

var App = React.createClass({

  render: function() {
    return (
      <div>
        <nav>
          <span id="name"><span className="bold">Malko.</span> aka Maxime Daffis</span>
          <Router.Link to="app">Home</Router.Link>
          <Router.Link to="projects">Projects</Router.Link>
          <Router.Link to="contact">Contact</Router.Link>
          <Router.Link to="todo">Todo</Router.Link>
        </nav>
        <section>
          <Router.RouteHandler />
        </section>
      </div>
    );
  }

});


var routes = (
  <Router.Route handler={App} path="/" name="app">
    <Router.DefaultRoute handler={Index} />
    <Router.Route name="index" path="/" handler={Index} />
    <Router.Route name="todo" path="/todo" handler={TodoApp}>
      <Router.Route name="All" path="/todo" handler={TodoMain("all")} />
      <Router.Route name="Active" path="active" handler={TodoMain("active")} />
      <Router.Route name="Completed" path="completed" handler={TodoMain("completed")} />
    </Router.Route>
    <Router.Route name="contact" path="/contact" handler={Index} />
    <Router.Route name="projects" path="/projects" handler={Index} />
  </Router.Route>
);


Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
