var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('server', function() { //开启静态服务器 默认端口为：8080
    connect.server({
        port: 8080,
        livereload: true
    });
});