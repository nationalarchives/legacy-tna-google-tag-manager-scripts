import {cleanLabelName} from './cleanLabelName';

/*
param: Object
return: Array
*/

// Checks which filters are checked and, if so, pushes them to an array
export let checkFilters = event => {
    let appliedFilters = [];

    // Grabs all filters relevant to the specific Refine button that was clicked
    let filters = event.querySelectorAll('input');

    // Checks if each filter is checked and, if so, pushes the label (nextElementSibling) to the array
    filters.forEach((filter) => {
        if (filter.checked) {
            appliedFilters.push(cleanLabelName(filter.nextElementSibling.textContent));
        }
    });
    return appliedFilters;
};