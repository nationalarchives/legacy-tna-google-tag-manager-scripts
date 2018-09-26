/*
param: String, String, String, String, String
return: Object
*/

//Uses parameters to populate certain properties of buildEcommerceObj when the function is called
export let buildEcommerceObj = (ecommerceEvent, option, step, id, affiliation, revenue, products) => {
    if(typeof ecommerceEvent === 'string' && typeof step === 'string' && typeof id === 'string' && typeof affiliation === 'string' && typeof revenue === 'string' && Array.isArray(products)) {
        return {
            'event': ecommerceEvent,
            'ecommerce': {
                'actionField': {
                    'step': step,
                    'option': option
                },
                'purchase': {
                    'actionField': {
                        'id': id,
                        'affiliation': affiliation,
                        'revenue': revenue,
                        'tax': '0.00',
                        'shipping': '0.00'
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