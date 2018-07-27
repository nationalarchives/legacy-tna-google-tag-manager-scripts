import{
    ExtractTagsModule
} from '../discoveryServerSide.js';

let DefaultObjectModule = (function(){
    return{
        defaultObj : {
            'ContentGroup': ExtractTagsModule.getContentGroupMetaTag(),
            'customDimension1': ExtractTagsModule.getDocRef(),
            'customDimension2': ExtractTagsModule.getSubscriberMetaTag(),
            'customDimension3': ExtractTagsModule.getSignedInMetaTag()
        }
    }
})();

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports.DefaultObjectModule = DefaultObjectModule;
}