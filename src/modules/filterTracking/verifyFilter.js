import {addListenersToFilters} from './addListenersToFilters';

/*
param: String, Array, Array
return: Array
*/

// Checks which refine button has been pressed and the appropriate array of filters is returned
export let verifyFilter = (refineButtonName) => {

    // Filter arrays initialised
    let appliedSubjectFiltersArray = [];
    let appliedDateFiltersArray = [];

    // Object listing all filters that need to be tracked
    let filters = {
        subjectFilters: Array.from(document.querySelectorAll('#subjects ul li input')),
        dateFilters: Array.from(document.querySelectorAll('#dates ul li input'))
    };

    // Object listing the corresponding filter labels
    let labels = {
        subjectLabels: Array.from(document.querySelectorAll('#subjects ul li label')),
        dateLabels: Array.from(document.querySelectorAll('#dates ul li label'))
    };

    if(typeof refineButtonName === 'string') {
        let activeFilters = null;
        switch (refineButtonName) {
        case 'Refine dates':
            activeFilters = addListenersToFilters(filters.dateFilters, labels.dateLabels, appliedDateFiltersArray);
            break;
        case 'Refine departments':
            activeFilters = [];
            break;
        case 'Refine subjects':
            activeFilters = addListenersToFilters(filters.subjectFilters, labels.subjectLabels, appliedSubjectFiltersArray);
            break;
        case 'Refine':
            activeFilters = [];
            break;
        case 'Refine closure status':
            activeFilters = [];
            break;
        case 'Refine record opening date':
            activeFilters = [];
            break;
        default:
            activeFilters = [];
            break;
        }
        return activeFilters;
    }
    return 'The parameters are of the incorrect data type.';
};