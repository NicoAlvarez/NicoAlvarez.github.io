module.exports = function(grunt) {
 
  grunt.initConfig({

	
 
		uglify: {
			options: {
			mangle: false
			},
			dist: {
				files: {'assest/js/min.js':['assets/js/min.js']
				}	
			}
		},//uglify

	    cssmin: {
			options: {
				shortthandcompacting: false,
				roundingpresition:-1
			},
			target: {
				files: {
					'assets/css/min.css':['assets/css/*.css', '!assets/css/min.css' ]
				}	
			}
		},//cssmin

		htmlmin: {
			dist: {
				options:{
					removeComments: true,
					collapseWhitespace:true
				},
				files:{
					'index.min.html': 'index.html'
				}
			},
		},


		watch: {
			js: {
				files: ['asstes/js/*.js' , '!assets/js/min.js'],
				tasks: ['uglify'],
				options: {
					spawn: false
				},
				css: {
				files: ['asstes/css/*.css' , '!assets/css/*.css'],
				tasks: ['cssmin'],
				options: {
					spawn: false
				},
				html: {
				files: ['*.html' , '!index.min.html'],
				tasks: ['htmlmin'],
				options: {
					spawn: false
				},
  
  });
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['uglify', 'cssmin', ]);
	grunt.registerTask( 'compile', ['watch']);
 
};