import { checkEmptyField } from './modules/checkEmptyField';
//import { pushInDataLayer } from './modules/pushInDataLayer';

window.addEventListener('DOMContentLoaded', () => {
	if (document.getElementById('discovery-home-page-search')) {
		const searchFrom = document.querySelector('#discovery-home-page-search');
		const searchFor = document.getElementById('search-for');
		const startDate = document.getElementById('start-date');
		const endDate = document.getElementById('end-date');
		const heldby = document.getElementById('held-by');
		const error = document.querySelector('#discovery-home-page-search .Headline');

		const successObj = () => {
			return {
				event: 'Discovery search',
				eventCategory: 'Discovery homepage search',
				eventAction: 'Successful search',
				eventLabel: `(${searchFor.getAttribute('id')} : ${checkEmptyField(
					searchFor
				)}) > (${startDate.getAttribute('id')} : ${checkEmptyField(
					startDate
				)}) > (${endDate.getAttribute('id')} : ${checkEmptyField(endDate)})`
			};
		};

		searchFrom.addEventListener('submit', e => {
			if (error.children.length === 0) {
				console.log(successObj());
			}
			e.preventDefault();
		});
	}
});
