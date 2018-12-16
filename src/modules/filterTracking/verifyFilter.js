/*
param: String, Array, Array
return: Array
*/

// Checks which refine button has been pressed and the appropriate array of filters is returned
export let verifyFilter = (refineButtonName, dateFilters, subjectFilters) => {
    if(typeof refineButtonName === 'string' && Array.isArray(dateFilters) && Array.isArray(subjectFilters)) {
        let activeFilters = null;
        switch (refineButtonName) {
        case 'Refine dates':
            activeFilters = dateFilters;
            break;
        case 'Refine departments':
            activeFilters = [];
            break;
        case 'Refine subjects':
            activeFilters = subjectFilters;
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