var express = require('express');
var path = require('path'); //样式 js 路径
var mongoose = require('mongoose');
var _ = require('underscore');
var Movie = require('./models/movie')
var port = process.env.PORT || 3000;
var app = express();

mongoose.connect('mongodb://localhost/imooc')

var bodyParser=require('body-parser');
//视图的目录
app.set('views', './views/pages');
app.set('view engine', 'jade');

// app.use(express.bodyParser());
// 将表单数据格式化
app.use(bodyParser.urlencoded({extended: false}));
 // 静态资源的获取
app.use(express.static(path.join(__dirname, 'bower_components')))
app.listen(port);

console.log('imooc start on port ' + port);


// index page
app.get('/', function(req, res){
	Movie.fetch(function(err, movies){
		if(err{
			console.log(err);
		}

		res.render('index', {
			title: 'imooc home page',
			movies: []
		})
	});
})

// detail page
app.get('/movie/:id', function(req, res){
	var id = req.params.id;

	Movie.findById(id, function(err, movie){
		res.render('detail', {
			title: 'imooc detail page',
			movie: movie
		})
	})
})

// admin page
app.get('/admin/movie', function(req, res){
	res.render('admin', {
		title: 'imooc admin page',
		movie: {
			title: '',
			doctor: '',
			country:'',
			year: '',
			poster: '',
			flash: '',
			summary: '',
			language: ''
		}
	})
})

// admin update movie
app.get('/admin/update/:id', function(req, res){
	var id = req.params.id;

	if(id){
		Movie.findById(id, function(err, movie){
			res.render('admin',{
				title: 'imooc admin page',
				movie: movie
			})
		})
	}
})

// admin post movie
app.post('/admin/movie/new', function(res, req){
	var id = req.body.movie._id;
	var movieObj = req.body.movie;
	var _movie;

	if(id !== 'undefinded'){
		Movie.findById(id, function(err, function(){
			if(err){
				console.log(err);
			}

			_movie = _.extend(movie, movieObj);
			_movie.save(function(err, movie){
				if(err){
					console.log(err);
				}

				res.redirect('/movie/' + movie.id);
			})
		}))
	}else{
		_movie = new Movie({
			doctor: movieObj.doctor,
			title: movieObj.title,
			country: movieObj.country,
			language: movieObj.language,
			year: movieObj.year,
			poster: movieObj.poster,
			summary: movieObj.summary,
			flash: movieObj.flash
		});
		_movie.save(function(err, movie){
			if(err){
				console.log(err);
			}

			res.redirect('/movie/' + movie.id);
		});
	}
})

// list page
app.get('/admin/list', function(req, res){
	Movie.fetch(function(err, movies){
		if(err){
			console.log(err);
		}

		res.render('list', {
			title: 'imooc list page',
			movies: movies
		});
	});
})
