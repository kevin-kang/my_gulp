var gulp = require('gulp'),
    sass = require('gulp-uglify'),
    config = require('../config').js;

gulp.task('uglify', function() {
    return gulp.src(config.src)
        .pipe(uglify(config.settings).on('error', function(e) {
            console.log(e);
        }))
        .pipe(gulp.dest(config.dest));
});