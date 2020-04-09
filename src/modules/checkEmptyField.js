/**
 *
 * @param {object} domNode
 */
export const checkEmptyField = (domNode, inputType) => {
    if (domNode instanceof Element && domNode.type == inputType) {
        if(inputType === 'checkbox'){
            return domNode.checked ? 'Yes' : 'No';
        }
        else {
            return domNode.value !== '' ? 'Yes' : 'No';
        }
    }
    return null;
};
