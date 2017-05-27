var express = require('express')
var path=require('path')
var bodyParser = require('body-parser')
var port=process.env.PORT||3000
var app=express()

app.set('views','./views/pages')//视图目录
app.set('view engine','jade')
 //-app.use(express.bodyParser())
 app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname,'bower_components')))
app.listen(port)

console.log(' imooc started on port'+port)

//index page
app.get('/',function(req,res){
	res.render('index',{
		title: 'imooc 首页',
		movies: [
		{
			title: '机械战警',
			_id: 1,
			poster: "http://r3.ykimg.com/05160000530EEB63675839160D0B79D5"
		},
		{
			title: '机械战警',
			_id: 2,
			poster: "http://r3.ykimg.com/05160000530EEB63675839160D0B79D5"
		},
		{
			title: '机械战警',
			_id: 3,
			poster: "http://r3.ykimg.com/05160000530EEB63675839160D0B79D5"
		},
		{
			title: '机械战警',
			_id: 4,
			poster: "http://r3.ykimg.com/05160000530EEB63675839160D0B79D5"
		},
		{
			title: '机械战警',
			_id: 5,
			poster: "http://r3.ykimg.com/05160000530EEB63675839160D0B79D5"
		},
		{
			title: '机械战警',
			_id: 6,
			poster: "http://r3.ykimg.com/05160000530EEB63675839160D0B79D5"
		}
		]
	})
})

//detail page
app.get('/movie/:id',function(req,res){
	res.render('detail',{
		title: 'imooc 详情页',
		movies: {
              doctor: "河道送啊都",
              country: "美国",
              title: "机械战警",
              year: "2016",
              poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
              language: '英语',
              flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
              summary: '是哦好萨松岙是大脑神经哦发i苏丹诺夫多少萨吉i哦发酒店送的金佛山的佛i还是短发好死的方式佛说的话佛山的是佛i还送饭还送饭后放好傻。'
		}
	})
})

//list page
app.get('/admin/list',function(req,res){
	res.render('list',{
		title: 'imooc 列表页',
		movies: [{
			title: '机械战警',
			_id: 1,
			doctor: "是靠谱河道送啊都",
			country: "美国",
			year: "2016",
			language: '英语',
			flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf'
		}]
	})
})

//admin page
app.get('/admin/movie',function(req,res){
	res.render('admin',{
		title: 'imooc 后台录入页',
		movie :{
			title: '',
			doctor: '',
			country: '',
			year: '',
			poster: '',
			flash: '',
			summary: '',
			language: ''
		}
	})
})