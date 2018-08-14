export let extractProductName = (productsArray) => {
    for(let i = 0; i < productsArray.length; i ++){
        let slashIndex = productsArray[i].indexOf('/');
        productsArray[i] = productsArray[i].slice(0, slashIndex);
    }
    return productsArray;
};