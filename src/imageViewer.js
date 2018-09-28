import {controlObj} from './modules/imageViewer/imageControlSchema';
export const imageViewer = document.getElementById('imageViewer');

imageViewer.addEventListener('click', (e) => {
    if (!imageViewer) {
        return;
    }
    if ( e.target.nodeName === 'A' || e.target.matches('.control-buttons span')  ) {
        console.log(controlObj());
        e.preventDefault();
    }
    // console.log(e.target);
}, false);