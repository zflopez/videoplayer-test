require('backbone.radio');
var eventBus = Backbone.Radio.channel('appModuleChannel');
var languageSelectorComponent = require('./../components/language-selector/languageSelectorComponent.js');
var movieInfoComponent = require('./../components/movie-info/movieInfoComponent.js');
var playButtonComponent = require('./../components/play-button/playButtonComponent.js');
var playerComponent = require('./../components/player/playerComponent.js');

module.exports = Backbone.View.extend({

	tagName: 'app',

	initialize: function (options) {
		this.options = options || {};
		_.bindAll(this, 'render');
		this.bindEvents();
		this.render();
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
		this.listenTo(eventBus, 'languageSelector:change', this.refreshLanguage);
	},

	/**
	 * Calls every component creation method.
	 */
	loadComponents: function () {
		this.loadMovieInfo();
		this.loadLanguageSelector();
		this.loadPlayButton();
	},

	/**
	 * Creates movie info component instance and appends it to appModule.
	 */
	loadMovieInfo: function (lang) {
		this.movieInfo = new movieInfoComponent(eventBus, this.options.settings.movie_info, lang);
		this.$el.append(this.movieInfo.el);
	},

	/**
	 * Creates play button component instance and appends it to appModule.
	 */
	loadPlayButton: function () {
		this.playButton = new playButtonComponent(eventBus);
		this.$el.append(this.playButton.el);
	},

	/**
	 * Creates player component instance and appends it to appModule.
	 */
	loadPlayer: function () {
		this.player = new playerComponent(eventBus, this.options.settings.video_url);
		this.$el.append(this.player.el);
	},

	/**
	 * Creates language selector component instance and appends ir to appModule.
	 */
	loadLanguageSelector: function () {
		this.languageSelector = new languageSelectorComponent(eventBus);
		this.$el.append(this.languageSelector.el);
	},

	/**
	 * Changes document direction and movie info component depending on language selection.
	 */
	refreshLanguage: function (languageData) {
		document.dir = languageData.direction;
		this.movieInfo.reloadContent(languageData.code);
	}
});