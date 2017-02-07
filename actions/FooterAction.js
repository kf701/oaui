
var AppDispatcher = require("../dispatcher/AppDispatcher");

var FooterAction = {
    handleClick:function(pageid){
        AppDispatcher.dispatch({
            actionType: 'PAGE_CHANGE',
            pageid: pageid
        });
    }
}

module.exports = FooterAction;
