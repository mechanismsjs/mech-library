var pkg = require('./package.json')
var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var header = require('gulp-header');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var replace = require('gulp-replace');
var rename = require('gulp-rename');
var mocha = require('gulp-mocha');
var mochaPhantom  = require('gulp-mocha-phantomjs')

var browserify = require('browserify');
var transform = require('vinyl-transform');

source = [
   'src/util/header.js',
   'src/MECHANISM01.js',
   'src/MECHANISM02.js',
   'src/util/footer.js'
];

var libName = pkg.name;
var libFileName = pkg.name + '.js';
var libMain = pkg.main;

var banner = function(bundled) {
  return [
    '// ' + libFileName,
    '// version: ' + pkg.version,
    '// author: ' + pkg.author,
    '// license: ' + pkg.license
  ].join('\n') + '\n'
};

gulp.task('default', ['build','mocha','watch-mocha']);

gulp.task('mocha', ['build'], function() {
   
   gulp.src('testsweb/index.html')
     .pipe(mochaPhantom({reporter: 'spec'}));
   
   return gulp.src(['tests/*test.js'], { read: false })
      .pipe(mocha({ reporter: 'spec' }))
      .on('error', gutil.log);
});

gulp.task('watch-mocha', function() {
    return gulp.watch(['src/**', 'tests/**', 'testsweb/**'], ['mocha']);
});

gulp.task('build', function() {
   // Single entry point to browserify
   
   var generate = gulp.src(source)
      .pipe(concat(libFileName))
      .pipe(header(banner()))
      .pipe(replace('{{VERSION}}',pkg.version))
      .pipe(gulp.dest('dist'));
   
   var browserified = transform(function(filename) {
       return browserify()
         .require(libMain, {expose: libName})
         .bundle();
   });

   return gulp.src(libMain)
      .pipe(browserified)
      .pipe(rename(libName + '.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist'))
      .on('error', gutil.log);
});

gulp.task('webtests', function() {
  gulp.src('testsweb/index.html')
    .pipe(mochaPhantom({reporter: 'spec'}))
})

