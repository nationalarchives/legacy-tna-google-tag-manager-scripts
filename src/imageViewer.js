import {imageViewer} from './modules/imageViewer/imageViewerControllers';
import {controlObj} from './modules/imageViewer/imageControlSchema';

imageViewer.addEventListener('click', function () {
    console.log(controlObj);
}, false);