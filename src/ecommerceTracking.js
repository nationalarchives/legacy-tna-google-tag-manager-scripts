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
import{splitToArray} from './modules/ecommerceTracking/splitToArray';
import{populateActionField} from './modules/ecommerceTracking/populateActionField';
import{pushInDataLayer} from './modules/pushInDataLayer';

//Extracts the current step of the payment process
let step = extractMetaTagContent('WT\\.si_p');

//Creates an array from the 'content' attribute, using the semi-colon as a delimiter
let categoriesArray = splitToArray(extractMetaTagContent('WT\\.pn_fa'));
let productsArray = splitToArray(extractMetaTagContent('WT\\.pn_sku'));
let pricesArray = splitToArray(extractMetaTagContent('WT\\.tx_s'));

//Each product is then made into an object which are then placed into an array
let productsObjArray = buildProductsObjArray(extractProductName(productsArray), productsArray, pricesArray, categoriesArray, calculateQuantity(productsArray));

//Object listing all button classes which require listeners, along with their corresponding functions
let buttonsAndFunctions = {
    '.removeLink': removeBasketItem(productsObjArray),
    '.text_sketch.call-to-action-link': submitOrder(productsObjArray, extractMetaTagContent('WT\\.tx_total'))
};

//Waits for the DOM to load before applying click event listeners
document.addEventListener('DOMContentLoaded', () => {
    buttonsExist(buttonsAndFunctions);
    if (step && step === 'Step 1' || step === 'Step 2' || step === 'Step 4') {
        let{id, affiliation, revenue, tax, shipping} = populateActionField(step);
        pushInDataLayer(removeNullValues(buildEcommerceObj(
            verifyEvent(step),
            verifyOption(step),
            step,
            id,
            affiliation,
            revenue,
            shipping,
            tax,
            productsObjArray
        )));
    }
});