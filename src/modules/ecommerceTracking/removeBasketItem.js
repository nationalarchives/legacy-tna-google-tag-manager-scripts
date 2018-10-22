import{buildEcommerceObj} from './buildEcommerceObj';
import {removeNullValues} from '../removeNullValues';

/*
param: Array
return: function
*/

export let removeBasketItem = (productsObjArray) => {
    return () => {
        let purchaseProperty = 'remove';
        let ecommerceEvent = 'removeFromCart';
        let ecommerceOption = null;
        let currencyCode = 'GBP';
        let step = null;
        let id = null;
        let affiliation = null;
        let revenue = null;
        let tax = null;
        let shipping = null;

        //Traverse to the H2 from the event target and extract the item number from the H2
        let targetElement = event.target;
        let grandparent = targetElement.parentElement.parentElement;
        let removeItemIndex = parseInt(grandparent.children[0].innerHTML[0]) - 1;

        //Create a new array containing the removed item only
        let removedItem = productsObjArray.slice(removeItemIndex, removeItemIndex + 1);

        //Build object and push object to data layer
        let gtmObj = removeNullValues(buildEcommerceObj(purchaseProperty, ecommerceEvent, ecommerceOption, step, currencyCode, id, affiliation, revenue, tax, shipping, removedItem));
        window.dataLayer.push(gtmObj);
        event.preventDefault();
    };
};