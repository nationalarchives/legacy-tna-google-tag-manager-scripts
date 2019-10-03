export const detectUserType = str => {
	if (str && str.split('- ')[2]) {
		return str.split('- ')[2].trim();
	}
};
