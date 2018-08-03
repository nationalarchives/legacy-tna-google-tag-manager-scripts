/**
 * ------------  THE NATIONAL ARCHIVES  -----------------
 * JS - Push In DataLayer component
 * Developer: Mihai Diaconita
 **/

export const pushInDataLayer = (obj) => {
    let wd = window.dataLayer || [];

    (!!obj || typeof obj === 'object') ? wd.push(obj) : '';

    return obj;
};