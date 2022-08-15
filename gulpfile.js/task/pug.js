const pug = () => {
    return $.gulp.src($.path.pug.src)
        .pipe($.gp.size({
            title: 'Before',
        }))
        .pipe($.gp.pug({pretty: true}))
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
        .pipe($.gp.if($.app.isDev, $.gulp.dest($.path.pug.destMin)))
        .pipe($.gp.webpHtml())
        .pipe($.webpNoSVG())
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

module.exports = pug;
