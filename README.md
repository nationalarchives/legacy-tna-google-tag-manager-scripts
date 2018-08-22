# Google Tag Manager scripts for all tna applications

## Development setup

This repository uses:

- Webpack for module bundling
- ESLint for linting the source JavaScript files
- Babel for transpiling of ES6 to ES5
- JS minification
- Jest for testing

Firstly, run '**npm install**' from the directory root in the terminal to install the required packages.

Having installed the Webpack CLI, run '**npm start**' to run ESLint, Babel, Uglify, and Watch in response to any changes in the test or source Javascript files.

To run unit tests, run '**npm test**' in the terminal. This will run all test suites.

This repository also provides a test page (index.html) which is used for debugging.

## Ecommerce tracking

This script will be rendered on the server side and will push an object to the data layer containing the products that a user has purchased e.g. digital records or record copies.

Ecommerce user journey: ![alt text](https://github.com/nationalarchives/tna-google-tag-manager-scripts/tree/feature/ecommerce_tracking/img/Discovery_payment_user_journey.png)

The data to be extracted will be drawn from 'Step 4' of the user journey.

## Location

This script is located on the Discovery receipts page.

## How to test/testing guidelines

Once on the Discovery receipts page, the following meta tags should be available:

`<meta name="WT.si_n" content="Discovery store">`\
`<meta name="WT.si_n" content="Step 4">`\
`<meta name="WT.si_n" content="Digital Record">`\
`<meta name="WT.si_n" content="The National Archives">`\
`<meta name="WT.si_n" content="AIR 50/163/32">`\
`<meta name="WT.si_n" content="1">`\
`<meta name="WT.si_n" content="3.50">`\
`<meta name="WT.si_n" content="3.50">`\
`<meta name="WT.si_n" content="I/657715845504212R">`

Provided that the above tags are available, the following object will be built and pushed to the data layer where it can be used by Google Tag Manager:
	  
    ‘event’ : ‘checkoutOption’
          ‘ecommerce’ : {
               ‘actionField’ : {‘step: step 4, ‘option’ : Receipt}
               ‘purchase’ : {
                    ‘actionField’ : {
                         ‘id’ : ‘I/657715845504212R’,
                         ‘affiliation’ : ‘Discovery Store’,
                         ‘revenue’ : ‘3.50’,
                         ‘tax’ : ‘0.00’,
                         ‘shipping’ : ‘0.00’
                    },
                    ‘products’ : [{
                         ‘name’ : ‘AIR 50’,
                         ‘price’ : ‘3.50’,
                         ‘brand’ : ‘The National Archives’,
                         ‘category’ : ‘Digital Record’,
                         ‘variant’ : ‘AIR 50/163/32’,
                         ‘quantity’ : 1
                    }]
               }
          }

