var gulp = require('gulp'),
    connect = require('gulp-connect'),
    config = require('../config');

gulp.task('watch', function() { //监听文件变化且自动刷新文件
    var dir = ['*.html', '**/*.{js,scss,css}', '!node_modules/**/*.js'];

    gulp.watch(dir, ['scss'], function() {
        gulp.src(['*.html'])
            .pipe(connect.reload());
    });
});