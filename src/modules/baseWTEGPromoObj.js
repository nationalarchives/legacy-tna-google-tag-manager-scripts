export let baseWTEGObjFunc = (id, name, creative, position) => {
    return {
        'promoView': {
            'promotions': [{
                'id': id,
                'name': name,
                'creative': creative,
                'position': position
            }]
        }
    };
};
