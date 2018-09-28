import{buildEcommerceObj} from './buildEcommerceObj';
import {removeNullValues} from '../removeNullValues';

export let removeBasketItem = (productsObjArray) => {
    return () => {
        let ecommerceEvent = 'removeFromCart';
        let ecommerceOption = null;
        let currencyCode = 'GBP';
        let step = null;
        let targetElement = event.target;
        let grandparent = targetElement.parentElement.parentElement;
        let removedItem = parseInt(grandparent.children[0].innerHTML[0]) - 1;
        let removedItemArray = productsObjArray.slice(removedItem, removedItem + 1);
        let gtmObj = removeNullValues(buildEcommerceObj(ecommerceEvent, ecommerceOption, step, currencyCode, 'id', 'TNA', 'revenue', removedItemArray));
        console.log(gtmObj);
        /*window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(gtmObj);*/
    };
};