'use strict';

/**
 * ------------  THE NATIONAL ARCHIVES GTM SCRIPTS  -----------------
 * JS - getting the data attributes when the user clicks on a delivery option in Discovery Details page for Google Tag Manager
 * Developer: Punal Chotrani
 **/

var deliveryOptionChosen = function deliveryOptionChosen() {

    var deliveryButton = document.querySelector('.order-option-wrapper a'),
        discovery = 'Discovery',
        eventAction = 'Delivery option chosen',
        eventLabel = deliveryButton.getAttribute('data-webtrends-call'),
        obj = {
        'event': discovery,
        'eventCategory': discovery,
        'eventAction': eventAction,
        'eventLabel': eventLabel
    };

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(obj);

    return obj;
};

var deliveryButton = document.querySelector('.order-option-wrapper a');
if (deliveryButton) {
    deliveryButton.addEventListener('click', deliveryOptionChosen, true);
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports.deliveryOptionChosen = deliveryOptionChosen;
}
//# sourceMappingURL=deliveryOptionChosen.js.map
