const jsMin = () => {
    return $.gulp.src($.path.js.src, { sourcemaps: $.app.isDev })
        .pipe($.gp.size({
            title: 'Before',
        }))
        .pipe($.gulp.dest($.path.js.dest))
        .pipe($.gp.uglify())
        .pipe($.gp.rename({
            suffix: '.min',
        }))
        .pipe($.gp.size({
            title: 'After',
        }))
        .pipe($.gulp.dest($.path.js.destMin, { sourcemaps: $.app.isDev }))
        .pipe($.gp.livereload())
}

module.exports = jsMin;
