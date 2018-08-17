import{calculateQuantity} from './modules/calculateQuantity';
import{buildProductsObjArray} from './modules/buildProductsObjArray';
import{extractMetaTagContent} from './modules/extractMetaTagContent';
import{extractProductName} from './modules/extractProductName';
import{buildEcommerceObj} from './modules/buildEcommerceObj';

let categoriesArray = extractMetaTagContent('WT\\.pn_fa', 'Categories meta tag not available').split(';');
let productsArray = extractMetaTagContent('WT\\.pn_sku', 'Product meta tag not available').split(';');
let pricesArray = extractMetaTagContent('WT\\.tx_s', 'Prices meta tag not available').split(';');

window.dataLayer = window.dataLayer || [];

window.dataLayer.push(buildEcommerceObj(
    extractMetaTagContent('WT\\.si_p', 'Meta tag not available'),
    extractMetaTagContent('WT\\.tx_id', 'Meta tag not available'),
    extractMetaTagContent('WT\\.si_n', 'Meta tag not available'),
    extractMetaTagContent('WT\\.tx_total', 'Meta tag not available'),
    buildProductsObjArray(extractProductName(productsArray), productsArray, pricesArray, categoriesArray, calculateQuantity(productsArray))
));