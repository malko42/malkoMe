var React = require('react')
, Reflux = require('reflux')
, Router = require('react-router')
, TodoMain = require('./components/TodoMain.jsx')
, TodoApp = require('./components/TodoApp.jsx');

var routes = (
        <Router.Route handler={TodoApp}>
            <Router.Route name="All" path="/" handler={TodoMain("all")} />
            <Router.Route name="Completed" path="/completed" handler={TodoMain("completed")} />
            <Router.Route name="Active" path="/active" handler={TodoMain("active")} />
        </Router.Route>
);


Router.run(routes, function (Handler) {
      React.render(
        <Handler/>,
        document.getElementById('app'));
});
