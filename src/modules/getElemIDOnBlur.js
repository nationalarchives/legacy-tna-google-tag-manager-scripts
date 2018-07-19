let getElemIDOnBlur = (formElem,arr) => {
    for (var i = 0; i < formElem.length; i++) {
        formElem[i].addEventListener('blur', event => event.target.value === '' ? true : arr.push(event.target.id), true);
    }
};

module.exports.getElemIDOnBlur = getElemIDOnBlur;