import {buildFilterTrackingObj} from '../src/modules/filterTracking/buildFilterTrackingObj';
import {cleanLabelName} from '../src/modules/filterTracking/cleanLabelName';
import {checkFilters} from '../src/modules/filterTracking/checkFilters';

document.body.innerHTML =
    '<li id="subjects">'+
        '<form action="/results/r" method="get"><input name="_q" type="hidden" value="*" /><input name="_hb" type="hidden" value="tna" />'+
        '<h3><a href="#" class="filter-toggler" id="subject-filters" role="tab">Subjects</a></h3>'+
            '<div class="filter-togglee" aria-labelledby="subject-filters" role="tabpanel">'+
                '<ul>'+
                    '<li>'+
                        '<input type="checkbox" name="_tsj" value="C10065" id="C10065" />'+
                        '<label for="C10065">'+
                            'Armed Forces (General Administration)'+
                            '<span>(9,392,340)</span>'+
                        '</label>'+
                    '</li>'+
                    '<li>'+
                        '<input type="checkbox" name="_tsj" value="C10092" id="C10092" />'+
                        '<label for="C10092">'+
                            'Army'+
                            '<span>(6,530,838)</span>'+
                        '</label>'+
                    '</li>'+
                    '<li>'+
                        '<input type="checkbox" name="_tsj" value="C10075" id="C10075"/>'+
                        '<label for="C10075">'+
                            'Operations, battles and campaigns'+
                            '<span>(6,248,824)</span>'+
                        '</label>'+
                    '</li>'+
                '</ul>'+
            '</div>'+
        '</form>'+
    '</li>'+
    '<input name="Refine subjects" value="Refine" type="submit" title="Refine subjects" />';

let armyFilter = document.querySelector('label[for="C10092"]');
let subjectFilters = Array.from(document.querySelectorAll('#subjects ul li input'));
let filterTogglee = document.querySelector('.filter-togglee');

describe('Checks that the filter tracking object is built correctly', () => {
    it('Should return an object if correct parameters are received, else returns error message', () => {
        expect(typeof buildFilterTrackingObj('someName', ['someArray'])).toBe('object');
        expect(buildFilterTrackingObj(2, ['someArray'])).toBe('The parameters are of the incorrect data type.');
    });
    it('Should have the defined properties', () => {
        expect(buildFilterTrackingObj('arg1', ['arg2'])).toHaveProperty('event');
        expect(buildFilterTrackingObj('arg1', ['arg2'])).toHaveProperty('eventCategory');
        expect(buildFilterTrackingObj('arg1', ['arg2'])).toHaveProperty('eventLabel');
        expect(buildFilterTrackingObj('arg1', ['arg2'])).toHaveProperty('eventAction');
    });
    it('Should have the defined types', () => {
        expect(typeof buildFilterTrackingObj('arg1', ['arg2']).event).toBe('string');
        expect(typeof buildFilterTrackingObj('arg1', ['arg2']).eventCategory).toBe('string');
        expect(typeof buildFilterTrackingObj('arg1', ['arg2']).eventAction).toBe('string');
        expect(typeof buildFilterTrackingObj('arg1', ['arg2']).eventLabel).toBe('string');
    });
});

describe('Checks that the filter name is cleaned correctly', () => {
    it('Should return only the name (i.e. excludes search results statistic)', () => {

        expect(cleanLabelName(armyFilter.textContent)).toBe('Army');
    });
    it('Should return a string if the correct parameters are received, else returns error message', () => {
        expect(typeof cleanLabelName(armyFilter.textContent)).toBe('string');
        expect(cleanLabelName({})).toBe('The parameters are of the incorrect data type.');
    });
});

describe('Checks that selected filters are returned', () => {
    it('Should return an empty array if no filters are selected', () => {
        expect(checkFilters(filterTogglee)).toEqual([]);
    });
    it('Should return an array containing only checked filters', () => {
        subjectFilters[2].checked = true;
        expect(checkFilters(filterTogglee)).toEqual(['Operations, battles and campaigns']);
    });
});