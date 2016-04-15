/**
  Maycur External Browser Plugin
  https://github.com/easyfisher/maycur-plugin-external-browser

  Copyright (c) Easter Dong 2016
*/

var exec = require('cordova/exec');

var ExternalBrowser = function() {

}

ExternalBrowser.show = function(url) {
    exec(null,
      null,
      "ExternalBrowser",
      "show",
      [url]
    );
};

module.exports = ExternalBrowser;