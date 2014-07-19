// Generated on 2013-10-21 using generator-angular 0.5.0
'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);;

  grunt.initConfig({

    execute: {
      generic: {
        options: {
          cwd: 'pdfjs',
          args: ['generic']
        },
        src: ['pdfjs/make.js']
      }
    },

    copy: {
      pdfjs: {
        files: [
          // includes files within path
          {
            expand: true,
            flatten: true,
            dest: 'dist/',
            filter: 'isFile',
            src: [
              'pdfjs/build/pdf.js',
              'pdfjs/build/pdf.worker.js',
              'pdfjs/build/generic/web/compatibility.js'
            ]
          }
        ]
      }
    }

  });

  grunt.registerTask('build', [ 'execute', 'copy' ]);

  grunt.registerTask('default', [ 'build' ]);

};
