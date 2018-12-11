export let verifyFilter = (refineButtonName, dateFilters, subjectFilters) => {
    let activeFilters = null;
    switch (refineButtonName){
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
    }
    return activeFilters;
};