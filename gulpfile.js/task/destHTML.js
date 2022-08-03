 const html = () => {
  return $.gulp.src('../src/**/*.pug')
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
    .pipe($.gulp.dest($.path.pug.dest))
}

module.exports = html;
