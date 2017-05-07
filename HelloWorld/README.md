# Hello world

## Project setup

* yarn
* webpack
* jest


### init yarn
```
yarn init
```
### add necessary react packages
```
yarn add react
yarn add react-dom
yarn add babel-standalone
```
### add testing packages
```
yarn add react-testing-router
yarn add jest
```
### add webpack
```
yarn add --dev webpack@latest webpack-dev-server@latest
```

Create a webpack.config.js in root of our directory.
```
var webpack = require('webpack');

var config = {
  context: __dirname + '/', // `__dirname` is root of project and `src` is source
  entry: {
    app: './app.js',
  },
  output: {
    path: __dirname + '/dist', // `dist` is the destination
    filename: '[name].bundle.js',
  },
};

module.exports = config;
```

To run webpack in development mode.
```
$ webpack
```

### Hello World
Based on [Codeacademy Tutorial](https://www.codecademy.com/courses/react-101/lessons/your-first-react-component/exercises/create-component-instance?action=lesson_resume)

#### Folder Structure
```
HelloWorld
- node_modules
- test
-- button.test.js
.gitignore
app.js
index.html
package.json
README.md
yarn.lock
```

#### Create Component
Folgt noch...

### Testing

```
var app = require('../app.js');

test("button-test", () => {
  expect(document.getElementById('hellow_world').innterhTML).toBe("Hallo Berlin!");
});
```
