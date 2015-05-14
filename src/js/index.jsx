var React = require('react')
require('../css/style.styl');

var Index = React.createClass({

  render: function() {
    return (
            <div>
            <input type="text" defaultValue="test"/>
            <hr />
            </div>
    );
  }

});

module.exports = Index;
