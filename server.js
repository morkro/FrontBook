/* Setup */
var express	= require('express');
var server	= express();
var fs		= require('fs');
var dir		= '/public';
var port	= process.env.PORT || 9000;

/**
 * Create environment.
 */
server.use('/', express.static(__dirname + dir));

server.on('render:index', function(encoding, req, res) {
	fs.readFile(dir + '/index.html', encoding, function(err, html) {
		res.contentType('text/html');
		res.status(200).send(html);
	});
});

server.get('*', function(req, res, next) { next(); });
server.get('/:var(index.html)?', function(req, res, next) {
	server.emit('render:index', 'UTF-8', req, res);
});

/**
 * Get server running.
 */
server.listen(port, function() {
	console.log('Hurray! Your server runs on http://localhost:' + port);
});