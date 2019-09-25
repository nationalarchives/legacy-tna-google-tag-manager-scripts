export const checkWord = (id, word) => {
	if (typeof id === 'string' && typeof word === 'string') {
		if (document.getElementById(id) !== null) {
			return document.getElementById(id).innerHTML.indexOf(word) > -1;
		}
	}
	return false;
};
