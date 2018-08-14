export let removeDuplicates = function(array) {
    return array.filter(function (value, index, self) {
        return self.indexOf(value) === index;           //this is simplified - need to flesh it out to understand
    });
};