export let watermarkCheck = (metaTagName) => {
    let watermark;
    watermark = (document.querySelector(`meta[name = ${metaTagName} ]`) !== null);
    return watermark;
};