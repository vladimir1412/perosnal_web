
module.exports = function (grunt) {


  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      // Minify images
      imagemin: {
          jpg: {
            options: {
              progressive: true
            },
            files: [{
              expand: true,
              cwd: 'images',
              src: ['**/*.{png,jpg,gif}'],
              dest: 'build/images'
            }]
          }
      },
      // Remove unused CSS across multiple files
      uncss: {
          dist: {
              files: {
                  'css/style.css': ['index.html']
              }
          }
      },
      // Watches for changes
      watch: {
        options: {livereload: true},
        sass: {
          files: ['sass/*.scss','sass/base/*.scss'],
          // tasks, that you already have created
          tasks: ['sass','cssmin']
        },

        js: {
          files: ['js/*.js'],
          tasks: 'js'
        }
      },
      concat: {
        options: {
          seperator: ";",
          stripBanners: true,
          // puts info
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
              '<%= grunt.template.today("yyyy-mm-dd") %> */',
            },
        dist: {
            src: ['js/intro.js', 'js/project.js', 'js/outro.js'],
            dest: 'build/js/scripts.min.js',
        },
      },
      // Minify css
      cssmin: {
          target: {
              files: [{
                  'build/css/style.css': ['css/style.css']
              }]
          }
      },
      // Converts sass into css
      sass: {
        dist: {
          files: {
            'css/style.css': ['sass/style.scss']
          }
        }
      },
      htmlmin: {
         controlHtml: {
             options: {
                 removeComments: true,
                 collapseWhitespace: true
             },
             files: {
                  'build/index.html': 'index.html'
             }
         }
       },
    //  livereload server
      livereload: {
        options: {
          livereload: true
        },
        files: [
          '<%= config.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= config.app %>/images/{,*/}*',
          'app/*.js'
        ]
      },
      uglify: {
        my_target: {
          files: [{
            expand: true,
            cwd: 'js',
            src: '**/*.js',
            dest: 'build/js'
          }]
        }
      },
      // Server
      connect: {
        server: {
          options: {
            port: 8000,
            protocol: 'http',
            hostname: 'localhost',
            base: '.',
            directory: null,
            open: true,
            livereload: true,
          }
        }
      },

  });




  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('default', [
    // "uncss",
    "imagemin",
    "sass",
    "htmlmin",
    "cssmin",
    "uglify",
    "concat",
    "connect",
    "watch"
  ]);

};
