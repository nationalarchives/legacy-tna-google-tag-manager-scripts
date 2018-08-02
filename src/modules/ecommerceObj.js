export let ecommerceObject = (id, name, creative, position) => {
    return {
        'ecommerce': {
            'promoView': {
                'promotions': [{
                    'id': id,
                    'name': name,
                    'creative': creative,
                    'position': position
                }]
            }
        }
    };
};