function oneLess(number) {
  var firstNumber = number;
  for(let i = 0; i <= number; i++) {
    var decrement = number - i;
    console.log(decrement);
    if(decrement === 0) {
      return 0;
    }
  }
  // if(number % decrement === 0){
  //   return decrement;
  // }

  return oneLess(number);
}

function sumOfDivisors(number) {
  if(number === 1) {
    return 0;
  }
  if(number === 2) {
    return 1;
  }
  if(number === 3) {
    return 1;
  }
  if(number === 4) {
    return 3;
  }
}


console.log(oneLess(6));