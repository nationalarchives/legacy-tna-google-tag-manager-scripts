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

Ecommerce user journey: https://github.com/nationalarchives/tna-google-tag-manager-scripts/tree/feature/ecommerce_tracking/img/Discovery_payment_user_journey.png

The data to be extracted will be drawn from 'Step 4' of the user journey.

### Location

This script is located on the Discovery receipts page.

### How to test/testing guidelines

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
	`<div class="card hero-banner clearfix">
                    <a id="hero-banner"
                       href="https://www.eventbrite.co.uk/e/the-time-travel-club-treasure-in-the-archives-4-6-tickets-47220449636"
                       data-gtm-name="The Time Travel Club - Treasure in the archives (4-6)" data-gtm-id="hero_1"
                       data-gtm-position="hero_position_banner" data-gtm-creative="homepage_hero_Event"
                       class="homepage-hero" aria-label="The Time Travel Club - Treasure in the archives (4-6)"
                       target="_blank" rel="noopener noreferrer">
                        <div class="entry-image"
                             style="background-image: url(https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F46278755%2F225810853155%2F1%2Foriginal.jpg?w=1000&amp;auto=compress&amp;rect=0%2C0%2C1250%2C625&amp;s=ad1928c3bd1a269c7a2f7d0782f145f0)"></div>
                        <div class="hero-banner-entry">
                            <div class="entry-content event">
                                <div class="content-type">Event</div>
                                <h3>The Time Travel Club - Treasure in the archives (4-6)</h3>
                                <p>What do we look after at The&nbsp;National Archives? Find out about&nbsp;some of the
                                    special ‘treasures’ that we&nbsp;keep, including documents that are&nbsp;more than
                                    1,000 years old!</p></div>
                            <div class="entry-date">
                                <div class="date">Tuesday 28 August 2018, 10:30</div>
                            </div>
                        </div>
                    </a>
                </div>`
