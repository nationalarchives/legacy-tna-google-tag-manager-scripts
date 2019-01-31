export const getOptionTextById = elementId => {

    if( typeof elementId !== 'string' ) { return null; }  // Passed parameter is a string
    const selectElement = document.getElementById(elementId);
    if( !selectElement ) { return null; } // Select element exists
    if( selectElement.selectedIndex === -1 ) { return null; }  // An option is select

    return selectElement.options[selectElement.selectedIndex].text;
};