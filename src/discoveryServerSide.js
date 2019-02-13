import {watermarkCheck} from './modules/discoveryServerSide/watermarkCheck';
import {buildObject} from './modules/discoveryServerSide/buildDiscoveryServerSideObj';
import {removeNullValues} from './modules/removeNullValues';
import {pushInDataLayer} from './modules/pushInDataLayer';

pushInDataLayer(removeNullValues(buildObject(watermarkCheck('DCSext\\.imgviewer'))));