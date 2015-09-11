var gulp = require('gulp'),
    sass = require('gulp-sass'),
    config = require('../config').sass;

gulp.task('sass', function() {
    return gulp.src(config.src)
        .pipe(sass(config.settings).on('error', sass.logError))
        .pipe(gulp.dest(config.dest));
});