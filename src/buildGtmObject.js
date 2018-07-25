import{
    ExtractTagsModule
} from './discoveryServerSide.js';

let gtmDL;

let BuildObjectModule = (function(){
    return {
        ecommerceObj : {
            'ecommerce': {
                'promoView': {
                    'promotions': [{
                        'id': 'ivp',
                        'name': ExtractTagsModule.getWatermarkMetaTag(),
                        'creative': 'Image viewer',
                        'position': 'Below record description'
                    }]
                }
            },
        },

        defaultObj : {
            'ContentGroup': ExtractTagsModule.getContentGroupMetaTag(),
            'customDimension1': ExtractTagsModule.getDocRef(),
            'customDimension2': ExtractTagsModule.getSubscriberMetaTag(),
            'customDimension3': ExtractTagsModule.getSignedInMetaTag()
        },

        buildObject : function(watermarkPresent){
            if(watermarkPresent === true){
                gtmDL = Object.assign(this.ecommerceObj, this.defaultObj);
            }
            else{
                gtmDL = this.defaultObj;
            }
            return gtmDL;
        },

        removeNullValues : function(obj){
            for(let property in obj){
                if(obj[property] === null || obj[property] === undefined){
                    delete obj[property];
                }
            }
            return obj;
        }
    };
})();


gtmDL = BuildObjectModule.removeNullValues(BuildObjectModule.buildObject(ExtractTagsModule.watermarkCheck()));

window.dataLayer = window.dataLayer || [];

window.dataLayer.push(gtmDL);

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports.BuildObjectModule = BuildObjectModule;
}