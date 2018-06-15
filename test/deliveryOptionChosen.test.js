import { deliveryOptionChosen } from '../src/deliveryOptionChosen';

document.body.innerHTML =
    '<div class="order-option-wrapper">' +
    '   <p><a href="#" data-webtrends-call="blahhhhh">Some Text</a></p>' +
    '</div>';

describe('Expect an object to be returned', () => {
    it('Should return an object when clicked', () => {
        let deliveryButton = document.querySelector('.order-option-wrapper a');
        deliveryButton.addEventListener('click', deliveryOptionChosen, true);
        let cl = new Event('click');
        deliveryButton.dispatchEvent(cl);
        expect(window.dataLayer[0]).toEqual(deliveryOptionChosen());
    });
});