'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

var bodybox = React.createClass({
    render: function() {
        return <h1>Hello {this.props.name}</h1>;
    }
});

module.exports = bodybox;
