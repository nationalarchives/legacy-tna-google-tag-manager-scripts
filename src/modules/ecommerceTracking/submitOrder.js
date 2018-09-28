import{buildEcommerceObj} from './buildEcommerceObj';
import {removeNullValues} from '../removeNullValues';

export let submitOrder = (productsObjArray) => {
    return () => {
        let ecommerceEvent = 'transaction';
        let ecommerceOption = null;
        let gtmObj = removeNullValues(buildEcommerceObj(ecommerceEvent, ecommerceOption, 'Step 3', null, 'id', 'TNA', 'revenue', productsObjArray));
        console.log(gtmObj);
        event.preventDefault();
        /*window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(gtmObj);*/
    };
};