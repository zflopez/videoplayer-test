require('./styles/styles.scss');
require('es6-promise').polyfill();

var settings = require('./settings/init-settings.json');
var url_config = require('./services/build-url.js');
var appModule = require('./modules/app/appModule.js');

var init = function () {
    var app = new appModule(settings, url_config);
    $('body').append(app.el);
}

init();