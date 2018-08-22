/*
param: Array
return: Array
*/

export let extractProductName = productsArray => {

    //Checks that the parameter is an array
    if(Array.isArray(productsArray)) {
        let nameArray = [];

        //Loops through the products array at slices each index at the position of the first forward slash to extract name
        //E.g. AIR 50/163/32 -----> AIR 50
        for (let product of productsArray) {
            let slashIndex = product.indexOf('/');
            nameArray.push(product.slice(0, slashIndex));
        }
        return nameArray;
    }
    else{
        return 'The parameter is of the incorrect data type.';
    }
};