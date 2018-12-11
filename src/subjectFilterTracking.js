import {addListenersToFilters} from './modules/filterTracking/addListenersToFilters';
import {verifyFilter} from './modules/filterTracking/verifyFilter';

document.addEventListener('DOMContentLoaded', () => {
    let filterArray = [];
    let filters = {
        subjectFilters: document.querySelectorAll('#subjects ul li input'),
        dateFilters: document.querySelectorAll('#dates ul li input')
    };

    let labels = {
        subjectLabels: document.querySelectorAll('#subjects ul li label'),
        dateLabels: document.querySelectorAll('#dates ul li label')
    };

    let appliedSubjectFilters = addListenersToFilters(filters.subjectFilters, labels.subjectLabels, filterArray);
    let appliedDateFilters = addListenersToFilters(filters.dateFilters, labels.dateLabels, filterArray);
    let refineButtons = document.querySelectorAll('input[value="Refine"]');

    for(let i = 0; i < refineButtons.length; i ++){
        refineButtons[i].addEventListener('click', (e) => {
            console.log(verifyFilter(refineButtons[i].name, appliedDateFilters, appliedSubjectFilters));
            e.preventDefault();
        });
    }
});

// Need to only send 1 array as opposed to 1 populated array and several empty ones