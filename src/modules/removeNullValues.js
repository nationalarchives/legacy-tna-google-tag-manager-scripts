export let removeNullValues = (obj) => {
    Object.keys(obj).forEach((key) => {

        // Checks if object property is of type object. If so, recursively call the removeNullValues function on it to access nested properties
        if (obj[key] === Object(obj[key])) {
            removeNullValues(obj[key]);
        }

        // If not, check if the property is null or undefined and delete it if this is true
        else if(obj[key] === null || obj[key] === undefined) {
            delete obj[key];
        }

        // Once null properties are removed from an object, it is possible that the object is empty. If so, delete the object
        if(obj[key] === Object(obj[key])){
            if(Object.keys(obj[key]).length === 0){
                delete obj[key];
            }
        }
    });

    return obj;
};