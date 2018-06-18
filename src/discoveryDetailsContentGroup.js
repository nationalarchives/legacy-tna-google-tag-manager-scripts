/**
 * ------------  THE NATIONAL ARCHIVES  -----------------
 * JS - getting the content group in Discovery Details page for Google Tag Manager
 * Developer: Punal Chotrani
 **/

let discoveryDetailsContentGroup = () => {
    let metaTag = document.querySelector('meta[name=WT\\.cg_n]'),
        metaDataContent = metaTag.getAttribute('content'),
        //metaDataName = $metaTag.getAttribute('name'),// To be used later
        discovery = 'Discovery';

    return {
        'event': discovery,
        'contentGroup': metaDataContent
        //'eventCategory' : discovery,
        //'eventAction'   : metaDataName,
        //'eventLabel'    : metaDataContent,
    };
};

let metaTag = document.querySelector('meta[name=WT\\.cg_n]');
if (metaTag) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(discoveryDetailsContentGroup());
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports.discoveryDetailsContentGroup = discoveryDetailsContentGroup;
}
