var languageSelectorView = require('./languageSelectorView.js') ;
var languageSelectorModel = require('./languageSelectorModel.js');

module.exports = function(eventBus) {
    return new languageSelectorView({
        model: new languageSelectorModel(),
        eventBus: eventBus
    });
};