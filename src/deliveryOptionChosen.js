/**
 * ------------  THE NATIONAL ARCHIVES GTM SCRIPTS  -----------------
 * JS - getting the data attributes when the user clicks on a delivery option in Discovery Details page for Google Tag Manager
 * Developer: Punal Chotrani
 **/

let deliveryOption = () => {
    let deliveryOptionButton = document.querySelector('.order-option-wrapper a');
    if (deliveryOptionButton.addEventListener) {
        deliveryOptionButton.addEventListener('click', function(e) {
            e.preventDefault();
            let $discovery = 'Discovery',
                $eventAction = 'Delivery option chosen',
                $orderOptionWrapper = document.querySelector('.order-option-wrapper a'),
                $eventLabel = $orderOptionWrapper.getAttribute('data-webtrends-call');

            return () => {
                window.dataLayer.push({
                    'event'         : $discovery,
                    'eventCategory' : $discovery,
                    'eventAction'   : $eventAction,
                    'eventLabel'    : $eventLabel
                });
            };
        }, false);
    } else { // only for IE8 option
        deliveryOptionButton.attachEvent('onclick', function (e) {
            e.preventDefault();
            let $discovery = 'Discovery',
                $eventAction = 'Delivery option chosen',
                $orderOptionWrapper = document.querySelector('.order-option-wrapper a'),
                $eventLabel = $orderOptionWrapper.getAttribute('data-webtrends-call');

            return () => {
                window.dataLayer.push({
                    'event'         : $discovery,
                    'eventCategory' : $discovery,
                    'eventAction'   : $eventAction,
                    'eventLabel'    : $eventLabel
                });
            };
        });
    }
};

deliveryOption();

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports.deliveryOption = deliveryOption;
}