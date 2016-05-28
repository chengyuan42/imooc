const EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();

life.setMaxListeners(11);

// addEventEmitter

life.on('lunch', function(what){
	console.log('eat1 ' + what);
})

life.on('lunch', function(what){
	console.log('eat2 ' + what);
})
life.on('lunch', function(what){
	console.log('eat 3' + what);
})
life.on('lunch', function(what){
	console.log('eat 4 ' + what);
})
life.on('lunch', function(what){
	console.log('eat 5 ' + what);
})
life.on('lunch', function(what){
	console.log('eat  6 ' + what);
})
life.on('lunch', function(what){
	console.log('eat 7 ' + what);
})
life.on('lunch', function(what){
	console.log('eat 8 ' + what);
})
life.on('lunch', function(what){
	console.log('eat 9' + what);
})
life.on('lunch', function(what){
	console.log('eat 10 ' + what);
})
life.on('lunch', function(what){
	console.log('eat 12 ' + what);
})

life.emit('lunch', 'fish')