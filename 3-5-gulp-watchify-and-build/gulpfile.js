var gulp = require('gulp');
var rename = require('gulp-rename');
var gwatchify = require('gulp-watchify');
var sass = require('gulp-sass');

var watching = false;
gulp.task('enable-watch', function() { watching = true; });

gulp.task('build:scripts', gwatchify(function(watchify) {
  return gulp.src('./src/main.coffee')
    .pipe(watchify({
      watch: watching,
      extensions: '.coffee',
      setup: function(bundle) {
        bundle.transform('coffeeify');
      }
    }))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./dist'));
}));

gulp.task('build:styles', function () {
  return gulp.src('./src/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['build:scripts', 'build:styles']);

gulp.task('watch', ['enable-watch', 'build:scripts'], function() {
  gulp.watch('./src/*.scss', ['build:styles']);
});
