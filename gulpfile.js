var gulp = require('gulp'),
    gulpSass = require('gulp-sass');

function sass () {
    return gulp
        .src('./src/sass/**/*.scss')
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(gulp.dest('./dist/css'));
}

function watch () {
    gulp.watch('./src/sass/**/*', gulp.series(sass));
}

exports.sass = gulp.series(sass);
exports.build = gulp.series(watch);
