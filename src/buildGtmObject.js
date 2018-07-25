import{
    ExtractTagsModule
} from './discoveryServerSide.js';

import{
    BuildObjectModule
} from './modules/buildObject.js';

import{
    RemoveNullValuesModule
} from './modules/removeNullValues.js';

let gtmDL = function(){
    return RemoveNullValuesModule.removeNullValues(BuildObjectModule.buildObject(ExtractTagsModule.watermarkCheck()));
};

window.dataLayer = window.dataLayer || [];

window.dataLayer.push(gtmDL());