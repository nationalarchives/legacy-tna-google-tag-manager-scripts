/*
param: Array
return: Object
*/

export let calculateQuantity = function (productsArray) {
    let quantities = {};

    //Checks that the parameter is an array
    if (Array.isArray(productsArray)) {

        //Loops over each index
        productsArray.forEach((index, item) => {

            //If the index does not exist as a property in the quantities object, create a property from the index
            //Else add the index to the pre-existing property
            (!quantities[index]) ? quantities[index] = [item] : quantities[index].push(item);
        });
        return quantities;
    }
    else{
        return 'The parameter is of the incorrect data type.';
    }
};