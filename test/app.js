const express = require('express')

const app = express()  // 创建 Express 程序

// EasyTemplateJS-express
//const view = require('easytemplatejs-express');



const view = require('../src/easy.templatejs.express');

// EasyTemplateJS-Express view render middleware
view(app, {
  cache: true,  // Whether to open the cache; default is true
  enableScript:true, // enable <etj-script>; default is true
	enableStyle:true, // enable <etj-style>; default is true
	views: './views'  // template file directory
});


app.get('/users', function (req, res) {
  res.render('user', {
    name: 'Jay',
		list:[
 			{name:"Jay", sex:'M'},
 			{name:"Rose", sex:'F'},
 			{name:"Anna ", sex:'F'}
 		]
	});
})

app.listen(3000, function () { console.log('App listening on port 3000!') })
