const  gulp = require('gulp');
var minifyCSS = require('gulp-csso');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');

gulp.task('minify', function() {
  return gulp.src('./index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function(){
  return gulp.src('assets/css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/css'))
});

gulp.task('image', () =>
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);


gulp.task('default', [ 'minify', 'css' ]);
