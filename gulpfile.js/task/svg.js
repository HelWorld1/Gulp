const svg = () => {
    return $.gulp.src($.path.svg.src)
        .pipe($.gp.svgmin($.app.svgmin))
        .pipe($.gp.cheerio($.app.cheerio))
        .pipe($.gp.replace('&gt;', '>'))
        .pipe($.svgSprite($.app.config))
        .pipe($.gulp.dest($.path.svg.destMin))
        .pipe($.gp.livereload())
}

module.exports = svg;
