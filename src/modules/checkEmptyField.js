/**
 *
 * @param {object} domNode
 */
export const checkEmptyField = (domNode, inputType) => {
    if (domNode instanceof Element && domNode.type == inputType) {
        return domNode.value !== '' ? 'Yes' : 'No';
    }
    return null;
};
