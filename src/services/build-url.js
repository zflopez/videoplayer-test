var apiKey = '?api_key=20312c0f058ba8d2140a832db57baeea',
    configurationUrl = 'https://api.themoviedb.org/3/configuration',
    movieUrl = 'https://api.themoviedb.org/3/movie/',
    languageQuery = '&language=';

// Builds the movie info or the configuration URL depending on the parameters.
module.exports = function (params) {
    if (params) {
        return movieUrl + params.id + apiKey + languageQuery + params.lang;
    }
    return configurationUrl + apiKey;
};