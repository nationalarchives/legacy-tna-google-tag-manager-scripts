//import { pushInDataLayer } from './modules/pushInDataLayer';
import { detectUserType } from './modules/detectUserType';

window.addEventListener('DOMContentLoaded', () => {
	dataLayer[0]['customDimension8'] = detectUserType(
		document.getElementById('version').innerText
	);
	// pushInDataLayer({
	// 	customDimension8: detectUserType(document.getElementById('version').innerText)
	// });
});
