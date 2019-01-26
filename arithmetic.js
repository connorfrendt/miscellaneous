function addTwoNumbers(x, y) {
  return x + y;
}

function subtractTwoNumbers(x, y) {
  return x - y;
}

function multiplyTwoNumbers(x, y) {
  return x * y;
}

function divideTwoNumbers(x, y) {
  return x / y;
}

function power(base, exponent) {
return base ** exponent;k
}

function orderOfOperations(arithmeticString) {
  for(let i = 0; i < arithmeticString.length; i++) {
    let count = 0;
    if(arithmeticString[i] === '*' && arithmeticString[i + 1] !== '*') {
      count += multiplyTwoNumbers(Number(arithmeticString[i - 2]), Number(arithmeticString[i + 2]));
      count = count.toString();
      var countInString = arithmeticString.replace('*', count).replace(Number(arithmeticString[i - 2]), '').replace(Number(arithmeticString[i + 2]), '');
      // var countInString = arithmeticString.replace(Number(arithmeticString[i - 2]) + '*' + Number(arithmeticString[i + 2]), count);
      return countInString;
    }
    
    if(arithmeticString[i] === '+') {
      return count += addTwoNumbers(Number(arithmeticString[i - 2]), Number(arithmeticString[i + 2]));
    }

  }
}

const answer = orderOfOperations('2 * 2 + 5');
console.log(answer);