import {watermarkCheck} from './modules/watermarkCheck';
import {buildObject} from './modules/buildDiscoveryServerSideObj';
import {removeNullValues} from './modules/removeNullValues';
import {pushInDataLayer} from './modules/pushInDataLayer';

pushInDataLayer(removeNullValues(buildObject(watermarkCheck('DCSext\\.imgviewer'))));