cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-connectivity-monitor.connectivity",
      "file": "plugins/cordova-connectivity-monitor/www/connectivity.js",
      "pluginId": "cordova-connectivity-monitor",
      "clobbers": [
        "window.connectivity"
      ]
    },
    {
      "id": "cordova-admob.AdMobAds",
      "file": "plugins/cordova-admob/www/admob.js",
      "pluginId": "cordova-admob",
      "clobbers": [
        "window.admob",
        "window.tappx"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-connectivity-monitor": "1.2.2",
    "cordova-play-services-version-adapter": "1.0.2",
    "cordova-admob": "5.1.0"
  };
});