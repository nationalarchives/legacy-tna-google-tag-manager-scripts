import {watermarkCheck} from './modules/watermarkCheck';
import {buildObject} from './modules/buildDiscoveryServerSideObj';
import {removeNullValues} from './modules/removeNullValues';

window.dataLayer = window.dataLayer || [];
window.dataLayer.push(removeNullValues(buildObject(watermarkCheck('DCSext\\.imgviewer'))));