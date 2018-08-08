export const extractMetaTagContent = (metaTagName, msg) => {
    if(typeof metaTagName !== 'string' || !document.querySelector(`meta[name = ${metaTagName} ]`) || !document.querySelector(`meta[name = ${metaTagName} ]`).getAttribute('content')){
        return msg;
    }
    return document.querySelector(`meta[name = ${metaTagName} ]`).getAttribute('content');
};