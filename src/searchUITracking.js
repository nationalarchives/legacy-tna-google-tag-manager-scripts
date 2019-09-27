import { checkEmptyField } from './modules/checkEmptyField';
import { renderObjFunc } from './modules/renderObjFunc';
import { getOptionTextById } from './modules/getOptionTextById';
import { pushInDataLayer } from './modules/pushInDataLayer';

window.addEventListener('DOMContentLoaded', () => {
	if (document.getElementById('discovery-home-page-search')) {
		const searchFrom = document.querySelector('#discovery-home-page-search'),
			searchFor = document.getElementById('search-for'),
			startDate = document.getElementById('start-date'),
			endDate = document.getElementById('end-date'),
			heldBy = document.getElementById('held-by'),
			error = document.querySelector('#discovery-home-page-search .Headline'),
			searchForId = searchFor.getAttribute('id'),
			startDateId = startDate.getAttribute('id'),
			endDateId = endDate.getAttribute('id'),
			heldById = heldBy.getAttribute('id'),
			eventLabel = () =>
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
				e.preventDefault();
			}
		});
	}
});
