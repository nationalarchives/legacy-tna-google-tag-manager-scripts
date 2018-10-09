export let stringOrNull = (param) => {
    return typeof param === 'string' || param === null;
};