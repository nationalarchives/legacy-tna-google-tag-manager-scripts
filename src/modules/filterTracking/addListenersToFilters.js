import {cleanLabelName} from './cleanLabelName';

/*
param: Array, Array, Array
return: Array
*/

// Adds a change listener to search filters and pushes the corresponding labels to an array if the filters are checked
export let addListenersToFilters = (filters, labels, filterArray) => {
    filters.forEach((filter, index) => {
        filter.addEventListener('change', () => {

            // If a filter has been checked and has not already been stored, push it to filterArray. Otherwise, remove it i.e. when it has been unchecked
            filter.checked && !filterArray.includes(labels[index]) ?
                filterArray.push(cleanLabelName(labels[index].innerText)) : filterArray.splice(filterArray.indexOf(cleanLabelName(labels[index].innerText)), 1);
        });
    });
    return filterArray;
};