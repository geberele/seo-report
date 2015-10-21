var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var del = require('del');

gulp.task('default', ['browserify', 'concat-css']);

// Compile JS files.
gulp.task('browserify', function() {
  return browserify('./src/js/app.js', { debug: true })
    .transform(babelify.configure({
      // How to use experimental ES7 features:
      // @see http://babeljs.io/docs/usage/experimental/
      stage: 0
    }))
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('seo-report.js'))
    //.pipe(buffer())
    //.pipe(uglify())
    .pipe(gulp.dest('./build/public/js'));
});

// Gulp task to watch JS files.
gulp.task('watch:browserify', ['browserify'], function() {
  return gulp.watch('./src/js/**/*.+(js|jsx)', ['browserify']);
});

// Compile Sass files.
gulp.task('sass', ['clean:css'], function () {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('build/public/css'));
});

// Gulp task to watch Sass files.
gulp.task('watch:sass', function () {
  return gulp.watch('src/sass/**/*.scss', ['sass']);
});

// Concat CSS files.
gulp.task('concat-css', ['sass'], function() {
  return gulp.src(['node_modules/bootstrap/dist/css/bootstrap.min.css', 'build/public/css/main.css'])
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('build/public/css/'));
});

// Clean Css directory.
gulp.task('clean:css', function() {
  return del(['build/public/css/*']);
});
