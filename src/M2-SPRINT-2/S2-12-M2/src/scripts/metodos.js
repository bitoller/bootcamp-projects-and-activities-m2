function newMap(array, callbackFn) {
  let multipliedByTwo = [];
  for (let i = 0; i < array.length; i++) {
    multipliedByTwo.push(callbackFn(array[i]));
  }
  return multipliedByTwo;
}

function newFilter(array, callbackFn) {
  let evenNumbers = [];
  for (let i = 0; i < array.length; i++) {
    if (callbackFn(array[i]) == true) {
      evenNumbers.push(array[i]);
    }
  }
  return evenNumbers;
}

function newFind(array, callbackFn) {
  for (let i = 0; i < array.length; i++) {
    if (callbackFn(array[i]) == true) {
      return array[i];
    }
  }
}

function newReduce(array, callbackFn, initValue) {
  let accumulator = initValue != undefined ? initValue : 0;
  for (let i = 0; i < array.length; i++) {
    accumulator = callbackFn(accumulator, array[i]);
  }
  return accumulator;
}

export { newMap, newFilter, newFind, newReduce };
