/**
 * ------------  THE NATIONAL ARCHIVES GTM SCRIPTS  -----------------
 * JS - getting the data attributes when the user clicks on a delivery option in Discovery Details page for Google Tag Manager
 * Developer: Punal Chotrani
 **/


const deliveryOptionChosen = () => {

    let $deliveryButton = document.querySelector('.order-option-wrapper a'),
        $discovery = 'Discovery',
        $eventAction = 'Delivery option chosen',
        $eventLabel = $deliveryButton.getAttribute('data-webtrends-call'),
        $obj = {
            'event': $discovery,
            'eventCategory': $discovery,
            'eventAction': $eventAction,
            'eventLabel': $eventLabel
        };

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push($obj);

    return $obj;
};


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports.deliveryOptionChosen = deliveryOptionChosen;
}