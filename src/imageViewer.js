import {controlObj} from './modules/imageViewer/imageControlSchema';
export const imageViewer = document.getElementById('imageViewer');

imageViewer && imageViewer.addEventListener('click', (e) => {
    if ( e.target.nodeName === 'A' || e.target.matches('.control-buttons span')  ) {
        console.log(controlObj());
        e.preventDefault();
    }
    // console.log(e.target);
}, false);