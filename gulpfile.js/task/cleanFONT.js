const cleanFONT = () => {
  return $.gulp.src($.path.clean.font)
    .pipe($.gp.clean({force: true}))
}

module.exports = cleanFONT;
