var moment = require('moment'),
    duration = require('moment-duration-format'),
    rateChartComponent = require('./../rate-chart/rateChartComponent.js'),
    template = require('./movieInfoTemplate.html'),
    movieInfoImagesModel = require('./movieInfoImagesModel.js');

module.exports = Backbone.View.extend({

    tagName: 'section',

    id: 'movieInfoContainer',

    initialize: function (options) {
        this.options = options || {};
        this.movieInfoImagesModel = new movieInfoImagesModel();
        _.bindAll(this, 'render');
        this.bindEvents();
    },

    render: function () {
        this.$el.html(template.movieInfoTemplate(this.model.toJSON()));
        //this.loadRateChart();
        return this;
    },

    /**
     * Bind events.
     */
    bindEvents: function () {
        // Waits for fetch request finished and model setting to save labels and render component.
        this.listenTo(this.movieInfoImagesModel, 'change', this.getMovieInfo);
        this.listenTo(this.model, 'change', this.setFetchLabels);
    },

    /**
     * Calls model method to get movie info.
     */
    getMovieInfo: function () {
        this.model.getMovieInfo();
    },

    /**
     * Refreshes component content with new selected language data.
     */
    reloadContent: function (lang) {
        this.model.selectedLangLabels(lang);
        this.model.getMovieInfo(lang);
    },

    /**
     * Sets labels for template from fetch request and renders component.
     */
    setFetchLabels: function () {
        var imdbRoot = this.model.get('movie_info').imdb_url;
        this.model.set({
            imdbLink: imdbRoot + this.model.get('imdb_id'),
            release_year: moment(this.model.get('release_date')).year(),
            runtimeFormatted: moment.duration(this.model.get('runtime'), "minutes").format("h[h] m[m]"),
            backdropImage: this.movieInfoImagesModel.get('requestImages').base_url + this.movieInfoImagesModel.get('requestImages').backdrop_sizes[2] + this.model.get('backdrop_path'),
            posterImage: this.movieInfoImagesModel.get('requestImages').base_url + this.movieInfoImagesModel.get('requestImages').poster_sizes[2] + this.model.get('poster_path')
        }, { silent: true });
        this.render();
    },

    /**
     * Creates rate chart component instance and appends it to movieInfo.
     */
    loadRateChart: function () {
        var voteData = {
            vote_average: this.model.get('vote_average'),
            vote_count: this.model.get('vote_count')
        };
        this.rateChart = new rateChartComponent(voteData);
        this.$('#chartContainer').append(this.rateChart.el);
    }
});