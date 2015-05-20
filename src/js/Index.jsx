var React = require('react')
, Bs = require('react-bootstrap')
, ContentBlock = require('./components/ContentBlock');

var Index = React.createClass({
  render: function() {
var blocks = [];
for (var i = 0; i < 7; i++) {
  blocks.push(<ContentBlock />)
}
    return (
      <div id='index'>
        {blocks}
      </div>
    );
  }

});

module.exports = Index;
