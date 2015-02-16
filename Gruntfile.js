/*

TO DO

1) Use grunt-contrib-cssmin to minify all css in "app" folder in to one.
   - Make css in "app" folder to expanded form.(easy to debug)
   - "dist" task mak all in a single minified css file.
   -Use copy task if required. 

2) Can this Gruntfile.js be abstracted into smaller parts?
   - https://github.com/cowboy/wesbos/commit/5a2980a7818957cbaeedcd7552af9ce54e05e3fb

3) Way to make Sass processing faster
   - Try grunt-contrib-compass
   - Try libsass

4) Is HTML min is required? Is over all process can be make fast? 

5) Use jade   

*/

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
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

        // File Copies
        // copy: {
        //     dev: {
        //         files: [
        //             // Sprites
        //             {
        //                 expand: true,
        //                 src: ['img/*.png'],
        //                 dest: 'development/'
        //             }
        //         ]
        //     },
        //     dist: {
        //         files: [
        //             // 3rd Party Files
        //             {
        //                 expand: true,
        //                 cwd: 'development',
        //                 src: ['lib/**/*'],
        //                 dest: 'build/<%= pkg.name %>/<%= pkg.version %>'
        //             },

        //             // Sprites
        //             {
        //                 expand: true,
        //                 cwd: 'development',
        //                 src: ['img/**/*'],
        //                 dest: 'build/<%= pkg.name %>/<%= pkg.version %>'
        //             }
        //         ]
        //     }
        // },

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
              cwd: '_/components',
              src: ['**/*.{png,jpg,gif}'],
              dest: 'app/'
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
        tasks: ['compass:dev']
      }, //sass

      html: {
        files: ['app/*.html']
      }, //html

      img: {
        files: ['_/components/**/*.{png,jpg,gif}'],
        tasks: ['imagemin']
      }, //image


      livereload: {
        options: { livereload: true },
        files: ['app/**/*']
      }

    }, //watch

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
  grunt.registerTask('default', ['connect', 'imagemin','watch']);
  grunt.registerTask('dist', ['compass','htmlmin']);
} //exports