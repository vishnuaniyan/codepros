module.exports = {
  dist: {
    options: {
      // sourceMap: true,
      // cssmin will minify later
      style: 'expanded'
    },
    files: {
      'build/css/global.css': '_/css/global.scss'
    }
  }
}