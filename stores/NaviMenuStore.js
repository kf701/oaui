
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var NaviMenuStore = assign({}, EventEmitter.prototype, {
  items: [
    {icon:'icon-home',   text:'首页', pageid:'home',    classes:'navbody navbody1'},
    {icon:'icon-todo',   text:'待办', pageid:'todo',    classes:'navbody'},
    {icon:'icon-shenpi', text:'审批', pageid:'shenpi',  classes:'navbody'},
    {icon:'icon-user',   text:'日志', pageid:'worklog', classes:'navbody'}
  ],

  getList: function () {
    return this.items;
  },

  menuSelect: function(pageid) {
      for (var i = 0 ; i < this.items.length; i ++ ) {
          var cls = 'navbody';
          if (i == 0) cls = cls + ' navbody1';

          if ( this.items[i].pageid == pageid ) {
              cls = cls + ' selected';
          }
          this.items[i].classes = cls;
      }
  },

  emitChange: function () {
    this.emit('change');
  },

  addChangePageListener: function(callback) {
    this.on('change', callback);
  },

  removeChangePageListener: function(callback) {
    this.removeListener('change', callback);
  }
});

module.exports = NaviMenuStore;
