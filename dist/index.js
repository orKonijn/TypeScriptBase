var getAverage = function (numbers) {
    var sum = 0;
    numbers.forEach(function (element) {
        sum += Number(element);
    });
    return sum / numbers.length;
};
var avg = getAverage([0, 100, 2]);
console.log(avg);
