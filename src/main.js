require('./styles/styles.scss');
var settings = require('./settings/init-settings.json');
var url_config = require('./services/configuration-url.js');
var appModule = require('./modules/app/appModule.js');

var root = document.querySelector('#content')
root.innerHTML = "<p>Hello webpack.</p>"

var init = function() {
    var app = new appModule(settings, url_config);
    //document.body.append(app);
}

init();