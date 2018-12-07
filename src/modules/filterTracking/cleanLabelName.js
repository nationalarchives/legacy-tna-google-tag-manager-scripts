export let cleanLabelName = (filterName) => {
    filterName = filterName.split(' (');
    return filterName[0];
};