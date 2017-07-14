var api_key = '?api_key=20312c0f058ba8d2140a832db57baeea',
    configuration_url = 'https://api.themoviedb.org/3/configuration',
    movie_url = 'https://api.themoviedb.org/3/movie/',
    language_query = '&language=';

module.exports = function (params) {
    if (params) {
        return movie_url + params.id + api_key + language_query + params.lang;
    }
    return configuration_url + api_key;
};