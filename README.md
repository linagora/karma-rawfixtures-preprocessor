![Archived](https://img.shields.io/badge/Current_Status-archived-blue?style=flat)

karma-rawfixtures-preprocessor
==============================

Reads the content of your fixture files and constructs a global array, `__FIXTURES__`, that contains the RAW content of those files.

Installation
------------

`npm install karma-rawfixtures-preprocessor --save`

Configuration
-------------

```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    files: [
      'test/unit-frontend/fixtures/**' // The location of your fixture files in relation to this, karma.conf.js, file.
    ],

    preprocessors: {
      'test/unit-frontend/fixtures/**': ['raw2js']
    },
  })
}
```

That's all. This plugin doesn't provide any other configurable options.

How does it work?
-----------------

The plugin will read the content of each of your fixture files and push its content, as-is, to a global array called `__FIXTURES__`.

```js
// get the content of a file, var ics will contain the content of the file
var ics = (__FIXTURES__['test/unit-frontend/fixtures/calendar/event.ics']);
```

LICENSE
-------

MIT - Copyright (C) Linagora
