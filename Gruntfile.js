module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        eslint: {
            all: ['src/*.js', '!node_modules/**/*.js'],
            options: {
                configFile: 'conf/eslintrc.json'
            },
        },

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
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['eslint', 'babel', 'watch']);

};