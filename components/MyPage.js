'use strict';

var React = require('react');

var Header = require('./Header');
var BodyBox = require('./BodyBox');

var MyPage = React.createClass({
    render: function() {
        return (
            <div>
            <Header />
            <BodyBox />
            </div>
        );
    }
});

module.exports = MyPage;
