// Author : Chathu Vishwajith
// Licence : MIT License
// http://opensource.org/licenses/MIT

const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const mocha = require('gulp-mocha');

gulp.task('serve', () => {
  nodemon({
    script: 'index.js',
    ext: 'js',
    env: {
      NODE_ENV: 'development'
    },
    ignore: ['./node_modules/**']
  });
});

gulp.task('mocha', () => {
  return gulp
    .src(['modules/**/**.spec.js'], { read: false })
    .pipe(mocha({ reporter: 'spec' }));
  // .on('error', gutil.log);
});

gulp.task('test', function() {
  gulp.watch(['modules/**/**.spec.js'], ['mocha']);
});
