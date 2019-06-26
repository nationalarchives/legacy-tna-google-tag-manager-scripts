import { renderObjFunc } from '../src/modules/renderObjFunc';
import { pushInDataLayer } from './modules/pushInDataLayer';
import { getOptionTextById } from './modules/getOptionTextById';

document.addEventListener('DOMContentLoaded', () => {
    const sortingOption = document.getElementById('sortOptions');
    const sortingOption2 = document.getElementById('sortOptions2');
    if (sortingOption && sortingOption2){
        sortingOption.addEventListener('change', () =>{
            pushInDataLayer(renderObjFunc('discovery', 'discovery', 'bookmark sorting', getOptionTextById('sortOptions')));
        }, false);
        sortingOption2.addEventListener('change', () =>{
            pushInDataLayer(renderObjFunc('discovery', 'discovery', 'bookmark sorting', getOptionTextById('sortOptions2')));
        }, false);
    }
});
