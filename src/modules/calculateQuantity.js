export let calculateQuantity = function (products) {
    let quantitiesArray = [];
    let quantities = {};
    if (products instanceof Array) {
        products.forEach(function (index, item) {
            if (!quantities[index]) {
                quantities[index] = [item];
            } else {
                quantities[index].push(item);
            }
        });
    }

    for(let property in quantities){
        quantitiesArray.push(quantities[property].length);
    }

    return quantitiesArray;
};