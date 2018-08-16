import {extractMetaTagContent} from './extractMetaTagContent';

export let buildProductsObjArray = (names, productsPricesAndCategories, quantities) => {
    let objArray = [];
    for(let i = 0; i < productsPricesAndCategories.length; i ++){
        objArray.push({
            'name' : names[i],
            'price' : productsPricesAndCategories[i].split(',')[1],
            'brand' : extractMetaTagContent('WT\\.pn_gr', 'Meta tag not available'),
            'category' : productsPricesAndCategories[i].split(',')[2],
            'variant' : productsPricesAndCategories[i].split(',')[0],
            'quantity': quantities[productsPricesAndCategories[i].split(',')[0]].length
        });
    }
    return objArray;
};