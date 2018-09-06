import{watermarkObject} from './watermarkObj';
import{defaultDiscoveryServerSideObject} from './defaultDiscoveryServerSideObj';
import{extractMetaTagContent} from './extractMetaTagContent';

export let buildObject = (watermarkPresent) => {
    let gtmDL;
    if (watermarkPresent) {
        gtmDL = Object.assign(watermarkObject('ivp', extractMetaTagContent('DCSext\\.imgviewer', 'Meta tag not available'), 'Image viewer', 'Below record description'), defaultDiscoveryServerSideObject(extractMetaTagContent('WT\\.cg_n', 'Content Group not available'),
            extractMetaTagContent('DCSext\\.docref', 'Meta tag not available'), extractMetaTagContent('DCSext\\.subscription', 'Subscriber info not available'),
            extractMetaTagContent('DCSext\\.signedin', 'Registered info not available')));
    }
    else {
        gtmDL = defaultDiscoveryServerSideObject(extractMetaTagContent('WT\\.cg_n', 'Content Group not available'),
            extractMetaTagContent('DCSext\\.docref', 'Meta tag not available'), extractMetaTagContent('DCSext\\.subscription', 'Subscriber info not available'),
            extractMetaTagContent('DCSext\\.signedin', 'Registered info not available'));
    }
    return gtmDL;
};