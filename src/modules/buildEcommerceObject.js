import{calculateQuantity} from './calculateQuantity';
import{buildProductsObjArray} from './buildProductsArray';
import{calculateTotalPrice} from './calculateTotalPrice';
import{removeDuplicates} from './removeDuplicates';
import{extractMetaTagContent} from './extractMetaTagContent';
import{extractProductName} from "./extractProductName";

let testArray = [];
let categories = extractMetaTagContent('WT\\.pn_fa', 'Categories meta tag not available');
let products = extractMetaTagContent('WT\\.pn_sku', 'Product meta tag not available');
let prices = extractMetaTagContent('WT\\.tx_s', 'Prices meta tag not available') ;
let categoriesArray = categories.split(',');
let productsArray = products.split(',');
let pricesArray = prices.split(',');

let buildIndex = (product, price, category) => {
    testArray.push(`${product},${price},${category}`);
    return testArray;
};

for(let i = 0; i < productsArray.length; i ++){
    buildIndex(productsArray[i], pricesArray[i], categoriesArray[i])
}

console.log(testArray);

console.log(calculateQuantity(testArray));

console.log(removeDuplicates(testArray));

for(let i = 0; i < testArray[0].split(',').length; i ++){
    console.log(testArray[i].split(',')[i]);
}

export let ecommerceTrackingObj = {
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
                'revenue' : calculateTotalPrice(pricesArray),
                'tax' : '0.00',
                'shipping' : '0.00'
            },
            'products' : buildProductsObjArray(extractProductName(productsArray), removeDuplicates(pricesArray), categoriesArray, removeDuplicates(productsArray), calculateQuantity(productsArray))
        }
    }
};

console.log(ecommerceTrackingObj);

window.dataLayer = window.dataLayer || [];

window.dataLayer.push(ecommerceTrackingObj);