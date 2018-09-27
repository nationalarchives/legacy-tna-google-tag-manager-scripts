import{extractMetaTagContent} from '../extractMetaTagContent';
import{extractProductName} from './extractProductName';
import{calculateQuantity} from './calculateQuantity';
import{buildProductsObjArray} from './buildProductsObjArray';
import{buildEcommerceObj} from './buildEcommerceObj';
import {removeNullValues} from '../removeNullValues';

let categoriesArray = extractMetaTagContent('WT\\.pn_fa', 'Categories meta tag not available').split(';');
let productsArray = extractMetaTagContent('WT\\.pn_sku', 'Product meta tag not available').split(';');
let pricesArray = extractMetaTagContent('WT\\.tx_s', 'Prices meta tag not available').split(';');

let nameArray = extractProductName(productsArray);
let quantities = calculateQuantity(productsArray);
let productObjArray = buildProductsObjArray(nameArray, productsArray, pricesArray, categoriesArray, quantities);

export let removeBasketItem = () => {
    let ecommerceEvent = 'removeFromCart';
    let ecommerceOption = null;
    let currencyCode = 'GBP';
    let step = null;
    let targetElement = event.target;
    let grandparent = targetElement.parentElement.parentElement;
    let removedItem = parseInt(grandparent.children[0].innerHTML[0]) - 1;
    let removedItemArray = productObjArray.slice(removedItem, removedItem + 1);
    let gtmObj = removeNullValues(buildEcommerceObj(ecommerceEvent, ecommerceOption, step, currencyCode, 'id', 'TNA', 'revenue', removedItemArray));
    console.log(gtmObj);
    /*window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(gtmObj);*/
};