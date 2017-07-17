var url = require('./build-url.js');

module.exports = function (params, callback) {
    return fetch(url(params))
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            return callback(json);
        })
        .catch(function (err) {
            console.log('Something went wrong', err);
        });
}