import{extractMetaTagContent} from './modules/extractMetaTagContent';
import{promoObjFunc} from './modules/promoObj';
import{pushInDataLayer} from './modules/pushInDataLayer';

// Wait for the DOM to load
window.addEventListener('DOMContentLoaded', () => {
	let wtegButton = document.querySelector('#what-to-expect .discoveryPrimaryCallToActionLink');

	// Build promotion object on page load
	let gtmObj = promoObjFunc('wteg', extractMetaTagContent('Dcsext\\.wteg'), 'Expanding link', 'Below catalogue description', false);
	pushInDataLayer(gtmObj);

	// Add an event listener to the WTEG button to detect when it is expanded
	// Remove the event listener after the first click
	wtegButton.addEventListener('click', function handleClick(e) {
		let gtmObj = promoObjFunc('wteg', extractMetaTagContent('Dcsext\\.wteg'),'Expanding button', 'Below catalogue description', 'promotionClick', true);
		pushInDataLayer(gtmObj);
		this.removeEventListener('click', handleClick, false);
	});
});
