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
	
	server.auth.strategy('twitter', 'bell', {
        provider: 'twitter',
        password: Config.auth.twitter.password,
        isSecure: false,
        clientId: Config.auth.twitter.clientId,
        clientSecret: Config.auth.twitter.clientSecret
    });

    server.auth.strategy('session', 'cookie', {
        password: Config.session.cookieOptions.password,
        cookie: 'sid',
        redirectTo: '/login',
        redirectOnTry: false,
        isSecure: false
    })

    server.route({
        method: ['GET', 'POST'],
        path: '/login',
        config: {
            auth: 'twitter',
            handler: function (request, reply) {
                var t = request.auth.credentials;
                console.log('t', t);

                var profile = {
                    token: t.token,
                    secret: t.secret,
                    twitterId: t.profile.id,
                    twitterName: t.profile.username,
                    avatar: t.profile.raw.profile_image_url.replace('_normal', ''),
                    website: t.profile.raw.entities.url.urls[0].expanded_url,
                    about: t.profile.raw.description,
                    fullName: t.profile.displayName,
                };
                console.log('profile', profile);
                request.auth.session.clear();
                request.auth.session.set(profile);
                return reply.redirect('/');

            }
        }
    });
	
	server.route({
        method: 'GET',
        path: '/',
        config: {
			auth: {
                strategy: 'session',
                mode: 'try'
            },
            handler: function (request, reply) {
                if(request.auth.isAuthenticated) {
                    var profile = request.auth.credentials
                    reply('<h1>Session</h1><pre>' + JSON.stringify(request.auth.credentials, null, 4) + '</pre>')
                }
                else {
                    reply('<h1><a href="/login">Login Via Twitter</a></h1>')
                }
            }
        }
    });
	
	server.start(function (err) {
        console.log('Server started at:', server.info.uri);
    });
	
});