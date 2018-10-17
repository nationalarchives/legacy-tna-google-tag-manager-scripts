export let watermarkObject = (...args) => {
    const[id, name, creative, position] = args;
    return {
        'ecommerce': {
            'promoView': {
                'promotions': [{
                    'id'      : id,
                    'name'    : name,
                    'creative': creative,
                    'position': position
                }],
            }
        }
    };
};