var React = require('react')
, Router = require('react-router')
, Index = require('./index');

// React.render(
//   <Index />,
//   document.getElementById('app')
// );

react.createClass();

var routes = (
    <Router.Route handler={Index}>
        <Router.Route name="All" path="/" handler={Index} />
        <Router.Route name="Completed" path="/completed" handler={Index} />
        <Router.Route name="Active" path="/active" handler={Index} />
    </Router.Route>
);

Router.run(routes, function(Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});