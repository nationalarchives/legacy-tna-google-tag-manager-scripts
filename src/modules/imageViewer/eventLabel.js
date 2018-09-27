export const getEventLabel = (title) => {
    let pageNumber = imageViewer.querySelector('select option[selected="selected"]').text;
    if (event.target.hasChildNodes('img')) {
        if ( event.target.getAttribute(title) === 'View full size image' ) {
            return 'Thumbnail page ' + pageNumber;
        }
        return event.target.getAttribute(title);
    } else if (event.target.childNodes.length >= 1) {
        return event.target.innerHTML;
    } else {
        return event.target.getAttribute(title);
    }
};