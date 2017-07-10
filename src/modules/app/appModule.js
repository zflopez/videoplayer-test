var appModuleView = require('./../app/appModuleView');
var appModuleModel = require('./../app/appModuleModel');

module.exports = function(config) {
    return new appModuleView({
        model: appModuleModel(),
        config: config
    })
}