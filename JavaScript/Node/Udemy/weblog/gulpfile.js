var gulp = require('gulp');
const config = require('./gulp/config');
const load = require('require-dir');
var development, production;

load('./gulp/tasks', { recurse: true } );

development = [
    'copy-third_party',
    'copy-images',
    'copy-javascripts',
    'compile-sass',
];

production = [
    'copy-third_party',
    'copy-images',
    'minify-javascripts',
    'compile-sass',
];

gulp.task('default', gulp.series(config.env.IS_DEVELOPMENT ? development : production));