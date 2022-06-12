const pathURL = '../'

module.exports = {
    root: pathURL,

    pug: {
        src: pathURL + 'src/**/*.pug',
        cleanhtml: pathURL + 'public/**/*.html' ,
        watch: pathURL + 'src/**/*.pug',
        dest: pathURL + 'dest/',
        destMin: pathURL + 'public/',
    },

    sass: {
        src: pathURL + 'src/assets/sass/**/*.sass',
        watch: pathURL + 'src/assets/sass/**/*.sass',
        destMin: pathURL + 'public/assets/css',
        dest: pathURL + 'dest/assets/css',
    },

    lint: {
        src: pathURL + 'public/assets/{css,js/src,img}/**/*.{css,js,jpg,png,svg}',
        watch: pathURL + 'public/assets/{css,js/src,img}/**/*.{css,js,jpg,png,svg}',
    },

    lintHTML: {
        src: pathURL + 'src/*.html',
        watch: pathURL + 'src/**/*.html',
    },

    js: {
        src: pathURL + 'src/assets/js/**/*.js',
        watch: pathURL + 'src/assets/js/**/*.js',
        destMin: pathURL + 'public/assets/js',
        dest: pathURL + 'dest/assets/js',
    },

    img: {
        src: pathURL + 'src/assets/img/*.{png,jpg}',
        watch: pathURL + 'src/assets/img/**/*.{png,jpg}',
        destMin: pathURL + 'public/assets/img',
    },

    svg: {
        src: pathURL + 'src/assets/img/*.svg',
        watch: pathURL + 'src/assets/img/*.svg',
        destMin: pathURL + 'public/assets/img/',
    },

    font: {
        src: pathURL + 'src/assets/fonts/*.{eot,ttf,otf,otc,ttc,woff}',
        watch: pathURL + 'src/assets/fonts/**/*.{eot,ttf,otf,otc,ttc,woff}',
        destMin: pathURL + 'public/assets/fonts/',
    },
}
