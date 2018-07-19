/**
 * ------------  THE NATIONAL ARCHIVES  -----------------
 * JS - Form abandonment on contact forms
 * Developer: Mihai Diaconita
 **/

import { getFormIDByClassName } from './modules/getFormIDByClassName';
import { getElemIDOnBlur } from './modules/getElemIDOnBlur';
import { getElemErrorID } from './modules/getElemErrorID';

let _array = [],
    _errorArray = [],
    form = document.getElementsByClassName('form-abandonment'),
    errorMsg = document.getElementsByClassName('form-error');

getElemIDOnBlur(form, _array);
getElemErrorID(_errorArray, errorMsg);

console.log(_array);
console.log(_errorArray);

