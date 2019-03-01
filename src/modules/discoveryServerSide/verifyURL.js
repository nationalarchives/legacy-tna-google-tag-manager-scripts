export const verifyUrl = (...args) => {
    const [url, searchTerm, status, defaultValue] = args;
    if (args.every(arg => typeof arg === 'string')){
        return url.includes(searchTerm) && status === 'signed-in' ? 'Customer account' : defaultValue;
    }
    return null;
};