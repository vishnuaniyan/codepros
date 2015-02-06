/*

TO DO

1) Can this Gruntfile.js be abstracted into smaller parts?
   - https://github.com/cowboy/wesbos/commit/5a2980a7818957cbaeedcd7552af9ce54e05e3fb

2) Way to make Sass processing faster
   - Try grunt-contrib-compass
   - Try libsass

3) Is HTML min is required? Is over all process can be make fast? 

3) Use jade   

*/

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  // grunt.loadNpmTasks('grunt-scss-lint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  // require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.initConfig({

    uglify: {
      my_target: {
        files: {
          'app/js/scripts.js': ['_/components/js/*.js']
        } //files
      }, //my_target
      dist: {
                options: {
                    mangle: false
                },
                files: [
                    {
                        src: 'app/js/scripts.js',
                        dest: 'build/js/scripts.js'
                    }
                ] 
            } //dist
    }, //uglify

    // HTML Compression
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                }, //options
                files: [
                    // Admin
                    {
                        expand: true,
                        cwd: 'app/', 
                        src: ['**/*.html'],
                        dest: 'build/'

                    }
                ] //files
            } //dist
        }, //htmlmin

    compass: {
      dev: {
        options: {
          config: 'config.rb'
        } //options
      }, //dev
      dist: {
                options: {
                    sassDir: '_/components/scss',
                    imagesDir: '/app/img',
                    cssDir: 'build/css',
                    javascriptsDir: 'build/lib',
                    httpGeneratedImagesPath: 'build/img',
                    noLineComments: true,
                    outputStyle: 'compressed'
                } //options
            } //dist
    }, //compass

    imagemin: {
      dynamic: {
          files: [{
              expand: true,
              cwd: 'app/',
              src: ['**/*.{png,jpg,gif}'],
              dest: 'build/'
          }]
      }
    }, //imagemin

    watch: {
      options: { livereload: true },

      scripts: {
        files: ['_/components/js/**/*.js'],
        tasks: ['uglify']
      }, //script

      sass: {
        files: ['_/components/scss/**/*.scss'],
        tasks: ['scsslint', 'compass:dev']
      }, //sass

      html: {
        files: ['app/*.html']
      },

      livereload: {
        options: { livereload: true },
        files: ['app/**/*']
      }

    }, //watch

    scsslint: {
      allFiles: [
        '_/components/scss/**/*.scss'
      ],
      options: {
        config: null,
        reporterOutput: null,
        colorizeOutput: true
      }
    }, // scsslint

    connect: {
      server: {
        options: {
          livereload: true,
          base: 'app/',
          port: '9009',
          open: {
            target: 'http://localhost:9009'
          }
        }
      }
    }

  }) //initConfig
  grunt.registerTask('default', ['connect', 'watch']);
  grunt.registerTask('dist', ['compass','imagemin','htmlmin']);
} //exports