import {cleanSubjectFilterName} from './modules/filterTracking/cleanSubjectFilterName';

document.addEventListener('DOMContentLoaded', () => {
    let filterArray = [];
    let subjectFilters = document.querySelectorAll('#subjects ul li input');
    let refineButton = document.querySelector('input[name="Refine subjects"]');

    for(let i = 0; i < subjectFilters.length; i ++){
        subjectFilters[i].addEventListener('change', () => {
            if(subjectFilters[i].checked && !filterArray.includes(cleanSubjectFilterName(subjectFilters[i].nextElementSibling.innerText))){
                filterArray.push(cleanSubjectFilterName(subjectFilters[i].nextElementSibling.innerText));
            }
            else{
                filterArray.splice(filterArray.indexOf(cleanSubjectFilterName(subjectFilters[i].nextElementSibling.innerText)), 1);
            }
        });
    }

    refineButton.addEventListener('click', (e) => {
        console.log(filterArray);
        e.preventDefault();
    });
});


// Need to do another tracker for date filterTracking