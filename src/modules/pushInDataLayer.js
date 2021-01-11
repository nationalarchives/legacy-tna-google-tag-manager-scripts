/**
 * ------------  THE NATIONAL ARCHIVES  -----------------
 * JS - Push In DataLayer component
 * Developer: Mihai Diaconita
 **/

export const pushInDataLayer = (obj) => {
    if(!window.dataLayer){
        window.dataLayer = [];
    }
    (!!obj || typeof obj === 'object') ? window.dataLayer.push(obj) : '';

    return obj;
};
