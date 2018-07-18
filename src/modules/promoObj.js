let promoObjFunc = (e, id, name, creative, position) => {

    let obj = {
        'event': e,
        'ecommerce': {
            'promoClick': {
                'promotions': [{
                    'id': id,
                    'name': name,
                    'creative': creative,
                    'position': position
                }]
            }
        }
    };

    return obj;

};

module.exports.promoObjFunc = promoObjFunc;