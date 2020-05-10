const config = require('../config.js');
const gulp = require('gulp');
const del = require('del');

gulp.task('copy-javascripts.clean', ()=>{
    return del('./javascripts/**/*', {cwd: config.path.output});
});

gulp.task('copy-javascripts.copy', ()=>{
    return gulp.src('./javascripts/**/*', {cwd: config.path.input})
        .pipe(gulp.dest('./javascripts', {cwd: config.path.output}));
});

gulp.task('copy-javascripts', gulp.series( 'copy-javascripts.clean','copy-javascripts.copy'), ()=>{
});