import { checkEmptyField } from './modules/checkEmptyField';
import { renderObjFunc } from './modules/renderObjFunc';
import { getOptionTextById } from './modules/getOptionTextById';
import { pushInDataLayer } from './modules/pushInDataLayer';

window.addEventListener('DOMContentLoaded', () => {
	if (document.getElementById('discovery-home-page-search')) {
		const searchFrom = document.querySelector('#discovery-home-page-search');
		const searchFor = document.getElementById('search-for');
		const startDate = document.getElementById('start-date');
		const endDate = document.getElementById('end-date');
		const heldBy = document.getElementById('held-by');
		const error = document.querySelector('#discovery-home-page-search .Headline');
		const searchForId = searchFor.getAttribute('id');
		const startDateId = startDate.getAttribute('id');
		const endDateId = endDate.getAttribute('id');
		const heldById = heldBy.getAttribute('id');
		const eventLabel = () =>
			`(${searchForId} : ${checkEmptyField(
				searchFor,
				'text'
			)}) > (${startDateId} : ${checkEmptyField(
				startDate,
				'text'
			)}) > (${endDateId} : ${checkEmptyField(
				endDate,
				'text'
			)}) > (${heldById} : ${getOptionTextById(heldById)})`;

		searchFrom.addEventListener('submit', e => {
			if (error.children.length === 0) {
				pushInDataLayer(
					renderObjFunc(
						'Discovery search',
						'Discovery homepage search',
						'Successful search',
						eventLabel()
					)
				);
			}
			e.preventDefault();
		});
	}
});
