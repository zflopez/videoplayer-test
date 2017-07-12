require('backbone');
var appModuleView = require('./../app/appModuleView.js');
var appModuleModel = require('./../app/appModuleModel.js');

module.exports = function(settings, url_config) {
    return new appModuleView({
        model: appModuleModel,
        settings: settings,
        url_config: url_config
    })
}