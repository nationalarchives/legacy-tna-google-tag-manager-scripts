import {controlObj} from './modules/imageViewer/imageControlSchema';
import {pushInDataLayer} from './modules/pushInDataLayer';

export const imageViewer = document.getElementById('imageViewer');

export const handleEvent = e => {
    if (    e.target.nodeName === 'A' ||
            e.target.nodeName === 'SELECT' ||
            e.target.matches('#thumbPanel img') ||
            e.target.matches('.control-buttons span')
    ) {
        pushInDataLayer(controlObj('Discovery image viewer', 'Discovery', 'Image viewer functions', getEventLabel('title')));
        //console.log(controlObj());
        //e.preventDefault();
    }
};
imageViewer && imageViewer.addEventListener('click', handleEvent, false);
