var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('default', ['browserify']);

gulp.task('browserify', function() {
  return browserify('./src/app.js')
    .transform(babelify)
    .bundle()
    .pipe(source('seo-report.js'))
    //.pipe(buffer())
    //.pipe(uglify())
    .pipe(gulp.dest('./build/'));
});

gulp.task('watch:browserify', ['browserify'], function() {
  gulp.watch('./src/**/*.+(js|jsx)', ['browserify']);
});
