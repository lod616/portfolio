const gulp = require('gulp');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const argv = require('yargs').argv;
const gulpif = require('gulp-if');

// Преобразуем Pug в HTML

module.exports = function pug2html() {
  return gulp.src('dev/pug/*.pug')
    .pipe(plumber())
    .pipe(pug())
    .pipe(plumber.stop())
    .pipe(gulp.dest('dist'))
};
