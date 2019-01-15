import { controlObj } from './modules/imageViewer/imageControlSchema';
import { getEventLabel } from './modules/imageViewer/eventLabel';
import { pushInDataLayer } from './modules/pushInDataLayer';

const handleEvent = (e) => {
    if (e.target.nodeName === 'A' ||
        e.target.nodeName === 'SELECT' ||
        e.target.matches('#thumbPanel img') ||
        e.target.matches('.control-buttons span')
    ) {
        pushInDataLayer(controlObj('Discovery image viewer', 'Discovery', 'Image viewer functions', getEventLabel('title')));
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const imageViewer = document.getElementById('imageViewer');
    if (imageViewer) {
        imageViewer && imageViewer.addEventListener('click', handleEvent, false);
    }
});
