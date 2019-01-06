import {cleanLabelName} from './cleanLabelName';

/*
param: event
return: Array
*/

// Checks which filters are checked and, if so, pushes them to an array
export let checkFilters = event => {
    let appliedFilters = [];

    // Grabs all filters relevant to the specific Refine button that was clicked
    let inputs = (event.currentTarget).querySelectorAll('input');

    // Checks if each filter is checked
    inputs.forEach((input) => {
        if (input.checked) {
            appliedFilters.push(cleanLabelName(input.nextElementSibling.textContent));

        }
    });
    return appliedFilters;
};