/*
param: String, String
return: String
*/

export const extractMetaTagContent = (metaTagName, msg) => {
    let domElement = (typeof metaTagName !== 'string') ? null : document.querySelector(`meta[name = ${metaTagName} ]`);

    //Returns a custom message if domElement is not a String or if domElement/domElement content attribute doesn't exist
    //Else returns meta tag content
    if(!domElement || !domElement.getAttribute('content')){
        return msg;
    }
    return domElement.getAttribute('content');
};