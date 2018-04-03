var gulp = require('gulp'),
		 gulpWatch = require('gulp-watch')
		 postcss = require('gulp-postcss')
		 autoprefixer = require('autoprefixer')
		 cssvars = require('postcss-simple-vars')
		 nested = require('postcss-nested');

gulp.task('default', function(){
	console.log("You created a gulp task");
});

gulp.task('html', function(){
	console.log('This may be used to change your html someday');
});

gulp.task('styles', function(){
	return gulp.src('app/assets/styles/styles.css')
		.pipe(postcss([nested, cssvars, autoprefixer]))
		.pipe(gulp.dest('app/temp/styles'));
});

gulp.task('watch', function(){

	gulpWatch('app/index.html',function(){
		gulp.start('html');
	});

	gulpWatch('app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});

});