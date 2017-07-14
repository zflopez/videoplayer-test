require('backbone');
var appModuleView = require('./../app/appModuleView.js');
var appModuleModel = require('./../app/appModuleModel.js');

module.exports = function (settings) {
    return new appModuleView({
        model: new appModuleModel(),
        settings: settings
    });
};