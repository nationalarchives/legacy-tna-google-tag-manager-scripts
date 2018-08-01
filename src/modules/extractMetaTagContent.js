export const extractMetaTagContent = (metaTagName, msg) => {
    let metaTagData = document.querySelector(`meta[name = ${metaTagName} ]`);
    metaTagData = (metaTagData !== null) ? metaTagData.getAttribute('content') : msg;
    return metaTagData;
};