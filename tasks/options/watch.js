module.exports = {
  options: {
    livereload: true,
  },
  scripts: {
    files: ['_/js/*.js'],
    tasks: ['jshint', 'concat', 'uglify'],
    options: {
      spawn: false, // speeds up the reaction time of the watch 
                    //and allows subsequent task runs to share the same context.
    }
  },
  css: {
    files: ['_/css/*.scss'],
    tasks: ['sass', 'autoprefixer', 'cssmin'],
    options: {
      spawn: false,
    }
  },
  html: {
        files: ['build/*.html']
      }, //html
  images: {
    files: ['_/img/**/*.{png,jpg,gif}', '_/img/*.{png,jpg,gif}'],
    tasks: ['imagemin'],
    options: {
      spawn: false,
    }
  }
} //module.exports