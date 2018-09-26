export let removeNullValues = (obj) => {
    if(typeof obj === 'object') {
        for (let property in obj) {
            if (obj[property] === null || obj[property] === undefined) {
                delete obj[property];
            }
        }
        return obj;
    }
};
