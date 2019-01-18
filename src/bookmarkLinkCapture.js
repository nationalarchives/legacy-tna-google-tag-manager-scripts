import { pushInDataLayer } from './modules/pushInDataLayer';
import { capitalizeFirstLetter } from './modules/capitalizeFirstLetter';

const checkValue = ({ target }) => target.innerHTML.includes('result') ? 'search results bookmark' : 'catalogue description bookmark';

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

const bookMarkObj = e => {
    e.preventDefault();
    pushInDataLayer(renderObjFunc('discovery', 'discovery', 'bookmark link', checkValue(e)));
};

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('#bookmarks .bookmarkMain a');

    links.forEach(link => {
        link.addEventListener('click', bookMarkObj);
    });
});