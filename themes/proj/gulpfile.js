const gulp = require( 'gulp' );
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./assets/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe( autoprefixer() )
    .pipe(gulp.dest('./'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./assets/*.scss', gulp.series('sass'));
});