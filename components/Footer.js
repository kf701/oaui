'use strict';

var React = require('react');

var FooterAction = require('../actions/FooterAction');

var MenuItem = React.createClass({
    handleClick: function () {
        console.log("clicked " + this.props.pageid)
        FooterAction.handleClick(this.props.pageid);
    },

    render: function () {
        return (
            <div className="w-4" onClick={this.handleClick}><div className={this.props.classes} >
                <div><i className={this.props.icon}></i></div>{this.props.text}
            </div></div>
        );
    }
});

var item_model_list = [
    {icon:'iconfont icon-home', text:'首页', pageid:'home', classes:'navbody navbody1'},
    {icon:'iconfont icon-todo', text:'待办', pageid:'todo', classes:'navbody'},
    {icon:'iconfont icon-shenpi', text:'审批', pageid:'shenpi', classes:'navbody'},
    {icon:'iconfont icon-user', text:'日志', pageid:'worklog', classes:'navbody'}
];

var Footer = React.createClass({
    render: function() {
        var items = item_model_list.map(function(xxx) {
            return <MenuItem key={xxx.pageid} text={xxx.text} icon={xxx.icon} pageid={xxx.pageid} classes={xxx.classes}/>;
        });
        return (
            <div className="footer">
                {items}
            </div>
        );
    }
});

module.exports = Footer;
