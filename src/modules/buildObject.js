import{ecommerceObject} from './ecommerceObj';

import{defaultObject} from './defaultObj';

let gtmDL;

export let buildObject = (watermarkPresent) => {
    if (watermarkPresent) {
        gtmDL = Object.assign(ecommerceObject, defaultObject);
    }
    else {
        gtmDL = defaultObject;
    }
    return gtmDL;
};