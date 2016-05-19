module.exports = function (grunt) {

// Project configuration.
  grunt.initConfig({

    sass: {
      options: {
        outputStyle: 'compressed',
        sourceMap: true
      },
      dist: {
        files: {
          'css/main.css': 'scss/main.scss'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ["last 2 versions", "IE >= 9"],
        map: true
      },
      main: {
        src: "css/main.css",
        dest: "css/main.css"
      }
    },
    jshint: {
      all: ['js/main.js']
    },

    watch: {
      css: {
        files: "scss/**/*",
        tasks: ["sass", "autoprefixer:main"],
        options: {
          livereload: true
        }
      },
      js: {
        files: "js/**/*.js",
        tasks: ["jshint"]
      }
    }
  });

// Load the tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-jshint');

// Default task(s).
  grunt.registerTask("build", ["sass", "autoprefixer:main", "jshint"]);
  grunt.registerTask("default", ["build", "watch"]);

};