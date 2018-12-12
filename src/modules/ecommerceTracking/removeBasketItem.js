import{buildEcommerceObj} from './buildEcommerceObj';
import {removeNullValues} from '../removeNullValues';
import {populateActionField} from './populateActionField';

/*
param: Array
return: function
*/

export let removeBasketItem = (productsObjArray) => {
    return () => {
        let ecommerceOption = 'remove';
        let ecommerceEvent = 'removeFromCart';
        let step = null;
        let{id, affiliation, revenue, tax, shipping} = populateActionField(step);

        //Traverse to the H2 from the event target and extract the item number from the H2
        let targetElement = event.target;
        let grandparent = targetElement.parentElement.parentElement;
        let removeItemIndex = parseInt(grandparent.children[0].innerHTML[0]) - 1;

        //Create a new array containing the removed item only
        let removedItem = productsObjArray.slice(removeItemIndex, removeItemIndex + 1);

        //Build object and push object to data layer
        let gtmObj = removeNullValues(buildEcommerceObj(ecommerceEvent, ecommerceOption, step, id, affiliation, revenue, tax, shipping, removedItem));

        console.log(gtmObj);
        event.preventDefault();
        //window.dataLayer.push(gtmObj);
    };
};