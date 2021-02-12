 /**
 *
 * Vue-Video-Player
 * Adapted from Videojs (https://github.com/videojs/video.js)
 *
 */

window.videojs = require('video.js');
require('dashjs/dist/dash.all.min.js');
require('@videojs/http-streaming');
require('videojs-contrib-hls');
require('videojs-contrib-quality-levels');
require('videojs-contrib-dash/src/js/videojs-dash.js');
require('video.js/dist/fairplay-support.js');

var playerComponent = require('./player.vue')
playerComponent = playerComponent.default || playerComponent

var videoPlayer = {
  videojs: videojs,
  videoPlayer: playerComponent,
  install: function(Vue) {
    Vue.component(playerComponent.name, playerComponent)
  }
}

module.exports = videoPlayer
