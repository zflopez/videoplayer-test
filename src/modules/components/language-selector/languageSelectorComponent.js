require('bootstrap-select/js/bootstrap-select');
require('bootstrap-select/dist/css/bootstrap-select.css');

var languageSelectorView = require('./languageSelectorView.js'),
    languageSelectorModel = require('./languageSelectorModel.js');

module.exports = function (eventBus) {
    return new languageSelectorView({
        model: new languageSelectorModel(),
        eventBus: eventBus
    });
};