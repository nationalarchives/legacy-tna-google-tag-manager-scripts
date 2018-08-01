export let removeNullValues = (obj) => {
    for(let property in obj){
        if(obj[property] === null || obj[property] === undefined){
            delete obj[property];
        }
    }
    return obj;
};