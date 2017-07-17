require('backbone.radio');
var eventBus = Backbone.Radio.channel('appModuleChannel'),
	languageSelectorComponent = require('./../components/language-selector/languageSelectorComponent.js'),
	movieInfoComponent = require('./../components/movie-info/movieInfoComponent.js'),
	playerComponent = require('./../components/player/playerComponent.js'),
	template = require('./appModuleTemplate.html');

module.exports = Backbone.View.extend({

	tagName: 'app',

	initialize: function (options) {
		this.options = options || {};
		_.bindAll(this, 'render');
		this.bindEvents();
		this.render();
	},

	render: function () {
		this.$el.html(template.appTemplate(this));
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
		this.loadLanguageSelector();
		this.loadMovieInfo();
	},

	/**
	 * Creates movie info component instance and appends it to appModule.
	 */
	loadMovieInfo: function (lang) {
		this.movieInfo = new movieInfoComponent(eventBus, this.options.settings.movie_info, lang);
		this.$el.append(this.movieInfo.el);
	},

	/**
	 * Creates player component instance and appends it to appModule.
	 */
	loadPlayer: function () {
		this.player = new playerComponent(eventBus, this.options.settings.video_url);
		this.$el.append(this.player.el);
		this.animatedScroll(this.$('#videoPlayer'));
	},

	/**
	 * Creates language selector component instance and appends ir to appModule.
	 */
	loadLanguageSelector: function () {
		this.languageSelector = new languageSelectorComponent(eventBus);
		this.$('.navbar-container').append(this.languageSelector.el);
	},

	/**
	 * Scrolls top to a selector.
	 */
	animatedScroll: function (selector) {
		$('body').animate({
			scrollTop: selector.offset().top - $('body').offset().top
		}, 2000);
	},

	/**
	 * Changes document direction and movie info component depending on language selection.
	 */
	refreshLanguage: function (languageData) {
		document.dir = languageData.direction;
		this.movieInfo.reloadContent(languageData.code);
	}
});