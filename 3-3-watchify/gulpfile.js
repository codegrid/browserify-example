var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var _ = require('underscore');

var opts = _.extend({ extensions: '.coffee' }, watchify.args);
var bundler = watchify(browserify('./src/main.coffee', opts));
bundler.transform('coffeeify');

gulp.task('scripts', bundle);
bundler.on('update', bundle);
bundler.on('log', gutil.log);

function bundle() {
  return bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist'));
}
