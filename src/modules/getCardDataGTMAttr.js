/**
 * ------------  THE NATIONAL ARCHIVES  -----------------
 * JS - Get Card Custom Attributes component
 * Developer: Mihai Diaconita
 **/

/*
* @param: Array, String
* @return: Array
* */

import {pushInDataLayer} from './pushInDataLayer';

export const getCardDataGTMAttr = (arr, ...elem) => {
    const el = document.querySelectorAll(...elem);
    // Guard against wrong data type in the function parameter
    if (!!arr || Array.isArray(arr)) {
        return (...args) => {
            for (let element of el) {
                element.addEventListener('click', () => {
                    // If the array is empty do nothing or otherwise clear it
                    (arr.length !== 0) ? arr = [] : '';
                    // Populate array with new data-gtm values
                    args.forEach((arg) => {
                        arr.push(element.getAttribute(arg));
                    });
                    const obj = {
                        'event': 'Promotions',
                        'eventCategory': arr[0],
                        'eventAction': arr[3],
                        'eventLabel': arr[2],
                    };
                    pushInDataLayer(obj);
                });
            }
            return arr;
        }; // Output format example ["homepage_card_News", "card_position_1", "card_1", "Prime Minister’s papers from 1993 released"]
    } else {
        return false;
    }
};