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
    it('Does not match if received does not contain expected elements', () => {
        let expected = Object.getOwnPropertyNames(bannerClickEvent());
        expect(['DummyProperty1', 'DummyProperty2']).not.toEqual(expect.arrayContaining(expected));
    });
    it('Should contain the specified strings', () => {
        let bts = bannerClickEvent().ecommerce.promoClick.promotions[0].id,
            name = bannerClickEvent().ecommerce.promoClick.promotions[0].name,
            creative = bannerClickEvent().ecommerce.promoClick.promotions[0].creative,
            position = bannerClickEvent().ecommerce.promoClick.promotions[0].position,
            event = bannerClickEvent().event,
            expected = Object.getOwnPropertyNames(bannerClickEvent().ecommerce.promoClick.promotions[0]);
        expect('bts').toEqual(bts);
        expect('Image viewer banner').toEqual(name);
        expect('Banner').toEqual(creative);
        expect('On watermarked image').toEqual(position);
        expect('promotionClick').toEqual(event);
        expect(['id', 'name', 'creative', 'position']).toEqual(expect.arrayContaining(expected));
        expect(typeof expected[0]).toBe('string');
        expect(typeof expected[1]).toBe('string');
        expect(typeof expected[2]).toBe('string');
        expect(typeof expected[3]).toBe('string');
    });
});