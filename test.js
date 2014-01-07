'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var js2coffee = require('./index');

it('should compile js to coffee', function (cb) {
        var stream = js2coffee("function (){}");

        stream.on('data', function (file) {
                assert.equal(file.relative, 'fixture.coffee');
                assert.equal(file.contents.toString(), 'hello = ->');
                cb();
        });

        stream.write(new gutil.File({
                path: 'fixture.js',
                contents: new Buffer("function hello(){}")
        }));
});