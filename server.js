'use strict';

var express = require('express');
var app = express();
var CJSServer = require('substance-cjs');

new CJSServer(app, __dirname, 'testcenter')
  .scripts('./tests/boot-testcenter.js', 'testcenter.js', { ignores: [] } )
  .page('/', './tests/index.html');

app.use(express.static(__dirname));

app.listen(5000);
console.log('Listening on port 5000');