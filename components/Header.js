'use strict';

var React = require('react');

var header_style = {
    box: {
        padding: "10px 0",
        margin: "0 0 10px 0",
        background: "#eee"
    },
    logo: {
        fontSize: "18px"
    }
};

var Header = React.createClass({
    render: function() {
        return (
            <div style={header_style.box}>
                <div style={header_style.logo}>
                    Header here
                </div>
            </div>
        );
    }
});

module.exports = Header;
