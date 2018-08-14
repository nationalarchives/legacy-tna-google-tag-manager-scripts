export let calculateTotalPrice = (prices) => {
    let total = 0;
    for(let i = 0; i < prices.length; i ++){
        total = total + parseFloat(prices[i]);
    }
    return total;
};