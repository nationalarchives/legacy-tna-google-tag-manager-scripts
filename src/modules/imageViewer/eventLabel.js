export const getEventLabel = (title) => {
    if (event.target.hasChildNodes('img')) {
        return event.target.getAttribute(title);
    } else if (event.target.childNodes.length >= 1) {
        return event.target.innerHTML;
    } else {
        return event.target.getAttribute(title);
    }
};