import { renderObjFunc } from './bookmarkLinkCapture';
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
        //getOptionTextById('sortOptions');
        pushInDataLayer(renderObjFunc('discovery', 'discovery', 'bookmark link', getOptionTextById('sortOptions')));
    }, false);
});