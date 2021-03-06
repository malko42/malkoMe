/** @jsx React.DOM */
var _ = require('lodash')
, React = require('react/addons')
, TodoActions = require('../actions/TodoActions.js')
, TodoStore = require('../stores/TodoStore.js')
, TodoItem = require('./TodoItem.jsx');


// Renders the todo list as well as the toggle all button
// Used in TodoApp
var TodoMain = function(showing) {
    return React.createClass({
        propTypes: {
            list: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
        },
        toggleAll: function(evt) {
            TodoActions.toggleAllItems(evt.target.checked);
        },
        render: function() {
            var filteredList;
            switch(showing){
                case 'all':
                    filteredList = this.props.list;
                    break;
                case 'completed':
                    filteredList = _.filter(this.props.list,function(item){ return item.isComplete; });
                    break;
                case 'active':
                    filteredList = _.filter(this.props.list,function(item){ return !item.isComplete; });
            }
            var classes = React.addons.classSet({
                "hidden": this.props.list.length < 1
            });
            return (
                <section id="main" className={classes}>
                    <input id="toggle-all" type="checkbox" onChange={this.toggleAll} />
                    <label htmlFor="toggle-all">Mark all as complete</label>
                    <ul id="todo-list">
                        { filteredList.map(function(item){return <TodoItem label={item.label} isComplete={item.isComplete} id={item.id} key={item.id}/>; }) }
                    </ul>
                </section>
            );
        }
    });
}

module.exports = TodoMain;
