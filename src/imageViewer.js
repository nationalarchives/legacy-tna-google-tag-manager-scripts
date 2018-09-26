import {controlObj} from './modules/imageViewer/imageControlSchema';

export const imageViewer = document.getElementById('imageViewer');
imageViewer.addEventListener('click', function (e) {
    if ( e.target.tagName === 'SPAN' || e.target.tagName === 'A' ) {
        console.log(controlObj());
        e.preventDefault();
    }
}, false);