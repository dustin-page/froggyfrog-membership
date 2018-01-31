
module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {    
            files: ['lib/**/*.js', 'models/**/*.js'],
            options: {
                jshintrc: true,
            }
        }, 
        watch: {
            files: ['lib/**/*.js', 'models/**/*.js'],
            tasks: ['jshint']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint']);
} 