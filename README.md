# library-app

Simple library Application using firebase and ember
mock-up app of https://github.com/zoltan-nz/library-app

## Live Demo
[https://library-ember-7cdd4.firebaseapp.com](https://library-ember-7cdd4.firebaseapp.com)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd library-app`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Firebase Configuration
Go to config/enviroment.js and change a configuration of firbase
```
firebase: {
      apiKey: 'your apikey',
      authDomain: 'authDomain',
      databaseURL: 'your databaseUrl',
      storageBucket: 'storagebucket',
    },
```

