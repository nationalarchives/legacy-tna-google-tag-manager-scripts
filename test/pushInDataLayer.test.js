import { pushInDataLayer } from '../src/modules/pushInDataLayer';

describe('Test pushInDataLayer component', () => {
    let obj;

    it('if the function param is valid' , () => {
        obj = {
            'event': 'Promotions',
            'eventCategory': 'Cat',
            'eventAction': 'Act',
            'eventLabel': 'Label',
        };
        // If it's an object
        expect(typeof pushInDataLayer(obj)).toBe('object');
        // Missing function parameter
        expect(typeof pushInDataLayer()).toBe('undefined');
        // Function call with the obj added as a param
        expect(pushInDataLayer(obj)).toBeTruthy();
        // If the parameter is not an object
        obj = '';
        expect(pushInDataLayer(obj)).toBeFalsy();
    });
});