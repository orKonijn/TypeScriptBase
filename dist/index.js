var getAverage = function (numbers) {
    var sum = 0;
    numbers.forEach(function (element) {
        sum += Number(element);
    });
    return sum / numbers.length;
};
var getAmountOfPositive = function (numbers) {
    var sum = 0;
    numbers.forEach(function (element) {
        if (element > 0) {
            sum++;
        }
    });
    return sum;
};
var avg = getAverage([0, 100, 2]);
console.log(avg);
var getpositive = getAmountOfPositive([1, 3, -4, 3, 2, -5]);
console.log(getpositive);
