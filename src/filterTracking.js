import {verifyFilter} from './modules/filterTracking/verifyFilter';
import {buildFilterTrackingObj} from './modules/filterTracking/buildFilterTrackingObj';
import {pushInDataLayer} from './modules/pushInDataLayer';

// Waits for the DOM to load before loading script
document.addEventListener('DOMContentLoaded', () => {
    // Grab all refine buttons
    let refineButtons = Array.from(document.querySelectorAll('input[value="Refine"]'));

    // Applies a click listener to all refine buttons and pushes to the data layer
    refineButtons.forEach(refineButton => refineButton.addEventListener('click', e => {
        pushInDataLayer(buildFilterTrackingObj(refineButton.name, verifyFilter(refineButton.name)));
        e.preventDefault();
    }));
});