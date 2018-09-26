import{extractMetaTagContent} from '../extractMetaTagContent';

export let verifyEvent = () => {
    let step = extractMetaTagContent('WT\\.si_p', 'Meta tag not available');
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