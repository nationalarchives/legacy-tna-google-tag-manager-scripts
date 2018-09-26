import {controlObj} from './modules/imageViewer/imageControlSchema';

const imageViewer = document.getElementById('imageViewer');
imageViewer.addEventListener('click', (e) => {
    if ( e.target.tagName === 'SPAN' || e.target.tagName === 'A' ) {
        console.log(controlObj());
        e.preventDefault();
    }
}, false);


const selectOption = imageViewer.querySelector('select option');
selectOption.addEventListener('select', function() {
    console.log(this.value);
}, false);