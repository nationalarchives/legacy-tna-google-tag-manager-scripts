export let splitToArray = (metaTagContent) => {
    return (metaTagContent === null) ? [] : metaTagContent.split(';');
};