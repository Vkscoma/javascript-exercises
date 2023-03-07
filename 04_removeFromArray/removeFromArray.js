const removeFromArray = function (array, value1, value2, value3, value4) {
    let toRemove = [value1, value2, value3, value4]

    return array = array.filter(item => !toRemove.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
