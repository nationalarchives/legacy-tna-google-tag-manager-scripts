module.exports = function(grunt) {

    //require('load-grunt-tasks')(grunt);
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['*.js'],
                        dest: 'dist/'
                    }
                ]
            }
        },

        /* Auto Update the scripts when working */
        watch: {
            scripts: {
                files: ['src/*.js'],
                tasks: ['default'],
                options: {
                    spawn: false,
                }
            }
        },

    });
    // END GRUNT


    // Load the plugins
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['babel', 'watch']);

};