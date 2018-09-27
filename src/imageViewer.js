import {controlObj} from './modules/imageViewer/imageControlSchema';
const imageViewer = document.getElementById('imageViewer');


imageViewer.addEventListener('click', (e) => {
    if ( e.target.tagName === 'SPAN' || e.target.tagName === 'A' ) {
        console.log(controlObj());
        e.preventDefault();
    }
}, false);