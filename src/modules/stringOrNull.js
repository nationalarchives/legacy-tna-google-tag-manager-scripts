/*
param: Array
return: Boolean
*/

//Loops through the args array and verifies that each parameter is of the correct data type
export let stringOrNull = args => {
    let argsValid = true;
    if(Array.isArray(args)){
        args.forEach(index => {
            if(!Array.isArray(index)){
                if(typeof index !== 'string' && index !== null){
                    argsValid = false;
                }
            }
        });
    }
    else{
        argsValid = false;
    }
    return argsValid;
};