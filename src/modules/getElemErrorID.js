/**
 * ------------  THE NATIONAL ARCHIVES  -----------------
 * JS - Get Element Error ID component
 * Developer: Mihai Diaconita
 **/

export const getElemErrorID = (errArr, errMsg) => {

    for (let i = 0; i < errMsg.length; i++) {
        errArr.push(errMsg[i].getAttribute('id'));
    }

    return errArr;
};