var path = require('path');
// 引入 gulp
var gulp = require('gulp'); 

// 引入组件
// var jshint = require('gulp-jshint');
var less = require('gulp-less');
var minifycss = require('gulp-minify-css');
// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


// 编译Less
gulp.task('less', function() {
    gulp.src('less/mkoa.less')
        .pipe(less({
      paths: ['less']
    }))
        .pipe(gulp.dest('./css'))//输出
        .pipe(minifycss())
        .pipe(rename('mkoa.min.css'))//压缩
        .pipe(gulp.dest('./css'));
        gulp.src('less/mkoaLite.less')
        .pipe(less({
      paths: ['less']
    }))
        .pipe(gulp.dest('./css'))//输出
        .pipe(minifycss())
        .pipe(rename('mkoaLite.min.css'))//压缩
        .pipe(gulp.dest('./css'));
});

// 默认任务
gulp.task('default', ['less']);