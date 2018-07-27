import {pushInDataLayer} from '../src/modules/pushInDataLayer';

describe('Test pushInDataLayer module', () => {
    let obj = {
        'event': 'Promotions',
        'eventCategory': 'Cat',
        'eventAction': 'Act',
        'eventLabel': 'Label',
    };
    it('if data type returned is an object', () => {
        expect(typeof pushInDataLayer(obj)).toBe('object');
    });
});