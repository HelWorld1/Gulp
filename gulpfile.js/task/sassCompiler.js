const sassCompiler = () => {
    return $.gulp.src($.path.sass.src, { sourcemaps: $.app.isDev })
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
        .pipe($.gulp.dest($.path.sass.dest, { sourcemaps: $.app.isDev }))
        .pipe($.gp.size({
            title: 'After',
        }))
        .pipe($.gp.rename({
            suffix: '.min',
        }))
        .pipe($.sass($.app.sassmin).on('error', $.sass.logError))
        .pipe($.gulp.dest($.path.sass.destMin, { sourcemaps: $.app.isDev }))
        .pipe($.gp.livereload())
}

module.exports = sassCompiler;
