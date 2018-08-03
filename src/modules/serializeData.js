/**
 * ------------  THE NATIONAL ARCHIVES  -----------------
 * JS - Serialise Data component
 * Developer: Mihai Diaconita
 **/

export const serializeData = (elemID, _arr, _errArr) => {

    const form = (elemID !== '') ? `ID: ${elemID}  > ` : '',
        elem = (_arr.length !== 0) ? `Field: ${_arr.join(' > ')}` : '',
        error = (_errArr.length !== 0) ? `Error: ${_errArr.join(' > ')}` : '';

    return `${form}${elem}${error}`;
};