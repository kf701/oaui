
var AppDispatcher = require("../dispatcher/AppDispatcher");

var NaviMenuAction = {
    handleClick:function(pageid){
        AppDispatcher.dispatch({
            actionType: 'PAGE_CHANGE',
            pageid: pageid
        });
    }
}

module.exports = NaviMenuAction;
