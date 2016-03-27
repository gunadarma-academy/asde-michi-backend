var Hapi = require('hapi');
var Bell = require('bell');
var Cookie = require('hapi-auth-cookie');
var Config = require('getconfig');

var server = new Hapi.Server();

server.connection({ 
    host: Config.hostname, 
    port: Config.port 
});

server.register([Bell, Cookie], function (err) {

    if (err) {
        throw err;
    }
	
	server.route({
        method: 'GET',
        path: '/',
        config: {
            handler: function (request, reply) {
                reply('<h1>Hello World!</h1>')
            }
        }
    });
	
	server.start(function (err) {
        console.log('Server started at:', server.info.uri);
    });
	
});