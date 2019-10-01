import { checkEmptyField } from './modules/checkEmptyField';
import { renderObjFunc } from './modules/renderObjFunc';
import { getOptionTextById } from './modules/getOptionTextById';
import { pushInDataLayer } from './modules/pushInDataLayer';

window.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('discovery-home-page-search')) {
        const error = document.querySelector('#discovery-home-page-search .Headline');

        const searchForm = document.querySelector('#discovery-home-page-search'),
            searchFor = document.getElementById('search-for'),
            searchForId = searchFor.getAttribute('id');

        const startDate = document.getElementById('start-date'),
            startDateId = startDate.getAttribute('id'),
            endDate = document.getElementById('end-date'),
            endDateId = endDate.getAttribute('id');

        const heldBy = document.getElementById('held-by'),
            heldById = heldBy.getAttribute('id');

        const eventLabel = () =>
            `${searchForId}:${checkEmptyField(
                searchFor,
                'text'
            )} > ${startDateId}:${checkEmptyField(
                startDate,
                'text'
            )} > ${endDateId}:${checkEmptyField(
                endDate,
                'text'
            )} > ${heldById}:${getOptionTextById(heldById)}`;

        const submitObj = () => {
            pushInDataLayer(
                renderObjFunc(
                    'Discovery search',
                    'Discovery homepage search',
                    'Search submitted',
                    eventLabel()
                )
            );
        };

        searchForm.addEventListener('submit', submitObj);
        let errorMessages, errorString;

        if (error.children.length >= 1) {
            errorMessages = error.querySelector('.validation-summary-errors ul li')
                .innerHTML;
            errorString = [...document.querySelectorAll('.hp-search-error')]
                .map(error => error.getAttribute('id') + ':' + errorMessages)
                .join(' > ');
        }

        pushInDataLayer(
            renderObjFunc(
                'Discovery search',
                'Discovery homepage search',
                'Search errors',
                errorString
            )
        );
    }
});
