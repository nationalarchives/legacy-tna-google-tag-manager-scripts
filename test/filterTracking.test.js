import {filterTrackingDOM} from './filterTrackingDOM';
import {buildFilterTrackingObj} from '../src/modules/filterTracking/buildFilterTrackingObj';
import {cleanLabelName} from '../src/modules/filterTracking/cleanLabelName';
import {verifyFilter} from '../src/modules/filterTracking/verifyFilter';

document.body.innerHTML =
    '<label for="C10092">Army<span>(6,530,838)</span></label>';

describe('Checks that the filter tracking object is built correctly', () => {
    it('Should return an object if correct parameters are received, else returns error message', () => {
        expect(typeof buildFilterTrackingObj('someName', ['someArray'])).toBe('object');
        expect(buildFilterTrackingObj(2, ['someArray'])).toBe('The parameters are of the incorrect data type.');
    });
});

describe('Checks that the filter name is cleaned correctly', () => {
    it('Should return only the name (i.e. excludes search results statistic)', () => {
        //let armyFilter = document.querySelector('label[for="C10092"]');
        expect(cleanLabelName('Army (6,530,838)')).toBe('Army');
    });
    it('Should return a string if the correct parameters are received, else returns error message', () => {
        expect(typeof cleanLabelName('Army (6,530,838)')).toBe('string');
        expect(cleanLabelName({})).toBe('The parameters are of the incorrect data type.');
    });
});

describe('Checks that the verify filter module functions correctly', () => {
    it('Should return an array if correct parameters are received, else returns error message', () => {
        expect(Array.isArray(verifyFilter('someString', [], []))).toBeTruthy();
        expect(verifyFilter(1,2,3)).toBe('The parameters are of the incorrect data type.');
    });
});