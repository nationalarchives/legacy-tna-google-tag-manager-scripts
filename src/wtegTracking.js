import{extractMetaTagContent} from './modules/extractMetaTagContent';
import{promoObjFunc} from './modules/promoObj';
import{pushInDataLayer} from './modules/pushInDataLayer';

// Wait for the DOM to load
window.addEventListener('DOMContentLoaded', () => {

	// Build promotion object on page load
	let gtmObj = promoObjFunc('wteg', extractMetaTagContent('Dcsext\\.wteg'), 'Expanding link', 'Below catalogue description', false);

	pushInDataLayer(gtmObj);
});
