import{buildEcommerceObj} from './buildEcommerceObj';
import {removeNullValues} from '../removeNullValues';

/*
param: Array
return: function
*/

export let submitOrder = (productsObjArray, totalPrice) => {
    return () => {
        let purchaseProperty = 'purchase';
        let ecommerceEvent = 'transaction';
        let ecommerceOption = null;
        let currencyCode = null;
        let id = null;
        let affiliation = 'Discovery store';
        let revenue = totalPrice;
        let tax = '0';
        let shipping = '0';

        //Build object and push object to data layer
        let gtmObj = removeNullValues(buildEcommerceObj(purchaseProperty, ecommerceEvent, ecommerceOption, 'Step 3', currencyCode, id, affiliation, revenue, tax, shipping, productsObjArray));
        window.dataLayer.push(gtmObj);
        event.preventDefault();
    };
};