const cleanHTML = () => {
  return $.gulp.src($.path.pug.cleanhtml)
    .pipe($.gp.clean({force: true}))
}

module.exports = cleanHTML;
