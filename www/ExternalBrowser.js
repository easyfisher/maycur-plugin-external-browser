/**
  Maycur Picker Plugin
  https://github.com/easyfisher/maycur-plugin-picker

  Copyright (c) Easter Dong 2016
*/

var exec = require('cordova/exec');

var ExternalBrowser = function() {

}

ExternalBrowser.show = function(url) {
    exec(callback,
      null,
      "Picker",
      "show",
      [url]
    );
};

module.exports = ExternalBrowser;