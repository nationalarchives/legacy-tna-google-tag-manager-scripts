import { pushInDataLayer } from './modules/pushInDataLayer';

const checkValue = e => e.target.innerHTML.includes('result') ? 'search results bookmark' : 'catalogue description bookmark';

export const renderObj = (eventArg, catArg, actionArg, labelArg) => {
    const discovery = 'Discovery';
    return {
        'event': eventArg,
        'eventCategory': catArg,
        'eventAction': actionArg,
        'eventLabel': labelArg
    };
};

const bookMarkObj = e => {
    e.preventDefault();
    pushInDataLayer(renderObj('Discovery', 'Discovery', 'Bookmark link', checkValue(e)));
};

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('#bookmarks .bookmarkMain a');

    links.forEach(link => {
        link.addEventListener('click', bookMarkObj);
    });
});