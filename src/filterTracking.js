import {buildFilterTrackingObj} from './modules/filterTracking/buildFilterTrackingObj';
import {pushInDataLayer} from './modules/pushInDataLayer';
import {checkFilters} from './modules/filterTracking/checkFilters';

// Waits for the DOM to load before loading script
document.addEventListener('DOMContentLoaded', () => {
    // Grabs all filters
    let filters = document.querySelectorAll('.filter-togglee');

    // Applies a click listener to all filters and pushes to the data layer
    filters.forEach((filter) => {
        filter.addEventListener('click', e => {
            if (e.target.value === 'Refine') {
                pushInDataLayer(buildFilterTrackingObj(e.target.name, checkFilters(e.currentTarget)));
            }
        });
    });
});