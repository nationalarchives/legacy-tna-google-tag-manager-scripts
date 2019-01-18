
import { pushInDataLayer } from './modules/pushInDataLayer';

let checkValue = e => e.target.innerHTML.includes('result') ? 'search results bookmark' : 'catalogue description bookmark';

let func = e => {
    const discovery = 'Discovery';
    return {
        'event': discovery,
        'eventCategory': discovery,
        'eventAction': 'Bookmark link',
        'eventLabel': checkValue(e)
    };
};

const bookMarkObj = e => {
    e.preventDefault();
    pushInDataLayer(func(e));
};

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('#bookmarks .bookmarkMain a');

    links.forEach(link => {
        link.addEventListener('click', bookMarkObj);
    });
});