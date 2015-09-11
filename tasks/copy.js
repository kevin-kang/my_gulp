var gulp = require('gulp'),
    copy = require('gulp-copy'),
    config = require('../config').copy;

gulp.task('copy', function() {
    if (!config.dest) {
        return false;
    }
    return gulp.src(config.src)
        .pipe(copy(config.dest, config.settings));
});