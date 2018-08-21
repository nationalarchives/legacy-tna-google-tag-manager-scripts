/*
param: String, String
return: String
*/

export const extractMetaTagContent = (metaTagName, msg) => {
    //let domElement = document.querySelector(`meta[name = ${metaTagName} ]`);

    //Returns a custom message if domElement is not a String or if domElement/domElement content attribute doesn't exist
    //Else returns meta tag content
    if(typeof metaTagName !== 'string' || !document.querySelector(`meta[name = ${metaTagName} ]`) || !document.querySelector(`meta[name = ${metaTagName} ]`).getAttribute('content')){
        return msg;
    }
    return document.querySelector(`meta[name = ${metaTagName} ]`).getAttribute('content');
};