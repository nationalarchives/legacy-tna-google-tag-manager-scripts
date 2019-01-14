// Extracts the filter label so it is readable
export let cleanLabelName = (label) => {
    if(typeof label === 'string') {
        label = label.split('(');

        // Trim to remove excess whitespace from textContent
        return label[0].trim();
    }
    return 'The parameters are of the incorrect data type.';
};