const font = () => {
    return $.gulp.src($.path.font.src)
        .pipe($.gp.newer($.path.font.destMin))
        .pipe($.gp.fonter($.app.fonter))
        .pipe($.gulp.dest($.path.font.destMin))
        .pipe($.gp.ttf2woff2())
        .pipe($.gulp.dest($.path.font.destMin))
}

module.exports = font;
