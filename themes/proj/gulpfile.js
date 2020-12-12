const gulp = require( 'gulp' );
const sourcemaps = require( 'gulp-sourcemaps' );
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const autoprefixer = require('gulp-autoprefixer');
 
sass.compiler = require('node-sass');

function sassy() {
  return gulp.src('./assets/*.scss')
    .pipe( sourcemaps.init() )
    .pipe(sass().on('error', sass.logError))
    .pipe( autoprefixer() )
    .pipe(csso())
    .pipe( sourcemaps.write( './' ) )
    .pipe(gulp.dest('./'));
};
 
gulp.task( "sass", sassy );

gulp.task( 'watch', function () {
  gulp.watch('./assets/*.scss', gulp.series( 'sass' ));
});