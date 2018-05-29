/**
 * ------------  THE NATIONAL ARCHIVES  -----------------
 * JS - getting the data attributes when the user clicks on a delivery option in Discovery Details page for Google Tag Manager
 * Developer: Punal Chotrani
 **/
import 'babel-polyfill';
let deliveryOptionButton = document.querySelector('.order-option-wrapper a');

deliveryOptionButton.addEventListener('click', function(e) {
    e.preventDefault();
    let $discovery = 'Discovery',
        $eventAction = 'Delivery option chosen',
        $eventLabel = this.dataset.webtrendsCall;

    return () => {
        window.dataLayer.push({
            'event'         : $discovery,
            'eventCategory' : $discovery,
            'eventAction'   : $eventAction,
            'eventLabel'    : $eventLabel
        });
    };
}, false);
