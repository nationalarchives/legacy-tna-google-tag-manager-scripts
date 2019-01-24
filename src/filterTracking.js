import {buildFilterTrackingObj} from './modules/filterTracking/buildFilterTrackingObj';
import {pushInDataLayer} from './modules/pushInDataLayer';
import {checkFilters} from './modules/filterTracking/checkFilters';

// Waits for the DOM to load before loading script
document.addEventListener('DOMContentLoaded', () => {
    // Grabs all filter forms
    let filterForms = document.querySelectorAll('#search-filters form');

    filterForms.forEach(form => {
        form.addEventListener('click', function(e) {
            if (e.target.value === 'Refine') {
                e.preventDefault();
                pushInDataLayer(buildFilterTrackingObj(e.target.name, checkFilters(e.currentTarget)));
                this.submit();
            }
        });
    });
});