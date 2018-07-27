import{
    ExtractTagsModule
} from './discoveryServerSide.js';

import{
    BuildObjectModule
} from './modules/buildObject.js';

import{
    RemoveNullValuesModule
} from './modules/removeNullValues.js';


let GtmDLModule = (function(){
    return{
        gtmDL : function () {
            return RemoveNullValuesModule.removeNullValues(BuildObjectModule.buildObject(ExtractTagsModule.watermarkCheck()));
        }
    }
})();

window.dataLayer = window.dataLayer || [];

window.dataLayer.push(GtmDLModule.gtmDL());

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports.GtmDLModule = GtmDLModule;
}