const woff = () => {
  return $.gulp.src($.path.fontSort.srcWoff)
    .pipe($.gulp.dest($.path.fontSort.destWoff))
}

module.exports = woff;
