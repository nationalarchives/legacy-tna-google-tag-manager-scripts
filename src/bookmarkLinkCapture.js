
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('#bookmarks .bookmarkMain a');
    const discovery = 'Discovery';
    const func = e => {
        e.preventDefault();
        const targetElementContect = e.target.innerHTML;
        console.log(
            {
                'event': discovery,
                'eventCategory': discovery,
                'eventAction': 'Bookmark link',
                'eventLabel': (targetElementContect.includes('result')) ? 'search results bookmark' : 'catalogue description bookmark'

            }
        );
    };
    links.forEach(link => {
        link.addEventListener('click', func);
    });
});