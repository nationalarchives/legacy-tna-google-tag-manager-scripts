export const getEventLabel = (event, title) => {
	if (event.target.matches('#thumbPanel img')) {
		return 'View full size image';
	}
	if (event.target.matches('select')) {
		return 'Page number';
	}
	return event.target.getAttribute(title);
};