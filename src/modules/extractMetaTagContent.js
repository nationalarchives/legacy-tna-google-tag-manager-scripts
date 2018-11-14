/*
param: String, String
return: String
*/

export const extractMetaTagContent = (metaTagName = null) => {
    let domElement = document.querySelector(`meta[name = ${metaTagName} ]`);
    if (domElement) {
        return domElement.getAttribute('content');
    }
    return null;
};
    