# Google Tag Manager scripts for all tna applications

## Development setup

This repository uses:

- Webpack for module bundling
- ESLint for linting the source JavaScript files
- Babel for transpiling of ES6 to ES5
- JS minification
- Jest for testing

Firstly, run *npm install* from the directory root in the terminal to install the required packages.

Having installed the Webpack CLI, run *npm start* to run ESLint, Babel, Uglify, and Watch in response to any changes in the test or source Javascript files.

To run unit tests, run *npm test* in the terminal. This will run all test suites.

This repository also provides a test page (index.html) which is used for debugging.

## Ecommerce tracking

This script will be rendered on the server side and will push an object to the data layer containing the products that a user has purchased e.g. digital records or record copies.

Ecommerce user journey: https://github.com/nationalarchives/tna-google-tag-manager-scripts/tree/feature/ecommerce_tracking/img/Discovery_payment_user_journey.png

The data to be extracted will be drawn from 'Step 4' of the user journey.

## Location

This script is located on the Discovery receipts page.

## How to test/testing guidelines

