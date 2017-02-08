'use strict';

var React = require('react');

var NaviMenuStore = require('../stores/NaviMenuStore');
var NaviMenuAction = require('../actions/NaviMenuAction');

var MenuItem = React.createClass({
    handleClick: function () {
        console.log("clicked " + this.props.pageid)
        NaviMenuAction.handleClick(this.props.pageid);
    },

    render: function () {
        var icls = 'iconfont ' + this.props.icon;
        return (
            <div className="w-4" onClick={this.handleClick}><div className={this.props.classes} >
                <div><i className={icls}></i></div>{this.props.text}
            </div></div>
        );
    }
});

var NaviMenu = React.createClass({
    getInitialState: function () {
        return  {
            model_list: NaviMenuStore.getList()
        };
    },

    componentDidMount: function() {
        NaviMenuStore.addChangePageListener(this._onChange);
        $('.navbody1').click();
    },

    componentWillUnmount: function() {
        NaviMenuStore.removeChangePageListener(this._onChange);
    },

    _onChange: function () {
        this.setState({
            model_list: NaviMenuStore.getList()
        });
    },

    render: function() {
        var items = this.state.model_list.map(function(xxx) {
            return <MenuItem key={xxx.pageid} text={xxx.text} icon={xxx.icon} pageid={xxx.pageid} classes={xxx.classes} />;
        });
        return (
            <div className="footer">
                {items}
            </div>
        );
    }
});

module.exports = NaviMenu;
