var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if'),
    cssnano = require('gulp-cssnano'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    del = require('del'),
    runSequence = require('run-sequence'),
    wiredep = require('wiredep').stream;
    // jade = require('gulp-jade');

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
      .pipe(sass())
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({
        stream: true
      }));
  });

  // run this task by typing in gulp jade in CLI

gulp.watch('app/scss/**/*.scss', ['sass']);
gulp.task('watch', ['browserSync','sass'], function (){
    gulp.watch('app/scss/**/*.scss', ['sass'])
    gulp.watch('app/*.html', browserSync.reload); 
    gulp.watch('app/js/**/*.js', browserSync.reload) 
  })

gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'app',
        directory: true

      },
    });
  });
  gulp.task('useref', function(){
    return gulp.src('app/*.html')
      .pipe(useref())
      .pipe(gulpIf('*.js', uglify()))
      // Minifies only if it's a CSS file
      .pipe(gulpIf('*.css', cssnano()))
      .pipe(gulp.dest('dist'));
  });

  gulp.task('images', function(){
    return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
        interlaced: true
      })))
    .pipe(gulp.dest('dist/images'));
  });
  gulp.task('fonts', function() {
    return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
  });

  gulp.task('cache:clear', function (callback) {
    return cache.clearAll(callback);
    });

    gulp.task('build', function (callback) {
      runSequence('clean:dist',
        ['sass', 'useref', 'images','fonts'],
        callback);
    });
    gulp.task('default', function (callback) {
      runSequence(['sass','browserSync', 'watch'],
        callback
      )
    });