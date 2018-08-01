import {extractMetaTagContent} from './extractMetaTagContent';

export let ecommerceObject = {
    'ecommerce': {
        'promoView': {
            'promotions': [{
                'id': 'ivp',
                'name': extractMetaTagContent('DCSext\\.imgviewer', null),
                'creative': 'Image viewer',
                'position': 'Below record description'
            }]
        }
    }
};