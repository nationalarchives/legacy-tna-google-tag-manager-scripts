/*
param: Array, Array, Array, Array, Array
return: Array of Objects
*/

import {extractMetaTagContent} from '../extractMetaTagContent';

export let buildProductsObjArray = (names, productsArray, pricesArray, categoriesArray, quantities) => {

    //Checks that the function receives 4 Arrays and an Object
    if(Array.isArray(names) && Array.isArray(productsArray) && Array.isArray(pricesArray) && Array.isArray(categoriesArray) && typeof quantities === 'object') {
        let productsObjArray = [];

        //Loops over each array/object and each iteration creates an index, setting the values of the respective properties
        //E.g. The 'name' property of the first index in productsObjArray will equal the first index in the 'names' array
        for (let i = 0; i < productsArray.length; i++) {
            productsObjArray.push({
                'name': names[i],
                'price': pricesArray[i],
                'brand': extractMetaTagContent('WT\\.pn_gr'),
                'category': categoriesArray[i],
                'variant': productsArray[i],
                'quantity': quantities[productsArray[i].split(',')[0]].length
            });
        }
        return productsObjArray;
    }
    else{
        return 'The parameters are of the incorrect data type.';
    }
};