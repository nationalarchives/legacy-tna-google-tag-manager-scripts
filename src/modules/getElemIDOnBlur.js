/**
 * ------------  THE NATIONAL ARCHIVES  -----------------
 * JS - Get Element ID On Blur component
 * Developer: Mihai Diaconita
 **/

export const getElemIDOnBlur = (formElem, arr) => {
    for (let i = 0; i < formElem.length; i++) {
        formElem[i].addEventListener('blur', event => event.target.value === '' ? true : arr.push(event.target.id), true);
    }

    return arr;
};