var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var gulpIf = require('gulp-if');
var uglify = require('gulp-uglify-es').default;
var cssnano = require('gulp-cssnano');
var htmlmin = require('gulp-htmlmin');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var del = require('del');
var runSequence = require('run-sequence');
var wait = require('gulp-wait');
var babel = require('gulp-babel');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    return gulp
        .src('assets/sass/**/*.scss')
        .pipe(wait(700))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('assets/css'))
        .pipe(cssnano({ zindex: false }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('assets/css'))
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: './'
        },
        startPath: 'index.html'
    });
});

gulp.task('minifycss', function () {
    return gulp.src('assets/css/**/*')
        .pipe(gulpIf('*.css', cssnano({ zindex: false })))
        .pipe(gulp.dest('assets/css'))
});


gulp.task('default', function (callback) {
    runSequence(['sass', 'browserSync', 'watch'],
        callback
    )
});

gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('assets/sass/**/*.scss', ['sass', browserSync.reload]);
    gulp.watch('assets/js/*.js', [browserSync.reload]);
    gulp.watch('*.html', browserSync.reload);
});