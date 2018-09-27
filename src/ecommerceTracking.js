import{calculateQuantity} from './modules/ecommerceTracking/calculateQuantity';
import{buildProductsObjArray} from './modules/ecommerceTracking/buildProductsObjArray';
import{extractMetaTagContent} from './modules/extractMetaTagContent';
import{extractProductName} from './modules/ecommerceTracking/extractProductName';
import{buildEcommerceObj} from './modules/ecommerceTracking/buildEcommerceObj';
import{buttonsExist} from './modules/ecommerceTracking/buttonsExist';
import{removeBasketItem} from './modules/ecommerceTracking/removeBasketItem';
import{submitOrder} from './modules/ecommerceTracking/submitOrder';
import{verifyEvent} from './modules/ecommerceTracking/verifyEvent';
import{verifyOption} from './modules/ecommerceTracking/verifyOption';
import{removeNullValues} from './modules/removeNullValues';

//Object listing all button classes which require listeners, along with their corresponding functions
let buttonsAndFunctions = {
    '.removeLink': removeBasketItem,
    '.text_sketch.call-to-action-link': submitOrder
};

buttonsExist(buttonsAndFunctions);

//Extracts the step of the process
let step = document.querySelector('meta[name = WT\\.si_p ]').content;

//Creates an array from the 'content' attribute, using the semi-colon as a delimiter
let categoriesArray = extractMetaTagContent('WT\\.pn_fa', 'Categories meta tag not available').split(';');
let productsArray = extractMetaTagContent('WT\\.pn_sku', 'Product meta tag not available').split(';');
let pricesArray = extractMetaTagContent('WT\\.tx_s', 'Prices meta tag not available').split(';');

//dataLayer is equal to the pre-existing GTM data layer, else is initialised to an empty array
window.dataLayer = window.dataLayer || [];

//Verifies the step and pushes the ecommerce object to the data layer if step = Step 4
//Step 3 handled differently as it is an onclick only event
if(step === 'Step 1' || step === 'Step 2' || step === 'Step 4') {
    window.dataLayer.push(removeNullValues(buildEcommerceObj(
        verifyEvent(),
        verifyOption(),
        extractMetaTagContent('WT\\.si_p', 'Meta tag not available'),
        null,
        extractMetaTagContent('WT\\.tx_id', 'Meta tag not available'),
        extractMetaTagContent('WT\\.si_n', 'Meta tag not available'),
        extractMetaTagContent('WT\\.tx_total', 'Meta tag not available'),
        buildProductsObjArray(extractProductName(productsArray), productsArray, pricesArray, categoriesArray, calculateQuantity(productsArray))
    )));
}