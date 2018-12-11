import{stringOrNull} from '../stringOrNull';

/*
param: String, String, String, String, String
return: Object
*/

//Uses parameters to populate certain properties of buildEcommerceObj when the function is called
export let buildEcommerceObj = (...args) => {

    //Destructure args
    //const[ecommerceEvent, ecommerceOption, step, purchaseProperty, id, affiliation, revenue, products] = args;

    const[ecommerceEvent, ecommerceOption, step, id, affiliation, revenue, tax, shipping, products] = args;

    if(stringOrNull(args) && Array.isArray(products)) {
        return {
            'event': ecommerceEvent,
            'ecommerce': {
                [ecommerceOption]: {
                    'actionField': {
                        'step': step,
                        'id': id,
                        'affiliation': affiliation,
                        'revenue': revenue,
                        'tax': tax,
                        'shipping': shipping
                    },
                    'products': products,
                }
            }
        };
    }
    else{
        return 'The parameters are of the incorrect data type.';
    }
};