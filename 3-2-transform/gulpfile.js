var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('build:scripts', function() {
  return browserify('./src/main.coffee', { extensions: '.coffee' })
    .transform('coffeeify')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist'));
});
