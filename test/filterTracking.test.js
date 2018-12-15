import {filterTrackingDOM} from './filterTrackingDOM';
import {buildFilterTrackingObj} from '../src/modules/filterTracking/buildFilterTrackingObj';

describe('Checks that the filter tracking object is built correctly', () => {
    it('Should be of type object', () => {
        expect(typeof buildFilterTrackingObj('someName', ['someArray'])).toBe('object');
    });
});
