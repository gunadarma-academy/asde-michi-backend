'use strict'

const Path = require('path')
const Hapi = require('hapi')
const Joi = require('joi')
const Inert = require('inert')
const Hoek = require('hoek')

// Create a server with a host and port
const server = new Hapi.Server()
server.connection({
  host: '0.0.0.0',
  port: 9000
})

server.register(Inert, () => {})

// Harcoded payload
var users = [{
  name: 'Michi',
  age: 10,
  location: 'Earth',
  image: 'michi.png'
}, {
  name: 'Hazeorid',
  age: 100,
  location: 'Universe',
  image: 'hazeorid.png'
}]

// Specify routes
server.route(
  [
    // Get homepage
    {
      method: 'GET',
      path: '/',
      handler: function(req, reply) {
        return reply('Hello, I\'m Arlin');
      }
    },
    // Get all users
    {
      method: 'GET',
      path: '/users',
      handler: function(req, reply) {
        reply(users);
      }
    },
    // Get user by id
    {
      method: 'GET',
      path: '/user/{id?}',
      handler: function(req, reply) {
        if (req.params.id) {
          if (users.length <= req.params.id) {
            return reply('No user found.').code(404);
          }
          return reply(users[req.params.id]);
        }
        reply(users)
      }
    },
    // Post to users
    {
      method: 'POST',
      path: '/users',
      config: {
        handler: function(req, reply) {
          var newuser = {
            filename: req.payload.filename,
            title: req.payload.title
          };
          users.push(newuser);
          reply(newuser);
        }
      }
    },
    // Delete user by id
    {
      method: 'DELETE',
      path: '/user/{id}',
      handler: function(req, reply) {
        if (users.length <= req.params.id) {
          return reply('No user found.').code(404);
        }
        users.splice(req.params.id, 1);
        reply(true);
      }
    }
  ]
);

// Start the server
server.start((err) => {
  if (err) {
    throw err
  }
  console.log('Server running at:', server.info.uri)
})
