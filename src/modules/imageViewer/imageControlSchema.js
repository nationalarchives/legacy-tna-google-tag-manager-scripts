import {getEventLabel} from './eventLabel';

export const controlObj = () => {
    return {
        'event': 'Discovery image viewer',
        'eventCategory': 'Discovery',
        'eventAction': 'Image viewer functions',
        'eventLabel': getEventLabel('title')
    };
};