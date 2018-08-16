import{calculateQuantity} from './calculateQuantity';
import{buildProductsObjArray} from './buildProductsObjArray';
import{extractMetaTagContent} from './extractMetaTagContent';
import{extractProductName} from './extractProductName';
import{buildProductIndex} from './buildProductIndex';

let categoriesArray = extractMetaTagContent('WT\\.pn_fa', 'Categories meta tag not available').split(';');
let productsArray = extractMetaTagContent('WT\\.pn_sku', 'Product meta tag not available').split(';');
let pricesArray = extractMetaTagContent('WT\\.tx_s', 'Prices meta tag not available').split(';');

export let buildEcommerceObj = {
    'event' : 'checkoutOption',
    'ecommerce' : {
        'actionField' : {
            'step' : extractMetaTagContent('WT\\.si_p', 'Meta tag not available'),
            'option' : 'Receipt'
        },
        'purchase' : {
            'actionField' : {
                'id' : extractMetaTagContent('WT\\.tx_id', 'Meta tag not available'),
                'affiliation' : extractMetaTagContent('WT\\.si_n', 'Meta tag not available'),
                'revenue' : extractMetaTagContent('WT\\.tx_total', 'Meta tag not available'),
                'tax' : '0.00',
                'shipping' : '0.00'
            },
            'products' : buildProductsObjArray(extractProductName(productsArray), buildProductIndex(productsArray, pricesArray, categoriesArray), calculateQuantity(productsArray))
        }
    }
};