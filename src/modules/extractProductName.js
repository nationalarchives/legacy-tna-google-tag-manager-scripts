import {removeDuplicates} from './removeDuplicates';

export let extractProductName = (productsArray) => {
    let productNameArray = removeDuplicates(productsArray);
    for(let i = 0; i < productNameArray.length; i ++){
        let slashIndex = productNameArray[i].indexOf('/');
        productNameArray[i] = productNameArray[i].slice(0, slashIndex);
    }
    return productNameArray;
};