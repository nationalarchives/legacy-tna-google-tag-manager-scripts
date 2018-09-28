/*
param: string
return: string
*/

export let verifyOption = (step) => {
    let ecommerceOption;

    //Checks the step of the ecommerce user journey and sets the ecommerce option accordingly
    if(step === 'Step 4'){
        ecommerceOption = 'Receipt';
    }
    else{
        ecommerceOption = null;
    }
    return ecommerceOption;
};