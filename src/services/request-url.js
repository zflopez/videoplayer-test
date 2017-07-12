var url = require('./build-url.js');

module.exports = function (params) {

    return fetch(url(params))
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log('Fetch JSON', json);
        })
        .catch(function (err) {
            console.log('Something went wrong', err);
        });
}