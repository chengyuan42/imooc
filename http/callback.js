function learn(sm){
	console.log(sm);
}

function we(callback, sm){
	sm += ' is cool';
	callback(sm);
}

we(learn, 'NodeJs');

// 匿名函数
we(function(sm){
	console.log(sm)
}, 'Chengyuan');