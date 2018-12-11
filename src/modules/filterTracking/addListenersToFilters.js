import {cleanLabelName} from './cleanLabelName';

export let addListenersToFilters = (filter, label, filterArray) => {
    for(let i = 0; i < filter.length; i ++){
        filter[i].addEventListener('change', () => {
            if(filter[i].checked && !filterArray.includes(cleanLabelName(label[i].innerText))){
                filterArray.push(cleanLabelName(label[i].innerText));
            }
            else{
                filterArray.splice(filterArray.indexOf(cleanLabelName(label[i].innerText)), 1);
            }
        });
    }
    return filterArray;
};