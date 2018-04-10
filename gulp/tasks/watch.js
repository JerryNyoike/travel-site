var gulp = require('gulp'),
	 	gulpWatch = require('gulp-watch'),
	 	browserSync = require('browser-sync').create();

//this task waits for the file to be saved and executes the functions
gulp.task('watch', function(){

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	gulpWatch('app/index.html',function(){
		browserSync.reload();
	});

	gulpWatch('app/assets/styles/**/*.css', function(){
		gulp.start('cssInject');
	});

});

gulp.task('cssInject', ['styles'],function(){
	return gulp.src('app/temp/styles/styles.css').pipe(browserSync.stream());
});