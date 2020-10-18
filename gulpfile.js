'use strict'

const gulp 		= require('gulp');
const sass 		= require('gulp-sass');
const sourcemaps	= require('gulp-sourcemaps');
const pug 		= require('gulp-pug');


// gulp.task ('hello', function(){
// 	console.log('hello kidi');
// })

// Render SCSS by Gulp-Sass
gulp.task('render_css', function(){
	return gulp.src('./src/sass/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass({
		outputStyle: 'expanded'
		}).on('error', sass.logError))// Coverts Sass to CSS with gulp-sass
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('./dist/css'))
})

// Render HTML by Gulp-Pug
gulp.task('render_html', function buildHTML() {
	return gulp.src('src/pug/*.pug')
	.pipe(pug({
		doctype: 'html',
		pretty: true
	}))
	.pipe(gulp.dest('./dist/'))
});

gulp.task('watch', () => {
	gulp.watch('src/sass/**/*.scss',gulp.series(['render_css']));
	gulp.watch('src/pug/**/*.pug',gulp.series(['render_html']));
});


// Watch task
gulp.task('default', gulp.series('render_css','render_html','watch'));



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
