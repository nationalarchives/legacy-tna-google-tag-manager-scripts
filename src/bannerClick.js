import {promoObjFunc} from './modules/promoObj';

let banner = document.getElementById('imageviewerOverlay');
if (banner) {
    banner.addEventListener('click', () => {
        let promoBanner = promoObjFunc('promotionClick', 'bts', 'Image viewer banner', 'Banner', 'On watermarked image');
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(promoBanner);
    }, true);
}