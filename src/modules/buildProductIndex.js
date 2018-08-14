let testArray = [];

export let buildProductIndex = (productArray, priceArray, categoryArray) => {
    for(let i = 0; i < productArray.length; i ++){
        testArray.push(productArray[i] + ',' + priceArray[i] + ',' + categoryArray[i]);
    }
    return testArray;
};