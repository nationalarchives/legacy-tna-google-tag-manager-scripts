export let cleanSubjectFilterName = (filterName) => {
    filterName = filterName.split(' (');
    return filterName[0];
};