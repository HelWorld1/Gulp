const eot = () => {
  return $.gulp.src($.path.fontSort.srcEot)
    .pipe($.gulp.dest($.path.fontSort.destEot))
}

module.exports = eot;
