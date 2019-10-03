import { pushInDataLayer } from './modules/pushInDataLayer';
import { detectUserType } from './modules/detectUserType';

window.addEventListener('DOMContentLoaded', () => {
	pushInDataLayer({
		customDimension8: detectUserType(document.getElementById('version').innerText)
	});
});
