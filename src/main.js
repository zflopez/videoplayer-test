require('./styles/styles.scss');
// Makes the global fetch function available.
require('es6-promise').polyfill();

/**
 * Creates appComponent instance with init default data (customized) and appends it to index.
 */
(function () {
    var settings = require('./settings/init-settings.json');
    var appModule = require('./modules/app/appModule.js');

    var init = function () {
        var app = new appModule(settings);
        $('body').prepend(app.el);
    };

    init();
})();