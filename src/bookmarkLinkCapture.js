import { pushInDataLayer } from './modules/pushInDataLayer';
import { capitalizeFirstLetter } from './modules/capitalizeFirstLetter';

export const checkValue = ({ target }) => target.innerHTML.includes('result') ? capitalizeFirstLetter('search results bookmark') : capitalizeFirstLetter('catalogue description bookmark');

export const renderObjFunc = (eventArg, catArg, actionArg, labelArg) => {
    if (typeof eventArg !== 'string' && typeof catArg !== 'string' && typeof actionArg !== 'string' && typeof labelArg !== 'string') {
        return null;
    }
    return {
        'event': capitalizeFirstLetter(eventArg),
        'eventCategory': capitalizeFirstLetter(catArg),
        'eventAction': capitalizeFirstLetter(actionArg),
        'eventLabel': labelArg
    };
};

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('#bookmarks .bookmarkMain a');

    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            pushInDataLayer(renderObjFunc('discovery', 'discovery', 'bookmark link', checkValue(e)));
        });
    });
});