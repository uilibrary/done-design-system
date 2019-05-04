var gulp = require('./node_modules/gulp');
var sass = require('./node_modules/gulp-sass');
var browserSync = require('./node_modules/browser-sync').create();
var gulpIf = require('./node_modules/gulp-if');
var uglify = require('./node_modules/gulp-uglify-es').default;
var cssnano = require('./node_modules/gulp-cssnano');
var htmlmin = require('./node_modules/gulp-htmlmin');
var rename = require('./node_modules/gulp-rename');
var imagemin = require('./node_modules/gulp-imagemin');
var del = require('./node_modules/del');
var runSequence = require('./node_modules/run-sequence');
var wait = require('./node_modules/gulp-wait');
var babel = require('./node_modules/gulp-babel');
var autoprefixer = require('./node_modules/gulp-autoprefixer');
var sourcemaps = require('./node_modules/gulp-sourcemaps');

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