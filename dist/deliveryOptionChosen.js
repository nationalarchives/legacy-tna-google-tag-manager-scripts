'use strict';

/**
 * ------------  THE NATIONAL ARCHIVES GTM SCRIPTS  -----------------
 * JS - getting the data attributes when the user clicks on a delivery option in Discovery Details page for Google Tag Manager
 * Developer: Punal Chotrani
 **/

var deliveryOption = function deliveryOption() {
    var deliveryOptionButton = document.querySelector('.order-option-wrapper a');
    if (deliveryOptionButton.addEventListener) {
        deliveryOptionButton.addEventListener('click', function (e) {
            e.preventDefault();
            var $discovery = 'Discovery',
                $eventAction = 'Delivery option chosen',
                $orderOptionWrapper = document.querySelector('.order-option-wrapper a'),
                $eventLabel = $orderOptionWrapper.getAttribute('data-webtrends-call');

            return function () {
                window.dataLayer.push({
                    'event': $discovery,
                    'eventCategory': $discovery,
                    'eventAction': $eventAction,
                    'eventLabel': $eventLabel
                });
            };
        }, false);
    } else {
        // only for IE8 option
        deliveryOptionButton.attachEvent('onclick', function (e) {
            e.preventDefault();
            var $discovery = 'Discovery',
                $eventAction = 'Delivery option chosen',
                $orderOptionWrapper = document.querySelector('.order-option-wrapper a'),
                $eventLabel = $orderOptionWrapper.getAttribute('data-webtrends-call');

            return function () {
                window.dataLayer.push({
                    'event': $discovery,
                    'eventCategory': $discovery,
                    'eventAction': $eventAction,
                    'eventLabel': $eventLabel
                });
            };
        });
    }
};

deliveryOption();
//# sourceMappingURL=deliveryOptionChosen.js.map
