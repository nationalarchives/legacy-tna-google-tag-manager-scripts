import {extractMetaTagContent} from "./extractMetaTagContent";

export let buildProductsObjArray = (names, prices, categories, products, quantities) => {
    let objArray = [];
    for(let i = 0; i < products.length; i ++){
        objArray.push({
            'name' : names[i],
            'price' : prices[i],
            'brand' : extractMetaTagContent('WT\\.pn_gr', 'Meta tag not available'),
            'category' : categories[i],
            'variant' : products[i],
            'quantity': quantities[i]
        });
    }
    return objArray;
};