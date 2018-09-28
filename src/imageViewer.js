import {controlObj} from './modules/imageViewer/imageControlSchema';
export const imageViewer = document.getElementById('imageViewer');


imageViewer.addEventListener('click', (e) => {
    if ( e.target.tagName === 'A' || e.target === imageViewer.querySelector('.control-buttons span') ) {
        console.log(controlObj());
        e.preventDefault();
    }
}, false);