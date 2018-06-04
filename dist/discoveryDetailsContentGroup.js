'use strict';

/**
 * ------------  THE NATIONAL ARCHIVES  -----------------
 * JS - getting the content group in Discovery Details page for Google Tag Manager
 * Developer: Punal Chotrani
 **/

var discoveryDetailsContentGroup = function discoveryDetailsContentGroup() {
    var metaTag = document.querySelector('meta[name=WT\\.cg_n]'),
        $metaDataContent = metaTag.getAttribute('content'),
        $metaDataName = metaTag.getAttribute('name'),
        $discovery = 'Discovery';

    if ($metaDataName === 'WT.cg_n') {
        return {
            'event': $discovery,
            'eventCategory': $discovery,
            'eventAction': $metaDataName,
            'eventLabel': $metaDataContent,
            'ContentGroup': $metaDataContent
        };
    }
};

//k gets the returned obect
//let k = discoveryDetailsContentGroup();

var helloWorld = function helloWorld() {
    return 'Hello World';
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports.helloWorld = helloWorld;
    module.exports.k = discoveryDetailsContentGroup;
}
//# sourceMappingURL=discoveryDetailsContentGroup.js.map
