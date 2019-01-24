import { controlObj } from './modules/imageViewer/imageControlSchema';
import { getEventLabel } from './modules/imageViewer/eventLabel';
import { pushInDataLayer } from './modules/pushInDataLayer';

//polyfill for Element.matches in ie9 - 11 
if (Element && !Element.prototype.matches) {
	let proto = Element.prototype;
	proto.matches = proto.matchesSelector ||
		proto.mozMatchesSelector || proto.msMatchesSelector ||
		proto.oMatchesSelector || proto.webkitMatchesSelector;
}
//END polyfill for Element.matches in ie9 - 11

const handleEvent = (event) => {
	if (event.target.nodeName === 'A' ||
		event.target.nodeName === 'SELECT' ||
		event.target.matches('#thumbPanel img') ||
		event.target.matches('.control-buttons span')
	) {
		pushInDataLayer(controlObj('Discovery image viewer', 'Discovery', 'Image viewer functions', getEventLabel(event, 'title')));
	}
};

document.addEventListener('DOMContentLoaded', () => {
	const imageViewer = document.getElementById('imageViewer');
	if (imageViewer) {
		imageViewer && imageViewer.addEventListener('click', handleEvent, false);
	}
});
