const pugCompiler = () => {
    return $.gulp.src($.path.pug.src)
        .pipe($.gp.pug({
            pretty: true,
        }))
        .pipe($.gp.size({
            title: 'Before',
        }))
        .pipe($.gp.typograf({
          locale: ['ru', 'en-US'],
          htmlEntity: { type: 'name' },
          disableRule: ['ru/optalign/*'],
          enableRule: ['ru/money/ruble'],
          safeTags: [
            ['<\\?php', '\\?>'],
            ['<no-typography>', '</no-typography>']
          ],
          // Own rules
          rules: [
            {
              name: 'common/other/typographicalEmoticon',
              handler: function(text, settings) {
                  return text.replace(/:-\)/, ':—)');
              }
            },
            {
              name: 'common/other/trimLeft',
              handler: function(text, settings) {
                  return text.trimLeft();
              }
            }
          ]
        }))
        .pipe($.gp.webpHtml())
        .pipe($.gp.if($.app.isDev, $.gulp.dest($.path.pug.destMin)))
        .pipe($.gp.if($.app.isProd, $.gulp.dest($.path.pug.dest)))
        .pipe($.gp.rename({
            suffix: '.min',
        }))
        .pipe($.gp.htmlmin($.app.htmlmin))
        .pipe($.gp.size({
            title: 'After',
        }))
        .pipe($.gulp.dest($.path.pug.destMin))
        .pipe($.gp.livereload())
}

module.exports = pugCompiler;
