import{
    ExtractTagsModule
} from '../discoveryServerSide.js';

let EcommerceObjectModule = (function() {
    return {
        ecommerceObj : {
            'ecommerce': {
                'promoView': {
                    'promotions': [{
                        'id': 'ivp',
                        'name': ExtractTagsModule.getWatermarkMetaTag(),
                        'creative': 'Image viewer',
                        'position': 'Below record description'
                    }]
                }
            },
        }
    }
})();

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports.EcommerceObjectModule = EcommerceObjectModule;
}