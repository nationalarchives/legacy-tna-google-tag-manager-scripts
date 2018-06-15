import { bannerClickEvent } from '../src/bannerClickEvent';

document.body.innerHTML =
    '<div id="imageviewerOverlay">\n' +
        '<p>To download this record without a watermark, please add it to your basket.</p>\n' +
    '</div>';

describe('Expect an object to be returned', () => {
    it('Should return an object', () => {
        let imageViewerbanner = document.getElementById('imageviewerOverlay');
        imageViewerbanner.addEventListener('click', bannerClickEvent, true);
        let cl = new Event('click');
        imageViewerbanner.dispatchEvent(cl);
        expect(window.dataLayer[0]).toEqual(bannerClickEvent());
    })
});