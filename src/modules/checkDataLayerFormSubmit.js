/**
 * Check if the form was submitted
 * */
let checkDataLayerFormSubmit = (dataLayer) => {
    if (Array.isArray(dataLayer)) {
        let i = dataLayer.length - 1;
        while (i > -1) {
            if (dataLayer[i]['event'] === 'gtm.formSubmit') {
                return true;
            }
            i--;
        }
        return true;
    }
    return false;
};

module.exports.checkDataLayerFormSubmit = checkDataLayerFormSubmit;