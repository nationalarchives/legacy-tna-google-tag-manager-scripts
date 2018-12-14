//import {getEventLabel} from './eventLabel';

export const controlObj = (arg1, arg2, arg3, func) => {
    if (
        typeof arg1 !== 'string' ||
        typeof arg2 !== 'string' ||
        typeof arg3 !== 'string' ||
        typeof func !== 'function'
    ) {
        return null;
    }
    return {
        'event': arg1,
        'eventCategory': arg2,
        'eventAction': arg3,
        'eventLabel': func
        /*'eventLabel': getEventLabel('title')*/
    };
};
