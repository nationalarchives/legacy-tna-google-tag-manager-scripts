import {deliveryOptionChosen} from '../src/deliveryOptionChosen';

document.body.innerHTML =
    '<div class="order-option-wrapper">' +
    '   <p><a href="#" data-webtrends-call="blahhhhh">Some Text</a></p>' +
    '</div>';

describe('Expect an object to be returned', () => {
    it('Should return an object', () => {
        expect(typeof deliveryOptionChosen()).toBe('object');
    });
});