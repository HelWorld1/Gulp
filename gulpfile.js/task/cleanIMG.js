const cleanIMG = () => {
  return $.gulp.src($.path.clean.img)
    .pipe($.gp.clean({force: true}))
}

module.exports = cleanIMG;
