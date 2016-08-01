
var gulp          = require('gulp'),
    stylus        = require('gulp-stylus'),
    browserSync   = require('browser-sync').create(),
    uglify        = require('gulp-uglify'),
    pump          = require('pump'),
    cssnano       = require('gulp-cssnano'),
    autoprefixer  = require('autoprefixer'),
    postcss       = require('gulp-postcss'),
    lost          = require('lost'),
    mqpacker      = require('css-mqpacker'),
    sourcemaps    = require('gulp-sourcemaps');

// Browser Sync
gulp.task('browserSync', function() {
  browserSync.init({
    server: 'src'
  })
});

// Stylus
gulp.task('css', function () {
  return gulp.src('build/css/*.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({
      'include css': true
    }))
    .pipe(postcss([
      lost(),
      mqpacker(),
      autoprefixer({
        browsers: [
         'last 2 versions',
         'Android >= 4',
         'IE >= 9'
        ]
      })
    ]))
    .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/css'));
});

// Js
gulp.task('js', function (cb) {
  pump([
      gulp.src('build/js/**/*.js'),
      uglify(),
      gulp.dest('src/js')
    ],
    cb
  );
});

// Tasks
gulp.task('default', ['browserSync', 'css', 'js'], function(){

  gulp.watch('build/css/**/*.styl', ['css', browserSync.reload]);
  gulp.watch('build/js/**/*.js', ['js', browserSync.reload]);
  gulp.watch('src/*.html', browserSync.reload);
});
