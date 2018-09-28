import{buildEcommerceObj} from './buildEcommerceObj';
import {removeNullValues} from '../removeNullValues';

/*
param: Array
return: function
*/

export let submitOrder = (productsObjArray) => {
    return () => {
        let ecommerceEvent = 'transaction';
        let ecommerceOption = null;

        //Build object and push object to data layer
        let gtmObj = removeNullValues(buildEcommerceObj(ecommerceEvent, ecommerceOption, 'Step 3', null, 'id', 'TNA', 'revenue', productsObjArray));
        //window.dataLayer.push(gtmObj);
        console.log(gtmObj);
        event.preventDefault();
    };
};