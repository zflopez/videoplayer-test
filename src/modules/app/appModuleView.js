//require('./propiahojadeestilos');
require('backbone.radio');
var eventBus = Backbone.Radio.channel('appModuleChannel');
var languageSelectorComponent = require('./../components/language-selector/languageSelectorComponent.js');
var movieInfoComponent = require('./../components/movie-info/movieInfoComponent.js');
var playButtonComponent = require('./../components/play-button/playButtonComponent.js');
var playerComponent = require('./../components/player/playerComponent.js');
// incluir aquí el selector?

module.exports = Backbone.View.extend({

	initialize: function (options) {
		this.options = options || {};
		console.log('holi qué tal appmodule');
		this.loadPlayButton();
	},

	render: function () {
		this.$el.html(this(this.toJSON()));
		return this;
	},

	bindEvents: function () {
		this.listenTo(eventBus, 'playVideo', this.loadPlayer);
	},

	loadMovieInfo: function() {
		this.movieInfo = new movieInfoComponent(this.options.settings.movie_id);
		this.$el.append(this.movieInfo);
	},

	loadPlayButton: function() {
		this.playButton = new playButtonComponent(eventBus);
		this.$el.append(this.playButton);
	},

	loadPlayer: function () {
		console.log('playeeuehrueh');
		this.player = new playerComponent(this.options.settings);
		//this.$el.append(this.player);
	},

	loadLanguageSelector: function() {
		this.languageSelector = new languageSelectorComponent();
		this.$el.append(this.languageSelector);
	}
});