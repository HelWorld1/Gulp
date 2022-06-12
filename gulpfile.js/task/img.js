const imgMin = () => {
    return $.gulp.src($.path.img.src)
        .pipe($.gp.size({
            title: 'Before',
        }))
        .pipe($.gp.newer($.path.img.destMin))
        .pipe($.gp.webp())
        .pipe($.gulp.dest($.path.img.destMin))
        .pipe($.gulp.src($.path.img.src))
        .pipe($.gp.if($.app.isProd, $.gp.imagemin($.app.imagemin)))
        .pipe($.gp.size({
            title: 'After',
        }))
        .pipe($.gulp.dest($.path.img.destMin))
        .pipe($.gp.livereload())
}

module.exports = imgMin;
