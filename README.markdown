Arlin App by Michi
==================

Introduction
------------

> Base/backend layer application for Arlin.

This application is using Node.js and npm. Please follow the getting started guide first. We're planning to use Hapi and MongoDB to build the initial REST API.

The broader Technical Documentation that isn't concretely about only the application either the backend or frontend itself, is in the [parent repo (asde-michi)](https://github.com/gunadarma-academy/asde-michi#technical-documentation).

*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *

Getting Started
---------------

### Requirements

+ Terminal and shell (bash or [zsh](http://www.zsh.org))
+ [Git](http://git-scm.com) v2.x
+ Modern code editor ([Vim](http://vim.org), [Atom](https://atom.io), [Sublime](https://sublimetext.com))
+ Modern web browser (Google Chrome or Firefox)
+ HTTP client app like [cURL](https://curl.haxx.se) or [Postman](https://getpostman.com)
+ [Node.js](http://nodejs.org): JavaScript in the server/backend LTS, currently version `4.4.x`
+ [Hapi](http://hapijs.com): A very well designed server framework that is easy to understand, easy to create your own plugins, scales very well, cache options built in, and more
+ [Gulp](http://gulpjs.com): A task runner for your assets and more
+ No CSS framework here. Choose your own in the frontend you build

### Installation

+ Install Node.js from your prefered way, or from <http://nodejs.org>
  + It's also recommended to [use Node Version Manager (nvm)](https://github.com/creationix/nvm)
+ Install required npm packages/modules with `npm install` within this repo

### Development

+ Fork the repository
+ Create your feature branch (`git checkout -b feature-name`)
+ Make your changes with your editor (`vim` or `atom` or `sublime`)
+ Run the app (`npm start` or later `npm test`)
+ To build the distribution release, use `npm build`
+ Access `{host}:{port}` or that already shown in the prompt to view
+ Commit your changes (`git commit -a`)
+ Push to the branch (`git push origin feature-name`)
+ Create new Pull Request

### Usage

With only npm:

```
npm install
npm start
```

With pm2:

```
npm install -g pm2
pm2 start ecosystem.json
```

Access `http://{host}:{port}/api`

Read the complete [REST API endpoint available here](API.markdown).

### Deployment

With pm2:

```
pm2 deploy ecosystem.json development
pm2 deploy ecosystem.json staging
pm2 deploy ecosystem.json production
```

Notice that you should have a proper access to the server. It's recommended to use SSH key that is already added/registered.

[TODO]

+ Push to designated server with `git push server master`
+ Deploy to a configured SaaS with something like `heroku push`

**Notes:** In the middle of the development, it's possible to use Continuous Integration (CI) or even Continuous Delivery (CD) to automate the build and deployment.

*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *

License
-------

Arlin App by Michi is Copyright (c) 2016 Michi Team and licenced under the MIT licence. All rights not explicitly granted in the MIT license are reserved. See the parent [LICENSE.markdown](https://github.com/gunadarma-academy/asde-michi/blob/master/LICENSE.markdown) file for more details.
