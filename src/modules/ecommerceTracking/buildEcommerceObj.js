import{stringOrNull} from '../stringOrNull';

/*
param: String, String, String, String, String
return: Object
*/

//Uses parameters to populate certain properties of buildEcommerceObj when the function is called
export let buildEcommerceObj = (ecommerceEvent, option, step, currencyCode, id, affiliation, revenue, tax, shipping, products) => {
    if(stringOrNull(ecommerceEvent) && stringOrNull(id) && stringOrNull(affiliation) && stringOrNull(revenue) && stringOrNull(tax) && stringOrNull(shipping) && Array.isArray(products)) {
        return {
            'event': ecommerceEvent,
            'ecommerce': {
                'actionField': {
                    'step': step,
                    'option': option
                },
                'currencyCode': currencyCode,
                'purchase': {
                    'actionField': {
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