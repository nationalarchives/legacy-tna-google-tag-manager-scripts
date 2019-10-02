export const detectUserType = str => {
	if (str.split('- ')[2]) {
		return str.split('- ')[2].trim();
	}
};
