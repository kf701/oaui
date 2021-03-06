
var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

var HomePage = require('../components/HomePage');
var TodoPage = require('../components/TodoPage');

var NaviMenuStore = require('../stores/NaviMenuStore');

AppDispatcher.register(function (action) {
  switch(action.actionType)
  {
    case 'PAGE_CHANGE':
      NaviMenuStore.menuSelect(action.pageid);
      NaviMenuStore.emitChange();

      var page = null;
      switch(action.pageid) {
          case 'home':
              page = new HomePage;
              break;
          case 'todo':
              page = new TodoPage;
              break;
          default:
              console.log("PAGE_CHANGE unknow page id");
              break;
      }
      if (page != null) {
          page.showMe();
      }

      break;
    default:
      console.log("unknow action type");
      break;
  }
})

module.exports = AppDispatcher;
