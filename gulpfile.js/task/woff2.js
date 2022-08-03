const woff2 = () => {
  return $.gulp.src($.path.fontSort.srcWoff2)
    .pipe($.gulp.dest($.path.fontSort.destWoff2))
}

module.exports = woff2;
