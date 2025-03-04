const removeFromArray = function(array, ...unwantedItems) {
    return array.filter (x => !unwantedItems.includes(x))

};

// Do not edit below this line
module.exports = removeFromArray;
