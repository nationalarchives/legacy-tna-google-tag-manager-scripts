import { capitalizeFirstLetter } from './capitalizeFirstLetter';

export const renderObjFunc = (eventArg, catArg, actionArg, labelArg) => {
    if (typeof eventArg !== 'string' || typeof catArg !== 'string' || typeof actionArg !== 'string' || typeof labelArg !== 'string') {
        return null;
    }
    return {
        'event': capitalizeFirstLetter(eventArg),
        'eventCategory': capitalizeFirstLetter(catArg),
        'eventAction': capitalizeFirstLetter(actionArg),
        'eventLabel': labelArg
    };
};
