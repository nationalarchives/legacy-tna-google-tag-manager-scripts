import {extractMetaTagContent} from './extractMetaTagContent';

export let buildProductsObjArray = (names, products, quantities) => {
    let objArray = [];
    for(let i = 0; i < products.length; i ++){
        objArray.push({
            'name' : names[i],
            'price' : products[i].split(',')[1],
            'brand' : extractMetaTagContent('WT\\.pn_gr', 'Meta tag not available'),
            'category' : products[i].split(',')[2],
            'variant' : products[i].split(',')[0],
            'quantity': quantities[i]
        });
    }
    return objArray;
};