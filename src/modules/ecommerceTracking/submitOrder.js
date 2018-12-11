import{buildEcommerceObj} from './buildEcommerceObj';
import {removeNullValues} from '../removeNullValues';

/*
param: Array
return: function
*/

export let submitOrder = (productsObjArray, totalPrice) => {
    return () => {
        let ecommerceEvent = 'transaction';
        let ecommerceOption = 'checkout';
        let step = 'Step 3';
        let id = null;
        let affiliation = null;
        let revenue = null;
        let tax = null;
        let shipping = null;

        //Build object and push object to data layer
        let gtmObj = removeNullValues(buildEcommerceObj(ecommerceEvent, ecommerceOption, step, id, affiliation, revenue, tax, shipping, productsObjArray));
        console.log(gtmObj);
        event.preventDefault();
        //window.dataLayer.push(gtmObj);
    };
};