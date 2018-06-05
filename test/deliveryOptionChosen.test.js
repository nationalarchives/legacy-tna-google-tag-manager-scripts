import { deliveryOption } from '../src/discoveryDetailsContentGroup';

document.body.innerHTML =
    '<div class="order-option-wrapper">' +
    '   <p><a href="#" data-webtrends-call="blahhhhh">Some Text</a></p>' +
    '</div>';
describe('Expect an object to be returned', () => {
    const button = document.querySelector('.order-option-wrapper a');
    button.addEventListener('click');
    it('Should return an object', () => {
        expect(typeof deliveryOption()).toBe('object');
    });
});