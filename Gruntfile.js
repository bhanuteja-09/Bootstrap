'use strict';

module.exports = function(grunt) {
   
    const sass = require('node-sass'); // add this line
    require('time-grunt')(grunt);

    require('jit-grunt')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                outputStyle: 'expanded',
                sourceMap: true,
                quiet: true // stop depreciation errors
            },
            dist: {
                files: {
                    'css/styles.css': 'css/styles.scss'                }
            }
        },
        watch: {
            files: 'css/*.scss',
            tasks: ['sass']
        }, 

        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    }
                }
            }
        }

    });

    grunt.registerTask('css', ['sass']);
    grunt.registerTask('default', ['browserSync', 'watch']);
};