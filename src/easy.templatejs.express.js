var fs = require('fs')   // this engine requires the fs module
var Et = require('easytemplatejs');

var defaultSettings={
	cache:true, //  Whether to open the cache
	enableScript:true, // enable <etj-script>
	enableStyle:true // enable <etj-style>
}

var cacheTpl={} // cache data

/**
 * Express view middleware
 * @param {Application} app   Express application instance
 * @param {Object}     settings user settings
 */
exports = module.exports = function(app, settings) {
   
    settings = Object.assign({}, defaultSettings, settings);
	
	Et.enableScript = settings.enableScript; 
	Et.enableStyle = settings.enableScript; 
	
	// define the template engine
	app.engine('etj', function (filePath, data, callback) {
	
	  fs.readFile(filePath, "utf-8", function (err, content) {
	    if (err) return callback(err)
	    var compiled;
	    // Cache controller
	    if(settings.cache){
		    if(!cacheTpl[filePath]){
		    	cacheTpl[filePath] = Et.template(content);
		    }
		    compiled = cacheTpl[filePath];
	    }else{
	    	compiled = Et.template(content);
	    }

	    var rendered = compiled(data);
	    return callback(null, rendered)
	  })
	})
	
	app.set('views', settings.views) // specify the views directory
	app.set('view engine', 'etj') // register the template engine
};



exports.templateEngine = Et;