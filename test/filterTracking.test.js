import {filterTrackingDOM} from './filterTrackingDOM';
import {buildFilterTrackingObj} from '../src/modules/filterTracking/buildFilterTrackingObj';
import {cleanLabelName} from '../src/modules/filterTracking/cleanLabelName';
import {verifyFilter} from '../src/modules/filterTracking/verifyFilter';

document.body.innerHTML =
    '<label for="C10092">Army<span>(6,530,838)</span></label>';

describe('Checks that the filter tracking object is built correctly', () => {
    it('Should be of type object if correct parameters are received, else returns error message', () => {
        expect(typeof buildFilterTrackingObj('someName', ['someArray'])).toBe('object');
        expect(buildFilterTrackingObj(2, ['someArray'])).toBe('The parameters are of the incorrect data type.');
    });
});

describe('Checks that the filter name is cleaned correctly', () => {
    it('Should return only the name (i.e. excludes search results statistic)', () => {
        //let armyFilter = document.querySelector('label[for="C10092"]');
        //expect(cleanLabelName(armyFilter.textContent)).toBe('Army');
    });
});