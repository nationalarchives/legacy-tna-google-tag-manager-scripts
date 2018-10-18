/*
param: string
return: string
*/

export let verifyOption = (step) => {

    //Checks the step of the ecommerce user journey and sets the ecommerce option accordingly
    return (step === 'Step 4') ? 'Receipt' : null;
};