const config = require('../config.js');
const gulp = require('gulp');
const del = require('del');
const uglify = require('gulp-uglify');

gulp.task('minify-javascripts.clean', () => {
    return del('./javascripts/**/*', {cwd: config.path.output});
});

gulp.task('minify-javascripts.minify', ()=>{
    return gulp.src('./javascripts/**/*', {cwd: config.path.input})
        .pipe(uglify(config.uglify))
        .pipe(gulp.dest('./javascripts', {cwd: config.path.output}));
});
gulp.task('minify-javascripts', gulp.series(
    'minify-javascripts.clean',
    'minify-javascripts.minify'), ()=>{
});