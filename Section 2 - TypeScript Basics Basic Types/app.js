function add(num1, num2, showResult, phrase) {
    var result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return num1 + num2;
    }
}
var number1 = 5;
var number2 = 2;
var printResult = true;
var resultPhrase = 'the result is ';
console.log(add(number1, number2, printResult, resultPhrase));
