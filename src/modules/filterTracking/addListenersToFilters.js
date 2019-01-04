import {cleanLabelName} from './cleanLabelName';

/*
param: Array, Array, Array
return: Array
*/

// Adds a change listener to search filters and pushes the corresponding labels to an array if the filters are checked
export let addListenersToFilters = (filters, labels, filterArray) => {
    if(Array.isArray(filters) && Array.isArray(labels) && Array.isArray(filterArray)) {
        filters.forEach((filter, index) => {
            if (filter.checked && !filterArray.includes(labels[index])) {
                filterArray.push(cleanLabelName(labels[index].textContent));
            }
        });
        return filterArray;
    }
    return 'The parameters are of the incorrect data type.';
};