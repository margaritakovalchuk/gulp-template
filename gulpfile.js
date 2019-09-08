var gulp = require('gulp'),
    gulpSass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

function sass() {
    return gulp
        .src('./src/sass/**/*.scss')
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
}

function sync() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('src/sass/**/*', gulp.series(sass));
    gulp.watch("*.html").on('change', browserSync.reload);
}

exports.sass = gulp.series(sass);
exports.build = gulp.series(sync);
