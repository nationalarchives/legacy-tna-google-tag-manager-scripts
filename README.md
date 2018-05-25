# Google Tag Manager JavaScripts for all tna applications

## Development setup

This repository uses GruntJS for task automation and:

* ESLint for linting the source JavaScript files
* Babel for transpiling of ES6 to ES5
* JS minification
 
Having installed the Grunt CLI you should be able to install all dependencies by running `npm nstall` from the project root. 

Once dependencies are installed run the `grunt` command in the terminal and it will run ESLint, Babel, Uglify and Watch in response to any changes to either a the test or source JavaScript file.

This also provides a test page `index.html` which is used for debugging.
