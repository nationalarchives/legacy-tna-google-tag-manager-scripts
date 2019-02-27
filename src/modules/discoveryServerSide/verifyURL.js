export const verifyUrl = (url, searchTerm, status, defaultValue) => {
    if(typeof url === 'string' && typeof searchTerm === 'string' && typeof status === 'string') {
        let contentGroup;
        (url.includes(searchTerm) && status === 'signed-in') ? contentGroup = 'Customer account' : contentGroup = defaultValue;
        return contentGroup;
    }
    return null;
};