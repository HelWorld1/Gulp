const pathURL = '../'

module.exports = {
    root: pathURL,

    pug: {
      src: pathURL + 'src/**/index.pug',
      watch: pathURL + 'src/**/*.pug',
      dest: pathURL + 'dest/',
      destMin: pathURL + 'public/',
    },

    sass: {
      src: pathURL + 'src/assets/sass/**/style.sass',
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
      src: pathURL + 'src/assets/img/**/*.{png,jpg}',
      watch: pathURL + 'src/assets/img/**/*.{png,jpg}',
      destMin: pathURL + 'public/assets/img',
      dest: pathURL + 'dest/assets/img',
    },

    svg: {
      src: pathURL + 'src/assets/img/*.svg',
      watch: pathURL + 'src/assets/img/*.svg',
      destMin: pathURL + 'public/assets/img/',
    },

    font: {
      src: pathURL + 'src/assets/fonts/*.{eot,ttf,woff}',
      watch: pathURL + 'src/assets/fonts/**/*.{eot,ttf,woff}',
      dest: pathURL + 'public/assets/fonts/',
    },

    fontSort: {
      srcTTF: pathURL + 'public/assets/fonts/*.ttf',
      watchTTF: pathURL + 'src/assets/fonts/**/*.ttf',
      destTTF: pathURL + 'public/assets/fonts/ttf',

      srcEot: pathURL + 'public/assets/fonts/*.eot',
      watchEot: pathURL + 'src/assets/fonts/**/*.eot',
      destEot: pathURL + 'public/assets/fonts/eot',

      srcWoff: pathURL + 'public/assets/fonts/*.woff',
      watchWoff: pathURL + 'src/assets/fonts/**/*.woff',
      destWoff: pathURL + 'public/assets/fonts/woff',

      srcWoff2: pathURL + 'public/assets/fonts/*.woff2',
      watchWoff2: pathURL + 'src/assets/fonts/**/*.woff2',
      destWoff2: pathURL + 'public/assets/fonts/woff2',
    },
    clean: {
      html: pathURL + 'public/**/*.html',
      font: pathURL + 'public/assets/fonts/*.{ttf,woff,woff2,eot}',
      img: pathURL + 'public/assets/img/**/*.{png,jpg}',
    }
}
