export let verifyOption = (step) => {
    let ecommerceOption;

    if(step === 'Step 4'){
        ecommerceOption = 'Receipt';
    }
    else{
        ecommerceOption = null;
    }

    return ecommerceOption;
};