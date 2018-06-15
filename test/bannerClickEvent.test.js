import { bannerClickEvent } from '../src/bannerClickEvent';

document.body.innerHTML =
    '<div id="imageviewerOverlay">\n' +
        '<p>To download this record without a watermark, please add it to your basket.</p>\n' +
    '</div>';

describe('Expect an object to be returned', () => {
    it('Should return an object when clicked', () => {
        let imageViewerbanner = document.getElementById('imageviewerOverlay');
        imageViewerbanner.addEventListener('click', bannerClickEvent, true);
        let cl = new Event('click');
        imageViewerbanner.dispatchEvent(cl);
        expect(window.dataLayer[0]).toEqual(bannerClickEvent());
    });
    it('Contains the min required array items', () => {
        let expected = Object.getOwnPropertyNames(bannerClickEvent());
        expect(["event", "ecommerce", "eventAction", "eventLabel", "contentGroup", "DummyProperty1"]).toEqual(expect.arrayContaining(expected));
    });
    it('does not match if received does not contain expected elements', () => {
        let expected = Object.getOwnPropertyNames(bannerClickEvent());
        expect(['DummyProperty1', 'DummyProperty2']).not.toEqual(expect.arrayContaining(expected));
    });
});