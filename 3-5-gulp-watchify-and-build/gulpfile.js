var gulp = require('gulp');
var rename = require('gulp-rename');
var gwatchify = require('gulp-watchify');
var sass = require('gulp-sass');

var watching = false;
gulp.task('enable-watch', function() { watching = true; });

gulp.task('scripts', gwatchify(function(watchify) {
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

gulp.task('styles', function () {
  return gulp.src('./src/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['scripts', 'styles']);

gulp.task('watch', ['enable-watch', 'scripts'], function() {
  gulp.watch('./src/*.scss', ['styles']);
});
