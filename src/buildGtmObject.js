import {watermarkCheck} from './modules/watermarkCheck';
import {buildObject} from './modules/buildObject';
import {removeNullValues} from './modules/removeNullValues';

window.dataLayer = window.dataLayer || [];
window.dataLayer.push(removeNullValues(buildObject(watermarkCheck())));