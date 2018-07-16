import {promoObjFunc} from './modules/promoObj';

let banner = document.getElementById('imageviewerOverlay');
if (banner) {
    banner.addEventListener('click', promoObjFunc('promotionClick', 'bts', 'Image viewer banner', 'Banner', 'On watermarked image'), true);
}