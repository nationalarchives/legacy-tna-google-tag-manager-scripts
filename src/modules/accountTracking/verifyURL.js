export const verifyUrl = (url, searchTerm, status) => {
    if(typeof url === 'string' && typeof searchTerm === 'string' && typeof status === 'string') {
        let contentGroup;
        (url.includes(searchTerm) && status === 'signed-in') ? contentGroup = 'Account' : contentGroup = null;
        return contentGroup;
    }
    return null;
};