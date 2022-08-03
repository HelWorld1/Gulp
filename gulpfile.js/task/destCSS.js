const css = () => {
  return $.gulp.src('../src/assets/sass/**/*.sass')
    .pipe($.gp.size({
        title: 'Before',
    }))
    .pipe($.gp.sassGlob())
    .pipe($.sass({
        pretty: true,
    }))
    .pipe($.gp.webpCss())
    .pipe($.gp.shorthand())
    .pipe($.gp.autoprefixer())
    .pipe($.CssMediaQueries())
    .pipe($.sass({
        pretty: true,
    }))
    .pipe($.gulp.dest($.path.sass.dest))
}

module.exports = css;
