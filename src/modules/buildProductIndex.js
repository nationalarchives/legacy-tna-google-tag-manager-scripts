let productsPricesAndCategories = [];

export let buildProductIndex = (productArray, priceArray, categoryArray) => {
    for(let i = 0; i < productArray.length; i ++){
        productsPricesAndCategories.push(productArray[i] + ',' + priceArray[i] + ',' + categoryArray[i]);
    }
    return productsPricesAndCategories;
};