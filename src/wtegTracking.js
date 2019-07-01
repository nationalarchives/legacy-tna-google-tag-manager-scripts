import{extractMetaTagContent} from './modules/extractMetaTagContent';
import{promoObjFunc} from './modules/promoObj';
import{pushInDataLayer} from './modules/pushInDataLayer';
import{watermarkCheck} from './modules/discoveryServerSide/watermarkCheck';
import{baseWTEGObjFunc} from './modules/baseWTEGPromoObj';

// Wait for the DOM to load
window.addEventListener('DOMContentLoaded', () => {
    let wtegButton = document.getElementById('wte-show-button');
    let imgViewerLink = document.getElementById('imageViewerLink');
    let wteg = document.querySelector('meta[name = Dcsext\\.wteg]');

    if(wteg !== null) {
        // Build promotion object on page load
        let gtmObj = baseWTEGObjFunc('wteg', extractMetaTagContent('Dcsext\\.wteg'), 'Expanding button', 'Below catalogue description');
        pushInDataLayer(gtmObj);
    }

    if(wtegButton !== null) {
        // Add an event listener to the WTEG button to detect when it is expanded
        // Remove the event listener after the first click
        wtegButton.addEventListener('click', function handleClick(e) {
            let gtmObj = promoObjFunc('promotionClick', 'wteg', extractMetaTagContent('Dcsext\\.wteg'), 'Expanding button', 'Below catalogue description', 'promotionClick');
            pushInDataLayer(gtmObj);
            this.removeEventListener('click', handleClick, false);
        });
    }

    // If an image is watermarked, add an event listener to the image viewer link to detect when it is expanded
    // Remove the event listener after the first click
    if(watermarkCheck('DCSext\\.imgviewer') && imgViewerLink !== null) {
        imgViewerLink.addEventListener('click', function handleClick(e) {
            let gtmObj = promoObjFunc('promotionClick', 'ivp', extractMetaTagContent('DCSext\\.imgviewer'), 'Image viewer', 'Below record description', 'promotionClick');
            pushInDataLayer(gtmObj);
            this.removeEventListener('click', handleClick, false);
        });
    }
});

