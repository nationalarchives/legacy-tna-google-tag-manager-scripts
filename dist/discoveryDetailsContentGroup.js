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
        return function () {
            window.dataLayer.push({
                'event': $discovery,
                'eventCategory': $discovery,
                'eventAction': $metaDataName,
                'eventLabel': $metaDataContent,
                'ContentGroup': $metaDataContent
            });
        };
    }
};

discoveryDetailsContentGroup();
//# sourceMappingURL=discoveryDetailsContentGroup.js.map
