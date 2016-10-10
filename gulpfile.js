var gulp = require('gulp'),
    coffee = require('gulp-coffee'),
    concat = require('gulp-coffee'),
    uglify = require('gulp-uglify');


var coffeeSources = ['components/coffee/confirm.coffee']; //code each individual file or use *.coffee
var jsSources = [
    'components/scripts/confirm.js',
    'components/scripts/depOne.js',
    'components/scripts/depTwo.js'
];

gulp.task('coffee', function() {
    gulp.src(
        //add all coffeescript files in this array
        coffeeSources
    )
        //removes wrapping in function
        .pipe(coffee({bare: true}))
        .pipe(gulp.dest('components/scripts'));    
});

gulp.task('concat', function() {
    gulp.src(jsSources)
        .pipe(concat('script.js'))
        .pipe(gulp.dest('builds/development/js'))
});

gulp.task('uglify', function() {
    console.log('minified')
});