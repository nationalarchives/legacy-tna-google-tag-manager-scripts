import{extractMetaTagContent} from '../extractMetaTagContent';

export let verifyOption = () => {
    let step = extractMetaTagContent('WT\\.si_p', 'Meta tag not available');
    let ecommerceOption;

    if(step === 'Step 4'){
        ecommerceOption = 'Receipt';
    }
    else{
        ecommerceOption = null;
    }

    return ecommerceOption;
};