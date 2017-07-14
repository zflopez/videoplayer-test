require('./styles/styles.scss');
require('es6-promise').polyfill();

(function () {
    var settings = require('./settings/init-settings.json');
    var appModule = require('./modules/app/appModule.js');

    var init = function () {
        var app = new appModule(settings);
        $('body').prepend(app.el);
    };

    init();
})();