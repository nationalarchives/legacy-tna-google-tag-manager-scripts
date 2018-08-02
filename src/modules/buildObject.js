import{ecommerceObject} from './ecommerceObj';

import{defaultObject} from './defaultObj';

import{extractMetaTagContent} from './extractMetaTagContent';

let gtmDL;

export let buildObject = (watermarkPresent) => {
    if (watermarkPresent) {
        gtmDL = Object.assign(ecommerceObject('ivp', extractMetaTagContent('DCSext\\.imgviewer', null), 'Image viewer', 'Below record description'), defaultObject(extractMetaTagContent('WT\\.cg_n', 'Content Group not available'),
            extractMetaTagContent('DCSext\\.docref', null), extractMetaTagContent('DCSext\\.subscription', 'Subscriber info not available'),
            extractMetaTagContent('DCSext\\.signedin', 'Registered info not available')));
    }
    else {
        gtmDL = defaultObject(extractMetaTagContent('WT\\.cg_n', 'Content Group not available'),
            extractMetaTagContent('DCSext\\.docref', null), extractMetaTagContent('DCSext\\.subscription', 'Subscriber info not available'),
            extractMetaTagContent('DCSext\\.signedin', 'Registered info not available'));
    }
    return gtmDL;
};