Arlin App by Michi
==================

Introduction
------------

> Base/backend layer application for Arlin.

This application is using Node.js and npm. Please follow the getting started guide first. We're planning to use Hapi and MongoDB to build the initial REST API.

The broader Technical Documentation that isn't concretely about only the application either the backend or frontend itself, is in the [parent repo (asde-michi)](https://github.com/gunadarma-academy/asde-michi#technical-documentation).

Getting Started
---------------

### Requirements

+ Terminal and shell (bash or zsh)
+ Git v2.0
+ Code editor
+ Modern web browser (Google Chrome or Firefox)
+ HTTP client app like cURL or Postman
+ Node.js LTS, currently version `4.4.x`

### Installation

+ Install Node.js from your prefered way, or from http://nodejs.org
  + It's also recommended to [use Node Version Manager (nvm)](https://github.com/creationix/nvm)
+ Install required npm packages/modules with `npm install` within this repo

### Development

+ Fork the repository
+ Run the app with `npm start`
+ Access `localhost:9000` or shown host with port in the prompt
+ To build the distribution release, use `npm build`

### Deployment

+ Push to designated server with `git push server master`
+ Deploy to a configured SaaS with something like `heroku push`

**Notes:** In the middle of the development, it's possible to use Continuous Integration (CI) or even Continuous Delivery (CD) to automate the build and deployment.

License
-------

Arlin App by Michi is Copyright (c) 2016 Michi Team and licenced under the MIT licence. All rights not explicitly granted in the MIT license are reserved. See the parent [LICENSE.markdown](https://github.com/gunadarma-academy/asde-michi/blob/master/LICENSE.markdown) file for more details.
