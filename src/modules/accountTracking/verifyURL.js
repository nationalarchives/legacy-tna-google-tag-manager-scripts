export const verifyUrl = (url, searchTerm, status) => {
    let contentGroup;
    (url.includes(searchTerm) && status === 'signed-in') ? contentGroup = 'Account' : contentGroup = null;
    return contentGroup;
};