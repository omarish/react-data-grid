var React = require('react');
var ReactRouter = require('react-router');

var gettingStarted = require('./scripts/documentation01-gettingstarted');
var apiReference = require('./scripts/documentation02-apireference');

var { Route, RouteHandler, Link } = ReactRouter;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="page-header">Documentation</h1>
        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route handler={App}>
      <Route name="gettingstarted" handler={gettingStarted}/>
      <Route name="apireference" handler={apiReference}/>
  </Route>
);

ReactRouter.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('documentation'));
});
