import{watermarkObject} from './watermarkObj';
import{defaultDiscoveryServerSideObject} from './defaultDiscoveryServerSideObj';
import{extractMetaTagContent} from '../extractMetaTagContent';

export let buildObject = (watermarkPresent) => {
    let gtmDL;
    if (watermarkPresent) {
        gtmDL = Object.assign(watermarkObject('ivp', extractMetaTagContent('DCSext\\.imgviewer'), 'Image viewer', 'Below record description'), defaultDiscoveryServerSideObject(extractMetaTagContent('WT\\.cg_n'),
            extractMetaTagContent('DCSext\\.docref'), extractMetaTagContent('DCSext\\.subscription'),
            extractMetaTagContent('DCSext\\.signedin')));
    }
    else {
        gtmDL = defaultDiscoveryServerSideObject(extractMetaTagContent('WT\\.cg_n'),
            extractMetaTagContent('DCSext\\.docref'), extractMetaTagContent('DCSext\\.subscription'),
            extractMetaTagContent('DCSext\\.signedin'));
    }
    return gtmDL;
};