import { getCardDataGTMAttr } from './modules/getCardDataGTMAttr';

// Build the object
const _arrayData = [], obj = {
    'event': 'Promotions',
    'eventCategory': 'Cat',
    'eventAction': 'Act',
    'eventLabel': 'Label',
};

let getCardAttrData = getCardDataGTMAttr(_arrayData,'.homepage-card, .homepage-hero');
getCardAttrData('data-gtm-creative', 'data-gtm-position', 'data-gtm-id','data-gtm-name');