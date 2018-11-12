/*
param: String, String
return: String
*/

export const extractMetaTagContent = (metaTagName = null) => {
    let domElement = document.querySelector(`meta[name = ${metaTagName} ]`);
    if(domElement){
        return domElement.getAttribute('content');
    }

    //Returns a custom message if domElement is not a String or if domElement/domElement content attribute doesn't exist
    //Else returns meta tag content
    return null;
};