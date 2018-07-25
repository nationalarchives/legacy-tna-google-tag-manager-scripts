import{
    EcommerceObjectModule
} from './ecommerceObj.js';

import{
    DefaultObjectModule
} from './defaultObj.js';

let gtmDL;

let BuildObjectModule = (function(){
    return {
        buildObject : function (watermarkPresent) {
            if (watermarkPresent === true) {
                gtmDL = Object.assign(EcommerceObjectModule.ecommerceObj, DefaultObjectModule.defaultObj);
            }
            else {
                gtmDL = DefaultObjectModule.defaultObj;
            }
            return gtmDL;
        }
    }
})();

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports.BuildObjectModule = BuildObjectModule;
}