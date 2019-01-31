import { pushInDataLayer } from './modules/pushInDataLayer';
import { capitalizeFirstLetter } from './modules/capitalizeFirstLetter';
import renderObjFunc from '../src/modules/renderObjFunc';

export const checkValue = ({ target }) => target.getAttribute('href').includes('result') ? capitalizeFirstLetter('search results bookmark') : capitalizeFirstLetter('catalogue description bookmark');

document.addEventListener('DOMContentLoaded', () => {
	const links = document.querySelectorAll('#bookmarks .bookmarkMain a');

	links.forEach(link => {
		link.addEventListener('click', e => {
			pushInDataLayer(renderObjFunc('discovery', 'discovery', 'bookmark link', checkValue(e)));
		});
	});
});