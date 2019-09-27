/**
 *
 * @param {object} domNode
 */
export const checkEmptyField = domNode => {
	if (domNode instanceof Element && domNode.type == 'text') {
		return domNode.value !== '' ? 'Yes' : 'No';
	}
	return null;
};
