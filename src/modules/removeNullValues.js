export let removeNullValues = (obj) => {
    Object.keys(obj).forEach((key) => {
        if (obj[key] === Object(obj[key])) {
            removeNullValues(obj[key]);
        }
        else if(obj[key] === null || obj[key] === undefined){
            delete obj[key];
        }
    });
    return obj;
};