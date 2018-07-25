let ExtractTagsModule = (function(){
    return{
        extractMetaTagContent : function(metaTagName, msg){
            let metaTagData = document.querySelector(metaTagName);
            metaTagData = (metaTagData !== null) ? metaTagData.getAttribute('content') : msg;
            return metaTagData;
        },

        getContentGroupMetaTag : function(){
            return this.extractMetaTagContent('meta[name=WT\\.cg_n]', 'Content Group not available');
        },

        getSubscriberMetaTag : function(){
            return this.extractMetaTagContent('meta[name=DCSext\\.subscription]', 'Subscriber info not available');
        },

        getSignedInMetaTag : function(){
            return this.extractMetaTagContent('meta[name=DCSext\\.signedin]', 'Registered info not available');
        },

        getDocRef : function(){
            return this.extractMetaTagContent('meta[name=DCSext\\.docref]', null);
        },

        getWatermarkMetaTag : function(){
            return this.extractMetaTagContent('meta[name=DCSext\\.imgviewer]', null);
        },

        watermarkCheck : function(){
            let watermark = document.querySelector('meta[name=DCSext\\.imgviewer]') !== null || undefined ? true : false;
            return watermark;
        }
    };
})();

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports.ExtractTagsModule = ExtractTagsModule;
}