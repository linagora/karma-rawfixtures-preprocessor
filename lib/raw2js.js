'use strict';

var util = require('util');

var TEMPLATE = '' +
  '__FIXTURES__ = window.__FIXTURES__ || {};\n' +
  'window.__FIXTURES__[\'%s\'] = \'%s\'';

var escapeContent = function(content) {
  return content.replace(/'/g, '\\\'').replace(/\r?\n/g, '\\n\' +\n    \'');
};

var createRaw2JsPreprocessor = function(logger, basePath) {
  var log = logger.create('preprocessor.raw2js');

  return function(content, file, done) {
    log.debug('Processing "%s".', file.originalPath);
    var filePath = file.originalPath.replace(basePath + '/', '');

    file.path = file.path + '.js';
    done(util.format(TEMPLATE, filePath, escapeContent(content)));
  };
};

createRaw2JsPreprocessor.$inject = ['logger', 'config.basePath'];

module.exports = createRaw2JsPreprocessor;
