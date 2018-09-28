export let verifyEvent = (step) => {
    let ecommerceEvent;

    switch(step){
    case 'Step 1':
        ecommerceEvent = 'checkout';
        break;
    case 'Step 2':
        ecommerceEvent = 'checkout';
        break;
    case 'Step 4':
        ecommerceEvent = 'checkoutOption';
        break;
    default:
        ecommerceEvent = 'Invalid step';
        break;
    }

    return ecommerceEvent;
};