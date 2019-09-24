/*
param: string
return: string
*/

export let verifyEvent = (step) => {
    let ecommerceEvent;

    //Checks the step of the ecommerce user journey and sets the ecommerce event accordingly
    switch(step){
    case '1':
        ecommerceEvent = 'checkout';
        break;
    case '2':
        ecommerceEvent = 'checkout';
        break;
    case '4':
        ecommerceEvent = 'checkoutOption';
        break;
    default:
        ecommerceEvent = 'Invalid step';
        break;
    }
    return ecommerceEvent;
};
