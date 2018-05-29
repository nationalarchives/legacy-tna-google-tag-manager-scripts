'use strict';

/**
 * ------------  THE NATIONAL ARCHIVES  -----------------
 * JS - getting the data attributes when the user clicks on a delivery option in Discovery Details page for Google Tag Manager
 * Developer: Punal Chotrani
 **/

var deliveryOptionButton = document.querySelector('.order-option-wrapper a');

deliveryOptionButton.addEventListener('click', function (e) {
    e.preventDefault();
    var $discovery = 'Discovery',
        $eventAction = 'Delivery option chosen',
        $eventLabel = this.dataset.webtrendsCall;

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
