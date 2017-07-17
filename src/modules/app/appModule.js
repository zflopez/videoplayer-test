require('backbone');
var appModuleView = require('./../app/appModuleView.js');

module.exports = function (settings) {
    return new appModuleView({
        settings: settings
    });
};