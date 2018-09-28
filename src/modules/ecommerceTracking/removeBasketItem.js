import{buildEcommerceObj} from './buildEcommerceObj';
import {removeNullValues} from '../removeNullValues';

/*
param: Array
return: function
*/

export let removeBasketItem = (productsObjArray) => {
    return () => {
        let ecommerceEvent = 'removeFromCart';
        let ecommerceOption = null;
        let currencyCode = 'GBP';
        let step = null;

        //Traverse to the H2 from the event target and extract the item number from the H2
        let targetElement = event.target;
        let grandparent = targetElement.parentElement.parentElement;
        let removedItem = parseInt(grandparent.children[0].innerHTML[0]) - 1;

        //Create a new array containing the removed item only
        let removedItemArray = productsObjArray.slice(removedItem, removedItem + 1);

        //Build object and push object to data layer
        let gtmObj = removeNullValues(buildEcommerceObj(ecommerceEvent, ecommerceOption, step, currencyCode, 'id', 'TNA', 'revenue', removedItemArray));
        //window.dataLayer.push(gtmObj);
        console.log(gtmObj);
    };
};