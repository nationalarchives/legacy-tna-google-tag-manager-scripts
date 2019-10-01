/**
 *
 * @param {sting} id
 * @param {string} word
 */
export const checkWord = (id, word) => {
	if (typeof id === 'string' && typeof word === 'string') {
		if (document.getElementById(id)) {
			return document.getElementById(id).innerHTML.indexOf(word) > -1;
		}
	}
	return false;
};
