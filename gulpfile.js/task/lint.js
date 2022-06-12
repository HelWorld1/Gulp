const lint = () => {
    return $.gulp.src($.path.lint.src), $.gulp.src($.path.lintHTML.src)
        .pipe($.gp.if($.app.isProd, $.gp.cached('linting')))
        .pipe($.gp.jshint())
        .pipe($.gp.jshint.reporter('default'))
}

module.exports = lint;
