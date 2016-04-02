Arlin App by Michi
==================

![Codeship](https://codeship.com/projects/df0cfa80-db2a-0133-f49f-561c728b2028/status?branch=master)

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
+ Install pm2 globally (`npm install -g pm2`)

### Development

+ Fork the repository
+ Create your feature branch (`git checkout -b feature-name`)
+ Make your changes with your editor (`vim` or `atom` or `sublime`)
+ Commit your changes (`git commit -a`)
+ Push to the branch (`git push origin feature-name`)
+ Create new Pull Request

### Usage and Deployment

Use `npm run-script <script-name>` for below:

```
start: Start ecosystem.json
stop: Stop ecosystem.json
deploy-production-setup: Setup the production
deploy-production: Deploy to production
deploy-staging-setup: Setup the staging
deploy-staging: Deploy to staging
deploy-development-setup: Setup the development
deploy-development: Deploy to development
```

Access `http://{host}:{port}/{api_route}` or that already shown in the prompt to view. Read the complete [REST API endpoint available here](API.markdown).

Notice that you should have a proper access to the server. It's recommended to use SSH key that is already added/registered there. You might want to use `ssh-copy-id username@xx.xx.xx.xx` first. SSH into that username, then edit its username's `.bashrc` to comment out:
```
# If not running interactively, don't do anything
case $- in
    *i*) ;;
      *) return;;
esac
```
to resolve non-interactive SSH connection from pm2.

[TODO]

+ Push to designated server with `git push server master`
+ Deploy to a configured SaaS with something like `heroku push`

**Notes:** In the middle of the development, it's possible to use Continuous Integration (CI) or even Continuous Delivery (CD) to automate the build and deployment.

*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *

References
----------

+ [How To Use PM2 to Setup a Node.js Production Environment on an Ubuntu VPS | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-use-pm2-to-setup-a-node-js-production-environment-on-an-ubuntu-vps)
+ [post-deploy hook ignores PATH variable: bash: npm: command not found](https://github.com/Unitech/pm2-deploy/issues/41)

*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *

License
-------

Arlin App by Michi is Copyright (c) 2016 Michi Team and licenced under the MIT licence. All rights not explicitly granted in the MIT license are reserved. See the parent [LICENSE.markdown](https://github.com/gunadarma-academy/asde-michi/blob/master/LICENSE.markdown) file for more details.
