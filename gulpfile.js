var gulp = require('gulp'),
    coffee = require('gulp-coffee');


var coffeeSources = ['components/coffee/confirm.coffee']; //code each individual file or use *.coffee

gulp.task('coffee', function() {
    gulp.src(
        //add all coffeescript files in this array
        coffeeSources
    )
        //removes wrapping in function
        .pipe(coffee({bare: true}))
        .pipe(gulp.dest('components/scripts'));    
});

