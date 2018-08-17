module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			release: {
				src: ["dist/*.js"]
			}
		},
		uglify: {
			options: {
				banner: 
`/**
 * EasyTemplateJS-express
 * 
 * Version <%=pkg.version %>
 * 
 * http://easyproject.cn 
 * https://github.com/ushelp
 * 
 * Copyright 2012 Ray [ inthinkcolor@gmail.com ]
 * Released under the MIT license
 * 
 * [Support AMD, CMD, CommonJS, Node.js, express, expressjs, EasyTemplateJS]
 * 
 */
`
			},
			build: {
				src: 'src/*.js',
				dest: 'dist/easy.templatejs.express.min.js'
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('release', ['clean', 'uglify']);
	grunt.registerTask('default', ['release']);
};