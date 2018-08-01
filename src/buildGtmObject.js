import {watermarkCheck} from './modules/watermarkCheck';

import{buildObject} from './modules/buildObject';

import{removeNullValues} from './modules/removeNullValues';

let gtmDL = removeNullValues(buildObject(watermarkCheck()));

window.dataLayer = window.dataLayer || [];

window.dataLayer.push(gtmDL);