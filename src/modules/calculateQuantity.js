export let calculateQuantity = function (productsArray) {
    let quantities = {};
    if (productsArray instanceof Array) {
        productsArray.forEach(function (index, item) {
            if (!quantities[index]) {
                quantities[index] = [item];
            } else {
                quantities[index].push(item);
            }
        });
    }
    return quantities;
};