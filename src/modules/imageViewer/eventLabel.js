import {imageViewer} from '../../imageViewer';

export const getEventLabel = (title) => {
    let pageNumber = imageViewer.querySelector('select option[selected="selected"]');
    if ( event.target.getAttribute(title) === 'View full size image' ) {
        if( pageNumber ) {
            return `Thumbnail image ${pageNumber.text}`;
        }
        return 'Thumbnail image - No page';
    } else {
        return event.target.getAttribute(title);
    }
};