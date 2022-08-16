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
    webpHTML: require('gulp-webp-html'),
    webpNoSVG: require('gulp-webp-html-nosvg'),
    webpCSSFixed: require('gulp-webp-css-fixed'),
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
    $.gulp.watch($.path.sass.watch, tasks.sass).on('all', browserSync.reload);
    $.gulp.watch($.path.pug.watch, tasks.pug).on('all', browserSync.reload);
    $.gulp.watch($.path.js.watch, tasks.js).on('all', browserSync.reload);
    $.gulp.watch($.path.img.watch, tasks.img).on('all', browserSync.reload);
    $.gulp.watch($.path.font.watch, tasks.font).on('all', browserSync.reload);
    $.gulp.watch($.path.svg.watch, tasks.svg).on('all', browserSync.reload);
    $.livereload.listen()
}

const font = $.gulp.series(
  tasks.font,
  tasks.ttf,
  tasks.woff,
  tasks.woff2,
  tasks.eot,
  tasks.cleanFONT,
)

const basic = $.gulp.series(
  $.gulp.parallel($.gulp.parallel(tasks.sass,tasks.pug,tasks.js,tasks.svg, tasks.img)),
  font,
)

const dev = $.gulp.series(
  $.gulp.parallel(basic,server,watcher)
)

const build = $.gulp.series(
  tasks.cleanHTML,
  basic,
  tasks.destHTML,
  tasks.destCSS,
  tasks.lint,
)

exports.sass = tasks.sass;
exports.pug = tasks.pug;
exports.lint = tasks.lint;
exports.jsMin = tasks.js;
exports.imgMin = tasks.img;
exports.font = tasks.font;
exports.svg = tasks.svg;
exports.cleanHTML = tasks.cleanHTML;
exports.html = tasks.destHTML;
exports.css = tasks.destCSS;
exports.ttf = tasks.ttf;
exports.woff = tasks.woff;
exports.woff2 = tasks.woff2;
exports.eot = tasks.eot;
exports.clean = tasks.cleanFONT;
exports.cleanIMG = tasks.cleanIMG;

exports.default = $.app.isProd
    ? build
    : dev;
