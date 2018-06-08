import { deliveryOptionChosen } from './deliveryOptionChosen.js';

let $deliveryButton = document.querySelector('.order-option-wrapper a');

$deliveryButton.addEventListener('click', deliveryOptionChosen, true);