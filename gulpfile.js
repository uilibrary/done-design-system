var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();
var gulpIf = require("gulp-if");
var uglify = require("gulp-uglify-es").default;
var cssnano = require("gulp-cssnano");
var htmlmin = require("gulp-htmlmin");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var del = require("del");
var runSequence = require("run-sequence");
var wait = require("gulp-wait");
var babel = require("gulp-babel");
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require("gulp-sourcemaps");
const imageminSvgo = require('imagemin-svgo');

gulp.task("sass", function(cb) {
  return (
    gulp
      .src("assets/styles/sass/**/*.scss")
      // .pipe($.sass({
      //     includePaths: ['node_modules/', '~']
      // })
      .pipe(wait(700))
      // .pipe(sourcemaps.init())
      .pipe(sass().on("error", sass.logError))
      .pipe(autoprefixer())
      // .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest("assets/styles/css"))
      .pipe(cssnano({ zindex: false }))
      .pipe(rename({ suffix: ".min" }))
      .pipe(gulp.dest("assets/styles/css"))
      .pipe(gulp.dest("dist/assets/styles/css"))
  );
});


function browserSyncInit(done) {
  browserSync.init({
    server: {
      // baseDir: '/'
    },
    startPath: "index.html"
  });
  done();
}
function browserSyncReload(done) {
  browserSync.reload();
  done();
}

gulp.task("compilejs", function() {
  return gulp
    .src("assets/js/main/*.js")
    .pipe(wait(400))
    .pipe(babel({ presets: ["es2015", "stage-3"] }))
    .pipe(gulp.dest("assets/js/es5"))
    .pipe(gulpIf("*.js", uglify()))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("assets/js/es5"))
    .pipe(gulp.dest("dist/assets/js/es5"));
});

gulp.task("minifyjs", function() {
  return gulp
    .src("assets/js/es5/**/*")
    .pipe(gulpIf("*.js", uglify()))
    .pipe(gulp.dest("dist/assets/js"));
});

gulp.task("minifycss", function() {
  return gulp
    .src("assets/styles/css/**/*")
    .pipe(gulpIf("*.css", cssnano({ zindex: false })))
    .pipe(gulp.dest("dist/assets/styles/css"));
});

gulp.task("vendorcss", function() {
  return gulp
    .src("assets/styles/vendor/**/*.css")
    .pipe(gulp.dest("dist/assets/styles/vendor"));
});

gulp.task("minifyhtml", function() {
  return gulp
    .src("*.html")
    .pipe(htmlmin())
    .pipe(gulp.dest("dist"));
});

gulp.task("images", function() {
  return gulp
    .src("assets/images/**/*.+(png|jpg|gif|svg)")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/assets/images"));
});

gulp.task("font", function() {
  return gulp.src("assets/fonts/**/*").pipe(gulp.dest("dist/assets/fonts"));
});

gulp.task("clean:dist", function(done) {
  del.sync("dist");
  done();
});


function watchFiles() {
  gulp.watch("assets/styles/sass/**/*.scss", gulp.series("sass", browserSyncReload));
  gulp.watch("assets/js/main/*.js", gulp.series("compilejs", browserSyncReload));
  gulp.watch("*.html", gulp.series(browserSyncReload));
}


gulp.task("default", gulp.series("sass", "compilejs", browserSyncInit, watchFiles));
gulp.task("build", gulp.series(
  "clean:dist",
  "sass",
  "compilejs",
  "minifyjs",
  "minifycss",
  "minifyhtml",
  "images",
  "font"
));
