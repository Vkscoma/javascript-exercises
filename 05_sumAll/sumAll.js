const sumAll = function (value1, value2) {
    if (isNaN(value1) || isNaN(value2)) return 'ERROR';
    if (value1 < 0 || value2 < 0) return 'ERROR';
    if (typeof value1 === "string" || typeof value2 === "string") return 'ERROR';
    return (Math.abs(value1 - value2) + 1) * (value1 + value2) / 2;
};

console.log(sumAll(2, 5))

// Do not edit below this line
module.exports = sumAll;
