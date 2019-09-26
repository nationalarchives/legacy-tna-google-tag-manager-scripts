/**
 *
 * @param {object} domNode
 */
export const checkEmptyField = domNode => {
	if (typeof domNode !== 'object') {
		return null;
	}
	return domNode.value.trim() !== '' ? true : false;
};
