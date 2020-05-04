var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var rename = require("gulp-rename");


gulp.task("sass", (done) => {
    gulp.src(["sample1.scss","sample2.scss"],{cwd : "./src"})
        .pipe(concat("bundle.css"))
        .pipe(sass({ outputStyle: "expanded"}))
        .pipe(rename({ suffix : ".min"}))
        .pipe(gulp.dest("./dist"));
    done();
});
gulp.task('default', gulp.task('sass'));