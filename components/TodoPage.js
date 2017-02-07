'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var TodoPage = React.createClass({
    render: function() {
        return (
            <div>
                <h1>i am todo</h1>
            </div>
        );
    },

    showMe: function() {
        ReactDOM.render(
            <TodoPage />,
            document.querySelector('#pagebody')
        );
    }
});

module.exports = TodoPage;
