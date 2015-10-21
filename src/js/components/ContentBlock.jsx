var React = require('react')
, BS = require('react-bootstrap');



var ContentBlock = React.createClass({
  // getDefaultProps: function() {
  //   return {
  //     color: '#000000';
  //   }
  // }
  getInitialState: function() {
    return {
      prevScroll: '0',
      expanded: false
    }
  },
  expandBlock: function() {

    // switch (this.refs.block.getDOMNode().style.width) {
    //   case '100%':

    //   this.refs.block.getDOMNode().style.width = '512px';
    // window.scroll(0, this.refs.block.getDOMNode().offsetTop);
    //   break;
    //   default:
    //   this.refs.block.getDOMNode().style.width = '100%';
    //   window.scroll(0, this.state.prevScroll);
    //   break;
    // }
    // console.log(this.refs.block.getDOMNode().offsetTop);
    console.log(this.refs.block.getDOMNode().classList.contains('expandedBlock'));
    if (this.refs.block.getDOMNode().classList.contains('expandedBlock')) {
      this.refs.block.getDOMNode().classList.remove('expandedBlock');
      this.refs.icon.getDOMNode().classList.remove('glyphicon-resize-small');
      this.refs.icon.getDOMNode().classList.add('glyphicon-resize-full');
      this.setState({
        expanded: false
      });
      setTimeout(function() {
        window.scroll(0, this.state.prevScroll);
      }.bind(this), 300);
    } else {
      this.setState({
        prevScroll : document.body.scrollTop,
        expanded: true
      });
      this.refs.block.getDOMNode().classList.add('expandedBlock')
      this.refs.icon.getDOMNode().classList.remove('glyphicon-resize-full');
      this.refs.icon.getDOMNode().classList.add('glyphicon-resize-small');
      setTimeout(function() {
        window.scroll(0, this.refs.block.getDOMNode().offsetTop);
      }.bind(this), 300);
    }

    // this.refs.block.getDOMNode().style.width = '100%';
    // this.refs.block.getDOMNode().style.height = 'auto';
    // console.log(this.refs.block.getDOMNode());
  },
  render: function() {
    console.log(this.props.color);

    var inStyle = {
      backgroundColor: this.props.color
    }
    return (
      <div className='indexContentBlock' ref="block" style={inStyle}>

        <BS.Glyphicon className="glyphicon glyphicon-resize-small" ref="icon" />
        <div className="blockHeader" onClick={this.expandBlock}>This is a fake title.</div>
        {(this.state.expanded?<div className="blockBody">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</div>:null)}
      </div>
    );
  }

});

module.exports = ContentBlock;
