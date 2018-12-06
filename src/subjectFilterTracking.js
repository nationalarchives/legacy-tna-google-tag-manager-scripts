document.addEventListener('DOMContentLoaded', () => {
    let filterArray = [];
    let subjectFilters = document.querySelectorAll('#subjects ul li input');
    for(let i = 0; i < subjectFilters.length; i ++){
        subjectFilters[i].addEventListener('change', () => {
            if(subjectFilters[i].checked){
                filterArray.push(subjectFilters[i].nextElementSibling.innerText);
            }
        });
    }
    let input = document.querySelector('input[name="Refine subjects"]');
    input.addEventListener('click', (e) => {
        console.log(filterArray);
        e.preventDefault();
    });
});

// Need to remove filter when it is unchecked
// Need to remove duplicates
