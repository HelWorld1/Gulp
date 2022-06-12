'use strict';

global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    livereload: require('gulp-livereload'),
    path: require('./config/path.js'),
    app: require('./config/app.js'),
    sass: require('gulp-sass')(require('sass')),
    CssMediaQueries: require('gulp-group-css-media-queries'),
    svgSprite: require('gulp-svg-sprite'),
}
const requireDir = require('require-dir');
const tasks = requireDir('./task', $.app.recurse)
const browserSync = require('browser-sync')

const server = () => {
  browserSync.init({
    server: {
      baseDir: '../public/'
    }
  })
}

const watcher = () => {
    exports.watch
    $.gulp.watch($.path.sass.watch, tasks.sassCompiler).on('all', browserSync.reload);
    $.gulp.watch($.path.pug.watch, tasks.pugCompiler).on('all', browserSync.reload);
    $.gulp.watch($.path.js.watch, tasks.js).on('all', browserSync.reload);
    $.gulp.watch($.path.img.watch, tasks.img).on('all', browserSync.reload);
    $.gulp.watch($.path.font.watch, tasks.font).on('all', browserSync.reload);
    $.gulp.watch($.path.svg.watch, tasks.svg).on('all', browserSync.reload);
    $.livereload.listen()
}

const basic = $.gulp.series(
  $.gulp.parallel($.gulp.parallel(tasks.sassCompiler,tasks.pugCompiler,tasks.js,tasks.font,tasks.svg, tasks.img))
)

const dev = $.gulp.series(
  basic,
  server,
  watcher,
)

const build = $.gulp.series(
  tasks.cleanHTML,
  basic,
  tasks.lint,
)

exports.sassCompiler = tasks.sassCompiler;
exports.pugCompiler = tasks.pugCompiler;
exports.lint = tasks.lint;
exports.jsMin = tasks.js;
exports.imgMin = tasks.img;
exports.font = tasks.font;
exports.svg = tasks.svg;
exports.cleanHTML = tasks.cleanHTML;

exports.default = $.app.isProd
    ? build
    : dev;
