var gulp = require('gulp'),
    jade = require('gulp-jade');

gulp.task('jade', function() {
    return gulp.src('**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./dest/'));
});

gulp.task('watch', function() {
    gulp.watch('**/*.jade', ['jade']);
});