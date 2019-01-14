/*
* param: String, Array
* return: Object
*/

export let buildFilterTrackingObj = (filterName, appliedFilters) => {
    if(typeof filterName === 'string' && Array.isArray(appliedFilters)) {
        return {
            'event': 'Discovery',
            'eventCategory': 'Discovery',
            'eventAction': filterName,
            'eventLabel': appliedFilters.toString()
        };
    }
    return 'The parameters are of the incorrect data type.';
};