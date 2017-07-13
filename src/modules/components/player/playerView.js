require('underscore');
var dashjs = require('dashjs');
var template = require('./playerTemplate.html');

module.exports = Backbone.View.extend({

	tagName: 'section',

	id: 'playerContainer',

	initialize: function (options) {
		this.options = options || {};
		_.bindAll(this, 'render');
		// Sets 'videoUrl' prop to make it available for template.
		this.model.set('videoUrl', (this.model.get('isSafari') ? this.options.config.hls_video_url : null));
		this.render();
	},

	render: function () {
		this.$el.html(template.playerTemplate(this.model.toJSON()));
		this.loadPlayer(this.model.get('videoUrl'));
		return this;
	},

	/**
	 * Checks videoUrl value to load DashJS or HLS native player.
	 */
	loadPlayer: function (safariConfig) {
		if (safariConfig === null) {
			this.loadDashPlayer(this.options.config.dash_video_url);
		}
	},

	/**
	 * Load DashJS player.
	 */
	loadDashPlayer: function (video_url) {
 		this.player = dashjs.MediaPlayer().create();
		this.player.initialize(this.$('#videoPlayer')[0], video_url, true);
		this.player.attachTTMLRenderingDiv(this.$('#videoSubs')[0]);
	}
});