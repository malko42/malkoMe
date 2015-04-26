var React = require('react')
, Index = require('./index');

// var Index = React.createClass({
//
//   render: function() {
//     return (
//       <div>
//       <input type="text" defaultValue="allo"/>
//       <hr />
//       ALLO
//       </div>
//     );
//   }
//
// });

React.render(
  <Index />,
  document.getElementById('app')
);
