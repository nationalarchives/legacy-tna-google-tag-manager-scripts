import {extractMetaTagContent} from './modules/extractMetaTagContent';

let ecommerceTrackingObj = {
    'event' : 'checkoutOption',
    'ecommerce' : {
        'actionField' : {
            'step' : extractMetaTagContent('WT\\.si_p', 'Meta tag not available'),
            'option' : 'Receipt'
        },
        'purchase' : {
            'actionField' : {
                'id' : extractMetaTagContent('WT\\.tx_id', 'Meta tag not available'),
                'affiliation' : extractMetaTagContent('WT\\.si_n', 'Meta tag not available'),
                'revenue' : extractMetaTagContent('WT\\.tx_total', 'Meta tag not available'),
                'tax' : '0.00',
                'shipping' : '0.00'
            },
            'products' : [{
                'name' : extractMetaTagContent('WT\\.pn_sku', 'Meta tag not available'),
                'price' : extractMetaTagContent('WT\\.tx_s', 'Meta tag not available'),
                'brand' : extractMetaTagContent('WT\\.pn_gr', 'Meta tag not available'),
                'category' : extractMetaTagContent('WT\\.pn_fa', 'Meta tag not available'),
                'variant' : extractMetaTagContent('WT\\.pn_sku', 'Meta tag not available'),
                'quantity' : extractMetaTagContent('WT\\.tx_u', 'Meta tag not available')
            }]
        }
    }
};

window.dataLayer = window.dataLayer || [];
window.dataLayer.push(ecommerceTrackingObj);