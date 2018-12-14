export const controlObj = (arg1, arg2, arg3, arg4) => {
    if (
        typeof arg1 !== 'string' ||
        typeof arg2 !== 'string' ||
        typeof arg3 !== 'string' ||
        typeof arg4 !== 'function'
    ) {
        return;
    }
    return {
        'event': arg1,
        'eventCategory': arg2,
        'eventAction': arg3,
        'eventLabel': arg4
    };
};
