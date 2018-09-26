import{extractMetaTagContent} from '../extractMetaTagContent';
import{extractProductName} from './extractProductName';
import{calculateQuantity} from './calculateQuantity';
import{buildProductsObjArray} from './buildProductsObjArray';
import{buildEcommerceObj} from './buildEcommerceObj';

let categoriesArray = extractMetaTagContent('WT\\.pn_fa', 'Categories meta tag not available').split(';');
let productsArray = extractMetaTagContent('WT\\.pn_sku', 'Product meta tag not available').split(';');
let pricesArray = extractMetaTagContent('WT\\.tx_s', 'Prices meta tag not available').split(';');

export let submitOrder = () => {
    let ecommerceEvent = 'transaction';
    let productObjArray = buildProductsObjArray(extractProductName(productsArray), productsArray, pricesArray, categoriesArray, calculateQuantity(productsArray));
    let gtmObj = buildEcommerceObj(ecommerceEvent, 'Step 3', 'id', 'TNA', 'revenue', productObjArray);
    console.log(gtmObj);
    event.preventDefault();
    /*window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(gtmObj);*/
};