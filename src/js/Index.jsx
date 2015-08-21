var React = require('react')
, Bs = require('react-bootstrap')
, ContentBlock = require('./components/ContentBlock');

var Index = React.createClass({
  render: function() {
var blocks = [];
for (var i = 1; i < 8; i++) {
  var blockColor = '#59ABE3';
  if (i % 4 == 2 || i % 4 == 3) {
    blockColor = '#22A7F0';
  }
  console.log(i, blockColor);
  blocks.push(<ContentBlock color={blockColor}/>)
}
    return (
      <div id='index'>
        {blocks}
      </div>
    );
  }

});

module.exports = Index;
