import{buildEcommerceObj} from './buildEcommerceObj';
import{removeNullValues} from '../removeNullValues';
import{populateActionField} from './populateActionField';

/*
param: Array
return: function
*/

export let submitOrder = (productsObjArray) => {
    return () => {
        let ecommerceEvent = 'transaction';
        let ecommerceOption = 'checkout';
        let step = 'Step 3';
        let{id, affiliation, revenue, tax, shipping} = populateActionField(step);

        //Build object and push object to data layer
        let gtmObj = removeNullValues(buildEcommerceObj(ecommerceEvent, ecommerceOption, step, id, affiliation, revenue, tax, shipping, productsObjArray));

        console.log(gtmObj);
        event.preventDefault();
        //window.dataLayer.push(gtmObj);
    };
};