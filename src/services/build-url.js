var api_key = '?api_key=20312c0f058ba8d2140a832db57baeea',
    configuration_url = 'https://api.themoviedb.org/3/configuration',
    movie_url = 'https://api.themoviedb.org/3/movie/',
    language_query = '&language=';

module.exports = function () {
    if (arguments.length > 0) {
        return movie_url + arguments[0] + api_key + language_query + arguments[1];
    }
    return configuration_url + api_key;
};