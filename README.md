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

## Reader screens GTM container setup
*This the code only refers to reader screens website as the GTM id is different to the TNA one*
#### Set up within GTM
1. Create a new constant variable variable called Reader-gaProperty. 
* Variable type: constant, the value is the GA account number. //This will be given to you

2. Create a new variable where the variable type is Google Analytics Settings.
*	Variable name: ReadersGlobalSetting
*	The tracking ID is {{Reader-gaProperty}} //Name of your constant variable
*	Cookie Domain is auto
*	Expand More settings > Fields to Set
*	Add Field where field Name is anonymizeIp and value is true (lowercase). //This anonymizes the IP address.

3. Create new Tag:
*	Tag type: Universal Analytics
*	Track type: Page view
*	Google Analytics Settings: {{ReadersGlobalSetting}} //Name of your Google Analtyics settings variable
*	Trigger: All Pages

#### Install GTM into website

*Paste this code as high in the <head> of the page as possible:*

<!-- Google Tag Manager -->
```javascript
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T6W6SVS');</script>
```
<!-- End Google Tag Manager -->

*Additionally, paste this code immediately after the opening <body> tag:*
```HTML
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T6W6SVS"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
 ```
 
 #### Preview the tag and check pages are firing and collecting relevant info.
 #### In GA check in realtime that the data is coming through

## Discovery server side

This script will be rendered on the server side and will push an object to the data layer, detailing whether a user is registered and/or subscribed.

### Location

This script is located on every page in Discovery.

### How to test/testing guidelines

This test page contains all the meta tags that are needed to build the object to be sent to the data layer: https://github.com/nationalarchives/tna-google-tag-manager-scripts/blob/feature/resolving_conflicts/views/discoveryServerSide.html

There are several scenarios which may cause the content attribute of the meta tags to change. For example, if a user is not signed in and is not a subscriber, the relevant meta tag content attributes will be set to 'Not signed-in' and 'Not subscribed' respectively. In this case, the following object will be built:
	
	‘ContentGroup’ : ‘View records of other archives’,
	‘customDimension1’ : ‘Division within WO’,
	‘customDimension2’ : ‘Not subscribed’,
	‘customDimension3’ : ‘Not signed-in’,
        ‘ecommerce’ : {
               ‘promoView’ : {
                    ‘promotions’ : [{
                         ‘id’ : ‘ivp’,
                         ‘name’ : ‘Image Viewer Watermarked’,
                         ‘creative’ : ‘Image Viewer’,
                         ‘position’ : ‘Below record description’
                    }],
               }
          }
	  
For the different scenarios, please refer to the 'Stages' located in discoveryServerSide.html. To test different stages, uncomment the stage that you want active and comment out the previously active stage (only 1 stage can be active at any given time).	  
	  
If an image is **not** watermarked, the ecommerce object is ommitted from the overall object and the following object will be sent to the data layer (this example assumes that Stage 1 is active):

	‘ContentGroup’ : ‘View records of other archives’,
	‘customDimension1’ : ‘Division within WO’,
	‘customDimension2’ : ‘Not subscribed’,
	‘customDimension3’ : ‘Not signed-in’


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


## Form Abandonment
This script is rendered inside Google Tag Manager ( GTM ) and is pushing an object to the data layer. It will run every time a user close the page with a form element inside which has a class attribute of `form-abandonment`.

### Location
Inside Google Tag Manager ( GTM )

### How to test/testing guidelines
Once on the contact form page, the following DOM elements structure should be available:

```html
<form action="" id="some_form_ID" class="form-abandonment" method="POST" novalidate="novalidate">
   <fieldset class="form-step-1">
        <legend>Legend</legend>
            <div class="form-row">
	 	<label for="certificate_name">Field name</label> 
	 	<input type="text" id="certificate_name" name="certificate-name" value="Mihai Diaconita" aria-required="true" required="" class="form-warning" aria-describedby="certificate_name-error">
		<span id="certificate_name-error" class="form-error form-hint">Please enter the certificate holder’s name(s)</span>
            </div> 
   </fieldset>
</form>
```
		
If the above Document Object Model (DOM) elements are available, the following object is built and pushed to the data layer.

```javascript
{
 'event': 'formAbandonment',
 'eventCategory': 'Form Abandonment',
 'eventAction': 'ID: certificate_name > Error: certificate_name-error'
}
```
  
## Home page
This script is rendered inside Google Tag Manager ( GTM ) and is pushing an object to the data layer containing the custom data attribute like e.g. `data-gtm-banner`, `data-gtm-id`, `data-gtm-position`, `data-gtm-creative`. It will run every time a user clicks on any cards on the home page.

### Location
Inside Google Tag Manager ( GTM )

### How to test/testing guidelines
Once on the Home page, the following DOM elements should be available:

```html
<div class="card hero-banner clearfix">
    <a id="hero-banner" href="https://example.co.uk"
       data-gtm-name="Title" 
       data-gtm-id="ID"
       data-gtm-position="Hero banner" 
       data-gtm-creative="Content type">
	<div class="entry-image"
	     style="background-image: url(https://img.evbuc.com/)">
	</div>
	<div class="hero-banner-entry">
	    <div class="entry-content event">
		<div class="content-type"> Content type </div>
		<h3> Title </h3>
		<p> Content </p>
	    </div>
	</div>
    </a>
</div>
```
		
If the above Document Object Model (DOM) elements are available, the following object is built and pushed to the data layer.

```javascript
{
  event: "Promotions",
  eventAction:"Title",
  eventCategory:"Content type",
  eventLabel: "Banner 1",
  gtm.uniqueEventId:"ID"
}
```
