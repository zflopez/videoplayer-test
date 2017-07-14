var getMovieInfo = require('./../../../services/request-url.js');

module.exports = Backbone.Model.extend({
    
    initialize: function() {
        this.getImagesConfig();
    },

    /**
     * Requests configuration url for images.
     */
    getImagesConfig: function() {
        var scope = this;

        getMovieInfo(null, function (data) {
            scope.set('requestImages', data.images);
        });
    }
});