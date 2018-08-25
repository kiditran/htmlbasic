'use strict'

var gulp 		= require('gulp'),
	sass 		= require('gulp-sass'),
	sourcemaps	= require('gulp-sourcemaps'),
	pug 		= require('gulp-pug');


// gulp.task ('hello', function(){
// 	console.log('hello kidi');
// })

// Render SCSS by Gulp-Sass
gulp.task('render_css', function(){
	return gulp.src('./css/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			style: 'expanded',
			includePaths: ['./css/sass'],
			errLogToConsle: true
		}).on('error', sass.logError))// Coverts Sass to CSS with gulp-sass
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./css'))
})

// Render HTML by Gulp-Pug
gulp.task('render_html', function buildHTML() {
	return gulp.src('pug/*.pug')
	.pipe(pug({
		doctype: 'html',
		pretty: true
	}))
	.pipe(gulp.dest('./'))
});


gulp.task('default', function(){
	gulp.watch('css/sass/**/*.scss',['render_css']);
	gulp.watch(['pug/**/*.pug','includes/**/*pug'],['render_html']);
});

/*
https://github.com/dlmanning/gulp-sass/wiki/Update-to-the-latest-Gulp-Sass
>>> npm -v
npm 3.10.10

>>> npm view gulp show version
gulp 3.8.1

>>> npm view gulp-sass show version
gulp-sass 4.0.1

>>> npm view gulp-sourcemaps show version
gulp-sourcemaps 2.6.4

>>> npm view node-sass show version
node-sass 4.9.2
*/
