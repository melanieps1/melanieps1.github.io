var gulp   = require('gulp');
var sass   = require('gulp-sass');
var concat = require('gulp-concat');
var del    = require('del');

// gulp.task('hello', function() {
// 	console.log('Hello there!');
// });

gulp.task('sass', ['delete'], function () {
	return gulp.src('app/scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('app/css'));
});

gulp.task('concatenate', ['sass'], function () {
	return gulp.src('app/css/*.css')
	.pipe(concat('all.css'))
	.pipe(gulp.dest('dist/css/'));
});

gulp.task('delete', function () {
	return del(['app/css/*.css', 'dist/css/*.css'], {read: false})
});

gulp.task('sassify', ['delete', 'sass', 'concatenate']);

gulp.task('watch', function() {
	gulp.watch('app/scss/*.scss', ['sassify']);
});