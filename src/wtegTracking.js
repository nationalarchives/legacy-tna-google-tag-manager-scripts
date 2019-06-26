import{extractMetaTagContent} from './modules/extractMetaTagContent';
import{promoObjFunc} from './modules/promoObj';
import{pushInDataLayer} from './modules/pushInDataLayer';
import{watermarkCheck} from './modules/discoveryServerSide/watermarkCheck';
import{baseWTEGObjFunc} from './modules/baseWTEGPromoObj';

// Wait for the DOM to load
window.addEventListener('DOMContentLoaded', () => {
	let wtegButton = document.querySelector('#what-to-expect .discoveryPrimaryCallToActionLink');
	let imgViewerLink = document.querySelector('#imageViewerLink');

	// Build promotion object on page load
	let gtmObj = baseWTEGObjFunc('wteg', extractMetaTagContent('Dcsext\\.wteg'), 'Expanding link', 'Below catalogue description');
	pushInDataLayer(gtmObj);

	// Add an event listener to the WTEG button to detect when it is expanded
	// Remove the event listener after the first click
	wtegButton.addEventListener('click', function handleClick(e) {
		let gtmObj = promoObjFunc('wteg', extractMetaTagContent('Dcsext\\.wteg'),'Expanding button', 'Below catalogue description', 'promotionClick');
		pushInDataLayer(gtmObj);
		this.removeEventListener('click', handleClick, false);
	});

	// If an image is watermarked, add an event listener to the image viewer link to detect when it is expanded
	// Remove the event listener after the first click
	if(watermarkCheck('DCSext\\.imgviewer')) {
		imgViewerLink.addEventListener('click', function handleClick(e) {
			let gtmObj = promoObjFunc('ivp', extractMetaTagContent('DCSext\\.imgviewer'), 'Image viewer', 'Below record description', 'promotionClick');
			pushInDataLayer(gtmObj);
			this.removeEventListener('click', handleClick, false);
		});
	}
});
