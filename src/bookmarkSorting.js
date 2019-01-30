import renderObjFunc from '../src/modules/renderObjFunc';
import { pushInDataLayer } from './modules/pushInDataLayer';
import { getOptionTextById } from './modules/getOptionTextById';

document.addEventListener('DOMContentLoaded', () => {
    const sortingOption = document.getElementById('sortOptions');
    sortingOption.addEventListener('change', () =>{
        pushInDataLayer(renderObjFunc('discovery', 'discovery', 'bookmark sorting', getOptionTextById('sortOptions')));
    }, false);
});