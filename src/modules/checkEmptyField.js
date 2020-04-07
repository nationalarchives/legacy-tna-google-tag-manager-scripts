/**
 *
 * @param {object} domNode
 */
export const checkEmptyField = (domNode, inputType) => {
    if (domNode instanceof Element && domNode.type == inputType) {
        if(inputType === 'text' || inputType === 'password' || inputType === 'select-one'){
            return domNode.value !== '' ? 'Yes' : 'No';
        }
        else if (inputType === 'checkbox'){
            return domNode.checked ? 'Yes' : 'No';
        }
    }
    return null;
};
