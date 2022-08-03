const ttf = () => {
  return $.gulp.src($.path.fontSort.srcTTF)
    .pipe($.gulp.dest($.path.fontSort.destTTF))
}

module.exports = ttf;
