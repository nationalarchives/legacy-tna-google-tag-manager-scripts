// Extracts the filter label so it is readable
export let cleanLabelName = (label) => {
    if(typeof label === 'string') {
        label = label.split(' (');
        return label[0];
    }
    return 'The parameters are of the incorrect data type.';
};