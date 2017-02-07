
var React = require('react');

var MyButtonController = React.createClass({
  render: function() {
    return <MyButton
      onClick={this.createNewItem}
    />;
  }

});

module.exports = MyButtonController;
