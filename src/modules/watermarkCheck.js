export let watermarkCheck = () => {
    let watermark;
    watermark = !!(document.querySelector('meta[name=DCSext\\.imgviewer]') !== null || undefined);
    return watermark;
};