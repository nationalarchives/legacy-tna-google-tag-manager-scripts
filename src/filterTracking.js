import {addListenersToFilters} from './modules/filterTracking/addListenersToFilters';
import {verifyFilter} from './modules/filterTracking/verifyFilter';
import {buildFilterTrackingObj} from './modules/filterTracking/buildFilterTrackingObj';
import {pushInDataLayer} from './modules/pushInDataLayer';

// Waits for the DOM to load before loading script
document.addEventListener('DOMContentLoaded', () => {

    // Filter arrays initialised
    let appliedSubjectFiltersArray = [];
    let appliedDateFiltersArray = [];

    // Grab all refine buttons
    let refineButtons = Array.from(document.querySelectorAll('input[value="Refine"]'));

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

    // Applies listeners to filters to track which filters have been checked/unchecked
    let appliedSubjectFilters = addListenersToFilters(filters.subjectFilters, labels.subjectLabels, appliedSubjectFiltersArray);
    let appliedDateFilters = addListenersToFilters(filters.dateFilters, labels.dateLabels, appliedDateFiltersArray);

    // Applies a click listener to all refine buttons and pushes to the data layer
    refineButtons.forEach(refineButton => refineButton.addEventListener('click', e => {
        pushInDataLayer(buildFilterTrackingObj(refineButton.name, verifyFilter(refineButton.name, appliedDateFilters, appliedSubjectFilters)));
        e.preventDefault();
    }));
});