# ai-component-bundler [![Build Status](https://secure.travis-ci.org//ai-component-bundler.png?branch=master)](http://travis-ci.org//ai-component-bundler)

[![Greenkeeper badge](https://badges.greenkeeper.io/kristianmandrup/ai-component-bundler.svg)](https://greenkeeper.io/)

Provides functionality for bundling a component in a project.

## Getting Started
Install the module with: `npm i ai-component-bundler`

```javascript
var bundler = require('ai-component-bundler');
bundler(); // "awesome"
```

See [how-to-setup-testing-using-typescript-mocha-chai-sinon-karma-and-webpack](https://templecoding.com/blog/2016/02/02/how-to-setup-testing-using-typescript-mocha-chai-sinon-karma-and-webpack/)

## Documentation
This library is part of [ai-component](https://github.com/kristianmandrup/ai-component) and provides functionality for
bundling installed components in a web app project. 

## Development
- Clone the repo
- `npm i`

The project setup is in part based on: [how to setup testing using typescript mocha chai sinon karma and webpack](http://templecoding.com/blog/2016/02/02/how-to-setup-testing-using-typescript-mocha-chai-sinon-karma-and-webpack/)

## Gulp
Simply run `gulp` to build the project.
To enable watch & compile: `gulp watch`

## Webpack 
Run `webpack` to create bundle in `dist/bundle.js`

To enable watch & compile: `webpack --watch`

## Testing
Write test cases using mocha, chai and expect etc. in `test/src`
The gulp tasks are configured to dump all test related output files to the `/.tmp` folder

Run gulp tests: `npm test`

### Use mocha-webpack to run tests
`npm run test-wp` (see [mocha-webpack](https://www.npmjs.com/package/mocha-webpack))

## Using Karma
- `karma start` to start [Karma](https://karma-runner.github.io/1.0/index.html) server (in a process)
- `karma run` to run tests (different process - communicating over server port)

### Test Coverage
`npm run cover` to use Istanbul test coverage

### E2E testing via Nightwatch
See [Getting Started](http://nightwatchjs.org/getingstarted)

Install nightwatch globally 

`npm i nightwatch -g`

Install selenium server: `brew install selenium`

Brew might ask you to install the server standalone as follows:

`brew install homebrew/versions/selenium-server-standalone245`

Optionally adjust the `nightwatch.json` config file.

Launch nightwatch (default):

`$ nightwatch`

Run specific environment tests (as per entry under `test_settings`:

`$ nightwatch --env chrome`

## Sinon
The project comes with support for [sinon](http://sinonjs.org/) to test and mock server communication.

```ts
describe('MoviesViewModel', () => {
  let viewModel: MoviesViewModel;
  let movieDataServiceStub: Sinon.SinonSpy;

  beforeEach(() => {
    sinon.stub(movieDataService, 'loadMovies').returns([new Movie('The Matrix', 1998, 5)]);
    movieDataServiceStub = sinon.spy(movieDataService, 'save');
    viewModel = new MoviesViewModel();
  });

  afterEach(() => {
    sinon.restore(movieDataService.loadMovies);
    sinon.restore(movieDataService.save);
  });
  // ...  
})
```  


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. 
Add unit tests for any new or changed functionality. 

## Release History

## License
Copyright (c) 2016 Kristian Mandrup
Licensed under the MIT license.
