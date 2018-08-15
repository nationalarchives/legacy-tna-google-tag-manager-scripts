export let calculateTotalPrice = (pricesArray) => {
    let total = 0;
    for(let i = 0; i < pricesArray.length; i ++){
        total = total + parseFloat(pricesArray[i]);
    }
    return total;
};