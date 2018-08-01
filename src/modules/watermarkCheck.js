export let watermarkCheck = () => {
    let watermark = document.querySelector('meta[name=DCSext\\.imgviewer]') !== null || undefined ? true : false;
    return watermark;
};