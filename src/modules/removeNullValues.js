export let removeNullValues = (object_to_traverse) => {
    Object.keys(object_to_traverse).forEach((i) => {
        if (object_to_traverse[i] === Object(object_to_traverse[i])) {
            removeNullValues(object_to_traverse[i]);
        }
        else if(object_to_traverse[i] === null){
            delete object_to_traverse[i];
        }
    });
};