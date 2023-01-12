"use strict";
exports.__esModule = true;
exports.Startf = void 0;
console.log("here2");
var fs = require("fs");
console.log("here3");
fs.readFile('currencies.txt', 'utf8', function (err, data) {
    if (err)
        throw err;
    var currencies = {};
    var lines = data.split('\n');
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        var currency = line.split(':');
        currencies[currency[0].trim()] = Number(currency[1]);
    }
    console.log(currencies);
});
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
var sortList = function (numbers) {
    return numbers.sort();
};
var GetFromUser = function () {
    var Currency = prompt("Enter your Currency");
    if (typeof Currency == "string") {
        return Currency;
    }
    else {
        throw "null";
    }
};
var GetFromUserAmount = function () {
    var num = prompt("sss");
    var amount;
    if (typeof num == "string") {
        amount = +num;
        return amount;
    }
    else {
        throw "null";
    }
};
var GetCurr = function () {
    var form = document.querySelector('#myform');
    if (form != null) {
        form.onsubmit = function () {
            var formData = new FormData(form);
            var text = formData.get('textInput');
            alert(text);
            console.log(text);
            return text;
        };
    }
    throw "null";
};
var GetValue = function () {
};
var GetAmount = function () {
};
var LoopCurrencies = function () {
    var inputs = "";
    var num = +inputs;
    var Currency = "";
    while (num != -1 && inputs != null) {
        inputs = prompt("enter currency");
        if (inputs != null) {
            num = +inputs;
        }
        Currency = prompt("Enter your Currency");
    }
};
var CheckOptions = function (currency, amounts, txts) {
    switch (txts) {
        case "get value":
            var x = GetValue();
            break;
        case "get amount":
            var y = GetAmount();
            break;
        case "loop currencies":
            var z = LoopCurrencies();
            break;
    }
};
function Startf() {
    console.log("here1");
    var x = fs.writeFileSync('C:\Users\OR\Documents\TypeScriptBasic\TypeScriptBase\src\Currencies.txt', 'utf8');
    console.log(x);
    var curr = GetFromUser();
    var amount = GetFromUserAmount();
    var txt = GetCurr();
    var checkOption = CheckOptions(curr, amount, txt);
    console.log(txt);
}
exports.Startf = Startf;
Startf();
//const avg = getAverage([0,100,2]);
//console.log(avg);
//const getpositive = getAmountOfPositive([1,3,-4,3,2,-5]);
//console.log(getpositive);
