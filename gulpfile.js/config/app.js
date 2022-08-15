const isProd = process.argv.includes('--production');
const isDev = !isProd;

module.exports = {
    isProd: isProd,
    isDev: isDev,

    htmlmin: {
        collapseWhitespace: true,
        removeComments: true,
        removeAttributeQuotes: true,
        removeEmptyAttributes: true,
    },

    sassmin: {
        outputStyle: 'compressed'
    },

    imagemin: {
    	verbose: isProd
    },

    fonter: {
        formats: ['eot', 'ttf', 'woff']
    },

    recurse: {
        recurse: true
    },

    config: {
        mode: {
            stack: {
                sprite: '../sprite.svg',
            }
        }
    },

    svgmin: {
        js2svg: {
            pretty: true,
        },
    },

    cheerio: {
        run: function ($) {
        	$('[fill]').removeAttr('fill');
        	$('[stroke]').removeAttr('stroke');
        	$('[style]').removeAttr('style');
        },
        parserOptions: {xmlMode: true}
    },
}
