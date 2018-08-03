import  { getCardDataGTMAttr } from '../src/modules/getCardDataGTMAttr';

const _arrayData = [];
let getCardAttrData;

describe('Test getCardDataGTMAttr module', () => {
    it('if the data type is a function', () => {
        expect(typeof getCardDataGTMAttr(_arrayData,'.homepage-card, .homepage-hero')).toBe('function');
    });
});

describe('Test getCardAttrData function expression inside the module getCardDataGTMAttr', () => {
    getCardAttrData = getCardDataGTMAttr(_arrayData,'.homepage-card, .homepage-hero');
    getCardAttrData('data-gtm-creative', 'data-gtm-position', 'data-gtm-id','data-gtm-name');

    it('if the data returned is an array object', () => {
        expect(typeof getCardAttrData('data-gtm-creative', 'data-gtm-position', 'data-gtm-id','data-gtm-name')).toBe('object');
    });
});