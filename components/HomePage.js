'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var HomePage = React.createClass({
    render: function() {
        return (
            <div>
                <h1>i am home</h1>
            </div>
        );
    },

    showMe: function() {
        ReactDOM.render(
            <HomePage />,
            document.querySelector('#pagebody')
        );
    }
});

module.exports = HomePage;
