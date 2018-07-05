let promoObjFunc = (e, id, name, creative, position) => {
    return {
        'event' : e,
        'ecommerce' : {
            'promoClick' : {
                'promotions' : [{
                    'id'        : id,
                    'name'      : name,
                    'creative'  : creative,
                    'position'  : position
                }]
            }
        }
    };
};

module.exports.promoObjFunc = promoObjFunc;