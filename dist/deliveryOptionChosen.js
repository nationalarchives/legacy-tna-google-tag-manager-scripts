'use strict';

require('babel-polyfill');

var deliveryOptionButton = document.querySelector('.order-option-wrapper a'); /**
                                                                               * ------------  THE NATIONAL ARCHIVES  -----------------
                                                                               * JS - getting the data attributes when the user clicks on a delivery option in Discovery Details page for Google Tag Manager
                                                                               * Developer: Punal Chotrani
                                                                               **/


deliveryOptionButton.addEventListener('click', function (e) {
    e.preventDefault();
    var $discovery = 'Discovery',
        $eventAction = 'Delivery option chosen',
        $eventLabel = undefined.dataset.webtrendsCall;

    return function () {
        window.dataLayer.push({
            'event': $discovery,
            'eventCategory': $discovery,
            'eventAction': $eventAction,
            'eventLabel': $eventLabel
        });
    };
}, false);
//# sourceMappingURL=deliveryOptionChosen.js.map
