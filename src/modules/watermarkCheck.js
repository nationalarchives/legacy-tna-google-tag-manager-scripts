export let watermarkCheck = (metaTagName) => {
    let watermark;
    watermark = !!(document.querySelector(`meta[name = ${metaTagName} ]`) !== null || undefined);
    return watermark;
};