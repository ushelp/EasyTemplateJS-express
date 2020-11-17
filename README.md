# EasyTemplateJS-express

**EasyTemplateJS-express 是基于 [EasyTemplateJS](https://github.com/ushelp/EasyTemplateJS "EasyTemplateJS") 的 [Express](http://expressjs.com/ "Express") 框架的模板引擎中间件。**

**EasyTemplateJS-express is a template engine middleware based on [EasyTemplateJS](https://github.com/ushelp/EasyTemplateJS "EasyTemplateJS")  for the [Express](http://expressjs.com/ "Express") framework.**



## Npm install

```BASH
npm install easytemplatejs-express 
```
	
## Usage

```JS
const app = express();

// EasyTemplateJS-express
const view = require('easytemplatejs-express');

// EasyTemplateJS-Express view render middleware
view(app, {
    cache: true,  // Whether to open the cache; default is true
    //cache: process.env.NODE_ENV == 'production',
    enableScript:true, // enable <etj-script>; default is true
    enableStyle:true, // enable <etj-style>; default is true
    views: './views'  // template file directory
});
```

## Demo

- **app.js**

	```JS
	const express = require('express')
	const app = express() 
	
	// EasyTemplateJS-express
	const view = require('easytemplatejs-express');
	// EasyTemplateJS-Express view render middleware
	view(app, {
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

	```

- **./views/user.etj**

	```HTML
	<h1>Hello {=name}!</h1>
	<ul>
	%{
		for(var i=0;i<list.length;i++){
			out('<li>'+list[i].name+", "+list[i].sex+'</li>');	
		}
	}%
	</ul>
	```
	

## EasyTemplateJS Core Object

如果需要获得 EasyTemplateJS 的核心对象进行调用，可通过中间件函数的 `.templateEngine` 属性获得。

If you need to get the core object of EasyTemplateJS to make a call, you can get it use the `.templateEngine` property of the middleware function.

```JS
const view = require('easytemplatejs-express');

// Get EasyTemplate core Object
var Et=view.templateEngine;

// Use Et
Et.tmplSettings={
	// 脚本表达式开始结束标记%{ JS script }%
	scriptBegin:"%{",
	scriptEnd:"}%",
	// 输出表达式开始结束标记 {name}
	outBegin:"{=",
	outEnd:"}",
	// 转义输出表达式开始结束标记 {-name}
	escapeOutBegin:"{-",
	escapeOutEnd:"}"
}
```
	
	
## 内嵌 Script 和 CSS 支持/Embedded JavaScript and CSS

```javascript
view(app, {
  enableScript:true, // enable <etj-script>; default is true
  enableStyle:true, // enable <etj-style>; default is true
  ...
});
```


#### 中文

为了增强在 Express 等服务端 Web 应用框架中使用模板的功能体验，EasyTemplateJS 开创性的为模板提供了 script 脚本和 style 样式表支持。
- **Script 代码支持**

	将 JavaScript 代码放在 `<etj-script>` ... `</etj-script>` 标签之间。 **语句必须使用 `;` 结尾。**
	
	
- **CSS 代码支持**
		
	将 CSS 代码放在 `<etj-style>` ... `</etj-style>` 标签之间。
	

#### English

To enhance the functional experience of using templates in Express and other server-side Web application frameworks, EasyTemplateJS pioneered the provision of script scripts and style style sheet support for templates.

- **Script code support**

	Place the JavaScript code between the `<etj-script>` ... `</etj-script>` tags. **The statement must end with `;`.**
	
	
- **CSS  code support**
		
	Place the CSS code between the `<etj-style>` ... `</etj-style>` tags.

	
	

## EasyTemplateJS

[Documents](https://github.com/ushelp/EasyTemplateJS "EasyTemplateJS")

## End

Email：<inthinkcolor@gmail.com>

[http://www.easyproject.cn](http://www.easyproject.cn "EasyProject Home")


**Donation/捐助:**

<a href="http://www.easyproject.cn/donation">
<img alt="
支付宝/微信/QQ/云闪付/PayPal 扫码支付" src="http://www.easyproject.cn/thanks/donation.png"  title="支付宝/微信/QQ/云闪付/PayPal 扫码支付"  height="320" width="320"></img></a>
<div>支付宝/微信/QQ/云闪付/PayPal</div>

<br/>

我们相信，每个人的点滴贡献，都将是推动产生更多、更好免费开源产品的一大步。

**感谢慷慨捐助，以支持服务器运行和鼓励更多社区成员。**

We believe that the contribution of each bit by bit, will be driven to produce more and better free and open source products a big step.

**Thank you donation to support the server running and encourage more community members.**


