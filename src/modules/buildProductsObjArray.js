/*
param: Array, Array, Array, Array, Array
return: Array of Objects
*/

import {extractMetaTagContent} from './extractMetaTagContent';

export let buildProductsObjArray = (names, productsArray, pricesArray, categoriesArray, quantities) => {
    let productsObjArray = [];
    for(let i = 0; i < productsArray.length; i ++){
        productsObjArray.push({
            'name' : names[i],
            'price' : pricesArray[i],
            'brand' : extractMetaTagContent('WT\\.pn_gr', 'Meta tag not available'),
            'category' : categoriesArray[i],
            'variant' : productsArray[i],
            'quantity': quantities[productsArray[i].split(',')[0]].length
        });
    }
    return productsObjArray;
};