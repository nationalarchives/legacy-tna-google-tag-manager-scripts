/*
* param: String, Array
* return: Object
*/

export let buildFilterTrackingObj = (filterName, appliedFilters) => {
    return {
        'event': 'Discovery',
        'eventCategory': 'Discovery',
        'eventAction': filterName,
        'eventLabel': appliedFilters.toString()
    };
};