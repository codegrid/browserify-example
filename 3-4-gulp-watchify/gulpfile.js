var gulp = require('gulp');
var rename = require('gulp-rename');
var gwatchify = require('gulp-watchify');

gulp.task('scripts', gwatchify(function(watchify) {
  return gulp.src('./src/main.coffee')
    .pipe(watchify({
      watch: true,
      extensions: '.coffee',
      setup: function(bundle) {
        bundle.transform('coffeeify');
      }
    }))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./dist'));
}));
