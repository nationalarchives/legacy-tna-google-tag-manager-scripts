import { checkWord } from './modules/checkWord';

const fieldValue = domNode => (domNode.value.trim() !== '' ? true : false);

window.addEventListener('DOMContentLoaded', () => {
	if (document.getElementById('discovery-home-page-search')) {
		const searchFrom = document.querySelector('#discovery-home-page-search'),
			startDate = document.getElementById('start-date'),
			error = document.querySelector('#discovery-home-page-search .Headline'),
			searchFor = document.getElementById('search-for').getAttribute('id');

		searchFrom.addEventListener('submit', e => {
			// if (checkWord('version', 'OnSitePublic')) {
			// 	if (error.children.length === 0) {
			// 		// if error div has no children, means no errors
			// 		console.log({
			// 			event: 'Discovery search',
			// 			eventCategory: 'Discovery homepage search',
			// 			eventAction: 'Successful search',
			// 			eventLabel: `Fields used: [(field id = ${searchFor})]`
			// 		});
			// 	}
			// }

			console.log(fieldValue(startDate));
			e.preventDefault();
		});
	}
});
