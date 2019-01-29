import renderObjFunc from '../src/modules/renderObjFunc';
import { pushInDataLayer } from './modules/pushInDataLayer';

const getOptionTextById = elementId => {
    const selectElement = document.getElementById(elementId);
    if(selectElement.selectedIndex === -1){
        return null;
    } 
    return selectElement.options[selectElement.selectedIndex].text;
};

document.addEventListener('DOMContentLoaded', () => {
    const sortingOption = document.getElementById('sortOptions');
    sortingOption.addEventListener('change', () =>{
        pushInDataLayer(renderObjFunc('discovery', 'discovery', 'bookmark sorting', getOptionTextById('sortOptions')));
    }, false);
});