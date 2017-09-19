module.exports = function zeros(expression) {
  let result = '1';
  let arrFact = [];
  if (expression.includes('*')) {
    arrFact = expression.split('*');
    for (var i = 0; i < arrFact.length; i++) {
      let count = 0;
      for (var k = 0; k < arrFact[i].length; k++) {
        if (arrFact[i][k] === '!') {
          count += 1;
        }
      }
      if (count === 2) {
        result = doubleFactorial(arrFact[i], result);
      }else if(count === 1) {
        result = factorial(arrFact[i], result);
      }
    }
  }else if (!expression.includes('*')) {
    arrFact[0] = expression;
      let count = 0;
      for (var k = 0; k < arrFact[0].length; k++) {
        if (arrFact[0][k] === '!') {
          count += 1;
        }
      }
      if (count === 2) {
        result = doubleFactorial(arrFact[0], result);
      }else if(count === 1) {
        result = factorial(arrFact[0], result);
    }
  }
  let zerosCount = 0;
  for (var i = result.length-1; i > 0; i--) {
    if (result[i] === '0') {
      zerosCount += 1;
    }
    if (result[i] !== '0') {
      i = 0;
    }
  }
  return zerosCount;
}

function doubleFactorial(str, result) {
  str = str.slice(0, str.indexOf('!'));
  let numFact = Number(str);
  if (numFact % 2 === 1) {
    for (var j = 3; j <= numFact; j+=2) {
      result = multiply( result, j.toString());
    }
  }
  if (numFact % 2 === 0) {
    for (var j = 2; j <= numFact; j+=2) {
      result = multiply( result, j.toString());
    }
  }
  return result;
}

function factorial(str, result) {
  str = str.slice(0, str.indexOf('!'));
  let numFact = Number(str);
  for (var j = 2; j <= numFact; j++) {
    result = multiply( result, j.toString());
  }
  return result;
}

function multiply(first, second) {
  if( first.length < second.length ) {
      let tmp = second;
      second = first;
      first = tmp;
  }
  let num1Arr = first.split( '' );
  let num2Arr = second.split( '' );
  let result = [];
  let resultLength = num1Arr.length + num2Arr.length;
  for( var i = 0; i < resultLength; i++ ) {
      result[ i ] = 0;
  }
  for( var i = 0; i < num2Arr.length; i++ ) {
      for( k = 0; k < num1Arr.length; k++ ) {
          result[ 1 + i + k ] += num1Arr[ k ] * num2Arr[ i ];
      }
  }
  for( var i = resultLength - 1; i > 0; i-- ) {
      if( result[ i ] >= 10 )
      {
          result[ i - 1 ] += Math.floor( result[ i ] / 10 );
          result[ i ] %= 10;
      }
  }
  if( result[ 0 ] === 0 ) {
    result[ 0 ] = undefined;
  }
  return result.join( '' );
}
