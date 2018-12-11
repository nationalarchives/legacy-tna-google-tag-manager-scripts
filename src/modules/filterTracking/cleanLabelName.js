// Extracts the filter label so it is readable
export let cleanLabelName = (label) => {
    label = label.split(' (');
    return label[0];
};