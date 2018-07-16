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

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(obj);

    return obj;

};

module.exports.promoObjFunc = promoObjFunc;