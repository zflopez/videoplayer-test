//require('./propiahojadeestilos');
require('backbone.radio');
var eventBus = Backbone.Radio.channel('appModuleChannel');
var languageSelectorComponent = require('./../components/language-selector/languageSelectorComponent.js');
var movieInfoComponent = require('./../components/movie-info/movieInfoComponent.js');
var playButtonComponent = require('./../components/play-button/playButtonComponent.js');
var playerComponent = require('./../components/player/playerComponent.js');
// incluir aquí el selector?

module.exports = Backbone.View.extend({

	tagName: 'app',

	initialize: function (options) {
		this.options = options || {};
		_.bindAll(this, 'render');
		console.log('holi qué tal appmodule', this.options);
		this.bindEvents();
		this.render();
		//this.listenTo(eventBus, 'movieInfo:infoLoaded', this.render);
	},

	render: function () {
		this.$el.html(this);
		this.loadComponents();
		return this;
	},

	/**
	 * Binds events to appModule.
	 */
	bindEvents: function () {
		this.listenTo(eventBus, 'playVideo', this.loadPlayer);
	},

	loadComponents: function() {
		//this.loadMovieInfo();
		this.loadPlayButton();
		//this.loadLanguageSelector();
	},

	loadMovieInfo: function() {
		this.movieInfo = new movieInfoComponent(this.options.settings.movie_info);
		this.$el.append(this.movieInfo);
	},

	/**
	 * Creates play button component instance and appends it to appModule.
	 */
	loadPlayButton: function() {
		this.playButton = new playButtonComponent(eventBus);
		this.$el.append(this.playButton.el);
	},

	/**
	 * Creates player component instance and appends it to appModule.
	 */
	loadPlayer: function () {
		this.player = new playerComponent(eventBus, this.options.settings.video_url);
		console.log(this.player.el);
		this.$el.append(this.player.el);
	},

	loadLanguageSelector: function() {
		this.languageSelector = new languageSelectorComponent();
		this.$el.append(this.languageSelector);
	}
});