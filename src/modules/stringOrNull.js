/*
param: Array
return: Boolean
*/

//Checks if an array of arguments is received and loops over each index to validate the data types, else returns false
export let stringOrNull = (args, argsValid = true) => {
    Array.isArray(args) ? args.forEach(index => {
        if(!Array.isArray(index)){
            argsValid = !(typeof index !== 'string' && index !== null);
        }
    }) : argsValid = false;
    return argsValid;
};