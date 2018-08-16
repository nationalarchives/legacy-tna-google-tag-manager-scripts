export let extractProductName = (productsArray) => {
    let nameArray = [];
    for(let i = 0; i < productsArray.length; i ++){
        let slashIndex = productsArray[i].indexOf('/');
        nameArray.push(productsArray[i].slice(0, slashIndex));
    }
    return nameArray;
};