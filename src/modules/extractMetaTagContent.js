export const extractMetaTagContent = (metaTagName, msg) => {
    let metaTagData = document.querySelector(`meta[name = ${metaTagName} ]`);
    if(typeof metaTagName !== 'string' || typeof msg !== 'string' || typeof metaTagData.getAttribute('content') !== 'string'){
        return 'Tag does not exist';
    }
    else{
        metaTagData = (metaTagData !== null) ? metaTagData.getAttribute('content') : msg;
        return metaTagData;
    }
};