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

//Extracts the current step of the payment process
let step = document.querySelector('meta[name = WT\\.si_p ]').content;

//Creates an array from the 'content' attribute, using the semi-colon as a delimiter
let categoriesArray = extractMetaTagContent('WT\\.pn_fa').split(';');
let productsArray = extractMetaTagContent('WT\\.pn_sku').split(';');
let pricesArray = extractMetaTagContent('WT\\.tx_s').split(';');

//Each product is then made into an object which are then placed into an array
let productsObjArray = buildProductsObjArray(extractProductName(productsArray), productsArray, pricesArray, categoriesArray, calculateQuantity(productsArray));

//Object listing all button classes which require listeners, along with their corresponding functions
let buttonsAndFunctions = {
    '.removeLink': removeBasketItem(productsObjArray),
    '.text_sketch.call-to-action-link': submitOrder(productsObjArray, extractMetaTagContent('WT\\.tx_total'))
};

//dataLayer is equal to the pre-existing GTM data layer, else is initialised to an empty array
window.dataLayer = window.dataLayer || [];

//Waits for the DOM to load before applying click event listeners
document.addEventListener('DOMContentLoaded', () => {
    buttonsExist(buttonsAndFunctions);
});

/*
Verifies the step and pushes the ecommerce object to the data layer if step = Step 4
Step 3 handled differently as it is an onclick only event
*/
if(step === 'Step 1' || step === 'Step 2' || step === 'Step 4') {
    window.dataLayer.push(removeNullValues(buildEcommerceObj(
        verifyEvent(step),
        verifyOption(step),
        extractMetaTagContent('WT\\.si_p'),
        null,
        extractMetaTagContent('WT\\.tx_id'),
        extractMetaTagContent('WT\\.si_n'),
        extractMetaTagContent('WT\\.tx_total'),
        extractMetaTagContent('WT\\.tax'),
        extractMetaTagContent('WT\\.shipping'),
        productsObjArray
    )));
}