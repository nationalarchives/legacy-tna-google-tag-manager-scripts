export const controlObj = (arg1, arg2, arg3, arg4) => {
    return {
        'event': arg1 || 'no event',
        'eventCategory': arg2 || 'no category',
        'eventAction': arg3 || 'no event action',
        'eventLabel': arg4 || 'no event label'
    };
};
