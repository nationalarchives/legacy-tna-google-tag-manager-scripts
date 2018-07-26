const serializeData = (formID, _arr, _errArr) => {

    const form = (formID !== '') ? `ID: ${formID}  > ` : '',
        elem = (_arr.length !== 0) ? `Field: ${_arr.join(' > ')}` : '',
        error = (_errArr.length !== 0) ? `Error: ${_errArr.join(' > ')}` : '';

    return `${form}${elem}${error}`;
};

module.exports.serializeData = serializeData;