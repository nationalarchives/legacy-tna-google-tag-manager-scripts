import { getCardDataGTMAttr } from './modules/getCardDataGTMAttr';

(() => {
    // Array Data
    const _arrayData = [];
    // Get Card Data GTM Attr
    getCardDataGTMAttr(_arrayData, '.homepage-card, .homepage-hero')('data-gtm-creative', 'data-gtm-position', 'data-gtm-id', 'data-gtm-name');

})();
