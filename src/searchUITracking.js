import { checkWord } from './modules/checkWord';

window.addEventListener('DOMContentLoaded', () => {
	if (document.querySelector('#discovery-home-page-search button')) {
		const button = document.querySelector('#discovery-home-page-search button'),
			startDate = document.getElementById('start-date'),
			error = document.querySelector('#discovery-home-page-search .Headline'),
			searchFor = document.getElementById('search-for').getAttribute('id');

		const fieldValue = () => {
			if (startDate.value == '' || startDate.value == null) {
				return `> (${startDate.getAttribute('id')})`;
			}
		};

		button.addEventListener('click', e => {
			if (checkWord('version', 'OnSitePublic')) {
				if (error.children.length === 0) {
					// if error div has no children, means no errors
					console.log({
						event: 'Discovery search',
						eventCategory: 'Discovery homepage search',
						eventAction: 'Successful search',
						eventLabel: `Fields used: [(field id = ${searchFor}) ${fieldValue()} ]`
					});
				}
			}
			e.preventDefault();
		});
	}
});
