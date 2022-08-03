const cleanHTML = () => {
  return $.gulp.src($.path.clean.html)
    .pipe($.gp.clean({force: true}))
}

module.exports = cleanHTML;
