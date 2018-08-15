import {extractMetaTagContent} from './extractMetaTagContent';

export let buildProductsObjArray = (names, productsPricesAndVariants, quantities) => {
    let objArray = [];
    for(let i = 0; i < productsPricesAndVariants.length; i ++){
        objArray.push({
            'name' : names[i],
            'price' : productsPricesAndVariants[i].split(',')[1],
            'brand' : extractMetaTagContent('WT\\.pn_gr', 'Meta tag not available'),
            'category' : productsPricesAndVariants[i].split(',')[2],
            'variant' : productsPricesAndVariants[i].split(',')[0],
            'quantity': quantities[productsPricesAndVariants[i].split(',')[0]].length
        });
    }
    return objArray;
};