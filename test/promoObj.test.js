import {promoObjFunc} from '../src/modules/promoObj';

describe('Checking the object', () => {
    it('Should return an object', () => {
        expect(typeof promoObjFunc('blah1', 'blah2', 'blah3', 'blah4', 'blah5')).toBe('object');
    });
});