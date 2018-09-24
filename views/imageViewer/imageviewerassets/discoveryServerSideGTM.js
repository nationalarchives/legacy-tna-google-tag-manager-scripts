'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var discoveryServerSideGTM = function discoveryServerSideGTM() {
    var waterMarkedMeta = void 0,
        waterMarkedMetaContent = void 0,
        dcsextDocRefContent = void 0,
        gtmDL = void 0;

    if (document.querySelector('meta[name=DCSext\\.imgviewer]') !== null) {
        waterMarkedMeta = document.querySelector('meta[name=DCSext\\.imgviewer]');
        waterMarkedMetaContent = waterMarkedMeta.getAttribute('content');
    }

    var contentGroupMeta = document.querySelector('meta[name=WT\\.cg_n]'),
        dcsextDocRef = document.querySelector('meta[name=DCSext\\.docref]'),
        dcsextSubscriber = document.querySelector('meta[name=DCSext\\.subscription]'),
        dcsextSignedIn = document.querySelector('meta[name=DCSext\\.signedin]');

    if (dcsextDocRef !== null) {
        dcsextDocRefContent = dcsextDocRef.getAttribute('content');
    }

    var ecommerce = {
        'ecommerce': {
            'promoView': {
                'promotions': [{
                    'id': 'ivp',
                    'name': waterMarkedMetaContent,
                    'creative': 'Image viewer',
                    'position': 'Below record description'
                }]
            }
        }
    };

    var noEcommerce = {
        'ContentGroup': customText(contentGroupMeta, 'Content group not available'),
        'customDimension1': dcsextDocRefContent,
        'customDimension2': customText(dcsextSubscriber, 'Subscriber info not available'),
        'customDimension3': customText(dcsextSignedIn, 'Registered info not available')
    };

    var cleanObj = function cleanObj(theObject) {
        for (var propName in theObject) {
            if (theObject[propName] === null || theObject[propName] === undefined) {
                delete theObject[propName];
            }
        }
    };

    function customText(metaName, msg) {
        if (metaName === null) {
            return msg;
        } else {
            return metaName.getAttribute('content');
        }
    }

    cleanObj(noEcommerce);

    if (dcsextSubscriber.getAttribute('content') === 'Subscribed' && dcsextSignedIn.getAttribute('content') === 'signed-in') {
        gtmDL = waterMarkedMeta ? _extends(ecommerce, noEcommerce) : noEcommerce;
    } else if (dcsextSubscriber.getAttribute('content') === 'Subscribed') {
        gtmDL = waterMarkedMeta ? _extends(ecommerce, noEcommerce) : noEcommerce;
    } else if (dcsextSignedIn.getAttribute('content') === 'signed-in') {
        gtmDL = waterMarkedMeta ? _extends(ecommerce, noEcommerce) : noEcommerce;
    } else {
        gtmDL = waterMarkedMeta ? _extends(ecommerce, noEcommerce) : noEcommerce;
    }

    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push(gtmDL);

    return gtmDL;
};

discoveryServerSideGTM();

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports.discoveryServerSideGTM = discoveryServerSideGTM;
}