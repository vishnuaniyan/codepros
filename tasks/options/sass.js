module.exports = {
  dist: {
    options: {
      // sourceMap: true,
      // cssmin will minify later
      
      sourceMap: true,
      style: 'expanded'
    },
    files: {
      'build/css/global.css': '_/css/global.scss'
    }
  }
}