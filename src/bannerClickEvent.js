const bannerClickEvent = () => {
    let obj = {
        'event': 'promotionClick',
        'ecommerce': {
            'promoClick': {
                'promotions': [{
                    'id': 'bts',
                    'name': 'Image viewer banner',
                    'creative': 'Banner',
                    'position': 'On watermarked image'
                }]
            }
        }
    };

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(obj);

    return obj;
};

let banner = document.getElementById('imageviewerOverlay');
if (banner) {
    banner.addEventListener('click', bannerClickEvent, true);
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports.bannerClickEvent = bannerClickEvent;
}