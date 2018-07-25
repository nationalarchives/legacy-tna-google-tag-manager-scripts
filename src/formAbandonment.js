/**
 * ------------  THE NATIONAL ARCHIVES  -----------------
 * JS - Form abandonment on contact forms
 * Developer: Mihai Diaconita
 **/
import { serializeData } from './modules/serializeData';
import { getElemErrorID } from './modules/getElemErrorID';
import { getElemIDOnBlur } from './modules/getElemIDOnBlur';

const _array = [],
    _errorArray = [],
    className = 'form-abandonment',
    form = document.getElementsByClassName(className),
    errorMsg = document.getElementsByClassName('form-error');
let formID = [];

if (form[0]) {
    // Get the ID of the form
    formID = form[0].getAttribute('id');

    // Get the ID of the elements on blur
    getElemIDOnBlur(form, _array);

    window.onbeforeunload = () => {
        // Check for error message
        getElemErrorID(_errorArray, errorMsg);

        // If the form exists push all the data into dataLayer
        if (formID !== undefined) {
            window.dataLayer.push({
                'event': 'formAbandonment',
                'eventCategory': 'Form Abandonment',
                'eventAction': serializeData(formID, _array, _errorArray)
            });
        }
    };
}

