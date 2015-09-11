'use strict';
let gutil = require('gulp-util'),
    through = require('through2'),
    tinify = require('tinify'),
    fs = require("fs"),
    PluginError = gutil.PluginError;

const PLUGIN_NAME = 'gulp-tinify';

function tinifyStream(options){
    let stream = through();

    stream.write(options);
}

module.exports = function(options){
    if(!options){
        throw new PluginError(PLUGIN_NAME, '请配置正确！');
    }

};